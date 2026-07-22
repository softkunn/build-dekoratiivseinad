var e=document.getElementById(`works-grid`),t=document.getElementById(`works-actions`),n=document.getElementById(`works-more`),r=document.getElementById(`work-film`),i=document.getElementById(`work-film-scroller`),a=document.getElementById(`work-film-close`);if(!e)throw Error(`works-grid missing`);var o=e.dataset.project,s=e.dataset.dataset||`production`,c=e.dataset.token||``,l=e.dataset.lang||`et`,u=Number(e.dataset.initial||2),d={loading:e.dataset.i18nLoading||``,showAll:e.dataset.i18nShowAll||``,showLess:e.dataset.i18nShowLess||``,none:e.dataset.i18nNone||``,error:e.dataset.i18nError||``,retry:e.dataset.i18nRetry||``,before:e.dataset.i18nBefore||``,after:e.dataset.i18nAfter||``,compare:e.dataset.i18nCompare||``,allPhotos:e.dataset.i18nAllPhotos||``,backCompare:e.dataset.i18nBackCompare||``,closeFilm:e.dataset.i18nCloseFilm||``},f=[],p=!1,m={estonian:`et`,eesti:`et`,et:`et`,english:`en`,en:`en`,russian:`ru`,русский:`ru`,ru:`ru`};function h(e,t){let n=String(e??``).replace(/\r\n/g,`
`).trim();if(!n)return``;let r=[...n.matchAll(/^#\s*([^\n#]+?)\s*$/gm)];if(!r.length)return n;let i={};for(let e=0;e<r.length;e++){let t=r[e],a=m[(t[1]||``).trim().toLowerCase()];if(!a)continue;let o=(t.index??0)+t[0].length,s=e+1<r.length?r[e+1].index:n.length,c=n.slice(o,s).trim();c&&(i[a]=c)}return Object.keys(i).length&&(i[t]||i.et||i.en||i.ru)||n}function g(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function _(e,t=1e3,n=`crop`){if(!e)return``;let r=e.replace(`image-`,``).split(`-`),i=r.slice(0,-1).join(`-`),a=r[r.length-1]||`jpg`,c=n===`max`?``:`&h=${Math.round(t*1.25)}`;return i?`https://cdn.sanity.io/images/${o}/${s}/${i}.${a}?w=${t}${c}&fit=${n}&auto=format`:``}function v(e,t,n){let r=e.filter(Boolean),i=[t,...n].filter(Boolean),a=[],o=Math.max(r.length,i.length);for(let e=0;e<o;e++)r[e]&&a.push({ref:r[e],kind:`before`}),i[e]&&a.push({ref:i[e],kind:`after`});return a}function y(e){return typeof document.startViewTransition==`function`?document.startViewTransition(e):(e(),null)}function b(e,t){let n=_(e),r=_(t);return r?n?`<div class="ba" data-ba style="--pos: 52%">
          <img class="ba__after" src="${r}" alt="${g(d.after)}" loading="lazy" width="1000" height="1250" draggable="false" />
          <div class="ba__before-clip" aria-hidden="true">
            <img class="ba__before" src="${n}" alt="" loading="lazy" width="1000" height="1250" draggable="false" />
          </div>
          <span class="ba__tag ba__tag--before">${g(d.before)}</span>
          <span class="ba__tag ba__tag--after">${g(d.after)}</span>
          <div class="ba__handle" aria-hidden="true"><span></span></div>
          <input
            class="ba__range"
            type="range"
            min="0"
            max="100"
            value="52"
            aria-label="${g(d.compare)}"
          />
        </div>`:`<figure class="ba-single">
            <img src="${r}" alt="${g(d.after)}" loading="lazy" width="1000" height="1250" />
            <figcaption>${g(d.after)}</figcaption>
          </figure>`:``}function x(e){return`<div class="work-gallery" data-gallery>
          ${e.map((e,t)=>{let n=e.kind===`before`?d.before:d.after,r=_(e.ref,720);return`<button
                type="button"
                class="work-shot"
                data-film-open
                data-film-index="${t}"
                aria-label="${g(n)} ${t+1}"
              >
                <img src="${r}" alt="" loading="lazy" width="720" height="900" />
                <figcaption>${g(n)}</figcaption>
              </button>`}).join(``)}
        </div>`}function S(e){return e<2?``:`<button
          type="button"
          class="work-mode"
          data-work-mode
          aria-pressed="false"
        >${g(d.allPhotos)} (${e})</button>`}function C(e,t){let n=(e.beforeImages||[]).map(e=>e?.asset?._ref).filter(Boolean),r=e.image?.asset?._ref,i=v(n,r,(e.gallery||[]).map(e=>e?.asset?._ref).filter(Boolean)),a=b(n[0],r),o=h(e.title,l),s=h(e.description,l),c=s?`<p>${g(s)}</p>`:``,u=e.completedAt?`<time class="work-date" datetime="${g(e.completedAt)}">${g(e.completedAt)}</time>`:``;return`<article
          class="work-card"
          style="animation-delay:${t*.05}s"
          data-work-id="${g(e._id)}"
          data-shots="${g(JSON.stringify(i))}"
        >
          <header class="work-head">
            <h3>${g(o)}</h3>
            ${u}
            ${c}
          </header>
          <div class="work-media">
            <div class="work-compare">${a}</div>
            ${x(i)}
          </div>
          ${S(i.length)}
        </article>`}function w(e){e.querySelectorAll(`[data-ba]`).forEach(e=>{let t=e.querySelector(`.ba__range`);if(!(t instanceof HTMLInputElement))return;let n=n=>{let r=Math.max(0,Math.min(100,Number(n)));e.style.setProperty(`--pos`,`${r}%`),t.value=String(r)};t.addEventListener(`input`,()=>n(t.value));let r=t=>{if(t.pointerType===`mouse`&&t.buttons===0)return;let r=e.getBoundingClientRect();if(!r.width)return;let i=(t.clientX-r.left)/r.width*100;n(i)};e.addEventListener(`pointerdown`,n=>{n.target!==t&&(e.setPointerCapture(n.pointerId),r(n))}),e.addEventListener(`pointermove`,t=>{e.hasPointerCapture(t.pointerId)&&r(t)})})}function T(e){let t=e.querySelector(`[data-work-mode]`);if(!(t instanceof HTMLButtonElement))return;let n=e.querySelector(`[data-gallery]`)?.querySelectorAll(`.work-shot`).length||0,r=e.classList.contains(`is-gallery`);t.setAttribute(`aria-pressed`,r?`true`:`false`),t.textContent=r?d.backCompare:`${d.allPhotos} (${n})`}function E(){!r||r.hidden||y(()=>{r.hidden=!0,i&&(i.innerHTML=``),document.body.classList.remove(`is-film-open`)})}function D(e,t){!r||!i||(i.innerHTML=e.map((e,t)=>{let n=e.kind===`before`?d.before:d.after;return`<figure class="work-film__frame" data-film-frame="${t}">
              <div class="work-film__shot">
                <img src="${_(e.ref,1600,`max`)}" alt="${g(n)} ${t+1}" width="1600" height="2000" />
                <figcaption>${g(n)}</figcaption>
              </div>
            </figure>`}).join(``),y(()=>{r.hidden=!1,document.body.classList.add(`is-film-open`)}))}function O(e){e.querySelectorAll(`[data-work-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);t instanceof HTMLElement&&y(()=>{t.classList.toggle(`is-gallery`),T(t),t.classList.contains(`is-gallery`)||w(t)})})})}function k(e){e.querySelectorAll(`[data-film-open]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);if(!(t instanceof HTMLElement))return;let n=[];try{n=JSON.parse(t.dataset.shots||`[]`)}catch{n=[]}if(!n.length)return;let r=Number(e.getAttribute(`data-film-index`)||0);D(n,Number.isFinite(r)?r:0)})})}function A(){E(),e.innerHTML=(p?f:f.slice(0,u)).map((e,t)=>C(e,t)).join(``),w(e),O(e),k(e),t&&n&&(t.hidden=!(f.length>u),n.textContent=p?d.showLess:`${d.showAll} (${f.length-u}+)`)}a?.addEventListener(`click`,E),i?.addEventListener(`click`,e=>{e.target instanceof Element&&(e.target.closest(`.work-film__shot, .work-film__close`)||E())}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&E()});function j(n){e.setAttribute(`aria-busy`,`false`),e.innerHTML=`<div class="works-empty" role="alert">
          <p>${n}</p>
          <button type="button" class="btn btn-ghost" id="works-retry">${g(d.retry)}</button>
        </div>`,document.getElementById(`works-retry`)?.addEventListener(`click`,M),t&&(t.hidden=!0)}async function M(){e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<p class="works-note">${g(d.loading)}</p>`;let r=`https://${o}.api.sanity.io/v2025-01-01/data/query/${s}?query=*%5B_type%20%3D%3D%20%22project%22%20%26%26%20published%20%3D%3D%20true%5D%20%7C%20order(completedAt%20desc%2C%20_createdAt%20desc)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_id%2Ctitle%2Cdescription%2CcompletedAt%2Cimage%2CbeforeImages%2Cgallery%0A%20%20%20%20%20%20%20%20%20%20%7D`,i=c?{Authorization:`Bearer ${c}`}:{};try{let a=await fetch(r,{headers:i});if(!a.ok)throw Error(`network`);if(f=(await a.json())?.result??[],e.setAttribute(`aria-busy`,`false`),!f.length){e.innerHTML=`<p class="works-empty">${g(d.none)}</p>`,t&&(t.hidden=!0);return}p=!1,A(),n?.addEventListener(`click`,()=>{p=!p,A(),p||document.getElementById(`tood`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}catch{j(d.error)}}M();