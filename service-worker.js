if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>i(e,l),c={module:{uri:l},exports:o,require:u};s[l]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rombit-case-2"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.b91bbb06.css",revision:null},{url:"/css/chunk-vendors.775015d7.css",revision:null},{url:"/img/current-location.a20d0c52.svg",revision:null},{url:"/img/logo-velo.98f11c8c.svg",revision:null},{url:"/img/pin_empty.d489df98.svg",revision:null},{url:"/img/pin_full.85ae7c9b.svg",revision:null},{url:"/img/pin_regular.97ef7cef.svg",revision:null},{url:"/index.html",revision:"a978277595ee84bc0c558495736e59c2"},{url:"/js/about.b33195cc.js",revision:null},{url:"/js/app.335624db.js",revision:null},{url:"/js/chunk-vendors.52576528.js",revision:null},{url:"/manifest.json",revision:"b7e4c657816d04342258bd238bc39a46"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map