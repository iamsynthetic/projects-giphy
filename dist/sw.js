if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const o=e=>i(e,l),t={module:{uri:l},exports:a,require:o};s[l]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"70748b42cf450499a97fae1e87dd9122"},{url:"assets/_...all_.1e8439ac.js",revision:null},{url:"assets/404.24407b01.js",revision:null},{url:"assets/about.8e643e18.js",revision:null},{url:"assets/app.38990069.css",revision:null},{url:"assets/app.e12f59e1.js",revision:null},{url:"assets/home.6cf86a9f.css",revision:null},{url:"assets/home.735c77fa.js",revision:null},{url:"assets/README.cc3422af.js",revision:null},{url:"assets/top.9804b6d7.js",revision:null},{url:"assets/vendor.1b027c31.js",revision:null},{url:"assets/virtual_pwa-register.3dc6281c.js",revision:null},{url:"index.html",revision:"00c63fca9122a053909bdd6749a4fe61"},{url:"readme.html",revision:"eaab3ad79b7dafb9a5595245908b97f4"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
