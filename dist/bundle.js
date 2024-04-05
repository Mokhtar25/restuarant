(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(601),o=n.n(r),i=n(314),a=n.n(i),c=n(417),s=n.n(c),d=new URL(n(722),n.b),u=a()(o()),l=s()(d);u.push([e.id,`\n:root{\n    --primecolor : rgba(0,0,0,0.7);\n}\n\nbody, html{\n    height: 100%;\n    background-color: whitesmoke;\n    background-image: url(${l});\n    padding: 0 0;\n    margin: 0 0;\n}\n*{\n        transition: all .1.3s ease-in-out;\n\n}\nnav{\n    position: sticky;\n    top: 0%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5rem;\n    background:var(--primecolor);\n    box-shadow: 0 30px 40px rgba(0,0,0,.1);\n    height: 80px;\n    \n    border: 1px solid white;\n    border-left: 0;\n    border-right: 0;\n    border-top: 0;\n}\n\nbutton{\n    border: 2px solid whitesmoke;\n    border-radius: 5rem;\n    \n    padding: 10px;\n    background: none;\n    color: whitesmoke;\n    font-size: 1.8rem;\n}\nbutton:hover{\n    color: white;\n\n    background-color: gray;\n\n    cursor: pointer;\n    \n}\nbutton:active{\n    background-color: white;\n\n        transition: all .1s ease-in-out;\n    }\n.footer{\n    position: relative;\n    bottom: 1%;\n    /* margin-top: auto; */\n    text-align: center;\n    height: 4rem;\n    line-height: 4rem;\n    background-color: var(--primecolor);\n    width: 100%;\n    text-justify: center;\n    color: white;\n    font-size: 1.3rem;\n    \n}\n\n.nav{\n    background: lightblue;\n    font-size: 6rem;\n    text-align: center;\n    text-indent: center;\n    height: 15%;\n}\n\n.about_wrapper{\n    /* background-image: url('static/chef.jpg'); */\n    height: 100%;\n}\n.about_text{\n    display: flex;\n    color:white;\n    background-color: rgb(0,0,0,0.3);\n    align-items: center;\n    justify-self: center;\n    font-size: 2rem;\n    text-shadow: 1px 1px 1px black;\n    padding: 15%;\n    padding-top: 10%;\n\n}\n\n\n#content{\n    min-height: 100%;\n    /* background: url('static/chef.jpg'); */\n}\n\n\n.home_wrapper{\n    height: 50%;\n    display: flex;\n    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0));\n    flex-direction: column;\n    align-items: center;\n    padding-top: 55px;\n    justify-content: start;\n}\n\n\nh2{\n    padding: 0 0;\n    font-size: 2rem;\n    margin:  0 0;\n    color: white;\n}\n\np{\n\n    font-size: 1.4rem;\n    color: white;\n    width: 50%;\n}\n\n\na{\n    color: gray;\n}\n.menu_wrapper{\n    background-color: rgba(0,0,0,0.7);\n    height: 100%;\n    padding-top:50px ;\n}\n.card{\n    display: flex;\n    gap: 50px;\n    align-items: center;\n    justify-content: center;\n    padding: 35px;\n    padding-bottom: 50px;\n}\nimg{\n    height: 400px;\n    width: 300px;\n    border-radius: 1rem;\n}\n.card .text{\n    width: 40%;\n    color: white;\n    font-size: 1.3rem;\n}\n\n\n\n\n\n\n`,""]);const p=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},722:(e,t,n)=>{e.exports=n.p+"955707dfa4c90f0ff93f.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.createElement("div");e.classList.add("home_wrapper");const t=document.createElement("h2");t.textContent="This Resturant is good";const n=document.createElement("p");return n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto sit repellat placeat vel, quos neque vero saepe cumque nostrum, enim aperiam ullam error necessitatibus. Sit ipsa voluptatum quam voluptatibus.",e.appendChild(t),e.appendChild(n),e}const t=n.p+"bde93cb6c473e0b42e07.jpg",r=n.p+"c05be5e0982b9bfbf79c.jpg";var o=n(72),i=n.n(o),a=n(825),c=n.n(a),s=n(659),d=n.n(s),u=n(56),l=n.n(u),p=n(540),m=n.n(p),f=n(113),h=n.n(f),g=n(208),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=m(),i()(g.A,b),g.A&&g.A.locals&&g.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector("#content"),o=document.querySelector(".home"),i=document.querySelector(".menu"),a=document.querySelector(".about");n.innerHTML="";let c=e();n.appendChild(c),o.addEventListener("click",(()=>{n.innerHTML="";let t=e();n.appendChild(t)})),a.addEventListener("click",(()=>{n.innerHTML="";let e=function(){const e=document.createElement("div"),t=document.createElement("div");return t.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",e.classList.add("about_wrapper"),t.classList.add("about_text"),e.appendChild(t),e}();n.appendChild(e)})),i.addEventListener("click",(()=>{n.innerHTML="";let e=function(){const e=document.createElement("div");e.classList.add("menu_wrapper");const n=document.createElement("div");n.classList.add("card");const o=document.createElement("img");o.classList.add("img");const i=new Image;i.src=r,i.alt="salad",o.appendChild(i);const a=document.createElement("div");a.classList.add("text"),a.textContent="Lorem Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. ipsum Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",n.appendChild(i),n.appendChild(a),e.appendChild(n);const c=document.createElement("div");c.classList.add("card");const s=new Image;s.src=t,s.alt="side dish";const d=document.createElement("div");return d.textContent="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",d.classList.add("text"),c.appendChild(s),c.appendChild(d),e.appendChild(c),e}();n.appendChild(e)}))}))})()})();