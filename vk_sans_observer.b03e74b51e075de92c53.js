(()=>{"use strict";var e,t={96208:(e,t,o)=>{o.d(t,{observeVkSans:()=>a});var r=o(307411);const n=e=>document.documentElement.style.setProperty(e,getComputedStyle(document.documentElement).getPropertyValue(e).replace(/^ *?["']VK Sans Display["'], ?/,"")),a=e=>{const t="vkSansCached";if("fonts"in document&&!r.vkSessionStorage.getItem(t)){const o="aа",a=[e,"--vk-sans-display"],s=()=>{a.forEach((e=>document.documentElement.style.removeProperty(e))),r.vkSessionStorage.setItem(t,String(!0))};a.forEach(n),Promise.all(['700 1em "VK Sans Display"'].map((e=>document.fonts.load(e,o)))).then(s).catch(s)}document.addEventListener("keydown",(e=>{e.altKey&&"KeyK"===e.code&&r.vkSessionStorage.removeItem(t)}))}},795337:(e,t,o)=>{var r,n,a,s=o(96208);(null==(n=window.vk)||null==(r=n.pe)?void 0:r.static_manager_dynamic_imports)&&(null==(a=window.vk)?void 0:a.stDomain)&&(o.p=window.vk.stDomain+"/dist/"),(0,s.observeVkSans)("--palette-vk-font");try{window.stManager.done(window.jsc("web/vk_sans_observer.js"))}catch(e){}}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(v=0;v<e.length;v++){for(var[o,n,a]=e[v],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(v--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[o,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.e=()=>Promise.resolve(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/dist/",(()=>{var e={83293:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,l]=o,d=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var v=l(r)}for(t&&t(o);d<s.length;d++)a=s[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(v)},o=self.webpackChunkvk=self.webpackChunkvk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[68592],(()=>r(795337)));n=r.O(n)})();