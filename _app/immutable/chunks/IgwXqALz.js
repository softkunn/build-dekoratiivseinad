var Jt=t=>{throw TypeError(t)};var Ce=(t,e,n)=>e.has(t)||Jt("Cannot "+n);var A=(t,e,n)=>(Ce(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{W as Nt,V as xt,az as C,u as N,a5 as O,X as Ne}from"./DDjjqyqw.js";new URL("sveltekit-internal://");function Oe(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function je(t){return t.split("%25").map(decodeURI).join("%25")}function $e(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Rt({href:t}){return t.split("#")[0]}function De(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function Ve(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Fe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const Be=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(Ot(t)),Be(t,e));const W=new Map;function qe(t,e){const n=Ot(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Fe(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function Ge(t,e,n){if(W.size>0){const r=Ot(t,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(e,n)}function Ot(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Ve(...a)}"]`}return r}const Me=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function He(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${We(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return It(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return It(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const u=Me.exec(c),[,p,y,l,m]=u;return e.push({name:l,matcher:m,optional:!!p,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return It(c)}).join("")}).join("")}/?$`),params:e}}function Ke(t){return!/^\([^)]+\)$/.test(t)}function We(t){return t.slice(1).split("/").filter(Ke)}function Ye(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const u=e[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function It(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ze({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,f,u]])=>{const{pattern:p,params:y}=He(o),l={id:o,exec:m=>{const d=p.exec(m);if(d)return Ye(d,y,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function ue(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Xt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var se;const T=((se=globalThis.__sveltekit_1tlxfqx)==null?void 0:se.base)??"";var ie;const Je=((ie=globalThis.__sveltekit_1tlxfqx)==null?void 0:ie.assets)??T,Xe="1741372989441",he="sveltekit:snapshot",de="sveltekit:scroll",pe="sveltekit:states",Ze="sveltekit:pageurl",q="sveltekit:history",J="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function ge(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function jt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Zt={...ut,"":ut.hover};function me(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ye(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=me(t)}}function Tt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||vt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ft&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ht(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),e===null&&(e=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=me(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Zt[r??"off"],preload_data:Zt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Qt(t){const e=Nt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const we={v:()=>{}};function Qe(){const{set:t,subscribe:e}=Nt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Je}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Xe;return i&&(t(!0),we.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Dn(t){}function te(t){const e=en(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const tn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function en(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=tn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const nn=-1,rn=-2,an=-3,on=-4,sn=-5,cn=-6;function ln(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===nn)return;if(s===an)return NaN;if(s===on)return 1/0;if(s===sn)return-1/0;if(s===cn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=e==null?void 0:e[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let l=1;l<o.length;l+=1)u.add(a(o[l]));break;case"Map":const p=new Map;r[s]=p;for(let l=1;l<o.length;l+=2)p.set(a(o[l]),a(o[l+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let l=1;l<o.length;l+=2)y[o[l]]=a(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],m=o[1],d=te(m),h=new l(d);r[s]=h;break}case"ArrayBuffer":{const l=o[1],m=te(l);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const u=o[f];u!==rn&&(c[f]=a(u))}}else{const c={};r[s]=c;for(const f in o){const u=o[f];c[f]=a(u)}}return r[s]}return a(0)}const _e=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[..._e];const fn=new Set([..._e]);[...fn];function un(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class $t{constructor(e,n){this.status=e,this.location=n}}class Dt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const hn="x-sveltekit-invalidated",dn="x-sveltekit-trailing-slash";function dt(t){return t instanceof bt||t instanceof Dt?t.status:500}function pn(t){return t instanceof Dt?t.text:"Internal Error"}let U,X,Ut;const gn=xt.toString().includes("$$")||/function \w+\(\) \{\}/.test(xt.toString());var tt,et,nt,rt,at,ot,st,it,ce,ct,le,lt,fe;gn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Ut={current:!1}):(U=new(ce=class{constructor(){P(this,tt,C({}));P(this,et,C(null));P(this,nt,C(null));P(this,rt,C({}));P(this,at,C({id:null}));P(this,ot,C({}));P(this,st,C(-1));P(this,it,C(new URL("https://example.com")))}get data(){return N(A(this,tt))}set data(e){O(A(this,tt),e)}get form(){return N(A(this,et))}set form(e){O(A(this,et),e)}get error(){return N(A(this,nt))}set error(e){O(A(this,nt),e)}get params(){return N(A(this,rt))}set params(e){O(A(this,rt),e)}get route(){return N(A(this,at))}set route(e){O(A(this,at),e)}get state(){return N(A(this,ot))}set state(e){O(A(this,ot),e)}get status(){return N(A(this,st))}set status(e){O(A(this,st),e)}get url(){return N(A(this,it))}set url(e){O(A(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ce),X=new(le=class{constructor(){P(this,ct,C(null))}get current(){return N(A(this,ct))}set current(e){O(A(this,ct),e)}},ct=new WeakMap,le),Ut=new(fe=class{constructor(){P(this,lt,C(!1))}get current(){return N(A(this,lt))}set current(e){O(A(this,lt),e)}},lt=new WeakMap,fe),we.v=()=>Ut.current=!0);function mn(t){Object.assign(U,t)}const yn="/__data.json",wn=".html__data.json";function _n(t){return t.endsWith(".html")?t.replace(/\.html$/,wn):t.replace(/\/$/,"")+yn}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=ue(de)??{},Z=ue(he)??{},$={url:Qt({}),page:Qt({}),navigating:Nt(null),updated:Qe()};function Vt(t){F[t]=jt()}function bn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function M(t){return location.href=t.href,new Promise(()=>{})}async function ve(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function ee(){}let Ft,Pt,pt,j,Ct,S;const gt=[],mt=[];let L=null;const Bt=new Set,An=new Set,Y=new Set;let v={branch:[],error:null,url:null},qt=!1,yt=!1,ne=!0,Q=!1,H=!1,be=!1,Gt=!1,Ae,R,x,V;const z=new Set;async function qn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Ft=ze(t),j=document.documentElement,Ct=e,Pt=t.nodes[0],pt=t.nodes[1],Pt(),pt(),R=(i=history.state)==null?void 0:i[q],x=(o=history.state)==null?void 0:o[J],R||(R=x=Date.now(),history.replaceState({...history.state,[q]:R,[J]:x},""));const r=F[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Nn(Ct,n):await Tn(S.hash?Pe(new URL(location.href)):location.href,{replaceState:!0}),Cn()}function Sn(){gt.length=0,Gt=!1}function Se(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function ke(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=mt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function re(){Vt(R),Xt(de,F),Se(x),Xt(he,Z)}async function Mt(t,e,n,r){return K({type:"goto",url:ge(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Gt=!0),e.invalidate&&e.invalidate.forEach(Pn)}})}async function kn(t){if(t.id!==(L==null?void 0:L.id)){const e={};z.add(e),L={id:t.id,token:e,promise:Re({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Lt(t){var n;const e=(n=await St(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Ee(t,e,n){var s;v=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),Ae=new S.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),ke(x);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),yt=!0}function wt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(T&&(t.pathname===T||t.pathname===T+"/"))o="always";else for(const l of n)(l==null?void 0:l.slash)!==void 0&&(o=l.slash);t.pathname=Oe(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:un(n).map(l=>l.node.component),page:Wt(U)}};i!==void 0&&(c.props.form=i);let f={},u=!U,p=0;for(let l=0;l<Math.max(n.length,v.branch.length);l+=1){const m=n[l],d=v.branch[l];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${p}`]=f),p+=1)}return(!v.url||t.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||u)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?f:U.data}),c}async function Ht({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var u,p,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let l=function(...d){for(const h of d){const{href:w}=new URL(h,n);c.dependencies.add(w)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:De(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},S.hash),async fetch(d,h){let w;d instanceof Request?(w=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):w=d;const k=new URL(w,n);return o&&l(k.href),k.origin===n.origin&&(w=k.href.slice(n.origin.length)),yt?Ge(w,k.href,h):qe(w,h)},setHeaders:()=>{},depends:l,parent(){return o&&(c.parent=!0),e()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:s,universal:(p=f.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function ae(t,e,n,r,a,s){if(Gt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function Kt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function En(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function oe({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Wt(U),constructors:[]}}}async function Re({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return z.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),f.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=v.url?t!==_t(v.url):!1,y=v.route?a.id!==v.route.id:!1,l=En(v.url,n);let m=!1;const d=f.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||ae(m,y,p,l,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{u=await Le(n,d)}catch(g){const _=await G(g,{url:n,params:r,route:{id:t}});return z.has(s)?oe({error:_,url:n,params:r,route:a}):At({status:dt(g),error:_,url:n,route:a})}if(u.type==="redirect")return u}const h=u==null?void 0:u.nodes;let w=!1;const k=f.map(async(g,_)=>{var kt;if(!g)return;const b=v.branch[_],E=h==null?void 0:h[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!ae(w,y,p,l,(kt=b.universal)==null?void 0:kt.uses,r))return b;if(w=!0,(E==null?void 0:E.type)==="error")throw E;return Ht({loader:g[1],url:n,params:r,route:a,parent:async()=>{var zt;const Yt={};for(let Et=0;Et<_;Et+=1)Object.assign(Yt,(zt=await k[Et])==null?void 0:zt.data);return Yt},server_data_node:Kt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of k)g.catch(()=>{});const I=[];for(let g=0;g<f.length;g+=1)if(f[g])try{I.push(await k[g])}catch(_){if(_ instanceof $t)return{type:"redirect",location:_.location};if(z.has(s))return oe({error:await G(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=dt(_),E;if(h!=null&&h.includes(_))b=_.status??b,E=_.error;else if(_ instanceof bt)E=_.body;else{if(await $.updated.check())return await ve(),await M(n);E=await G(_,{params:r,url:n,route:{id:a.id}})}const D=await Rn(g,I,i);return D?wt({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Ue(n,{id:a.id},E,b)}else I.push(void 0);return wt({url:n,params:r,branch:I,status:200,error:null,route:a,form:e?void 0:null})}async function Rn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await Le(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||qt)&&await M(n)}try{const o=await Ht({loader:Pt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Kt(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return wt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof $t)return Mt(new URL(o.location,location.href),{},0);throw o}}function In(t){let e;try{if(e=S.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);S.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function St(t,e){if(t&&!vt(t,T,S.hash)){const n=In(t);if(!n)return;const r=Un(n);for(const a of Ft){const s=a.exec(r);if(s)return{id:_t(t),invalidating:e,route:a,params:$e(s),url:t}}}}function Un(t){return je(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(T.length))||"/"}function _t(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ie({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Te(v,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||Bt.forEach(o=>o(i)),a?null:s}async function K({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=ee,block:u=ee}){const p=V;V=c;const y=await St(e,!1),l=Ie({url:e,type:t,delta:n==null?void 0:n.delta,intent:y});if(!l){u(),V===c&&(V=p);return}const m=R,d=x;f(),Q=!0,yt&&$.navigating.set(X.current=l.navigation);let h=y&&await Re(y);if(!h){if(vt(e,T,S.hash))return await M(e);h=await Ue(e,{id:null},await G(new Dt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(y==null?void 0:y.url)||e,V!==c)return l.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await At({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Mt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await ve(),await M(e));if(Sn(),Vt(m),Se(d),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[q]:R+=g,[J]:x+=g,[pe]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||bn(R,x)}if(L=null,h.props.page.state=i,yt){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(An,_=>_(l.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{Y.delete(b)})};g.push(_),g.forEach(b=>{Y.add(b)})}Ae.$set(h.props),mn(h.props.page),be=!0}else Ee(h,Ct,!1);const{activeElement:w}=document;await Ne();const k=n?n.scroll:a?jt():null;if(ne){const g=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==w&&document.activeElement!==document.body;!r&&!I&&On(),ne=!0,h.props.page&&Object.assign(U,h.props.page),Q=!1,t==="popstate"&&ke(x),l.fulfil(void 0),Y.forEach(g=>g(l.navigation)),$.navigating.set(X.current=null)}async function Ue(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!qt?await At({status:r,error:n,url:t,route:e}):await M(t)}function Ln(){let t,e;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Lt(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=ye(i,j);if(!c||c===e)return;const{url:f,external:u,download:p}=Tt(c,T,S.hash);if(u||p)return;const y=ht(c),l=f&&_t(v.url)===_t(f);if(!y.reload&&!l)if(o<=y.preload_data){e=c;const m=await St(f,!1);m&&kn(m)}else o<=y.preload_code&&(e=c,Lt(f))}function s(){r.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:f}=Tt(i,T,S.hash);if(c||f)continue;const u=ht(i);u.reload||(u.preload_code===ut.viewport&&r.observe(i),u.preload_code===ut.eager&&Lt(o))}}Y.add(s),s()}function G(t,e){if(t instanceof bt)return t.body;const n=dt(t),r=pn(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function xn(t,e){xt(()=>(t.add(e),()=>{t.delete(e)}))}function Gn(t){xn(Bt,t)}function Tn(t,e={}){return t=new URL(ge(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Mt(t,e,0)}function Pn(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function Cn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(re(),!Q){const a=Te(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Bt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&re()}),(e=navigator.connection)!=null&&e.saveData||Ln(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ye(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Tt(r,T,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=u===Rt(location);if(s||c.reload&&(!y||!p)){Ie({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(p!==void 0&&y){const[,l]=v.url.href.split("#");if(l===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,Vt(R),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(l=>{requestAnimationFrame(()=>{setTimeout(l,0)}),setTimeout(l,100)}),await K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(o,T,!1))return;const c=n.target,f=ht(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),K({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(V={},a===R)return;const s=F[a],i=n.state[pe]??{},o=new URL(n.state[Ze]??location.href),c=n.state[J],f=v.url?Rt(location)===Rt(v.url):!1;if(c===x&&(be||f)){i!==U.state&&(U.state=i),t(o),F[R]=jt(),s&&scrollTo(s.x,s.y),R=a;return}const p=a-R;await K({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=a,x=c},block:()=>{history.go(-p)},nav_token:V})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++R,[J]:x},"",location.href)):S.hash&&v.url.hash===location.hash&&K({type:"goto",url:Pe(v.url)})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){v.url=U.url=n,$.page.set(Wt(U)),$.page.notify()}}async function Nn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){qt=!0;const f=new URL(location.href);let u;({params:a={},route:s={id:null}}=await St(f,!1)||{}),u=Ft.find(({id:l})=>l===s.id);let p,y=!0;try{const l=r.map(async(d,h)=>{const w=o[h];return w!=null&&w.uses&&(w.uses=xe(w.uses)),Ht({loader:S.nodes[d],url:f,params:a,route:s,parent:async()=>{const k={};for(let I=0;I<h;I+=1)Object.assign(k,(await l[I]).data);return k},server_data_node:Kt(w)})}),m=await Promise.all(l);if(u){const d=u.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}p=wt({url:f,params:a,branch:m,status:e,error:n,form:c,route:u??null})}catch(l){if(l instanceof $t){await M(new URL(l.location,location.href));return}p=await At({status:dt(l),error:await G(l,{url:f,params:a,route:s}),url:f,route:s}),t.textContent="",y=!1}p.props.page&&(p.props.page.state={}),Ee(p,t,y)}async function Le(t,e){var s;const n=new URL(t);n.pathname=_n(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(dn,"1"),n.searchParams.append(hn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new bt(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),f=new TextDecoder;function u(l){return ln(l,{...S.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let p="";for(;;){const{done:l,value:m}=await c.read();if(l&&!p)break;for(p+=!m&&p?`
`:f.decode(m,{stream:!0});;){const d=p.indexOf(`
`);if(d===-1)break;const h=JSON.parse(p.slice(0,d));if(p=p.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(y=h.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=xe(w.uses),w.data=u(w.data))}),i(h);else if(h.type==="chunk"){const{id:w,data:k,error:I}=h,g=o.get(w);o.delete(w),I?g.reject(u(I)):g.fulfil(u(k))}}}})}function xe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function On(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Te(t,e,n,r){var c,f;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((f=e==null?void 0:e.route)==null?void 0:f.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Wt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Pe(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Gn as a,T as b,qn as c,Tn as g,Dn as l,U as p,$ as s};
