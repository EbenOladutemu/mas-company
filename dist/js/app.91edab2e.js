(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0f249b16","chunk-31bb91cb":"64b39b0c","chunk-4cfb453b":"9d8620d6","chunk-d2f64278":"381cabb8"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-31bb91cb":1,"chunk-4cfb453b":1,"chunk-d2f64278":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"afc14c94","chunk-31bb91cb":"1ff10ab0","chunk-4cfb453b":"7f10667c","chunk-d2f64278":"aa1d1ddd"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],d.parentNode.removeChild(d),n(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2514:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hero"}},[n("div",{staticClass:"hero-container"},[t._t("page-name"),t._t("get-started")],2)])},r=[],s={},o=s,i=n("2877"),c=Object(i["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports},"371a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact-us"}},[n("div",{staticClass:"container"},[n("h1",{staticClass:"pt-4 mb-5"},[t._v("Contact Us")]),n("div",{staticClass:"flex-row-lg justify-between align-items-center"},[n("div",{staticClass:"mas-social text-start"},[n("p",[n("i",{staticClass:"fas fa-map-pin"}),n("span",[t._v("48, Circular Road")])]),n("p",[n("i",{staticClass:"fas fa-envelope"}),n("span",[n("a",{attrs:{href:"mailto:mascompanysllimited@gmail.com"}},[t._v("mascompanysllimited@gmail.com")])])]),n("p",[n("i",{staticClass:"fas fa-phone"}),n("span",[n("a",{attrs:{href:"tel:00232 78 082 834"}},[t._v("00232 78 082 834")]),t._v(", "),n("a",{attrs:{href:"tel:00232 79 427 272"}},[t._v("00232 79 427 272")])])])]),n("form",{staticClass:"mas-form",attrs:{action:"https://formsubmit.co/info@mas-companysl.com",method:"POST"}},[n("div",{staticClass:"form-floating mb-3"},[n("input",{staticClass:"form-control",attrs:{type:"text",name:"name",id:"floatingPassword",placeholder:"Your name",required:""}}),n("label",{attrs:{for:"floatingPassword"}},[t._v("Name")])]),n("div",{staticClass:"form-floating mb-3"},[n("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Your email",required:""}}),n("label",{attrs:{for:"email"}},[t._v("Email address")])]),n("div",{staticClass:"form-floating mb-3"},[n("input",{staticClass:"form-control",attrs:{type:"text",name:"subject",id:"subject",placeholder:"Subject",required:""}}),n("label",{attrs:{for:"subject"}},[t._v("Subject")])]),n("div",{staticClass:"form-floating mb-3"},[n("textarea",{staticClass:"form-control",attrs:{type:"text",name:"message",id:"message",placeholder:"Your message",rows:"8",required:""}}),n("label",{attrs:{for:"message"}},[t._v("Message")])]),n("div",{staticClass:"text-start"},[n("button",{staticClass:"btn btn-primary",staticStyle:{width:"10%"},attrs:{type:"submit"}},[t._v("Send")])])])])])])}],s={},o=s,i=(n("afc6"),n("2877")),c=Object(i["a"])(o,a,r,!1,null,"53092498",null);e["a"]=c.exports},4800:function(t,e,n){},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.63587234.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("Nav"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"back-to-top",attrs:{href:"#"}},[n("i",{staticClass:"icofont-simple-up"})])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",[a("router-link",{attrs:{id:"logo",to:"/"}},[a("img",{staticClass:"logo",attrs:{src:n("4ffd"),alt:"Bank3D logo",width:"50"}})]),a("button",{staticClass:"menu",attrs:{id:"menu","aria-label":"Main Menu"}},[a("svg",{attrs:{width:"100",height:"60",viewBox:"0 0 100 100"}},[a("path",{staticClass:"line line1",attrs:{d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),a("path",{staticClass:"line line2",attrs:{d:"M 20,50 H 80"}}),a("path",{staticClass:"line line3",attrs:{d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])]),a("div",{staticClass:"nav-container",attrs:{id:"navContainer"}},[a("ul",{staticClass:"nav-links",attrs:{id:"navLinks"}},[a("li",{staticClass:"toggle-menu"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"toggle-menu"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"toggle-menu"},[a("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),a("li",{staticClass:"toggle-menu"},[a("router-link",{attrs:{to:"/team"}},[t._v("Team")])],1),a("li",{staticClass:"toggle-menu"},[a("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._m(0)])])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"toggle-menu"},[n("a",{attrs:{href:"#contact-us"}},[t._v("Contact Us")])])}],c=(n("ac1f"),n("5319"),{mounted:function(){var t=this,e=document.getElementById("menu"),n=document.getElementById("logo"),a=document.querySelectorAll(".toggle-menu"),r=document.getElementsByClassName(".toggle-menu a"),s=document.getElementById("navContainer");e.addEventListener("click",(function(){e.classList.toggle("opened"),e.setAttribute("aria-expanded",e.classList.contains("opened")),s.classList.toggle("h-100")})),n.addEventListener("click",(function(){c()}));for(var o=0;o<a.length;o++)a[o].addEventListener("click",(function(){c()}));for(var i=0;i<r.length;i++)r[i].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace(" active","")),t.className+=" active"}));var c=function(){e.classList.remove("opened"),s.classList.remove("h-100")}}}),l=c,u=n("2877"),f=Object(u["a"])(l,o,i,!1,null,null,null),d=f.exports,m={components:{Nav:d}},p=m,b=(n("5c0b"),Object(u["a"])(p,r,s,!1,null,null,null)),v=b.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero",[n("h1",{attrs:{slot:"page-name"},slot:"page-name"},[n("vue-typed-js",{attrs:{strings:["Welcome to MAS Company (SL) Limited",""],typeSpeed:100,backSpeed:20,loop:!0}},[n("h1",{staticClass:"typing"})])],1),n("a",{attrs:{slot:"get-started",href:"#get-started"},slot:"get-started"},[n("button",{staticClass:"btn btn-primary get-started"},[t._v("Get Started")])])]),n("section",{attrs:{id:"get-started"}},[t._m(0),n("router-link",{attrs:{to:"about"}},[n("button",{staticClass:"btn btn-primary get-started mt-4"},[t._v("Learn More")])])],1),n("Contact"),n("Footer")],1)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("strong",[t._v("MAS Company (SL) Limited")]),t._v(" is a Sierra Leone Based Company that started official business in Sierra Leone under the companies Act, CAP 249 of Sierra Leone in 2010. Our Company has the vision of becoming the number one regional commercial company in Africa driven by a business philosophy with a culture of service excellence, integrity and adherence to due process, safety, health, quality and environmental standards. ")])}],C=n("2514"),_=n("371a"),k=n("fd2d"),w=n("8cb8");a["a"].use(w["default"]);var S={name:"Home",components:{Hero:C["a"],Contact:_["a"],Footer:k["a"]},created:function(){document.title="Home | MAS Company SL Ltd."}},E=S,L=(n("cccb"),Object(u["a"])(E,g,y,!1,null,null,null)),j=L.exports;a["a"].use(h["a"]);var x=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/services",name:"services",component:function(){return n.e("chunk-4cfb453b").then(n.bind(null,"f23e"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-d2f64278").then(n.bind(null,"acca"))}},{path:"/team",name:"Team",component:function(){return n.e("chunk-31bb91cb").then(n.bind(null,"0767"))}}],A=new h["a"]({mode:"history",base:"/",routes:x,scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),O=A,M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("bf3b"),n("4800");a["a"].config.productionTip=!1,new a["a"]({router:O,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ced":function(t,e,n){},"760c":function(t,e,n){"use strict";n("c3f5")},8060:function(t,e,n){},"9c0c":function(t,e,n){},afc6:function(t,e,n){"use strict";n("8060")},bf3b:function(t,e,n){},c3f5:function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1717579170127!2d-13.232232285217261!3d8.482674493901001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c343f123b88b%3A0xaee258c4de6ad1c4!2sMAS%20Company%20(SL)%20Limited!5e0!3m2!1sen!2ssl!4v1635364158064!5m2!1sen!2ssl",allowfullscreen:"",loading:"lazy"}}),n("div",[n("p",[t._v("Copyright "+t._s(t.year)+" MAS Company (SL) Limited. All rights reserved.")]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Crafted by "),n("a",{attrs:{href:"http://eben.com.ng",target:"_blank",rel:"noopener noreferrer",title:"Eben Web Krafts"}},[t._v(" Eben ")])])}],s={data:function(){return{year:(new Date).getFullYear()}}},o=s,i=(n("760c"),n("2877")),c=Object(i["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.91edab2e.js.map