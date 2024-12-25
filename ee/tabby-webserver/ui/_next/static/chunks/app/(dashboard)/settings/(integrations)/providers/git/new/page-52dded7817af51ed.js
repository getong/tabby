(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{43755:function(e,t,r){Promise.resolve().then(r.bind(r,83272))},83272:function(e,t,r){"use strict";r.r(t),r.d(t,{NewRepository:function(){return b}});var n=r(36164),i=r(11978);r(3546);var o=r(84381),s=r(5493),a=r(23782),l=r(43240),c=r(11634),d=r(31458),u=r(98150),f=r(82394);let m=(0,l.BX)("\n  mutation createGitRepository($name: String!, $gitUrl: String!) {\n    createGitRepository(name: $name, gitUrl: $gitUrl)\n  }\n"),x=a.Ry({name:a.Z_(),gitUrl:a.Z_()});function p(e){let{onCreated:t}=e,r=(0,s.cI)({resolver:(0,o.F)(x)}),{isSubmitting:a}=r.formState,l=(0,c.Db)(m,{onCompleted(){r.reset({name:void 0,gitUrl:void 0}),t()},form:r}),p=(0,i.useRouter)();return(0,n.jsx)(u.l0,{...r,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:r.handleSubmit(l),children:[(0,n.jsx)(u.Wi,{control:r.control,name:"name",render:e=>{let{field:t}=e;return(0,n.jsxs)(u.xJ,{children:[(0,n.jsx)(u.lX,{required:!0,children:"Name"}),(0,n.jsx)(u.NI,{children:(0,n.jsx)(f.I,{placeholder:"e.g. tabby",autoCapitalize:"none",autoCorrect:"off",autoComplete:"off",...t})}),(0,n.jsx)(u.zG,{})]})}}),(0,n.jsx)(u.Wi,{control:r.control,name:"gitUrl",render:e=>{let{field:t}=e;return(0,n.jsxs)(u.xJ,{children:[(0,n.jsx)(u.lX,{required:!0,children:"Git URL"}),(0,n.jsx)(u.pf,{children:"Remote or local Git URL"}),(0,n.jsx)(u.NI,{children:(0,n.jsx)(f.I,{placeholder:"e.g. https://github.com/TabbyML/tabby",autoCapitalize:"none",autoCorrect:"off",...t})}),(0,n.jsx)(u.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)(d.z,{type:"button",variant:"ghost",disabled:a,onClick:()=>p.back(),children:"Cancel"}),(0,n.jsx)(d.z,{type:"submit",disabled:a,children:"Create"})]})]}),(0,n.jsx)(u.zG,{className:"text-center"})]})})}let b=()=>{let e=(0,i.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p,{onCreated:()=>{e.back()}})})}},98150:function(e,t,r){"use strict";r.d(t,{NI:function(){return b},Wi:function(){return u},l0:function(){return c},lX:function(){return p},pf:function(){return g},xJ:function(){return x},zG:function(){return h}});var n=r(36164),i=r(3546),o=r(74047),s=r(5493),a=r(57288),l=r(5266);let c=s.RV,d=i.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(d.Provider,{value:{name:t.name},children:(0,n.jsx)(s.Qr,{...t})})},f=()=>{let e=i.useContext(d),t=i.useContext(m),{getFieldState:r,formState:n}=(0,s.Gc)(),o=e.name||"root",a=r(o,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=t;return{id:l,name:o,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...a}},m=i.createContext({}),x=i.forwardRef((e,t)=>{let{className:r,...o}=e,s=i.useId();return(0,n.jsx)(m.Provider,{value:{id:s},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...o})})});x.displayName="FormItem";let p=i.forwardRef((e,t)=>{let{className:r,required:i,...o}=e,{error:s,formItemId:c}=f();return(0,n.jsx)(l._,{ref:t,className:(0,a.cn)(s&&"text-destructive",i&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:c,...o})});p.displayName="FormLabel";let b=i.forwardRef((e,t)=>{let{...r}=e,{error:i,formItemId:s,formDescriptionId:a,formMessageId:l}=f();return(0,n.jsx)(o.g7,{ref:t,id:s,"aria-describedby":i?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!i,...r})});b.displayName="FormControl";let g=i.forwardRef((e,t)=>{let{className:r,...i}=e,{formDescriptionId:o}=f();return(0,n.jsx)("div",{ref:t,id:o,className:(0,a.cn)("text-sm text-muted-foreground",r),...i})});g.displayName="FormDescription";let h=i.forwardRef((e,t)=>{let{className:r,children:i,...o}=e,{error:s,formMessageId:l}=f(),c=s?String(null==s?void 0:s.message):i;return c?(0,n.jsx)("p",{ref:t,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",r),...o,children:c}):null});h.displayName="FormMessage"},82394:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var n=r(36164),i=r(3546),o=r(57288);let s=i.forwardRef((e,t)=>{let{className:r,type:i,...s}=e;return(0,n.jsx)("input",{type:i,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});s.displayName="Input"},5266:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var n=r(36164),i=r(3546),o=r(90893),s=r(14375),a=r(57288);let l=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(o.f,{ref:t,className:(0,a.cn)(l(),r),...i})});c.displayName=o.f.displayName}},function(e){e.O(0,[7430,55,9643,240,7288,3240,4656,3375,5289,1744],function(){return e(e.s=43755)}),_N_E=e.O()}]);