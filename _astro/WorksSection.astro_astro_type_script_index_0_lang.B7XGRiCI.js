var e=document.getElementById(`works-grid`),t=document.getElementById(`works-actions`),n=document.getElementById(`works-more`),r=document.getElementById(`work-film`),i=document.getElementById(`work-film-scroller`),a=document.getElementById(`work-film-close`);if(!e)throw Error(`works-grid missing`);var o=e.dataset.project,s=e.dataset.dataset||`production`,c=e.dataset.token||``,l=e.dataset.lang||`et`,u=Number(e.dataset.initial||2),d={loading:e.dataset.i18nLoading||``,showAll:e.dataset.i18nShowAll||``,showLess:e.dataset.i18nShowLess||``,none:e.dataset.i18nNone||``,error:e.dataset.i18nError||``,retry:e.dataset.i18nRetry||``,before:e.dataset.i18nBefore||``,after:e.dataset.i18nAfter||``,allPhotos:e.dataset.i18nAllPhotos||``,closeFilm:e.dataset.i18nCloseFilm||``},f=[],p=!1,m={estonian:`et`,eesti:`et`,et:`et`,english:`en`,en:`en`,russian:`ru`,русский:`ru`,ru:`ru`};function h(e,t){let n=String(e??``).replace(/\r\n/g,`
`).trim();if(!n)return``;let r=[...n.matchAll(/^#\s*([^\n#]+?)\s*$/gm)];if(!r.length)return n;let i={};for(let e=0;e<r.length;e++){let t=r[e],a=m[(t[1]||``).trim().toLowerCase()];if(!a)continue;let o=(t.index??0)+t[0].length,s=e+1<r.length?r[e+1].index:n.length,c=n.slice(o,s).trim();c&&(i[a]=c)}return Object.keys(i).length&&(i[t]||i.et||i.en||i.ru)||n}function g(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function _(e,t=1e3,n=`crop`){if(!e)return``;let r=e.replace(`image-`,``).split(`-`),i=r.slice(0,-1).join(`-`),a=r[r.length-1]||`jpg`,c=n===`max`?``:`&h=${Math.round(t*1.25)}`;return i?`https://cdn.sanity.io/images/${o}/${s}/${i}.${a}?w=${t}${c}&fit=${n}&auto=format`:``}function v(e,t,n){let r=e.filter(Boolean),i=[t,...n].filter(Boolean),a=[],o=Math.max(r.length,i.length);for(let e=0;e<o;e++)r[e]&&a.push({ref:r[e],kind:`before`}),i[e]&&a.push({ref:i[e],kind:`after`});return a}function y(e){return typeof document.startViewTransition==`function`?document.startViewTransition(e):(e(),null)}function b(e,t){let n=e.kind===`before`?d.before:d.after,r=_(e.ref,720);return`<button
          type="button"
          class="work-shot"
          data-film-open
          data-film-index="${t}"
          aria-label="${g(n)} ${t+1}"
        >
          <img src="${r}" alt="" loading="lazy" width="720" height="900" />
          <figcaption>${g(n)}</figcaption>
        </button>`}function x(e){let t=e.findIndex(e=>e.kind===`before`),n=e.findIndex(e=>e.kind===`after`),r=[];return t>=0&&r.push({shot:e[t],index:t}),n>=0&&r.push({shot:e[n],index:n}),r.length||e.slice(0,2).forEach((e,t)=>r.push({shot:e,index:t})),r.length?`<div class="work-pair" data-pair>
          ${r.map(({shot:e,index:t})=>b(e,t)).join(``)}
        </div>`:``}function S(e){return e<=2?``:`<button
          type="button"
          class="work-mode"
          data-all-photos
        >${g(d.allPhotos)} (${e})</button>`}function C(e,t){let n=(e.beforeImages||[]).map(e=>e?.asset?._ref).filter(Boolean),r=e.image?.asset?._ref,i=v(n,r,(e.gallery||[]).map(e=>e?.asset?._ref).filter(Boolean)),a=h(e.title,l),o=h(e.description,l),s=o?`<p>${g(o)}</p>`:``,c=e.completedAt?`<time class="work-date" datetime="${g(e.completedAt)}">${g(e.completedAt)}</time>`:``;return`<article
          class="work-card"
          style="animation-delay:${t*.05}s"
          data-work-id="${g(e._id)}"
          data-shots="${g(JSON.stringify(i))}"
        >
          <header class="work-head">
            <h3>${g(a)}</h3>
            ${c}
            ${s}
          </header>
          <div class="work-media">
            ${x(i)}
          </div>
          ${S(i.length)}
        </article>`}function w(e){try{return JSON.parse(e.dataset.shots||`[]`)}catch{return[]}}function T(){!r||r.hidden||y(()=>{r.hidden=!0,i&&(i.innerHTML=``),document.body.classList.remove(`is-film-open`)})}function E(e){if(!i)return;let t=i.querySelectorAll(`[data-film-frame]`);if(!t.length)return;let n=t[Math.max(0,Math.min(Number(e)||0,t.length-1))];if(!(n instanceof HTMLElement))return;let r=()=>{i.scrollTo({top:n.offsetTop,behavior:`instant`})};r(),requestAnimationFrame(r);let a=n.querySelector(`img`);a instanceof HTMLImageElement&&!a.complete&&a.addEventListener(`load`,r,{once:!0})}function D(e,t){if(!r||!i)return;let n=Math.max(0,Math.min(Number(t)||0,e.length-1));i.innerHTML=e.map((e,t)=>{let n=e.kind===`before`?d.before:d.after;return`<figure class="work-film__frame" data-film-frame="${t}">
              <div class="work-film__shot">
                <img src="${_(e.ref,1600,`max`)}" alt="${g(n)} ${t+1}" width="1600" height="2000" />
                <figcaption>${g(n)}</figcaption>
              </div>
            </figure>`}).join(``),y(()=>{r.hidden=!1,document.body.classList.add(`is-film-open`),E(n)})}function O(e){e.querySelectorAll(`[data-film-open]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);if(!(t instanceof HTMLElement))return;let n=w(t);if(!n.length)return;let r=Number(e.getAttribute(`data-film-index`)||0);D(n,Number.isFinite(r)?r:0)})}),e.querySelectorAll(`[data-all-photos]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.work-card`);if(!(t instanceof HTMLElement))return;let n=w(t);n.length&&D(n,0)})})}function k(){T(),e.innerHTML=(p?f:f.slice(0,u)).map((e,t)=>C(e,t)).join(``),O(e),t&&n&&(t.hidden=!(f.length>u),n.textContent=p?d.showLess:`${d.showAll} (${f.length-u}+)`)}a?.addEventListener(`click`,T),i?.addEventListener(`click`,e=>{e.target instanceof Element&&(e.target.closest(`.work-film__shot, .work-film__close`)||T())}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&T()});function A(n){e.setAttribute(`aria-busy`,`false`),e.innerHTML=`<div class="works-empty" role="alert">
          <p>${n}</p>
          <button type="button" class="btn btn-ghost" id="works-retry">${g(d.retry)}</button>
        </div>`,document.getElementById(`works-retry`)?.addEventListener(`click`,j),t&&(t.hidden=!0)}async function j(){e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<p class="works-note">${g(d.loading)}</p>`;let r=`https://${o}.api.sanity.io/v2025-01-01/data/query/${s}?query=*%5B_type%20%3D%3D%20%22project%22%20%26%26%20published%20%3D%3D%20true%5D%20%7C%20order(completedAt%20desc%2C%20_createdAt%20desc)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_id%2Ctitle%2Cdescription%2CcompletedAt%2Cimage%2CbeforeImages%2Cgallery%0A%20%20%20%20%20%20%20%20%20%20%7D`,i=c?{Authorization:`Bearer ${c}`}:{};try{let a=await fetch(r,{headers:i});if(!a.ok)throw Error(`network`);if(f=(await a.json())?.result??[],e.setAttribute(`aria-busy`,`false`),!f.length){e.innerHTML=`<p class="works-empty">${g(d.none)}</p>`,t&&(t.hidden=!0);return}p=!1,k(),n?.addEventListener(`click`,()=>{p=!p,k(),p||document.getElementById(`tood`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}catch{A(d.error)}}j();