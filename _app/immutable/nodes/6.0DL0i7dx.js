import{t as T,a as D,s as d,e as y}from"../chunks/DCJhQv-G.js";import{i as le}from"../chunks/Cj8FDc_9.js";import{p as pe,u as s,V as ce,a6 as ne,a7 as de,t as S,a as me,a8 as L,s as i,c as t,a5 as z,r as e,aa as m}from"../chunks/DDjjqyqw.js";import{e as O,i as R}from"../chunks/92WeEy5L.js";import{s as u}from"../chunks/dwp5TLVT.js";import{b as ue}from"../chunks/b37vsSIY.js";import{s as X,a as ge,b as ve}from"../chunks/CwXUOVER.js";import{t as Y,p as he}from"../chunks/xxNj6L93.js";import{u as fe}from"../chunks/BGwrjhwo.js";var ye=T('<span class="tag svelte-mu4qd"> </span>'),be=T('<article class="gallery-item svelte-mu4qd"><h3 class="item-title svelte-mu4qd"> </h3> <div class="comparison-container svelte-mu4qd"><noscript></noscript> <div class="comparison-slider svelte-mu4qd"><div class="before-image svelte-mu4qd"></div> <div class="after-image svelte-mu4qd"></div> <div class="slider svelte-mu4qd"></div> <div class="slider-button svelte-mu4qd"></div> <figure><div class="seo-image svelte-mu4qd"></div> <figcaption>Before</figcaption></figure> <figure><div class="seo-image svelte-mu4qd"></div> <figcaption>After</figcaption></figure></div> <div class="comparison-labels svelte-mu4qd"><span class="before-label">Before</span> <span class="after-label">After</span></div></div> <div class="item-description svelte-mu4qd"><p> </p> <div class="tags svelte-mu4qd"></div> <a href="/gallery" class="view-details svelte-mu4qd">View Full Gallery</a></div></article>'),_e=T('<main id="gallery-page" class="page-content svelte-mu4qd"><div class="gallery-container svelte-mu4qd"><header class="gallery-header svelte-mu4qd"><h1 class="gallery-title svelte-mu4qd"> </h1> <p class="gallery-description svelte-mu4qd"> </p></header> <div class="gallery-filter svelte-mu4qd"><h2>Decorative Wall Transformations</h2> <p>Drag the slider to compare before and after transformations of our decorative wall projects</p></div> <section class="gallery-grid svelte-mu4qd"></section> <section class="cta-section svelte-mu4qd"><h2>Transform Your Space Today</h2> <p>Our expert team can help you create stunning decorative wall finishes for any room</p> <a href="/contacts" class="cta-button svelte-mu4qd">Get a Free Consultation</a></section></div></main>');function Be(H,J){pe(J,!1);const[b,K]=ge(),k=()=>X(he,"$page",b),N=()=>X(s(g),"$lang",b),g=L();let _=L(null);fe(()=>s(_),N()+"gallery");function B(o){const r=o.target,a=r.closest(".comparison-container"),p=a==null?void 0:a.querySelector(".before-image"),h=a==null?void 0:a.querySelector(".after-image"),n=a==null?void 0:a.querySelector(".slider-button");if(p&&h){const f=r.getBoundingClientRect();let l=(o.clientX-f.left)/f.width*100;l=Math.max(5,Math.min(l,95)),p.style.width=`${l}%`,h.style.width=`${100-l}%`,n.style.left=`${l}%`}}function M(o){console.log("start")}function W(){console.log("stop")}function Q(o){B(o.touches[0])}ce(()=>{document.addEventListener("mouseup",W),document.addEventListener("touchend",W)});const U=[{id:"textured-concrete",title:"Textured Concrete",description:"Modern industrial finish with organic textures",beforeImage:"/images/before-toilet.png",afterImage:"/images/after-toilet.png",tags:["industrial","modern","textured"],galleryImages:["https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300"]},{id:"venetian-plaster",title:"Venetian Plaster",description:"Elegant marble-like finish with depth and shine",beforeImage:"/images/after-shower.png",afterImage:"/images/before-shower-2.jpg",tags:["classic","elegant","luxury"],galleryImages:["https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300g"]},{id:"wood-paneling",title:"Wood Paneling",description:"Warm natural wood elements for cozy spaces",beforeImage:"https://picsum.photos/seed/picsum/200/300",afterImage:"https://picsum.photos/seed/picsum/200/300",tags:["natural","warm","rustic"],galleryImages:["https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300g"]},{id:"wallpaper-design",title:"Designer Wallpaper",description:"Bold patterns and textures for statement walls",beforeImage:"https://picsum.photos/seed/picsum/200/300",afterImage:"https://picsum.photos/seed/picsum/200/300",tags:["pattern","colorful","bold"],galleryImages:["https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/300","https://picsum.photos/seed/picsum/200/3008"]}];ne(()=>k(),()=>{ve(z(g,k().data.lang??"et"),"$lang",b)}),de(),le();var v=_e(),C=t(v),q=t(C),w=t(q),Z=t(w,!0);e(w);var E=i(w,2),ee=t(E,!0);e(E),e(q);var G=i(q,4);O(G,5,()=>U,R,(o,r)=>{var a=be(),p=t(a),h=t(p,!0);e(p);var n=i(p,2),f=t(n),l=i(f,2),P=t(l),V=i(P,2),c=i(V,2),I=i(c,4),se=t(I);m(2),e(I);var j=i(I,2),te=t(j);m(2),e(j),e(l),m(2),e(n);var A=i(n,2),x=t(A),ae=t(x,!0);e(x);var F=i(x,2);O(F,5,()=>s(r).tags,R,(re,ie)=>{var $=ye(),oe=t($,!0);e($),S(()=>d(oe,s(ie))),D(re,$)}),e(F),m(2),e(A),e(a),S(()=>{d(h,s(r).title),u(P,"style",`background-image: url(${s(r).beforeImage??""})`),u(V,"style",`background-image: url(${s(r).afterImage??""})`),u(c,"aria-label",`Comparison slider for ${s(r).title??""}`),u(se,"style",`background-image: ${s(r).beforeImage??""}`),u(te,"style",`background-image: ${s(r).afterImage??""}`),d(ae,s(r).description)}),y("mousedown",c,M),y("mousemove",c,B),y("touchstart",c,M),y("touchmove",c,Q),D(o,a)}),e(G),m(2),e(C),e(v),ue(v,o=>z(_,o),()=>s(_)),S(()=>{d(Z,Y[s(g)].gallery||"Decorative Wall Gallery"),d(ee,Y[s(g)].welcome||"Transform your space with our premium wall treatments")}),D(H,v),me(),K()}export{Be as component};
