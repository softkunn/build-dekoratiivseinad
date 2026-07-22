var e=document.getElementById(`works-grid`),t=document.getElementById(`works-actions`),n=document.getElementById(`works-more`),r=document.getElementById(`work-film`),i=document.getElementById(`work-film-scroller`);if(!e)throw Error(`works-grid missing`);var a=e.dataset.project,o=e.dataset.dataset||`production`,s=e.dataset.token||``,c=e.dataset.lang||`et`,l=Number(e.dataset.initial||2),u={loading:e.dataset.i18nLoading||``,showAll:e.dataset.i18nShowAll||``,showLess:e.dataset.i18nShowLess||``,none:e.dataset.i18nNone||``,noneLink:e.dataset.i18nNoneLink||``,error:e.dataset.i18nError||``,retry:e.dataset.i18nRetry||``,before:e.dataset.i18nBefore||``,after:e.dataset.i18nAfter||``,compare:e.dataset.i18nCompare||``,allPhotos:e.dataset.i18nAllPhotos||``,backCompare:e.dataset.i18nBackCompare||``,closeFilm:e.dataset.i18nCloseFilm||``},d=[],f=!1,p={estonian:`et`,eesti:`et`,et:`et`,english:`en`,en:`en`,russian:`ru`,русский:`ru`,ru:`ru`};function m(e,t){let n=String(e??``).replace(/\r\n/g,`
`).trim();if(!n)return``;let r=[...n.matchAll(/^#\s*([^\n#]+?)\s*$/gm)];if(!r.length)return n;let i={};for(let e=0;e<r.length;e++){let t=r[e],a=p[(t[1]||``).trim().toLowerCase()];if(!a)continue;let o=(t.index??0)+t[0].length,s=e+1<r.length?r[e+1].index:n.length,c=n.slice(o,s).trim();c&&(i[a]=c)}return Object.keys(i).length&&(i[t]||i.et||i.en||i.ru)||n}function h(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function g(e,t=1e3,n=`crop`){if(!e)return``;let r=e.replace(`image-`,``).split(`-`),i=r.slice(0,-1).join(`-`),s=r[r.length-1]||`jpg`,c=n===`max`?``:`&h=${Math.round(t*1.25)}`;return i?`https://cdn.sanity.io/images/${a}/${o}/${i}.${s}?w=${t}${c}&fit=${n}&auto=format`:``}function _(e,t,n){let r=e.filter(Boolean),i=[t,...n].filter(Boolean),a=[],o=Math.max(r.length,i.length);for(let e=0;e<o;e++)r[e]&&a.push({ref:r[e],kind:`before`}),i[e]&&a.push({ref:i[e],kind:`after`});return a}function v(e){return typeof document.startViewTransition==`function`?document.startViewTransition(e):(e(),null)}function y(e,t){let n=g(e),r=g(t);return r?n?`<div class="ba" data-ba style="--pos: 52%">
          <img class="ba__after" src="${r}" alt="${h(u.after)}" loading="lazy" width="1000" height="1250" draggable="false" />
          <div class="ba__before-clip" aria-hidden="true">
            <img class="ba__before" src="${n}" alt="" loading="lazy" width="1000" height="1250" draggable="false" />
          </div>
          <span class="ba__tag ba__tag--before">${h(u.before)}</span>
          <span class="ba__tag ba__tag--after">${h(u.after)}</span>
          <div class="ba__handle" aria-hidden="true"><span></span></div>
          <input
            class="ba__range"
            type="range"
            min="0"
            max="100"
            value="52"
            aria-label="${h(u.compare)}"
          />
        </div>`:`<figure class="ba-single">
            <img src="${r}" alt="${h(u.after)}" loading="lazy" width="1000" height="1250" />
            <figcaption>${h(u.after)}</figcaption>
          </figure>`:``}function b(e){return`<div class="work-gallery" data-gallery>
          ${e.map((e,t)=>{let n=e.kind===`before`?u.before:u.after,r=g(e.ref,720);return`<button
                type="button"
                class="work-shot"
                data-film-open
                data-film-index="${t}"
                aria-label="${h(n)} ${t+1}"
              >
                <img src="${r}" alt="" loading="lazy" width="720" height="900" />
                <figcaption>${h(n)}</figcaption>
              </button>`}).join(``)}
        </div>`}function x(e){return e<2?``:`<button
          type="button"
          class="work-mode"
          data-work-mode
          aria-pressed="false"
        >${h(u.allPhotos)} (${e})</button>`}function S(e,t){let n=(e.beforeImages||[]).map(e=>e?.asset?._ref).filter(Boolean),r=e.image?.asset?._ref,i=_(n,r,(e.gallery||[]).map(e=>e?.asset?._ref).filter(Boolean)),a=y(n[0],r),o=m(e.title,c),s=m(e.description,c),l=s?`<p>${h(s)}</p>`:``,u=e.completedAt?`<time class="work-date" datetime="${h(e.completedAt)}">${h(e.completedAt)}</time>`:``;return`<article
          class="work-card"
          style="animation-delay:${t*.05}s"
          data-work-id="${h(e._id)}"
          data-shots="${h(JSON.stringify(i))}"
        >
          <header class="work-head">
            <h3>${h(o)}</h3>
            ${u}
            ${l}
          </header>
          <div class="work-media">
            <div class="work-compare">${a}</div>
            ${b(i)}
          </div>
          ${x(i.length)}
        </article>`}function C(e){e.querySelectorAll(`[data-ba]`).forEach(e=>{let t=e.querySelector(`.ba__range`);if(!(t instanceof HTMLInputElement))return;let n=n=>{let r=Math.max(0,Math.min(100,Number(n)));e.style.setProperty(`--pos`,`${r}%`),t.value=String(r)};t.addEventListener(`input`,()=>n(t.value));let r=t=>{if(t.pointerType===`mouse`&&t.buttons===0)return;let r=e.getBoundingClientRect();if(!r.width)return;let i=(t.clientX-r.left)/r.width*100;n(i)};e.addEventListener(`pointerdown`,n=>{n.target!==t&&(e.setPointerCapture(n.pointerId),r(n))}),e.addEventListener(`pointermove`,t=>{e.hasPointerCapture(t.pointerId)&&r(t)})})}function w(e){let t=e.querySelector(`[data-work-mode]`);if(!(t instanceof HTMLButtonElement))return;let n=e.querySelector(`[data-gallery]`)?.querySelectorAll(`.work-shot`).length||0,r=e.classList.contains(`is-gallery`);t.setAttribute(`aria-pressed`,r?`true`:`false`),t.textContent=r?u.backCompare:`${u.allPhotos} (${n})`}function T(){!r||r.hidden||v(()=>{r.hidden=!0,i&&(i.innerHTML=``),document.body.classList.remove(`is-film-open`)})}function E(e,t){!r||!i||(i.innerHTML=e.map((e,t)=>{let n=e.kind===`before`?u.before:u.after;return`<figure class="work-film__frame" data-film-frame="${t}">
              <div class="work-film__shot">
                <img src="${g(e.ref,1600,`max`)}" alt="${h(n)} ${t+1}" width="1600" height="2000" />
                <figcaption>${h(n)}</figcaption>
              </div>
            </figure>`}).join(``)+`<p class="work-film__end">
            <button type="button" class="work-film__back" data-film-back>${h(u.closeFilm)}</button>
          </p>`,v(()=>{r.hidden=!1,document.body.classList.add(`is-film-open`)}),i.querySelector(`[data-film-back]`)?.addEventListener(`click`,T))}function D(e){e.querySelectorAll(`[data-work-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);t instanceof HTMLElement&&v(()=>{t.classList.toggle(`is-gallery`),w(t),t.classList.contains(`is-gallery`)||C(t)})})})}function O(e){e.querySelectorAll(`[data-film-open]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);if(!(t instanceof HTMLElement))return;let n=[];try{n=JSON.parse(t.dataset.shots||`[]`)}catch{n=[]}if(!n.length)return;let r=Number(e.getAttribute(`data-film-index`)||0);E(n,Number.isFinite(r)?r:0)})})}function k(){T(),e.innerHTML=(f?d:d.slice(0,l)).map((e,t)=>S(e,t)).join(``),C(e),D(e),O(e),t&&n&&(t.hidden=!(d.length>l),n.textContent=f?u.showLess:`${u.showAll} (${d.length-l}+)`)}i?.addEventListener(`click`,e=>{e.target instanceof Element&&(e.target.closest(`.work-film__shot, [data-film-back]`)||T())}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&T()});function A(n){e.setAttribute(`aria-busy`,`false`),e.innerHTML=`<div class="works-empty" role="alert">
          <p>${n}</p>
          <button type="button" class="btn btn-ghost" id="works-retry">${h(u.retry)}</button>
        </div>`,document.getElementById(`works-retry`)?.addEventListener(`click`,j),t&&(t.hidden=!0)}async function j(){e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<p class="works-note">${h(u.loading)}</p>`;let r=`https://${a}.api.sanity.io/v2025-01-01/data/query/${o}?query=*%5B_type%20%3D%3D%20%22project%22%20%26%26%20published%20%3D%3D%20true%5D%20%7C%20order(completedAt%20desc%2C%20_createdAt%20desc)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_id%2Ctitle%2Cdescription%2CcompletedAt%2Cimage%2CbeforeImages%2Cgallery%0A%20%20%20%20%20%20%20%20%20%20%7D`,i=s?{Authorization:`Bearer ${s}`}:{};try{let a=await fetch(r,{headers:i});if(!a.ok)throw Error(`network`);if(d=(await a.json())?.result??[],e.setAttribute(`aria-busy`,`false`),!d.length){e.innerHTML=`<p class="works-empty">${h(u.none)} <a href="/studio/">${h(u.noneLink)}</a>.</p>`,t&&(t.hidden=!0);return}f=!1,k(),n?.addEventListener(`click`,()=>{f=!f,k(),f||document.getElementById(`tood`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}catch{A(u.error)}}j();