import{h as l,i as c,n as f,m as b,j as o,k as d,l as p,v as _}from"./D83oB2Jx.js";let s=!1,i=Symbol();function g(e,u,r){const n=r[u]??(r[u]={store:null,source:b(void 0),unsubscribe:f});if(n.store!==e&&!(i in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=f;else{var t=!0;n.unsubscribe=o(e,a=>{t?n.source.v=a:_(n.source,a)}),t=!1}return e&&i in r?d(e):p(n.source)}function y(){const e={};function u(){l(()=>{for(var r in e)e[r].unsubscribe();c(e,i,{enumerable:!1,value:!0})})}return[e,u]}function m(e){var u=s;try{return s=!1,[e(),s]}finally{s=u}}export{g as a,m as c,y as s};
