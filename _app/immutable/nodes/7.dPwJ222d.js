import{g as O}from"../chunks/DDPg4i4Z.js";import{e as B}from"../chunks/DNSHY1Ls.js";import{t as _,a as p,s as f}from"../chunks/jCb-5fpo.js";import{p as C,t as u,a as G,s as x,c as t,r as a,a9 as q,v as I}from"../chunks/SkWQW7eQ.js";import{e as S,i as T}from"../chunks/BflKyTS-.js";import{s as j}from"../chunks/BVJA58gI.js";import{b as M}from"../chunks/CNjgs_03.js";import{u as N}from"../chunks/BTDRUQU7.js";const P=({params:d})=>{const e=O.find(s=>s.id===d.id);if(e)return{item:e};B(404,"Not found")},R=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));var U=_('<span class="tag"> </span>'),w=_('<div class="gallery-image-container svelte-x40q63"><img loading="lazy" class="gallery-image svelte-x40q63"></div>'),A=_('<main id="gallery-details-page" class="page-content svelte-x40q63"><header class="detail-header svelte-x40q63"><h1 class="detail-title svelte-x40q63"> </h1> <p class="detail-description"> </p> <div class="detail-tags svelte-x40q63"></div> <a href="/gallery" class="back-button svelte-x40q63">← Back to Gallery</a></header> <div class="detail-gallery svelte-x40q63"></div> <div class="detail-cta svelte-x40q63"><h2>Interested in a Similar Transformation?</h2> <a href="/contacts" class="cta-button">Contact Us Today</a></div></main>');function V(d,e){C(e,!0);let s=null,{item:r}=e.data;N(()=>s,e.data.lang+"gallery-item");var n=A(),v=t(n),c=t(v),k=t(c,!0);a(c);var m=x(c,2),z=t(m,!0);a(m);var h=x(m,2);S(h,21,()=>r.tags,T,(l,g)=>{var i=U(),o=t(i,!0);a(i),u(()=>f(o,I(g))),p(l,i)}),a(h),q(2),a(v);var y=x(v,2);S(y,21,()=>r.galleryImages,T,(l,g,i)=>{var o=w(),b=t(o);a(o),u(()=>{j(b,"src",I(g)),j(b,"alt",`${r.title??""} - Image ${i+1}`)}),p(l,o)}),a(y),q(2),a(n),M(n,l=>s=l,()=>s),u(()=>{f(k,r.title),f(z,r.description)}),p(d,n),G()}export{V as component,R as universal};
