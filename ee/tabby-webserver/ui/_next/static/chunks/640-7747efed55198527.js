(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{72657:function(e,n,t){"use strict";t.d(n,{K:function(){return a}});var s=t(36164);t(3546);var r=t(12624),i=t(57288),l=t(31458),o=t(81565);function a(e){let{className:n,container:t,offset:a,...c}=e,d=(0,r.e)(a||0,t);return(0,s.jsxs)(l.z,{variant:"outline",size:"icon",className:(0,i.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",d?"opacity-0":"opacity-100",n),onClick:()=>{t?t.scrollTo({top:t.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...c,children:[(0,s.jsx)(o.IconArrowDown,{}),(0,s.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}},83171:function(e,n,t){"use strict";t.d(n,{fh:function(){return p},pf:function(){return d},t:function(){return u}});var s=t(36164),r=t(3546),i=t(2435),l=t(74038),o=t(18500),a=t(57288),c=t(81565);function d(e){let{kind:n,label:t,className:r}=e;return(0,s.jsxs)(i.T5,{as:"span",className:(0,a.cn)("source-mention rounded-sm px-1",r),children:[(0,s.jsx)(m,{kind:n,className:"self-center"}),(0,s.jsx)("span",{className:"whitespace-nowrap",children:t})]})}function u(e){let{kind:n,label:t,id:r}=e.node.attrs;return(0,s.jsx)(d,{kind:n,label:t,id:r})}function m(e){let{kind:n,...t}=e;switch(n){case o.ri.Doc:return(0,s.jsx)(c.IconEmojiBook,{...t});case o.ri.Web:return(0,s.jsx)(c.IconEmojiGlobe,{...t});case o.ri.Git:return(0,s.jsx)(c.IconCode,{...t});case o.ri.Github:return(0,s.jsx)(c.IconGitHub,{...t});case o.ri.Gitlab:return(0,s.jsx)(c.IconGitLab,{...t});default:return null}}function p(e){let{message:n,sources:t,className:i}=e,o=(0,r.useMemo)(()=>{var e;if(!n)return null;let r=null!==(e=n.split("\n")[0])&&void 0!==e?e:"";return r.split(l.zf).map((e,n)=>{if(n%2==1){let r=null==t?void 0:t.find(n=>n.sourceId===e);return r?(0,s.jsx)(d,{id:r.sourceId,kind:r.sourceKind,label:r.sourceName,className:"rounded-md border border-[#b3ada0] border-opacity-30 bg-[#e8e1d3] py-[1px] text-sm dark:bg-[#333333]"},n):null}return e})},[t,n]);return(0,s.jsx)("div",{className:(0,a.cn)(i),children:o})}},64219:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var s=t(36164),r=t(62226),i=t.n(r),l=t(6797),o=t.n(l),a=t(74630),c=t(66686),d=t(57288),u=t(89811),m=t(63795),p=t(81565),x=t(52569);function h(e){var n;let{relevantDocument:t,enableDeveloperMode:r}=e,i=(null==t?void 0:t.__typename)==="MessageAttachmentIssueDoc",l=(null==t?void 0:t.__typename)==="MessageAttachmentPullDoc",o="MessageAttachmentCommitDoc"===t.__typename,c=o?void 0:t.link,m=o?(0,s.jsxs)("span",{children:["Commit",(0,s.jsx)("span",{title:t.sha,className:"mb-1 ml-1 rounded bg-muted px-1 py-0.5",children:t.sha.slice(0,7)})]}):t.title,p=c?new URL(c):null,x="MessageAttachmentWebDoc"===t.__typename?void 0:t.author,h=null==t?void 0:null===(n=t.extra)||void 0===n?void 0:n.score;return(0,s.jsx)("div",{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",children:(0,s.jsxs)("div",{className:"flex w-full flex-col gap-y-1 text-sm",children:[!!p&&(0,s.jsxs)("div",{className:"m-0 flex items-center space-x-1 text-xs leading-none text-muted-foreground",children:[(0,s.jsx)(u.V,{hostname:p.hostname,className:"m-0 mr-1 leading-none"}),(0,s.jsx)("p",{className:"m-0 leading-none",children:p.hostname})]}),(0,s.jsx)("p",{className:(0,d.cn)("m-0 font-bold leading-none",{"cursor-pointer transition-opacity hover:opacity-70":!!c}),onClick:()=>{c&&window.open(c)},children:m}),(0,s.jsxs)("div",{className:"mb-2 w-auto",children:[i&&(0,s.jsx)(g,{closed:t.closed,user:x}),l&&(0,s.jsx)(f,{merged:t.merged,user:x}),o&&(0,s.jsx)(v,{user:x})]}),(0,s.jsx)("p",{className:"m-0 line-clamp-4 leading-none",children:N((0,d.L5)(t))}),!!r&&!(0,a.Z)(h)&&(0,s.jsxs)("p",{className:"mt-4",children:["Score: ",h]})]})})}function f(e){let{merged:n,user:t}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(b,{merged:n}),(0,s.jsx)("div",{className:"flex flex-1 items-center gap-1.5",children:!!t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Yt,{user:t,className:"not-prose h-5 w-5 shrink-0"}),(0,s.jsx)("span",{className:"font-semibold text-muted-foreground",children:t.name||t.email})]})})]})}function g(e){let{closed:n,user:t}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(j,{closed:n}),(0,s.jsx)("div",{className:"flex flex-1 items-center gap-1.5",children:!!t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Yt,{user:t,className:"not-prose h-5 w-5 shrink-0"}),(0,s.jsx)("span",{className:"font-semibold text-muted-foreground",children:t.name||t.email})]})})]})}function v(e){let{user:n}=e;return(0,s.jsx)("div",{className:"flex items-center gap-3",children:(0,s.jsx)("div",{className:"flex flex-1 items-center gap-1.5",children:!!n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Yt,{user:n,className:"not-prose h-5 w-5 shrink-0"}),(0,s.jsx)("span",{className:"font-semibold text-muted-foreground",children:n.name||n.email})]})})})}function j(e){let{closed:n}=e;return(0,s.jsxs)(m.C,{variant:n?"default":"secondary",className:"shrink-0 gap-1 py-1 text-xs",children:[n?(0,s.jsx)(p.IconCheckCircled,{className:"h-3.5 w-3.5"}):(0,s.jsx)(p.IconCircleDot,{className:"h-3.5 w-3.5"}),n?"Closed":"Open"]})}function b(e){let{merged:n}=e;return(0,s.jsxs)(m.C,{variant:n?"default":"secondary",className:"shrink-0 gap-1 py-1 text-xs",children:[n?(0,s.jsx)(p.IconGitMerge,{className:"h-3.5 w-3.5"}):(0,s.jsx)(p.IconGitPullRequest,{className:"h-3.5 w-3.5"}),n?"Merged":"Open"]})}let N=e=>{let n=i().sanitize(e,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]}),t=c.TU.parse(n),s=o().decode(t),r=s.replace(/<\/?[^>]+(>|$)/g,"");return r}},54646:function(e,n,t){"use strict";t.d(n,{m:function(){return z},J:function(){return I}});var s=t(36164),r=t(3546),i=t(1853),l=t(74630),o=t(36982),a=t(93668),c=t(57288),d=t(90615),u=t(73033);t(80804);var m=t(31745),p=t(74038),x=t(83171),h=t(81565),f=t(3448),g=t(94744),v=t(37064),j=t(83008),b=t(28312),N=t(31458),y=t(29);let w=(0,r.memo)(e=>{let{language:n,value:t,onCopyContent:i,onApplyInEditor:l,canWrapLongLines:o,supportsOnApplyInEditorV2:a}=e,[c,d]=(0,r.useState)(!1),{isCopied:u,copyToClipboard:m}=(0,b.m)({timeout:2e3,onCopyContent:i});return(0,s.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,s.jsx)("span",{className:"text-xs lowercase",children:n}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[o&&(0,s.jsxs)(y.u,{children:[(0,s.jsx)(y.aJ,{asChild:!0,children:(0,s.jsx)(N.z,{size:"icon",variant:"ghost",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>d(!c),children:c?(0,s.jsx)(h.IconAlignJustify,{}):(0,s.jsx)(h.IconWrapText,{})})}),(0,s.jsx)(y._v,{children:(0,s.jsx)("p",{className:"m-0",children:"Toggle word wrap"})})]}),a&&l&&(0,s.jsxs)(y.u,{children:[(0,s.jsx)(y.aJ,{asChild:!0,children:(0,s.jsxs)(N.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>l(t,{languageId:n,smart:!0}),children:[(0,s.jsx)(h.IconSmartApplyInEditor,{}),(0,s.jsx)("span",{className:"sr-only",children:"Smart Apply in Editor"})]})}),(0,s.jsx)(y._v,{children:(0,s.jsx)("p",{className:"m-0",children:"Smart Apply in Editor"})})]}),l&&(0,s.jsxs)(y.u,{children:[(0,s.jsx)(y.aJ,{asChild:!0,children:(0,s.jsxs)(N.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>l(t,void 0),children:[(0,s.jsx)(h.IconApplyInEditor,{}),(0,s.jsx)("span",{className:"sr-only",children:"Apply in Editor"})]})}),(0,s.jsx)(y._v,{children:(0,s.jsx)("p",{className:"m-0",children:"Apply in Editor"})})]}),(0,s.jsxs)(y.u,{children:[(0,s.jsx)(y.aJ,{asChild:!0,children:(0,s.jsxs)(N.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{u||m(t)},children:[u?(0,s.jsx)(h.IconCheck,{}):(0,s.jsx)(h.IconCopy,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]})}),(0,s.jsx)(y._v,{children:(0,s.jsx)("p",{className:"m-0",children:"Copy"})})]})]})]}),(0,s.jsx)(g.Z,{language:"toml"===n?"bash":n,style:j.RY,PreTag:"div",showLineNumbers:!0,wrapLongLines:c,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},renderer:e=>{let{rows:n,stylesheet:t,useInlineStyles:s}=e;return n.map((e,n)=>{let r=e.children,i=null==r?void 0:r.shift();return i&&(e.children=[i,{children:r,properties:{className:[]},tagName:"span",type:"element"}]),(0,v.ZP)({node:e,stylesheet:t,useInlineStyles:s,key:n})})},children:t})]})});w.displayName="CodeBlock";let k=(0,r.createContext)({});function C(e){var n;let{inline:t,className:i,children:l,...o}=e,{lookupSymbol:a,openInEditor:d,canWrapLongLines:u,onApplyInEditor:m,onCopyContent:p,supportsOnApplyInEditorV2:x,symbolPositionMap:f}=(0,r.useContext)(k),g=null===(n=l[0])||void 0===n?void 0:n.toString(),v=g?f.get(g):void 0;if((0,r.useEffect)(()=>{t&&a&&g&&a(g)},[t,g,a]),l.length){if("▍"===l[0])return(0,s.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});l[0]=l[0].replace("`▍`","▍")}if(t){let e=!!(null==v?void 0:v.target);return(0,s.jsxs)("code",{className:(0,c.cn)("group/symbol",i,{symbol:!!a,"bg-muted leading-5 py-0.5":!!a&&!e,"space-x-1 cursor-pointer hover:bg-muted/50 border whitespace-nowrap align-middle py-0.5":e}),onClick:()=>{e&&d&&(null==v?void 0:v.target)&&d(v.target)},...o,children:[e&&(0,s.jsx)(h.IconSquareChevronRight,{className:"relative -top-px inline-block h-3.5 w-3.5 text-primary"}),(0,s.jsx)("span",{className:(0,c.cn)("whitespace-normal",{"group-hover/symbol:text-primary":e}),children:l})]})}let j=/language-(\w+)/.exec(i||"");return(0,s.jsx)(w,{language:j&&j[1]||"",value:String(l).replace(/\n$/,""),onApplyInEditor:m,onCopyContent:p,canWrapLongLines:u,supportsOnApplyInEditorV2:x})}var A=t(64219);function I(e){let{message:n,headline:t=!1,attachmentDocs:d,attachmentClientCode:m,attachmentCode:x,onApplyInEditor:h,onCopyContent:f,contextInfo:g,fetchingContextInfo:v,className:j,canWrapLongLines:b,onLookupSymbol:N,openInEditor:y,supportsOnApplyInEditorV2:w,activeSelection:A,...I}=e,[z,_]=(0,r.useState)(new Map),F=(0,r.useMemo)(()=>{var e,n,t;let s=null!==(e=null==d?void 0:d.map(e=>({type:"doc",data:e})))&&void 0!==e?e:[],r=null!==(n=null==m?void 0:m.map(e=>({type:"code",data:e})))&&void 0!==n?n:[],l=null!==(t=null==x?void 0:x.map(e=>({type:"code",data:e})))&&void 0!==t?t:[];return(0,i.Z)([...s,...r,...l])},[d,m,x]),O=e=>{let n;let r=[],i=0,o=e=>{e&&r.push(e)},a=(t,l,a)=>{for(;null!==(n=t.exec(e));)o(e.slice(i,n.index)),r.push((0,s.jsx)(l,{...a(n)},n.index)),i=n.index+n[0].length};return a(p.Hc,E,e=>{let n=parseInt(e[1],10),t=(0,l.Z)(n)?void 0:null==F?void 0:F[n-1],s=null==t?void 0:t.type,r=t&&!(0,l.Z)(n);return{citationIndex:n,showcitation:r,citationType:s,citationSource:t}}),a(p.zf,L,e=>{let n=e[1];return{sourceId:n,className:t?"text-[1rem] font-semibold":void 0}}),a(p.Bt,M,e=>{let n=e[1];try{return{encodedFilepath:n,openInEditor:y}}catch(e){}}),a(p.vY,D,e=>{let n=e[1];return{encodedSymbol:n,openInEditor:y}}),o(e.slice(i)),r},Z=async e=>{if(!N||z.has(e))return;_(n=>new Map(n.set(e,null)));let n=[];null==m||m.forEach(e=>{var t;n.push({filepath:(0,c.hL)({filepath:e.filepath,baseDir:e.baseDir,gitUrl:e.gitUrl,commit:null!==(t=e.commit)&&void 0!==t?t:void 0}),location:(0,c.OV)(e)})});let t=await N(e,n);_(n=>new Map(n.set(e,t)))},S=(0,r.useMemo)(()=>(0,c.M0)(n),[n]);return(0,s.jsx)(k.Provider,{value:{onCopyContent:f,onApplyInEditor:h,onCodeCitationClick:I.onCodeCitationClick,onCodeCitationMouseEnter:I.onCodeCitationMouseEnter,onCodeCitationMouseLeave:I.onCodeCitationMouseLeave,contextInfo:g,fetchingContextInfo:!!v,canWrapLongLines:!!b,supportsOnApplyInEditorV2:w,activeSelection:A,symbolPositionMap:z,lookupSymbol:N?Z:void 0,openInEditor:y},children:(0,s.jsx)(u.s,{className:(0,c.cn)("message-markdown prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",{"cursor-default":!!h},j),remarkPlugins:[o.Z,a.Z],components:{p(e){let{children:n}=e;return(0,s.jsx)("p",{className:"mb-2 last:mb-0",children:n.map((e,n)=>"string"==typeof e?O(e):(0,s.jsx)("span",{children:e},n))})},li(e){let{children:n}=e;return n&&n.length?(0,s.jsx)("li",{children:n.map((e,n)=>"string"==typeof e?O(e):(0,s.jsx)("span",{children:e},n))}):(0,s.jsx)("li",{children:n})},code(e){let{node:n,inline:t,className:r,children:i,...l}=e;return(0,s.jsx)(C,{node:n,inline:t,className:r,...l,children:i})},hr:()=>null},children:S})})}function z(e){let{error:n="Failed to fetch"}=e,t=(0,r.useMemo)(()=>"```\n"+JSON.stringify({error:!0,message:n},null,2)+"\n```",[n]);return(0,s.jsx)(u.s,{className:"prose-full-width prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[o.Z,a.Z],components:{code(e){let{node:n,inline:t,className:r,children:i,...l}=e;return(0,s.jsx)("div",{...l,className:(0,c.cn)(r,"bg-zinc-950 p-2"),children:i})}},children:t})}function E(e){let{citationIndex:n,showcitation:t,citationType:r,citationSource:i}=e;return(0,s.jsx)("span",{children:t&&(0,s.jsx)(s.Fragment,{children:"doc"===r?(0,s.jsx)(_,{relevantDocument:i.data,citationIndex:n}):"code"===r?(0,s.jsx)(F,{relevantCode:i.data,citationIndex:n}):null})})}function L(e){var n;let{sourceId:t,className:i}=e,{contextInfo:l,fetchingContextInfo:o}=(0,r.useContext)(k);if(!t)return null;let a=null==l?void 0:null===(n=l.sources)||void 0===n?void 0:n.find(e=>e.sourceId===t);return a?(0,s.jsx)("span",{className:"node-mention",children:(0,s.jsx)("span",{children:o?(0,s.jsx)(f.O,{className:"w-16"}):(0,s.jsx)(x.pf,{id:a.sourceId,label:a.sourceName,kind:a.sourceKind,className:i})})}):null}function M(e){let{encodedFilepath:n,openInEditor:t,className:i}=e,l=(0,r.useMemo)(()=>{if(!n)return null;try{let e=decodeURIComponent(n),t=JSON.parse(e);return t}catch(e){return null}},[n]),o=(0,r.useMemo)(()=>{if(l)return(0,c.eo)(l).filepath},[l]);return o?(0,s.jsxs)("span",{className:(0,c.cn)("symbol space-x-1 whitespace-nowrap border bg-muted py-0.5 align-middle leading-5",i,{"hover:bg-muted/50 cursor-pointer":!!t&&!!l}),onClick:()=>{t&&l&&t({filepath:l})},children:[(0,s.jsx)(h.IconFile,{className:"relative -top-px inline-block h-3.5 w-3.5"}),(0,s.jsx)("span",{className:(0,c.cn)("whitespace-normal font-medium"),children:(0,c.UA)(o)})]}):null}function D(e){let{encodedSymbol:n,openInEditor:t,className:i}=e,l=(0,r.useMemo)(()=>{if(!n)return null;try{let e=decodeURIComponent(n);return JSON.parse(e)}catch(e){return null}},[n]);return(null==l?void 0:l.label)?(0,s.jsxs)("span",{className:(0,c.cn)("symbol space-x-1 whitespace-nowrap border bg-muted py-0.5 align-middle leading-5",i,{"hover:bg-muted/50 cursor-pointer":!!t}),onClick:()=>{t&&l&&t({filepath:l.filepath,location:l.range})},children:[(0,s.jsx)(m.Z,{className:"relative -top-px inline-block h-3.5 w-3.5"}),(0,s.jsx)("span",{className:"font-medium",children:l.label})]}):null}function _(e){let{relevantDocument:n,citationIndex:t}=e,r="MessageAttachmentCommitDoc"===n.__typename?void 0:n.link;return(0,s.jsxs)(d.zs,{openDelay:100,closeDelay:100,children:[(0,s.jsx)(d.Yi,{children:(0,s.jsx)("span",{className:(0,c.cn)("relative -top-2 mr-0.5 inline-block h-4 w-4 rounded-full bg-muted text-center text-xs font-medium",{"cursor-pointer":!!r}),onClick:()=>{r&&window.open(r)},children:t})}),(0,s.jsx)(d.bZ,{className:"w-96 bg-background text-sm text-foreground dark:border-muted-foreground/60",children:(0,s.jsx)(A.Z,{relevantDocument:n})})]})}function F(e){var n,t;let{relevantCode:i,citationIndex:o}=e,{onCodeCitationClick:a,onCodeCitationMouseEnter:u,onCodeCitationMouseLeave:m}=(0,r.useContext)(k),p=(0,r.useMemo)(()=>({kind:"file",range:(0,c.OV)(i),filepath:i.filepath||"",content:i.content,gitUrl:""}),[i]),x=p.range&&!(0,l.Z)(null===(n=p.range)||void 0===n?void 0:n.start)&&!(0,l.Z)(null===(t=p.range)||void 0===t?void 0:t.end)&&p.range.start<p.range.end,f=p.filepath.split("/"),g=f.slice(0,f.length-1).join("/"),v=(0,r.useMemo)(()=>(0,c.UA)(p.filepath),[p.filepath]),j=(0,r.useMemo)(()=>{if(!p.range)return;let e="";return p.range.start&&(e=String(p.range.start)),x&&(e+="-".concat(p.range.end)),e},[p.range]);return(0,s.jsxs)(d.zs,{openDelay:100,closeDelay:100,children:[(0,s.jsx)(d.Yi,{children:(0,s.jsx)("span",{className:"relative -top-2 mx-0.5 inline-block h-4 w-4 cursor-pointer rounded-full bg-muted text-center text-xs font-medium",onClick:()=>{null==a||a(i)},onMouseEnter:()=>{null==u||u(o)},onMouseLeave:()=>{null==m||m(o)},children:o})}),(0,s.jsx)(d.bZ,{className:"max-w-[90vw] overflow-x-hidden bg-background py-2 text-sm text-foreground dark:border-muted-foreground/60 md:py-4 lg:w-96",collisionPadding:8,children:(0,s.jsxs)("div",{className:"cursor-pointer space-y-2 hover:opacity-70",onClick:()=>null==a?void 0:a(i),children:[(0,s.jsxs)("div",{className:"flex items-center gap-1 overflow-hidden font-medium",children:[(0,s.jsx)(h.IconFileText,{className:"shrink-0"}),(0,s.jsxs)("span",{className:"flex-1 truncate",children:[(0,s.jsx)("span",{children:v}),j?(0,s.jsxs)("span",{className:"text-muted-foreground",children:[":",j]}):null]})]}),!!g&&(0,s.jsx)("div",{className:"break-all text-xs text-muted-foreground",children:g})]})})]})}},89811:function(e,n,t){"use strict";t.d(n,{V:function(){return c}});var s=t(36164),r=t(3546),i=t(42891),l=t.n(i),o={src:"/_next/static/media/default-favicon.a2df8fbb.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mOAAqaMgrXeIYlL2jwjF7WZey7wBolB5eyZotNX1PdMO/Br466r/89dfvx/w7aLv6LSlteDFem5zPPesPXir20Hbv7ftPfGrz9///969urL/xkLj/0KjlvqzZCct6rt9r3X/w+cvP/r8fOP/0Hg/uN3vzbsvPq/rmVzG0Nk+oq2J8/f///89devOw/f/n/7/uv/T19+/Dpx7uH/3NK1bQwMarO8tu66/Auk89qd17/mrzn/682H7//3H7rxi4FhsheDDYMhU0DC0vqde6/+On/lyf/5q878X7Tq9M+E7JX1cJ/4MpgzMajO9ApNXtoWl7mszc5nvhdMEgB1uZJfA01kRAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},a=t(57288);function c(e){let{hostname:n,className:t}=e,[i,c]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:"relative h-3.5 w-3.5 shrink-0",children:[(0,s.jsx)(l(),{src:o,alt:n,width:14,height:14,className:(0,a.cn)("absolute left-0 top-0 z-0 h-3.5 w-3.5 rounded-full leading-none",t)}),(0,s.jsx)(l(),{src:"https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=".concat(n),alt:n,width:14,height:14,className:(0,a.cn)("relative z-10 h-3.5 w-3.5 rounded-full bg-card leading-none",t,{"opacity-0":!i}),onLoad:()=>{c(!0)}})]})}},37034:function(e,n,t){"use strict";t.d(n,{k:function(){return l}});var s=t(36164),r=t(18500),i=t(81565);function l(e){let{kind:n,gitIcon:t,...l}=e;switch(n){case r.ri.Doc:return(0,s.jsx)(i.IconEmojiBook,{...l});case r.ri.Web:return(0,s.jsx)(i.IconEmojiGlobe,{...l});case r.ri.Github:return(0,s.jsx)(i.IconGitHub,{...l});case r.ri.Gitlab:return(0,s.jsx)(i.IconGitLab,{...l});case r.ri.Git:return t||(0,s.jsx)(i.IconCode,{...l});default:return null}}},63795:function(e,n,t){"use strict";t.d(n,{C:function(){return o}});var s=t(36164);t(3546);var r=t(14375),i=t(57288);let l=(0,r.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:n,variant:t,...r}=e;return(0,s.jsx)("div",{className:(0,i.cn)(l({variant:t}),n),...r})}},90615:function(e,n,t){"use strict";t.d(n,{Yi:function(){return a},bZ:function(){return c},zs:function(){return o}});var s=t(36164),r=t(3546),i=t(21030),l=t(57288);let o=i.fC,a=i.xz;i.h_;let c=r.forwardRef((e,n)=>{let{className:t,align:r="center",sideOffset:o=4,...a}=e;return(0,s.jsx)(i.VY,{ref:n,align:r,sideOffset:o,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...a})});c.displayName=i.VY.displayName},21808:function(e,n,t){"use strict";t.d(n,{$6:function(){return i},$I:function(){return l},L8:function(){return r},ir:function(){return o},o0:function(){return s},rZ:function(){return a}});let s="name@yourcompany.com",r=20,i={DEMO_AUTO_LOGIN:"_tabby_demo_autologin"},l=48,o="NOT_FOUND",a="\n"},12624:function(e,n,t){"use strict";t.d(n,{e:function(){return i}});var s=t(3546),r=t(62940);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,[t,i]=s.useState(!1);return s.useEffect(()=>{if(n)return;let t=(0,r.Z)(()=>{i(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e,n]),s.useEffect(()=>{if(!n)return;let t=(0,r.Z)(()=>{let{scrollTop:t,clientHeight:s,scrollHeight:r}=n;i(t+s>=r-e)},100,{leading:!0});return n.addEventListener("scroll",t,{passive:!0}),n.addEventListener("resize",t,{passive:!0}),t(),()=>{n.removeEventListener("scroll",t),n.removeEventListener("resize",t)}},[e,n]),t}},80804:function(){}}]);