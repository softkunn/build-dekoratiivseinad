import{d as xa,w as Oa,t as U,e as G,a as P,s as K}from"../chunks/2VpvQ7Pa.js";import{i as ea}from"../chunks/CnmuRwVA.js";import{ay as ka,az as La,aA as Ca,af as ha,Q as T,U as ra,ak as ya,a6 as ta,R as M,ab as Ra,V as Sa,W as Y,N as Ma,j as I,an as sa,ah as za,ai as la,$ as J,a0 as Da,aj as wa,aB as Q,a4 as ma,L as V,aC as Fa,m as qa,a9 as fa,aD as Ha,aE as Pa,a3 as Ua,aF as Ba,aG as Ka,aH as Ga,aI as Va,Z as Xa,M as Ya,aJ as Ja,ae as Qa,aK as Wa,ag as Za,aL as ja,aM as ae,e as ee,u as re,aN as te,aO as se,aP as ne,aQ as ie,q as le,n as F,I as oa,J as ca,K as fe,w as oe,p as na,x as j,y as ba,t as X,a as ia,v as C,z as D,c as N,s as z,r as E,f as ce}from"../chunks/1l3Wx0sa.js";import{b as q,g as ue,a as ve}from"../chunks/DuX2rUqK.js";import{p as de}from"../chunks/Cp51SYTj.js";import{a as Ia,s as $a}from"../chunks/4kmcwz3t.js";import{p as Ea,t as W}from"../chunks/BoiFG2pf.js";function _e(e,a,r){T&&ra();var t=e,n=Ra,s,i=ka()?La:Ca;ha(()=>{i(n,n=a())&&(s&&ya(s),s=ta(()=>r(t)))}),T&&(t=M)}function ge(e,a){return a}function pe(e,a,r,t){for(var n=[],s=a.length,i=0;i<s;i++)Pa(a[i].e,n,!0);var d=s>0&&n.length===0&&r!==null;if(d){var y=r.parentNode;Ua(y),y.append(r),t.clear(),k(e,a[0].prev,a[s-1].next)}Ba(n,()=>{for(var g=0;g<s;g++){var l=a[g];d||(t.delete(l.k),k(e,l.prev,l.next)),Ka(l.e,!d)}})}function he(e,a,r,t,n,s=null){var i=e,d={flags:a,items:new Map,first:null};{var y=e;i=T?Y(Ma(y)):y.appendChild(Sa())}T&&ra();var g=null,l=!1,w=sa(()=>{var f=r();return Ya(f)?f:f==null?[]:ma(f)});ha(()=>{var f=I(w),o=f.length;if(l&&o===0)return;l=o===0;let u=!1;if(T){var p=i.data===za;p!==(o===0)&&(i=la(),Y(i),J(!1),u=!0)}if(T){for(var v=null,c,_=0;_<o;_++){if(M.nodeType===8&&M.data===Da){i=M,u=!0,J(!1);break}var h=f[_],b=t(h,_);c=Na(M,d,v,null,h,b,_,n,a,r),d.items.set(b,c),v=c}o>0&&Y(la())}T||ye(f,d,i,n,a,t,r),s!==null&&(o===0?g?wa(g):g=ta(()=>s(i)):g!==null&&ya(g,()=>{g=null})),u&&J(!0),I(w)}),T&&(i=M)}function ye(e,a,r,t,n,s,i){var d=e.length,y=a.items,g=a.first,l=g,w,f=null,o=[],u=[],p,v,c,_;for(_=0;_<d;_+=1){if(p=e[_],v=s(p,_),c=y.get(v),c===void 0){var h=l?l.e.nodes_start:r;f=Na(h,a,f,f===null?a.first:f.next,p,v,_,t,n,i),y.set(v,f),o=[],u=[],l=f.next;continue}if(we(c,p,_),(c.e.f&Q)!==0&&wa(c.e),c!==l){if(w!==void 0&&w.has(c)){if(o.length<u.length){var b=u[0],m;f=b.prev;var $=o[0],x=o[o.length-1];for(m=0;m<o.length;m+=1)ua(o[m],b,r);for(m=0;m<u.length;m+=1)w.delete(u[m]);k(a,$.prev,x.next),k(a,f,$),k(a,x,b),l=b,f=x,_-=1,o=[],u=[]}else w.delete(c),ua(c,l,r),k(a,c.prev,c.next),k(a,c,f===null?a.first:f.next),k(a,f,c),f=c;continue}for(o=[],u=[];l!==null&&l.k!==v;)(l.e.f&Q)===0&&(w??(w=new Set)).add(l),u.push(l),l=l.next;if(l===null)continue;c=l}o.push(c),f=c,l=c.next}if(l!==null||w!==void 0){for(var A=w===void 0?[]:ma(w);l!==null;)(l.e.f&Q)===0&&A.push(l),l=l.next;var R=A.length;if(R>0){var Aa=d===0?r:null;pe(a,A,Aa,y)}}V.first=a.first&&a.first.e,V.last=f&&f.e}function we(e,a,r,t){Fa(e.v,a),e.i=r}function Na(e,a,r,t,n,s,i,d,y,g){var l=(y&Ga)!==0,w=(y&Va)===0,f=l?w?qa(n):fa(n):n,o=(y&Ha)===0?i:fa(i),u={i:o,v:f,k:s,a:null,e:null,prev:r,next:t};try{return u.e=ta(()=>d(e,f,o,g),T),u.e.prev=r&&r.e,u.e.next=t&&t.e,r===null?a.first=u:(r.next=u,r.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{}}function ua(e,a,r){for(var t=e.next?e.next.e.nodes_start:r,n=a?a.e.nodes_start:r,s=e.e.nodes_start;s!==t;){var i=Xa(s);n.before(s),s=i}}function k(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function me(e,a,r,t,n){var d;T&&ra();var s=(d=a.$$slots)==null?void 0:d[r],i=!1;s===!0&&(s=a.children,i=!0),s===void 0||s(e,i?()=>t:t)}const va=[...` 	
\r\f \v\uFEFF`];function be(e,a,r){var t=e==null?"":""+e;if(r){for(var n in r)if(r[n])t=t?t+" "+n:n;else if(t.length)for(var s=n.length,i=0;(i=t.indexOf(n,i))>=0;){var d=i+s;(i===0||va.includes(t[i-1]))&&(d===t.length||va.includes(t[d]))?t=(i===0?"":t.substring(0,i))+t.substring(d+1):i=d}}return t===""?null:t}function H(e,a,r,t,n,s){var i=e.__className;if(T||i!==r){var d=be(r,t,s);(!T||d!==e.getAttribute("class"))&&(d==null?e.removeAttribute("class"):e.className=d),e.__className=r}else if(s)for(var y in s){var g=!!s[y];(n==null||g!==!!n[y])&&e.classList.toggle(y,g)}return s}function L(e,a,r,t){var n=e.__attributes??(e.__attributes={});T&&(n[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||n[a]!==(n[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Ja]=r),r==null?e.removeAttribute(a):typeof r!="string"&&Ie(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var da=new Map;function Ie(e){var a=da.get(e.nodeName);if(a)return a;da.set(e.nodeName,a=[]);for(var r,t=e,n=Element.prototype;n!==t;){r=Wa(t);for(var s in r)r[s].set&&a.push(s);t=Qa(t)}return a}const $e=()=>performance.now(),O={tick:e=>requestAnimationFrame(e),now:()=>$e(),tasks:new Set};function Ta(){const e=O.now();O.tasks.forEach(a=>{a.c(e)||(O.tasks.delete(a),a.f())}),O.tasks.size!==0&&O.tick(Ta)}function Ee(e){let a;return O.tasks.size===0&&O.tick(Ta),{promise:new Promise(r=>{O.tasks.add(a={c:e,f:r})}),abort(){O.tasks.delete(a)}}}function B(e,a){Oa(()=>{e.dispatchEvent(new CustomEvent(a))})}function Ne(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const a=e.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function _a(e){const a={},r=e.split(";");for(const t of r){const[n,s]=t.split(":");if(!n||s===void 0)break;const i=Ne(n.trim());a[i]=s.trim()}return a}const Te=e=>e;function ga(e,a,r,t){var n=(e&se)!==0,s=(e&ne)!==0,i=n&&s,d=(e&te)!==0,y=i?"both":n?"in":"out",g,l=a.inert,w=a.style.overflow,f,o;function u(){var h=fe,b=V;oa(null),ca(null);try{return g??(g=r()(a,(t==null?void 0:t())??{},{direction:y}))}finally{oa(h),ca(b)}}var p={is_global:d,in(){var h;if(a.inert=l,!n){o==null||o.abort(),(h=o==null?void 0:o.reset)==null||h.call(o);return}s||f==null||f.abort(),B(a,"introstart"),f=aa(a,u(),o,1,()=>{B(a,"introend"),f==null||f.abort(),f=g=void 0,a.style.overflow=w})},out(h){if(!s){h==null||h(),g=void 0;return}a.inert=!0,B(a,"outrostart"),o=aa(a,u(),f,0,()=>{B(a,"outroend"),h==null||h()})},stop:()=>{f==null||f.abort(),o==null||o.abort()}},v=V;if((v.transitions??(v.transitions=[])).push(p),n&&xa){var c=d;if(!c){for(var _=v.parent;_&&(_.f&Za)!==0;)for(;(_=_.parent)&&(_.f&ja)===0;);c=!_||(_.f&ae)!==0}c&&ee(()=>{re(()=>p.in())})}}function aa(e,a,r,t,n){var s=t===1;if(ie(a)){var i,d=!1;return le(()=>{if(!d){var v=a({direction:s?"in":"out"});i=aa(e,v,r,t,n)}}),{abort:()=>{d=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(r==null||r.deactivate(),!(a!=null&&a.duration))return n(),{abort:F,deactivate:F,reset:F,t:()=>t};const{delay:y=0,css:g,tick:l,easing:w=Te}=a;var f=[];if(s&&r===void 0&&(l&&l(0,1),g)){var o=_a(g(0,1));f.push(o,o)}var u=()=>1-t,p=e.animate(f,{duration:y});return p.onfinish=()=>{var v=(r==null?void 0:r.t())??1-t;r==null||r.abort();var c=t-v,_=a.duration*Math.abs(c),h=[];if(_>0){var b=!1;if(g)for(var m=Math.ceil(_/16.666666666666668),$=0;$<=m;$+=1){var x=v+c*w($/m),A=_a(g(x,1-x));h.push(A),b||(b=A.overflow==="hidden")}b&&(e.style.overflow="hidden"),u=()=>{var R=p.currentTime;return v+c*w(R/_)},l&&Ee(()=>{if(p.playState!=="running")return!1;var R=u();return l(R,1-R),!0})}p=e.animate(h,{duration:_,fill:"forwards"}),p.onfinish=()=>{u=()=>t,l==null||l(t,1-t),n()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=F)},deactivate:()=>{n=F},reset:()=>{t===0&&(l==null||l(1,0))},t:()=>u()}}const Ae=!0,xe="always";function Oe({url:e}){const a=["et","en","ru"],r=e.pathname.split("/");let t="et";return r[1]==="build-dekoratiivseinad"?t=r[2]:t=r[1],{lang:a.includes(t)?t:"et"}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,load:Oe,prerender:Ae,trailingSlash:xe},Symbol.toStringTag,{value:"Module"})),S={contacts:"contacts",gallery:"gallery"},pa=oe(0);var ke=U('<li class="svelte-nt0syc"><a class="svelte-nt0syc"><img class="flag-icon svelte-nt0syc"></a></li>'),Le=U('<div class="dropdown svelte-nt0syc"><button class="dropdown-btn svelte-nt0syc"><img class="flag-icon svelte-nt0syc"><span class="arrow svelte-nt0syc"> </span></button> <ul></ul></div>');function Ce(e,a){na(a,!1);const[r,t]=Ia(),n=()=>$a(Ea,"$page",r),s=D();let i=["et","en","ru"];const d={et:"https://flagcdn.com/w40/ee.png",en:"https://flagcdn.com/w40/ms.png",ru:"https://flagcdn.com/w40/ru.png"};function y(h){return h==="et"?`${q}/`:`${q}/${h}/`}let g=D(!1);function l(){C(g,!I(g))}function w(h,b){l(),ue(y(b))}j(()=>n(),()=>{C(s,n().data.lang??"et")}),ba(),ea();var f=Le(),o=N(f),u=N(o),p=z(u),v=N(p,!0);E(p),E(o);var c=z(o,2);let _;he(c,5,()=>i,ge,(h,b)=>{var m=ke(),$=N(m),x=N($);E($),E(m),X(A=>{L($,"href",A),L(x,"src",d[I(b)]),L(x,"alt",I(b))},[()=>y(I(b))],sa),G("click",$,A=>w(A,I(b))),P(h,m)}),E(c),E(f),X(()=>{L(u,"src",d[I(s)]),L(u,"alt",I(s)),K(v,I(g)?" ▼":" ▲"),_=H(c,1,"dropdown-menu svelte-nt0syc",null,_,{open:I(g)})}),G("click",o,l),P(e,f),ia(),t()}var Re=U('<nav class="nav svelte-1e4wzo2"><!> <ul class="nav-inner flex justify-start svelte-1e4wzo2"><li><a> </a></li> <li><a> </a></li> <li><a> </a></li></ul></nav>');function Se(e,a){na(a,!1);const[r,t]=Ia(),n=()=>$a(Ea,"$page",r),s=D(),i=D();j(()=>n(),()=>{C(s,n().data.lang??"et")}),j(()=>I(s),()=>{C(i,I(s)!=="et"?`/${I(s)}`:"")}),ba(),ea();var d=Re(),y=N(d);Ce(y,{});var g=z(y,2),l=N(g),w=N(l);let f;var o=N(w,!0);E(w),E(l);var u=z(l,2),p=N(u);let v;var c=N(p,!0);E(p),E(u);var _=z(u,2),h=N(_);let b;var m=N(h,!0);E(h),E(_),E(g),E(d),X(($,x,A)=>{L(w,"href",`${q??""}${I(i)??""}/`),f=H(w,1,"px-4 py-2 rounded hover:bg-gray-700 svelte-1e4wzo2",null,f,{"is-active":$}),K(o,W[I(s)].home),L(p,"href",`${q??""}${I(i)??""}/${S.gallery}`),v=H(p,1,"px-4 py-2 rounded hover:bg-gray-700 svelte-1e4wzo2",null,v,{"is-active":x}),K(c,W[I(s)].gallery),L(h,"href",`${q??""}${I(i)??""}/${S.contacts}`),b=H(h,1,"px-4 py-2 rounded hover:bg-gray-700 svelte-1e4wzo2",null,b,{"is-active":A}),K(m,W[I(s)].contacts)},[()=>!n().url.pathname.includes(S.gallery)&&!n().url.pathname.includes(S.contacts),()=>n().url.pathname.includes(S.gallery),()=>n().url.pathname.includes(S.contacts)],sa),P(e,d),ia(),t()}function Z(e){const a=e-1;return a*a*a+1}var Me=U("<div><!></div>"),ze=U('<!> <div class="page-switcher"><div class="page-wrapper"><!></div></div>',1);function Ge(e,a){na(a,!1);let r=0;pa.subscribe(p=>{r=p});const t=["home","gallery","contacts"];let n=D(!1),s=D(!1);function i(){C(n,!0),C(s,!1)}function d(){C(s,!1)}ve(({from:p,to:v})=>{if(p&&v){const c=p.url.pathname.split("/"),_=v.url.pathname.split("/"),h=t.findIndex($=>c.includes($));let m=t.findIndex($=>_.includes($))-h;m>0?m=1:m<0&&(m=-1),pa.set(m),m!==0&&C(s,!0)}});function y(p,{duration:v=300}){return{duration:v,css:c=>`
				transform: translateX(${(1-Z(c))*100*r}%);
				opacity: ${Z(c)};
			`}}function g(p,{duration:v=300}){return{duration:v,css:c=>`
				transform: translateX(${(1-Z(c))*-100*r}%);
			`}}ea();var l=ze(),w=ce(l);Se(w,{});var f=z(w,2),o=N(f),u=N(o);_e(u,()=>de.url,p=>{var v=Me();let c;var _=N(v);me(_,a,"default",{}),E(v),X(()=>c=H(v,1,"page-container",null,c,{entering:I(n),leaving:I(s)})),ga(1,v,()=>y,()=>({duration:300})),ga(2,v,()=>g,()=>({duration:300})),G("introstart",v,i),G("outroend",v,d),P(p,v)}),E(o),E(f),P(e,l),ia()}export{Ge as component,Ke as universal};
