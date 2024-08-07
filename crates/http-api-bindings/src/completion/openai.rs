use async_stream::stream;
use async_trait::async_trait;
use futures::{stream::BoxStream, StreamExt};
use reqwest_eventsource::{Event, EventSource};
use serde::{Deserialize, Serialize};
use tabby_inference::{CompletionOptions, CompletionStream};

pub struct OpenAICompletionEngine {
    client: reqwest::Client,
    model_name: String,
    api_endpoint: String,
    api_key: Option<String>,
}

impl OpenAICompletionEngine {
    pub fn create(model_name: Option<String>, api_endpoint: &str, api_key: Option<String>) -> Self {
        let model_name = model_name.unwrap();
        let client = reqwest::Client::new();

        Self {
            client,
            model_name,
            api_endpoint: format!("{}/completions", api_endpoint),
            api_key,
        }
    }
}

#[derive(Serialize)]
struct CompletionRequest {
    model: String,
    prompt: String,
    max_tokens: i32,
    temperature: f32,
    stream: bool,
    presence_penalty: f32,
}

#[derive(Deserialize)]
struct CompletionResponseChunk {
    choices: Vec<CompletionResponseChoice>,
}

#[derive(Deserialize)]
struct CompletionResponseChoice {
    text: String,
    finish_reason: Option<String>,
}

#[async_trait]
impl CompletionStream for OpenAICompletionEngine {
    async fn generate(&self, prompt: &str, options: CompletionOptions) -> BoxStream<String> {
        let request = CompletionRequest {
            model: self.model_name.clone(),
            prompt: prompt.to_owned(),
            max_tokens: options.max_decoding_tokens,
            temperature: options.sampling_temperature,
            stream: true,
            presence_penalty: options.presence_penalty,
        };

        let mut request = self.client.post(&self.api_endpoint).json(&request);
        if let Some(api_key) = &self.api_key {
            request = request.bearer_auth(api_key);
        }

        let s = stream! {
            let mut es = EventSource::new(request).expect("Failed to create event source");
            while let Some(event) = es.next().await {
                match event {
                    Ok(Event::Open) => {}
                    Ok(Event::Message(message)) => {
                        let x: CompletionResponseChunk = serde_json::from_str(&message.data).expect("Failed to parse response");
                        if let Some(choice) = x.choices.first() {
                            yield choice.text.clone();

                            if choice.finish_reason.is_some() {
                                break;
                            }
                        }
                    }
                    Err(_) => {
                        // StreamEnd
                        break;
                    }
                }
            }
        };

        Box::pin(s)
    }
}
