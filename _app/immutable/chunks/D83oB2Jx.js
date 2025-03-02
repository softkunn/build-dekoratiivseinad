var Yn=Array.isArray,Wt=Array.prototype.indexOf,jn=Array.from,Bn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Un=Array.prototype,tn=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const H=()=>{};function Gn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,mt=4,X=8,it=16,I=32,Y=64,G=128,w=256,z=512,v=1024,R=2048,D=4096,N=8192,tt=16384,nn=32768,At=65536,zn=1<<17,rn=1<<19,bt=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function It(t){return t===this.v}function xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Zn(t,n){return t!==n}function Rt(t){return!xt(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let j=!1;function tr(){j=!0}const nr=1,rr=2,er=16,sr=1,lr=2,ar=4,ur=8,or=16,fr=1,ir=2,_r=4,cr=1,vr=2,fn="[",_n="[!",cn="]",Ot={},pr=Symbol();function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function St(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let f=null;function Et(t){f=t}function hr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},j&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function dr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=c,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),Z(l.reaction),Yt(l.fn)}}finally{J(r),Z(e)}}f=n.p,n.m=!0}return{}}function nt(){return!j||f!==null&&f.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return r}function Er(t){return Nt(_t(t))}function vn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),j&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function wr(t,n=!1){return Nt(vn(t,n))}function Nt(t){return u!==null&&!y&&(u.f&g)!==0&&(m===null?xn([t]):m.push(t)),t}function pn(t,n){return u!==null&&!y&&nt()&&(u.f&(g|it))!==0&&(m===null||!m.includes(t))&&on(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),kt(t,R),nt()&&c!==null&&(c.f&v)!==0&&(c.f&(I|Y))===0&&(A===null?Rn([t]):A.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),s=r.length,l=0;l<s;l++){var a=r[l],o=a.f;(o&R)===0&&(!e&&a===c||(T(a,n),(o&(v|w))!==0&&((o&g)!==0?kt(a,D):st(a))))}}let k=!1;function yr(t){k=t}let b;function M(t){if(t===null)throw Dt(),Ot;return b=t}function gr(){return M(C(b))}function Tr(t){if(k){if(C(b)!==null)throw Dt(),Ot;b=t}}function mr(){for(var t=0,n=b;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=C(n);n.remove(),n=e}}var wt,dn,Ct,Pt;function Ar(){if(wt===void 0){wt=window,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ct=ht(n,"firstChild").get,Pt=ht(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function ut(t){return Ct.call(t)}function C(t){return Pt.call(t)}function br(t,n){if(!k)return ut(t);var r=ut(b);if(r===null)r=b.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),M(e),e}return M(r),r}function Ir(t,n){if(!k){var r=ut(t);return r instanceof Comment&&r.data===""?C(r):r}return b}function xr(t,n=1,r=!1){let e=k?b:t;for(var s;n--;)s=e,e=C(e);if(!k)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=at();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Rr(t){t.textContent=""}function Ft(t){var n=g|R,r=u!==null&&(u.f&g)!==0?u:null;return c===null||r!==null&&(r.f&w)!==0?n|=w:c.f|=bt,{ctx:f,deps:null,effects:null,equals:It,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??c}}function Or(t){const n=Ft(t);return n.equals=Rt,n}function Lt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function En(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function wn(t){var n,r=c;J(En(t));try{Lt(t),n=Zt(t)}finally{J(r)}return n}function Mt(t){var n=wn(t),r=(x||(t.f&w)!==0)&&t.deps!==null?D:v;T(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function qt(t){c===null&&u===null&&ln(),u!==null&&(u.f&w)!==0&&c===null&&sn(),vt&&en()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&Y)!==0,l=c,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{et(a),a.f|=nn}catch(i){throw O(a),i}else n!==null&&st(a);var o=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(bt|G))===0;if(!o&&!s&&e&&(l!==null&&yn(a,l),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(a)}return a}function Dr(t){const n=P(X,null,!1);return T(n,v),n.teardown=t,n}function gn(t){qt();var n=c!==null&&(c.f&I)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:c,reaction:u})}else{var e=Yt(t);return e}}function Sr(t){return qt(),ct(t)}function Nr(t){const n=P(Y,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Yt(t){return P(mt,t,!1)}function kr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ct(()=>{t(),!e.ran&&(e.ran=!0,pn(r.l.r2,!0),lt(n))})}function Cr(){var t=f;ct(()=>{if(Qt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&T(r,D),F(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function ct(t){return P(X,t,!0)}function Pr(t,n=[],r=Ft){const e=n.map(r);return Tn(()=>t(...e.map(Qt)))}function Tn(t,n=0){return P(X|it|n,t,!0)}function Fr(t,n=!0){return P(X|I,t,!0,n)}function jt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;gt(!0),Z(null);try{n.call(null)}finally{gt(r),Z(e)}}}function Bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&I)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&rn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Bt(t,n&&!r),W(t,0),T(t,tt);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();jt(t);var o=t.parent;o!==null&&o.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];Ut(t,r,!0),bn(r,()=>{O(t),n&&n()})}function bn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ut(t,n,r){if((t.f&N)===0){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&I)!==0;Ut(e,n,l?r:!1),e=s}}}function Lr(t){Vt(t,!0)}function Vt(t,n){if((t.f&N)!==0){t.f^=N,(t.f&v)===0&&(t.f^=v),F(t)&&(T(t,R),st(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&I)!==0;Vt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let q=[],ot=[];function Gt(){var t=q;q=[],Tt(t)}function In(){var t=ot;ot=[],Tt(t)}function Mr(t){q.length===0&&queueMicrotask(Gt),q.push(t)}function yt(){q.length>0&&Gt(),ot.length>0&&In()}let U=!1,K=!1,$=null,V=!1,vt=!1;function gt(t){vt=t}let L=[];let u=null,y=!1;function Z(t){u=t}let c=null;function J(t){c=t}let m=null;function xn(t){m=t}let p=null,E=0,A=null;function Rn(t){A=t}let zt=1,Q=0,x=!1;function Kt(){return++zt}function F(t){var h;var n=t.f;if((n&R)!==0)return!0;if((n&D)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var s,l,a=(n&z)!==0,o=e&&c!==null&&!x,_=r.length;if(a||o){var i=t,B=i.parent;for(s=0;s<_;s++)l=r[s],(a||!((h=l==null?void 0:l.reactions)!=null&&h.includes(i)))&&(l.reactions??(l.reactions=[])).push(i);a&&(i.f^=z),o&&B!==null&&(B.f&w)===0&&(i.f^=w)}for(s=0;s<_;s++)if(l=r[s],F(l)&&Mt(l),l.wv>t.wv)return!0}(!e||c!==null&&!x)&&T(t,v)}return!1}function On(t,n){for(var r=n;r!==null;){if((r.f&G)!==0)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function Dn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),Dn(n))throw t;return}r!==null&&(U=!0);{On(t,n);return}}function $t(t,n,r=!0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];(l.f&g)!==0?$t(l,n,!1):n===l&&(r?T(l,R):(l.f&v)!==0&&T(l,D),st(l))}}function Zt(t){var pt;var n=p,r=E,e=A,s=u,l=x,a=m,o=f,_=y,i=t.f;p=null,E=0,A=null,x=(i&w)!==0&&(y||!V||u===null),u=(i&(I|Y))===0?t:null,m=null,Et(t.ctx),y=!1,Q++;try{var B=(0,t.fn)(),h=t.deps;if(p!==null){var d;if(W(t,E),h!==null&&E>0)for(h.length=E+p.length,d=0;d<p.length;d++)h[E+d]=p[d];else t.deps=h=p;if(!x)for(d=E;d<h.length;d++)((pt=h[d]).reactions??(pt.reactions=[])).push(t)}else h!==null&&E<h.length&&(W(t,E),h.length=E);if(nt()&&A!==null&&!y&&h!==null&&(t.f&(g|D|R))===0)for(d=0;d<A.length;d++)$t(A[d],t);return s!==null&&Q++,B}finally{p=n,E=r,A=e,u=s,x=l,m=a,Et(o),y=_}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Wt.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&(n.f&g)!==0&&(p===null||!p.includes(n))&&(T(n,D),(n.f&(w|z))===0&&(n.f^=z),Lt(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function et(t){var n=t.f;if((n&tt)===0){T(t,v);var r=c,e=f,s=V;c=t,V=!0;try{(n&it)!==0?mn(t):Bt(t),jt(t);var l=Zt(t);t.teardown=typeof l=="function"?l:null,t.wv=zt;var a=t.deps,o}catch(_){rt(_,t,r,e||t.ctx)}finally{V=s,c=r}}}function Nn(){try{an()}catch(t){if($!==null)rt(t,$,null);else throw t}}function Jt(){try{for(var t=0;L.length>0;){t++>1e3&&Nn();var n=L,r=n.length;L=[];for(var e=0;e<r;e++){var s=n[e];(s.f&v)===0&&(s.f^=v);var l=Cn(s);kn(l)}}}finally{K=!1,$=null}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(tt|N))===0)try{F(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(s){rt(s,e,null,e.ctx)}}}function st(t){K||(K=!0,queueMicrotask(Jt));for(var n=$=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Y|I))!==0){if((r&v)===0)return;n.f^=v}}L.push(n)}function Cn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,s=(e&I)!==0,l=s&&(e&v)!==0;if(!l&&(e&N)===0){if((e&mt)!==0)n.push(r);else if(s)r.f^=v;else{var a=u;try{u=r,F(r)&&et(r)}catch(i){rt(i,r,null,r.ctx)}finally{u=a}}var o=r.first;if(o!==null){r=o;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Pn(t){var n;for(yt();L.length>0;)K=!0,Jt(),yt();return n}async function qr(){await Promise.resolve(),Pn()}function Qt(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){m!==null&&m.includes(t)&&un();var e=u.deps;t.rv<Q&&(t.rv=Q,p===null&&e!==null&&e[E]===t?E++:p===null?p=[t]:(!x||!p.includes(t))&&p.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,l=s.parent;l!==null&&(l.f&w)===0&&(s.f^=w)}return r&&(s=t,F(s)&&Mt(s)),t.v}function lt(t){var n=y;try{return y=!0,t()}finally{y=n}}const Fn=-7169;function T(t,n){t.f=t.f&Fn|n}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=tn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Ln(t,n,r){if(t==null)return n(void 0),H;const e=lt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}const S=[];function jr(t,n=H){let r=null;const e=new Set;function s(o){if(xt(t,o)&&(t=o,r)){const _=!S.length;for(const i of e)i[1](),S.push(i,t);if(_){for(let i=0;i<S.length;i+=2)S[i][0](S[i+1]);S.length=0}}}function l(o){s(o(t))}function a(o,_=H){const i=[o,_];return e.add(i),e.size===1&&(r=n(s,l)||H),o(t),()=>{e.delete(i),e.size===0&&r&&(r(),r=null)}}return{set:s,update:l,subscribe:a}}function Br(t){let n;return Ln(t,r=>n=r)(),n}function Mn(t){f===null&&St(),j&&f.l!==null?qn(f).m.push(t):gn(()=>{const n=lt(t);if(typeof n=="function")return n})}function Hr(t){f===null&&St(),Mn(()=>()=>lt(t))}function qn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{yr as $,f as A,Sr as B,gn as C,Tt as D,Gn as E,Yr as F,Ft as G,tr as H,Z as I,J,u as K,c as L,Yn as M,ut as N,dn as O,vr as P,k as Q,b as R,dt as S,cr as T,gr as U,at as V,M as W,Ar as X,fn as Y,C as Z,Ot as _,dr as a,cn as a0,Dt as a1,Jn as a2,Rr as a3,jn as a4,Nr as a5,Fr as a6,Hn as a7,Un as a8,_t as a9,xt as aA,N as aB,hn as aC,rr as aD,Ut as aE,bn as aF,O as aG,nr as aH,er as aI,$n as aJ,Xt as aK,it as aL,nn as aM,_r as aN,fr as aO,ir as aP,Vn as aQ,Xn as aa,pr as ab,ht as ac,Wn as ad,tn as ae,Tn as af,At as ag,_n as ah,mr as ai,Lr as aj,An as ak,Qn as al,zn as am,Or as an,ar as ao,Rt as ap,ur as aq,Kn as ar,j as as,lr as at,sr as au,or as av,Pn as aw,Er as ax,nt as ay,Zn as az,Mn as b,br as c,qr as d,Yt as e,Ir as f,ct as g,Dr as h,Bn as i,Ln as j,Br as k,Qt as l,vn as m,H as n,Hr as o,hr as p,Mr as q,Tr as r,xr as s,Pr as t,lt as u,pn as v,jr as w,kr as x,Cr as y,wr as z};
