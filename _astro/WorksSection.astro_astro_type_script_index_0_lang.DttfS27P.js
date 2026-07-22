var e=document.getElementById(`works-grid`),t=document.getElementById(`works-actions`),n=document.getElementById(`works-more`);if(!e)throw Error(`works-grid missing`);var r=e.dataset.project,i=e.dataset.dataset||`production`,a=e.dataset.token||``,o=Number(e.dataset.initial||2),s={loading:e.dataset.i18nLoading||``,showAll:e.dataset.i18nShowAll||``,showLess:e.dataset.i18nShowLess||``,none:e.dataset.i18nNone||``,noneLink:e.dataset.i18nNoneLink||``,error:e.dataset.i18nError||``,retry:e.dataset.i18nRetry||``,before:e.dataset.i18nBefore||``,after:e.dataset.i18nAfter||``,compare:e.dataset.i18nCompare||``,morePhotos:e.dataset.i18nMorePhotos||``},c=[],l=!1;function u(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function d(e,t=1e3){if(!e)return``;let n=e.replace(`image-`,``).split(`-`),a=n.slice(0,-1).join(`-`),o=n[n.length-1]||`jpg`;return a?`https://cdn.sanity.io/images/${r}/${i}/${a}.${o}?w=${t}&h=${Math.round(t*1.25)}&fit=crop&auto=format`:``}function f(e,t){let n=d(e),r=d(t);return r?n?`<div class="ba" data-ba style="--pos: 52%">
          <img class="ba__after" src="${r}" alt="${u(s.after)}" loading="lazy" width="1000" height="1250" draggable="false" />
          <div class="ba__before-clip" aria-hidden="true">
            <img class="ba__before" src="${n}" alt="" loading="lazy" width="1000" height="1250" draggable="false" />
          </div>
          <span class="ba__tag ba__tag--before">${u(s.before)}</span>
          <span class="ba__tag ba__tag--after">${u(s.after)}</span>
          <div class="ba__handle" aria-hidden="true"><span></span></div>
          <input
            class="ba__range"
            type="range"
            min="0"
            max="100"
            value="52"
            aria-label="${u(s.compare)}"
          />
        </div>`:`<figure class="ba-single">
            <img src="${r}" alt="${u(s.after)}" loading="lazy" width="1000" height="1250" />
            <figcaption>${u(s.after)}</figcaption>
          </figure>`:``}function p(e){if(!e.length)return``;let t=e.map((e,t)=>`<figure class="work-extra">
              <img src="${d(e,640)}" alt="${u(s.after)} ${t+1}" loading="lazy" width="640" height="800" />
            </figure>`).join(``);return`<details class="work-extras">
          <summary>${u(s.morePhotos)} (${e.length})</summary>
          <div class="work-extras-grid">${t}</div>
        </details>`}function m(e,t){let n=(e.beforeImages||[]).map(e=>e?.asset?._ref).filter(Boolean),r=e.image?.asset?._ref,i=[...(e.gallery||[]).map(e=>e?.asset?._ref).filter(Boolean)];n.length>1&&i.push(...n.slice(1));let a=e.description?`<p>${u(e.description)}</p>`:``,o=e.completedAt?`<time class="work-date" datetime="${u(e.completedAt)}">${u(e.completedAt)}</time>`:``;return`<article class="work-card" style="animation-delay:${t*.05}s">
          <header class="work-head">
            <h3>${u(e.title)}</h3>
            ${o}
            ${a}
          </header>
          ${f(n[0],r)}
          ${p(i)}
        </article>`}function h(e){e.querySelectorAll(`[data-ba]`).forEach(e=>{let t=e.querySelector(`.ba__range`);if(!(t instanceof HTMLInputElement))return;let n=n=>{let r=Math.max(0,Math.min(100,Number(n)));e.style.setProperty(`--pos`,`${r}%`),t.value=String(r)};t.addEventListener(`input`,()=>n(t.value));let r=t=>{if(t.pointerType===`mouse`&&t.buttons===0)return;let r=e.getBoundingClientRect();if(!r.width)return;let i=(t.clientX-r.left)/r.width*100;n(i)};e.addEventListener(`pointerdown`,n=>{n.target!==t&&(e.setPointerCapture(n.pointerId),r(n))}),e.addEventListener(`pointermove`,t=>{e.hasPointerCapture(t.pointerId)&&r(t)})})}function g(){e.innerHTML=(l?c:c.slice(0,o)).map((e,t)=>m(e,t)).join(``),h(e),t&&n&&(t.hidden=!(c.length>o),n.textContent=l?s.showLess:`${s.showAll} (${c.length-o}+)`)}function _(n){e.setAttribute(`aria-busy`,`false`),e.innerHTML=`<div class="works-empty" role="alert">
          <p>${n}</p>
          <button type="button" class="btn btn-ghost" id="works-retry">${u(s.retry)}</button>
        </div>`,document.getElementById(`works-retry`)?.addEventListener(`click`,v),t&&(t.hidden=!0)}async function v(){e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<p class="works-note">${u(s.loading)}</p>`;let o=`https://${r}.api.sanity.io/v2025-01-01/data/query/${i}?query=*%5B_type%20%3D%3D%20%22project%22%20%26%26%20published%20%3D%3D%20true%5D%20%7C%20order(completedAt%20desc%2C%20_createdAt%20desc)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_id%2Ctitle%2Cdescription%2CcompletedAt%2Cimage%2CbeforeImages%2Cgallery%0A%20%20%20%20%20%20%20%20%20%20%7D`,d=a?{Authorization:`Bearer ${a}`}:{};try{let r=await fetch(o,{headers:d});if(!r.ok)throw Error(`network`);if(c=(await r.json())?.result??[],e.setAttribute(`aria-busy`,`false`),!c.length){e.innerHTML=`<p class="works-empty">${u(s.none)} <a href="/studio/">${u(s.noneLink)}</a>.</p>`,t&&(t.hidden=!0);return}l=!1,g(),n?.addEventListener(`click`,()=>{l=!l,g(),l||document.getElementById(`tood`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}catch{_(s.error)}}v();