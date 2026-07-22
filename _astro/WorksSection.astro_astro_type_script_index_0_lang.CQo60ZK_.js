var e=document.getElementById(`works-grid`),t=document.getElementById(`works-actions`),n=document.getElementById(`works-more`);if(!e)throw Error(`works-grid missing`);var r=e.dataset.project,i=e.dataset.dataset||`production`,a=e.dataset.token||``,o=e.dataset.lang||`et`,s=Number(e.dataset.initial||2),c={loading:e.dataset.i18nLoading||``,showAll:e.dataset.i18nShowAll||``,showLess:e.dataset.i18nShowLess||``,none:e.dataset.i18nNone||``,noneLink:e.dataset.i18nNoneLink||``,error:e.dataset.i18nError||``,retry:e.dataset.i18nRetry||``,before:e.dataset.i18nBefore||``,after:e.dataset.i18nAfter||``,compare:e.dataset.i18nCompare||``,allPhotos:e.dataset.i18nAllPhotos||``,backCompare:e.dataset.i18nBackCompare||``},l=[],u=!1,d={estonian:`et`,eesti:`et`,et:`et`,english:`en`,en:`en`,russian:`ru`,русский:`ru`,ru:`ru`};function f(e,t){let n=String(e??``).replace(/\r\n/g,`
`).trim();if(!n)return``;let r=[...n.matchAll(/^#\s*([^\n#]+?)\s*$/gm)];if(!r.length)return n;let i={};for(let e=0;e<r.length;e++){let t=r[e],a=d[(t[1]||``).trim().toLowerCase()];if(!a)continue;let o=(t.index??0)+t[0].length,s=e+1<r.length?r[e+1].index:n.length,c=n.slice(o,s).trim();c&&(i[a]=c)}return Object.keys(i).length&&(i[t]||i.et||i.en||i.ru)||n}function p(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function m(e,t=1e3){if(!e)return``;let n=e.replace(`image-`,``).split(`-`),a=n.slice(0,-1).join(`-`),o=n[n.length-1]||`jpg`;return a?`https://cdn.sanity.io/images/${r}/${i}/${a}.${o}?w=${t}&h=${Math.round(t*1.25)}&fit=crop&auto=format`:``}function h(e,t,n){let r=e.filter(Boolean),i=[t,...n].filter(Boolean),a=[],o=Math.max(r.length,i.length);for(let e=0;e<o;e++)r[e]&&a.push({ref:r[e],kind:`before`}),i[e]&&a.push({ref:i[e],kind:`after`});return a}function g(e,t){let n=m(e),r=m(t);return r?n?`<div class="ba" data-ba style="--pos: 52%">
          <img class="ba__after" src="${r}" alt="${p(c.after)}" loading="lazy" width="1000" height="1250" draggable="false" />
          <div class="ba__before-clip" aria-hidden="true">
            <img class="ba__before" src="${n}" alt="" loading="lazy" width="1000" height="1250" draggable="false" />
          </div>
          <span class="ba__tag ba__tag--before">${p(c.before)}</span>
          <span class="ba__tag ba__tag--after">${p(c.after)}</span>
          <div class="ba__handle" aria-hidden="true"><span></span></div>
          <input
            class="ba__range"
            type="range"
            min="0"
            max="100"
            value="52"
            aria-label="${p(c.compare)}"
          />
        </div>`:`<figure class="ba-single">
            <img src="${r}" alt="${p(c.after)}" loading="lazy" width="1000" height="1250" />
            <figcaption>${p(c.after)}</figcaption>
          </figure>`:``}function _(e){return`<div class="work-gallery" data-gallery>
          ${e.map((e,t)=>{let n=e.kind===`before`?c.before:c.after;return`<figure class="work-shot">
                <img src="${m(e.ref,720)}" alt="${p(n)} ${t+1}" loading="lazy" width="720" height="900" />
                <figcaption>${p(n)}</figcaption>
              </figure>`}).join(``)}
        </div>`}function v(e){return e<2?``:`<button
          type="button"
          class="work-mode"
          data-work-mode
          aria-pressed="false"
        >${p(c.allPhotos)} (${e})</button>`}function y(e,t){let n=(e.beforeImages||[]).map(e=>e?.asset?._ref).filter(Boolean),r=e.image?.asset?._ref,i=h(n,r,(e.gallery||[]).map(e=>e?.asset?._ref).filter(Boolean)),a=g(n[0],r),s=f(e.title,o),c=f(e.description,o),l=c?`<p>${p(c)}</p>`:``,u=e.completedAt?`<time class="work-date" datetime="${p(e.completedAt)}">${p(e.completedAt)}</time>`:``;return`<article class="work-card" style="animation-delay:${t*.05}s" data-work-id="${p(e._id)}">
          <header class="work-head">
            <h3>${p(s)}</h3>
            ${u}
            ${l}
          </header>
          <div class="work-media">
            <div class="work-compare">${a}</div>
            ${_(i)}
          </div>
          ${v(i.length)}
        </article>`}function b(e){e.querySelectorAll(`[data-ba]`).forEach(e=>{let t=e.querySelector(`.ba__range`);if(!(t instanceof HTMLInputElement))return;let n=n=>{let r=Math.max(0,Math.min(100,Number(n)));e.style.setProperty(`--pos`,`${r}%`),t.value=String(r)};t.addEventListener(`input`,()=>n(t.value));let r=t=>{if(t.pointerType===`mouse`&&t.buttons===0)return;let r=e.getBoundingClientRect();if(!r.width)return;let i=(t.clientX-r.left)/r.width*100;n(i)};e.addEventListener(`pointerdown`,n=>{n.target!==t&&(e.setPointerCapture(n.pointerId),r(n))}),e.addEventListener(`pointermove`,t=>{e.hasPointerCapture(t.pointerId)&&r(t)})})}function x(e){let t=e.querySelector(`[data-work-mode]`);if(!(t instanceof HTMLButtonElement))return;let n=e.querySelector(`[data-gallery]`)?.querySelectorAll(`.work-shot`).length||0,r=e.classList.contains(`is-gallery`);t.setAttribute(`aria-pressed`,r?`true`:`false`),t.textContent=r?c.backCompare:`${c.allPhotos} (${n})`}function S(e){e.querySelectorAll(`[data-work-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);if(!(t instanceof HTMLElement))return;let n=()=>{t.classList.toggle(`is-gallery`),x(t),t.classList.contains(`is-gallery`)||b(t)};typeof document.startViewTransition==`function`?document.startViewTransition(n):n()})})}function C(){e.innerHTML=(u?l:l.slice(0,s)).map((e,t)=>y(e,t)).join(``),b(e),S(e),t&&n&&(t.hidden=!(l.length>s),n.textContent=u?c.showLess:`${c.showAll} (${l.length-s}+)`)}function w(n){e.setAttribute(`aria-busy`,`false`),e.innerHTML=`<div class="works-empty" role="alert">
          <p>${n}</p>
          <button type="button" class="btn btn-ghost" id="works-retry">${p(c.retry)}</button>
        </div>`,document.getElementById(`works-retry`)?.addEventListener(`click`,T),t&&(t.hidden=!0)}async function T(){e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<p class="works-note">${p(c.loading)}</p>`;let o=`https://${r}.api.sanity.io/v2025-01-01/data/query/${i}?query=*%5B_type%20%3D%3D%20%22project%22%20%26%26%20published%20%3D%3D%20true%5D%20%7C%20order(completedAt%20desc%2C%20_createdAt%20desc)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_id%2Ctitle%2Cdescription%2CcompletedAt%2Cimage%2CbeforeImages%2Cgallery%0A%20%20%20%20%20%20%20%20%20%20%7D`,s=a?{Authorization:`Bearer ${a}`}:{};try{let r=await fetch(o,{headers:s});if(!r.ok)throw Error(`network`);if(l=(await r.json())?.result??[],e.setAttribute(`aria-busy`,`false`),!l.length){e.innerHTML=`<p class="works-empty">${p(c.none)} <a href="/studio/">${p(c.noneLink)}</a>.</p>`,t&&(t.hidden=!0);return}u=!1,C(),n?.addEventListener(`click`,()=>{u=!u,C(),u||document.getElementById(`tood`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}catch{w(c.error)}}T();