var Yn=Array.isArray,Wt=Array.prototype.indexOf,Hn=Array.from,jn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Bn=Object.prototype,Un=Array.prototype,tn=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const B=()=>{};function Gn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,mt=4,X=8,it=16,I=32,Y=64,G=128,w=256,z=512,v=1024,x=2048,D=4096,C=8192,tt=16384,nn=32768,At=65536,zn=1<<17,rn=1<<19,bt=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function It(t){return t===this.v}function Rt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Zn(t,n){return t!==n}function xt(t){return!Rt(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let H=!1;function tr(){H=!0}const nr=1,rr=2,er=4,ar=8,sr=16,lr=1,ur=2,or=4,fr=8,ir=16,_r=1,cr=2,vr=4,pr=1,hr=2,fn="[",_n="[!",cn="]",Ot={},dr=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Dt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let f=null;function Et(t){f=t}function Er(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},H&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function wr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=c,e=u;n.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];J(s.effect),Z(s.reaction),Yt(s.fn)}}finally{J(r),Z(e)}}f=n.p,n.m=!0}return{}}function nt(){return!H||f!==null&&f.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return r}function yr(t){return Nt(_t(t))}function vn(t,n=!1){var e;const r=_t(t);return n||(r.equals=xt),H&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function gr(t,n=!1){return Nt(vn(t,n))}function Nt(t){return u!==null&&!y&&(u.f&g)!==0&&(A===null?Rn([t]):A.push(t)),t}function pn(t,n){return u!==null&&!y&&nt()&&(u.f&(g|it))!==0&&(A===null||!A.includes(t))&&on(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),kt(t,x),nt()&&c!==null&&(c.f&v)!==0&&(c.f&(I|Y))===0&&(b===null?xn([t]):b.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),a=r.length,s=0;s<a;s++){var l=r[s],o=l.f;(o&x)===0&&(!e&&l===c||(m(l,n),(o&(v|w))!==0&&((o&g)!==0?kt(l,D):at(l))))}}let O=!1;function Tr(t){O=t}let T;function M(t){if(t===null)throw St(),Ot;return T=t}function mr(){return M(N(T))}function Ar(t){if(O){if(N(T)!==null)throw St(),Ot;T=t}}function br(t=1){if(O){for(var n=t,r=T;n--;)r=N(r);T=r}}function Ir(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=N(n);n.remove(),n=e}}var wt,dn,Ct,Pt;function Rr(){if(wt===void 0){wt=window,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ct=ht(n,"firstChild").get,Pt=ht(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function ut(t){return Ct.call(t)}function N(t){return Pt.call(t)}function xr(t,n){if(!O)return ut(t);var r=ut(T);if(r===null)r=T.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function Or(t,n){if(!O){var r=ut(t);return r instanceof Comment&&r.data===""?N(r):r}return T}function Sr(t,n=1,r=!1){let e=O?T:t;for(var a;n--;)a=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=lt();return e===null?a==null||a.after(l):e.before(l),M(l),l}return M(e),e}function Dr(t){t.textContent=""}function Ft(t){var n=g|x,r=u!==null&&(u.f&g)!==0?u:null;return c===null||r!==null&&(r.f&w)!==0?n|=w:c.f|=bt,{ctx:f,deps:null,effects:null,equals:It,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??c}}function Nr(t){const n=Ft(t);return n.equals=xt,n}function Lt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function En(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function wn(t){var n,r=c;J(En(t));try{Lt(t),n=Zt(t)}finally{J(r)}return n}function Mt(t){var n=wn(t),r=(R||(t.f&w)!==0)&&t.deps!==null?D:v;m(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function qt(t){c===null&&u===null&&sn(),u!==null&&(u.f&w)!==0&&c===null&&an(),vt&&en()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var a=(t&Y)!==0,s=c,l={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r)try{et(l),l.f|=nn}catch(i){throw S(l),i}else n!==null&&at(l);var o=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(bt|G))===0;if(!o&&!a&&e&&(s!==null&&yn(l,s),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(l)}return l}function kr(t){const n=P(X,null,!1);return m(n,v),n.teardown=t,n}function gn(t){qt();var n=c!==null&&(c.f&I)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:c,reaction:u})}else{var e=Yt(t);return e}}function Cr(t){return qt(),ct(t)}function Pr(t){const n=P(Y,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Yt(t){return P(mt,t,!1)}function Fr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ct(()=>{t(),!e.ran&&(e.ran=!0,pn(r.l.r2,!0),st(n))})}function Lr(){var t=f;ct(()=>{if(Qt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&m(r,D),F(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function ct(t){return P(X,t,!0)}function Mr(t,n=[],r=Ft){const e=n.map(r);return Tn(()=>t(...e.map(Qt)))}function Tn(t,n=0){return P(X|it|n,t,!0)}function qr(t,n=!0){return P(X|I,t,!0,n)}function Ht(t){var n=t.teardown;if(n!==null){const r=vt,e=u;gt(!0),Z(null);try{n.call(null)}finally{gt(r),Z(e)}}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&I)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&rn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:N(e);e.remove(),e=s}r=!0}jt(t,n&&!r),W(t,0),m(t,tt);var l=t.transitions;if(l!==null)for(const _ of l)_.stop();Ht(t);var o=t.parent;o!==null&&o.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];Ut(t,r,!0),bn(r,()=>{S(t),n&&n()})}function bn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Ut(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&At)!==0||(e.f&I)!==0;Ut(e,n,s?r:!1),e=a}}}function Yr(t){Vt(t,!0)}function Vt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&v)===0&&(t.f^=v),F(t)&&(m(t,x),at(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&At)!==0||(r.f&I)!==0;Vt(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let q=[],ot=[];function Gt(){var t=q;q=[],Tt(t)}function In(){var t=ot;ot=[],Tt(t)}function Hr(t){q.length===0&&queueMicrotask(Gt),q.push(t)}function yt(){q.length>0&&Gt(),ot.length>0&&In()}let U=!1,K=!1,$=null,V=!1,vt=!1;function gt(t){vt=t}let L=[];let u=null,y=!1;function Z(t){u=t}let c=null;function J(t){c=t}let A=null;function Rn(t){A=t}let p=null,E=0,b=null;function xn(t){b=t}let zt=1,Q=0,R=!1;function Kt(){return++zt}function F(t){var h;var n=t.f;if((n&x)!==0)return!0;if((n&D)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var a,s,l=(n&z)!==0,o=e&&c!==null&&!R,_=r.length;if(l||o){var i=t,j=i.parent;for(a=0;a<_;a++)s=r[a],(l||!((h=s==null?void 0:s.reactions)!=null&&h.includes(i)))&&(s.reactions??(s.reactions=[])).push(i);l&&(i.f^=z),o&&j!==null&&(j.f&w)===0&&(i.f^=w)}for(a=0;a<_;a++)if(s=r[a],F(s)&&Mt(s),s.wv>t.wv)return!0}(!e||c!==null&&!R)&&m(t,v)}return!1}function On(t,n){for(var r=n;r!==null;){if((r.f&G)!==0)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function Sn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),Sn(n))throw t;return}r!==null&&(U=!0);{On(t,n);return}}function $t(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var s=e[a];(s.f&g)!==0?$t(s,n,!1):n===s&&(r?m(s,x):(s.f&v)!==0&&m(s,D),at(s))}}function Zt(t){var pt;var n=p,r=E,e=b,a=u,s=R,l=A,o=f,_=y,i=t.f;p=null,E=0,b=null,R=(i&w)!==0&&(y||!V||u===null),u=(i&(I|Y))===0?t:null,A=null,Et(t.ctx),y=!1,Q++;try{var j=(0,t.fn)(),h=t.deps;if(p!==null){var d;if(W(t,E),h!==null&&E>0)for(h.length=E+p.length,d=0;d<p.length;d++)h[E+d]=p[d];else t.deps=h=p;if(!R)for(d=E;d<h.length;d++)((pt=h[d]).reactions??(pt.reactions=[])).push(t)}else h!==null&&E<h.length&&(W(t,E),h.length=E);if(nt()&&b!==null&&!y&&h!==null&&(t.f&(g|D|x))===0)for(d=0;d<b.length;d++)$t(b[d],t);return a!==null&&Q++,j}finally{p=n,E=r,b=e,u=a,R=s,A=l,Et(o),y=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=Wt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&g)!==0&&(p===null||!p.includes(n))&&(m(n,D),(n.f&(w|z))===0&&(n.f^=z),Lt(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function et(t){var n=t.f;if((n&tt)===0){m(t,v);var r=c,e=f,a=V;c=t,V=!0;try{(n&it)!==0?mn(t):jt(t),Ht(t);var s=Zt(t);t.teardown=typeof s=="function"?s:null,t.wv=zt;var l=t.deps,o}catch(_){rt(_,t,r,e||t.ctx)}finally{V=a,c=r}}}function Nn(){try{ln()}catch(t){if($!==null)rt(t,$,null);else throw t}}function Jt(){try{for(var t=0;L.length>0;){t++>1e3&&Nn();var n=L,r=n.length;L=[];for(var e=0;e<r;e++){var a=n[e];(a.f&v)===0&&(a.f^=v);var s=Cn(a);kn(s)}}}finally{K=!1,$=null}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(tt|C))===0)try{F(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(a){rt(a,e,null,e.ctx)}}}function at(t){K||(K=!0,queueMicrotask(Jt));for(var n=$=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Y|I))!==0){if((r&v)===0)return;n.f^=v}}L.push(n)}function Cn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,a=(e&I)!==0,s=a&&(e&v)!==0;if(!s&&(e&C)===0){if((e&mt)!==0)n.push(r);else if(a)r.f^=v;else{var l=u;try{u=r,F(r)&&et(r)}catch(i){rt(i,r,null,r.ctx)}finally{u=l}}var o=r.first;if(o!==null){r=o;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Pn(t){var n;for(yt();L.length>0;)K=!0,Jt(),yt();return n}async function jr(){await Promise.resolve(),Pn()}function Qt(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){A!==null&&A.includes(t)&&un();var e=u.deps;t.rv<Q&&(t.rv=Q,p===null&&e!==null&&e[E]===t?E++:p===null?p=[t]:(!R||!p.includes(t))&&p.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,s=a.parent;s!==null&&(s.f&w)===0&&(a.f^=w)}return r&&(a=t,F(a)&&Mt(a)),t.v}function st(t){var n=y;try{return y=!0,t()}finally{y=n}}const Fn=-7169;function m(t,n){t.f=t.f&Fn|n}function Br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=tn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let a in e){const s=e[a].get;if(s)try{s.call(t)}catch{}}}}}function Ln(t,n,r){if(t==null)return n(void 0),B;const e=st(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}const k=[];function Ur(t,n=B){let r=null;const e=new Set;function a(o){if(Rt(t,o)&&(t=o,r)){const _=!k.length;for(const i of e)i[1](),k.push(i,t);if(_){for(let i=0;i<k.length;i+=2)k[i][0](k[i+1]);k.length=0}}}function s(o){a(o(t))}function l(o,_=B){const i=[o,_];return e.add(i),e.size===1&&(r=n(a,s)||B),o(t),()=>{e.delete(i),e.size===0&&r&&(r(),r=null)}}return{set:a,update:s,subscribe:l}}function Vr(t){let n;return Ln(t,r=>n=r)(),n}function Mn(t){f===null&&Dt(),H&&f.l!==null?qn(f).m.push(t):gn(()=>{const n=st(t);if(typeof n=="function")return n})}function Gr(t){f===null&&Dt(),Mn(()=>()=>st(t))}function qn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{Vr as $,nr as A,hn as B,rr as C,vn as D,At as E,_t as F,Yn as G,_n as H,C as I,ar as J,Ut as K,Dr as L,bn as M,S as N,sr as O,N as P,Gr as Q,Mn as R,Ur as S,jr as T,dr as U,Yt as V,ct as W,st as X,dt as Y,B as Z,Ln as _,wr as a,kr as a0,jn as a1,pn as a2,Fr as a3,Lr as a4,gr as a5,br as a6,Bn as a7,Un as a8,Xn as a9,J as aA,u as aB,dn as aC,pr as aD,hr as aE,Rr as aF,fn as aG,Ot as aH,St as aI,Jn as aJ,Pr as aK,nt as aL,Zn as aM,Rt as aN,it as aO,nn as aP,vr as aQ,_r as aR,cr as aS,Vn as aT,ht as aa,Wn as ab,tn as ac,zn as ad,Kn as ae,H as af,ur as ag,Ft as ah,fr as ai,Qn as aj,or as ak,xt as al,ir as am,lr as an,f as ao,Cr as ap,gn as aq,Tt as ar,Gn as as,Br as at,tr as au,Xt as av,$n as aw,Pn as ax,yr as ay,Z as az,mr as b,xr as c,Tn as d,Ir as e,Or as f,M as g,O as h,Tr as i,Yr as j,qr as k,An as l,T as m,lt as n,er as o,Er as p,ut as q,Ar as r,Sr as s,Mr as t,Qt as u,Nr as v,cn as w,Hn as x,Hr as y,c as z};
