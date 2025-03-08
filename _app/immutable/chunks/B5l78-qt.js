var Jt=t=>{throw TypeError(t)};var Ce=(t,e,n)=>e.has(t)||Jt("Cannot "+n);var A=(t,e,n)=>(Ce(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{a0 as Nt,$ as Tt,ay as C,v as N,y as O,a1 as Ne}from"./SkWQW7eQ.js";import{H as vt,S as Ot,R as jt}from"./CYgJF_JY.js";new URL("sveltekit-internal://");function Oe(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function je(t){return t.split("%25").map(decodeURI).join("%25")}function $e(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Rt({href:t}){return t.split("#")[0]}function De(t,e,n,a=!1){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return r}function Fe(...t){let e=5381;for(const n of t)if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)e=e*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ve(t){const e=atob(t),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n.buffer}const Be=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete($t(t)),Be(t,e));const W=new Map;function Ge(t,e){const n=$t(t,e),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&W.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Ve(r)),Promise.resolve(new Response(r,s))}return window.fetch(t,e)}function Me(t,e,n){if(W.size>0){const a=$t(t,n),r=W.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);W.delete(a)}}return window.fetch(e,n)}function $t(t,e){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),a+=`[data-hash="${Fe(...r)}"]`}return a}const qe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function He(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${We(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return It(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return It(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const u=qe.exec(c),[,p,y,l,m]=u;return e.push({name:l,matcher:m,optional:!!p,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return It(c)}).join("")}).join("")}/?$`),params:e}}function Ke(t){return!/^\([^)]+\)$/.test(t)}function We(t){return t.slice(1).split("/").filter(Ke)}function Ye(t,e,n){const a={},r=t.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let f=r[o-i];if(c.chained&&c.rest&&i&&(f=r.slice(o-i,o+1).filter(u=>u).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){a[c.name]=f;const u=e[o+1],p=r[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function It(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ze({nodes:t,server_loads:e,dictionary:n,matchers:a}){const r=new Set(e);return Object.entries(n).map(([o,[c,f,u]])=>{const{pattern:p,params:y}=He(o),l={id:o,exec:m=>{const h=p.exec(m);if(h)return Ye(h,y,a)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[r.has(o),t[o]]}}function ue(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Xt(t,e,n=JSON.stringify){const a=n(e);try{sessionStorage[t]=a}catch{}}var se;const P=((se=globalThis.__sveltekit_l2r5b1)==null?void 0:se.base)??"";var ie;const Je=((ie=globalThis.__sveltekit_l2r5b1)==null?void 0:ie.assets)??P,Xe="1741466239878",de="sveltekit:snapshot",he="sveltekit:scroll",pe="sveltekit:states",Ze="sveltekit:pageurl",G="sveltekit:history",J="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function ge(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Dt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Zt={...ut,"":ut.hover};function me(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ye(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=me(t)}}function Pt(t,e,n){let a;try{if(a=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,s=!a||!!r||bt(a,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===ft&&t.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function dt(t){let e=null,n=null,a=null,r=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)a===null&&(a=B(o,"preload-code")),r===null&&(r=B(o,"preload-data")),e===null&&(e=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=me(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Zt[a??"off"],preload_data:Zt[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Qt(t){const e=Nt(t);let n=!0;function a(){n=!0,e.update(i=>i)}function r(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const we={v:()=>{}};function Qe(){const{set:t,subscribe:e}=Nt(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Je}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Xe;return i&&(t(!0),we.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:a}}function bt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Fn(t){}function te(t){const e=en(t),n=new ArrayBuffer(e.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,e.charCodeAt(r));return n}const tn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function en(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,a=0;for(let r=0;r<t.length;r++)n<<=6,n|=tn.indexOf(t[r]),a+=6,a===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,e+=String.fromCharCode(n)):a===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const nn=-1,an=-2,rn=-3,on=-4,sn=-5,cn=-6;function ln(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,a=Array(n.length);function r(s,i=!1){if(s===nn)return;if(s===rn)return NaN;if(s===on)return 1/0;if(s===sn)return-1/0;if(s===cn)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=e==null?void 0:e[c];if(f)return a[s]=f(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const u=new Set;a[s]=u;for(let l=1;l<o.length;l+=1)u.add(r(o[l]));break;case"Map":const p=new Map;a[s]=p;for(let l=1;l<o.length;l+=2)p.set(r(o[l]),r(o[l+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);a[s]=y;for(let l=1;l<o.length;l+=2)y[o[l]]=r(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],m=o[1],h=te(m),d=new l(h);a[s]=d;break}case"ArrayBuffer":{const l=o[1],m=te(l);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let f=0;f<o.length;f+=1){const u=o[f];u!==an&&(c[f]=r(u))}}else{const c={};a[s]=c;for(const f in o){const u=o[f];c[f]=r(u)}}return a[s]}return r(0)}const _e=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[..._e];const fn=new Set([..._e]);[...fn];function un(t){return t.filter(e=>e!=null)}const dn="x-sveltekit-invalidated",hn="x-sveltekit-trailing-slash";function ht(t){return t instanceof vt||t instanceof Ot?t.status:500}function pn(t){return t instanceof Ot?t.text:"Internal Error"}let U,X,Ut;const gn=Tt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Tt.toString());var tt,et,nt,at,rt,ot,st,it,ce,ct,le,lt,fe;gn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Ut={current:!1}):(U=new(ce=class{constructor(){x(this,tt,C({}));x(this,et,C(null));x(this,nt,C(null));x(this,at,C({}));x(this,rt,C({id:null}));x(this,ot,C({}));x(this,st,C(-1));x(this,it,C(new URL("https://example.com")))}get data(){return N(A(this,tt))}set data(e){O(A(this,tt),e)}get form(){return N(A(this,et))}set form(e){O(A(this,et),e)}get error(){return N(A(this,nt))}set error(e){O(A(this,nt),e)}get params(){return N(A(this,at))}set params(e){O(A(this,at),e)}get route(){return N(A(this,rt))}set route(e){O(A(this,rt),e)}get state(){return N(A(this,ot))}set state(e){O(A(this,ot),e)}get status(){return N(A(this,st))}set status(e){O(A(this,st),e)}get url(){return N(A(this,it))}set url(e){O(A(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,at=new WeakMap,rt=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ce),X=new(le=class{constructor(){x(this,ct,C(null))}get current(){return N(A(this,ct))}set current(e){O(A(this,ct),e)}},ct=new WeakMap,le),Ut=new(fe=class{constructor(){x(this,lt,C(!1))}get current(){return N(A(this,lt))}set current(e){O(A(this,lt),e)}},lt=new WeakMap,fe),we.v=()=>Ut.current=!0);function mn(t){Object.assign(U,t)}const yn="/__data.json",wn=".html__data.json";function _n(t){return t.endsWith(".html")?t.replace(/\.html$/,wn):t.replace(/\/$/,"")+yn}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ue(he)??{},Z=ue(de)??{},$={url:Qt({}),page:Qt({}),navigating:Nt(null),updated:Qe()};function Ft(t){V[t]=Dt()}function bn(t,e){let n=t+1;for(;V[n];)delete V[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function q(t){return location.href=t.href,new Promise(()=>{})}async function ve(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function ee(){}let Vt,xt,pt,j,Ct,k;const gt=[],mt=[];let L=null;const Bt=new Set,An=new Set,Y=new Set;let v={branch:[],error:null,url:null},Gt=!1,yt=!1,ne=!0,Q=!1,H=!1,be=!1,Mt=!1,Ae,R,T,F;const z=new Set;async function Mn(t,e,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),k=t,await((s=(r=t.hooks).init)==null?void 0:s.call(r)),Vt=ze(t),j=document.documentElement,Ct=e,xt=t.nodes[0],pt=t.nodes[1],xt(),pt(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[J],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[J]:T},""));const a=V[R];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Nn(Ct,n):await Pn(k.hash?xe(new URL(location.href)):location.href,{replaceState:!0}),Cn()}function kn(){gt.length=0,Mt=!1}function ke(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Se(t){var e;(e=Z[t])==null||e.forEach((n,a)=>{var r,s;(s=(r=mt[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function ae(){Ft(R),Xt(he,V),ke(T),Xt(de,Z)}async function qt(t,e,n,a){return K({type:"goto",url:ge(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:a,accept:()=>{e.invalidateAll&&(Mt=!0),e.invalidate&&e.invalidate.forEach(xn)}})}async function Sn(t){if(t.id!==(L==null?void 0:L.id)){const e={};z.add(e),L={id:t.id,token:e,promise:Re({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Lt(t){var n;const e=(n=await kt(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(a=>a==null?void 0:a[1]()))}function Ee(t,e,n){var s;v=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(U,t.props.page),Ae=new k.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Se(T);const r={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(r)),yt=!0}function wt({url:t,params:e,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(P&&(t.pathname===P||t.pathname===P+"/"))o="always";else for(const l of n)(l==null?void 0:l.slash)!==void 0&&(o=l.slash);t.pathname=Oe(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:r,route:s},props:{constructors:un(n).map(l=>l.node.component),page:Wt(U)}};i!==void 0&&(c.props.form=i);let f={},u=!U,p=0;for(let l=0;l<Math.max(n.length,v.branch.length);l+=1){const m=n[l],h=v.branch[l];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${p}`]=f),p+=1)}return(!v.url||t.href!==v.url.href||v.error!==r||i!==void 0&&i!==U.form||u)&&(c.props.page={error:r,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:u?f:U.data}),c}async function Ht({loader:t,parent:e,url:n,params:a,route:r,server_data_node:s}){var u,p,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let l=function(...h){for(const d of h){const{href:w}=new URL(d,n);c.dependencies.add(w)}};const m={route:new Proxy(r,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(a,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:De(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},k.hash),async fetch(h,d){let w;h instanceof Request?(w=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):w=h;const S=new URL(w,n);return o&&l(S.href),S.origin===n.origin&&(w=S.href.slice(n.origin.length)),yt?Me(w,S.href,d):Ge(w,d)},setHeaders:()=>{},depends:l,parent(){return o&&(c.parent=!0),e()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:s,universal:(p=f.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function re(t,e,n,a,r,s){if(Mt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&e||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==v.params[i])return!0;for(const i of r.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function Kt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function En(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const a of n){const r=t.searchParams.getAll(a),s=e.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function oe({error:t,url:e,route:n,params:a}){return{type:"loaded",state:{error:t,url:e,route:n,params:a,branch:[]},props:{page:Wt(U),constructors:[]}}}async function Re({id:t,invalidating:e,url:n,params:a,route:r,preload:s}){if((L==null?void 0:L.id)===t)return z.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=r,f=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),f.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=v.url?t!==_t(v.url):!1,y=v.route?r.id!==v.route.id:!1,l=En(v.url,n);let m=!1;const h=f.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||re(m,y,p,l,(D=b.server)==null?void 0:D.uses,a));return E&&(m=!0),E});if(h.some(Boolean)){try{u=await Le(n,h)}catch(g){const _=await M(g,{url:n,params:a,route:{id:t}});return z.has(s)?oe({error:_,url:n,params:a,route:r}):At({status:ht(g),error:_,url:n,route:r})}if(u.type==="redirect")return u}const d=u==null?void 0:u.nodes;let w=!1;const S=f.map(async(g,_)=>{var St;if(!g)return;const b=v.branch[_],E=d==null?void 0:d[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!re(w,y,p,l,(St=b.universal)==null?void 0:St.uses,a))return b;if(w=!0,(E==null?void 0:E.type)==="error")throw E;return Ht({loader:g[1],url:n,params:a,route:r,parent:async()=>{var zt;const Yt={};for(let Et=0;Et<_;Et+=1)Object.assign(Yt,(zt=await S[Et])==null?void 0:zt.data);return Yt},server_data_node:Kt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const I=[];for(let g=0;g<f.length;g+=1)if(f[g])try{I.push(await S[g])}catch(_){if(_ instanceof jt)return{type:"redirect",location:_.location};if(z.has(s))return oe({error:await M(_,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let b=ht(_),E;if(d!=null&&d.includes(_))b=_.status??b,E=_.error;else if(_ instanceof vt)E=_.body;else{if(await $.updated.check())return await ve(),await q(n);E=await M(_,{params:a,url:n,route:{id:r.id}})}const D=await Rn(g,I,i);return D?wt({url:n,params:a,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:r}):await Ue(n,{id:r.id},E,b)}else I.push(void 0);return wt({url:n,params:a,branch:I,status:200,error:null,route:r,form:e?void 0:null})}async function Rn(t,e,n){for(;t--;)if(n[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:a}){const r={};let s=null;if(k.server_loads[0]===0)try{const o=await Le(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Gt)&&await q(n)}try{const o=await Ht({loader:xt,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Kt(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return wt({url:n,params:r,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof jt)return qt(new URL(o.location,location.href),{},0);throw o}}function In(t){let e;try{if(e=k.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);k.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function kt(t,e){if(t&&!bt(t,P,k.hash)){const n=In(t);if(!n)return;const a=Un(n);for(const r of Vt){const s=r.exec(a);if(s)return{id:_t(t),invalidating:e,route:r,params:$e(s),url:t}}}}function Un(t){return je(k.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(P.length))||"/"}function _t(t){return(k.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ie({url:t,type:e,intent:n,delta:a}){let r=!1;const s=Pe(v,n,t,e);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return Q||Bt.forEach(o=>o(i)),r?null:s}async function K({type:t,url:e,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=ee,block:u=ee}){const p=F;F=c;const y=await kt(e,!1),l=Ie({url:e,type:t,delta:n==null?void 0:n.delta,intent:y});if(!l){u(),F===c&&(F=p);return}const m=R,h=T;f(),Q=!0,yt&&$.navigating.set(X.current=l.navigation);let d=y&&await Re(y);if(!d){if(bt(e,P,k.hash))return await q(e);d=await Ue(e,{id:null},await M(new Ot(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(y==null?void 0:y.url)||e,F!==c)return l.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await At({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await qt(new URL(d.location,e).href,{},o+1,c),!1;else d.props.page.status>=400&&await $.updated.check()&&(await ve(),await q(e));if(kn(),Ft(m),ke(h),d.props.page.url.pathname!==e.pathname&&(e.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[G]:R+=g,[J]:T+=g,[pe]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||bn(R,T)}if(L=null,d.props.page.state=i,yt){v=d.state,d.props.page&&(d.props.page.url=e);const g=(await Promise.all(Array.from(An,_=>_(l.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{Y.delete(b)})};g.push(_),g.forEach(b=>{Y.add(b)})}Ae.$set(d.props),mn(d.props.page),be=!0}else Ee(d,Ct,!1);const{activeElement:w}=document;await Ne();const S=n?n.scroll:r?Dt():null;if(ne){const g=e.hash&&document.getElementById(decodeURIComponent(k.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==w&&document.activeElement!==document.body;!a&&!I&&On(),ne=!0,d.props.page&&Object.assign(U,d.props.page),Q=!1,t==="popstate"&&Se(T),l.fulfil(void 0),Y.forEach(g=>g(l.navigation)),$.navigating.set(X.current=null)}async function Ue(t,e,n,a){return t.origin===ft&&t.pathname===location.pathname&&!Gt?await At({status:a,error:n,url:t,route:e}):await q(t)}function Ln(){let t,e;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{r(o,2)},20)});function n(i){i.defaultPrevented||r(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const a=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Lt(new URL(o.target.href)),a.unobserve(o.target))},{threshold:0});async function r(i,o){const c=ye(i,j);if(!c||c===e)return;const{url:f,external:u,download:p}=Pt(c,P,k.hash);if(u||p)return;const y=dt(c),l=f&&_t(v.url)===_t(f);if(!y.reload&&!l)if(o<=y.preload_data){e=c;const m=await kt(f,!1);m&&Sn(m)}else o<=y.preload_code&&(e=c,Lt(f))}function s(){a.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:f}=Pt(i,P,k.hash);if(c||f)continue;const u=dt(i);u.reload||(u.preload_code===ut.viewport&&a.observe(i),u.preload_code===ut.eager&&Lt(o))}}Y.add(s),s()}function M(t,e){if(t instanceof vt)return t.body;const n=ht(t),a=pn(t);return k.hooks.handleError({error:t,event:e,status:n,message:a})??{message:a}}function Tn(t,e){Tt(()=>(t.add(e),()=>{t.delete(e)}))}function qn(t){Tn(Bt,t)}function Pn(t,e={}){return t=new URL(ge(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):qt(t,e,0)}function xn(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function Cn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(ae(),!Q){const r=Pe(v,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Bt.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ae()}),(e=navigator.connection)!=null&&e.saveData||Ln(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=ye(n.composedPath()[0],j);if(!a)return;const{url:r,external:s,target:i,download:o}=Pt(a,P,k.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[u,p]=(k.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=u===Rt(location);if(s||c.reload&&(!y||!p)){Ie({url:r,type:"link"})?Q=!0:n.preventDefault();return}if(p!==void 0&&y){const[,l]=v.url.href.split("#");if(l===p){if(n.preventDefault(),p===""||p==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,Ft(R),t(r),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(l=>{requestAnimationFrame(()=>{setTimeout(l,0)}),setTimeout(l,100)}),await K({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(bt(o,P,!1))return;const c=n.target,f=dt(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=r==null?void 0:r.getAttribute("name");p&&u.append(p,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),K({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[G]){const r=n.state[G];if(F={},r===R)return;const s=V[r],i=n.state[pe]??{},o=new URL(n.state[Ze]??location.href),c=n.state[J],f=v.url?Rt(location)===Rt(v.url):!1;if(c===T&&(be||f)){i!==U.state&&(U.state=i),t(o),V[R]=Dt(),s&&scrollTo(s.x,s.y),R=r;return}const p=r-R;await K({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=r,T=c},block:()=>{history.go(-p)},nav_token:F})}else if(!H){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[G]:++R,[J]:T},"",location.href)):k.hash&&v.url.hash===location.hash&&K({type:"goto",url:xe(v.url)})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){v.url=U.url=n,$.page.set(Wt(U)),$.page.notify()}}async function Nn(t,{status:e=200,error:n,node_ids:a,params:r,route:s,server_route:i,data:o,form:c}){Gt=!0;const f=new URL(location.href);let u;({params:r={},route:s={id:null}}=await kt(f,!1)||{}),u=Vt.find(({id:l})=>l===s.id);let p,y=!0;try{const l=a.map(async(h,d)=>{const w=o[d];return w!=null&&w.uses&&(w.uses=Te(w.uses)),Ht({loader:k.nodes[h],url:f,params:r,route:s,parent:async()=>{const S={};for(let I=0;I<d;I+=1)Object.assign(S,(await l[I]).data);return S},server_data_node:Kt(w)})}),m=await Promise.all(l);if(u){const h=u.layouts;for(let d=0;d<h.length;d++)h[d]||m.splice(d,0,void 0)}p=wt({url:f,params:r,branch:m,status:e,error:n,form:c,route:u??null})}catch(l){if(l instanceof jt){await q(new URL(l.location,location.href));return}p=await At({status:ht(l),error:await M(l,{url:f,params:r,route:s}),url:f,route:s}),t.textContent="",y=!1}p.props.page&&(p.props.page.state={}),Ee(p,t,y)}async function Le(t,e){var s;const n=new URL(t);n.pathname=_n(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(hn,"1"),n.searchParams.append(dn,e.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new vt(r.status,i)}return new Promise(async i=>{var y;const o=new Map,c=r.body.getReader(),f=new TextDecoder;function u(l){return ln(l,{...k.decoders,Promise:m=>new Promise((h,d)=>{o.set(m,{fulfil:h,reject:d})})})}let p="";for(;;){const{done:l,value:m}=await c.read();if(l&&!p)break;for(p+=!m&&p?`
`:f.decode(m,{stream:!0});;){const h=p.indexOf(`
`);if(h===-1)break;const d=JSON.parse(p.slice(0,h));if(p=p.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(y=d.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=Te(w.uses),w.data=u(w.data))}),i(d);else if(d.type==="chunk"){const{id:w,data:S,error:I}=d,g=o.get(w);o.delete(w),I?g.reject(u(I)):g.fulfil(u(S))}}}})}function Te(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function On(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function Pe(t,e,n,a){var c,f;let r,s;const i=new Promise((u,p)=>{r=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((f=e==null?void 0:e.route)==null?void 0:f.id)??null},url:n},willUnload:!e,type:a,complete:i},fulfil:r,reject:s}}function Wt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function xe(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{qn as a,P as b,Mn as c,Pn as g,Fn as l,U as p,$ as s};
