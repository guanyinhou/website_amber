(function(e){function n(n){for(var a,c,u=n[0],i=n[1],s=n[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-02812be0":"fea61980","chunk-129e763b":"ed19e147","chunk-1df1d5b7":"6aa33f54","chunk-23986b68":"e895954f","chunk-25d78722":"8a0b0540","chunk-266172cb":"f5647453","chunk-2d0af536":"d1eae919","chunk-2d0af82c":"7ada5fd2","chunk-34c162cd":"58c6a704","chunk-38383901":"3164bf08","chunk-3a472908":"b3586877","chunk-4a304661":"7e7e8015","chunk-56c9de4d":"696aa896","chunk-5a4d768a":"29a0a167","chunk-69fbdd7e":"adf3fddc","chunk-6d66e4a9":"40160c5a","chunk-a42d0e08":"664d50fa","chunk-e214cf8a":"d192f48f","chunk-eb21d1aa":"6517afea","chunk-ec0047f2":"e0aeb92e"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-23986b68":1,"chunk-25d78722":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-02812be0":"31d6cfe0","chunk-129e763b":"31d6cfe0","chunk-1df1d5b7":"31d6cfe0","chunk-23986b68":"9e92ea3c","chunk-25d78722":"847d21a5","chunk-266172cb":"31d6cfe0","chunk-2d0af536":"31d6cfe0","chunk-2d0af82c":"31d6cfe0","chunk-34c162cd":"31d6cfe0","chunk-38383901":"31d6cfe0","chunk-3a472908":"31d6cfe0","chunk-4a304661":"31d6cfe0","chunk-56c9de4d":"31d6cfe0","chunk-5a4d768a":"31d6cfe0","chunk-69fbdd7e":"31d6cfe0","chunk-6d66e4a9":"31d6cfe0","chunk-a42d0e08":"31d6cfe0","chunk-e214cf8a":"31d6cfe0","chunk-eb21d1aa":"31d6cfe0","chunk-ec0047f2":"31d6cfe0"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===a||d===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}r[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/website_amber/dist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var h=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0763":function(e,n,t){e.exports=t.p+"img/OPL00009-1.cab31cb6.jpg"},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("4160"),t("b64b"),t("159b"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=t("bc3a"),r=t.n(c),o=t("a7fe"),u=t.n(o),i=t("1157"),s=t.n(i),d=t("7bb1"),l=t("4c93"),h=t("60d4");t("f9e3"),t("4989");a["a"].prototype.$bus=new a["a"];var f=t("9062"),p=t.n(f),m=(t("e40d"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{style:{backgroundImage:"url("+e.bg+")"},attrs:{id:"app"}},[t("Toast"),t("router-view"),t("Footer"),t("Gototop")],1)}),b=[],k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a",{class:{"`show`":e.show},attrs:{href:"#",id:"back-to-top",title:"Back to top"},on:{click:function(n){return n.preventDefault(),e.scrollTop(n)}}},[t("i",{staticClass:"fa fa-angle-up"})])},v=[],g={data:function(){return{show:!1}},mounted:function(){$(window).scroll((function(){$(this).scrollTop()>400?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")}))},methods:{scrollTop:function(){$("html, body").animate({scrollTop:0},1e3)}}},y=g,w=t("2877"),_=Object(w["a"])(y,k,v,!1,null,null,null),C=_.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"toast-outer"},e._l(e.messages,(function(n,a){return t("div",{key:a,staticClass:"toast fade show",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false",id:"toast-"+a}},[t("div",{staticClass:"toast-header"},[t("div",{staticClass:"alert-color",class:"bg-"+n.status}),t("strong",{staticClass:"mr-auto"},[e._v("訊息")]),t("small",[e._v("現在")]),t("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(n){return e.closeToast("toast-"+a)}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),t("div",{staticClass:"toast-body"},[e._v(" "+e._s(n.message)+" ")])])})),0)},j=[],T=(t("a434"),{data:function(){return{messages:[]}},created:function(){var e=this;e.$bus.$on("message:push",(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";e.updateMessage(n,t)}))},methods:{updateMessage:function(e,n){var t=Math.floor(new Date/1e3);this.messages.push({message:e,status:n,timestamp:t}),this.removeMessageWithTiming(t)},removeMessageWithTiming:function(e){var n=this;setTimeout((function(){n.messages.forEach((function(t,a){t.timestamp===e&&n.messages.splice(a,1)}))}),5e3)},closeToast:function(e){$("#".concat(e)).toast("hide")}}}),E=T,x=Object(w["a"])(E,O,j,!1,null,null,null),A=x.exports,P=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("footer",[t("div",{staticClass:"container"},[t("p",{staticClass:"text-center"},[e._v(" Copyright © 2020. All Rights Reserved by GuanYin Hou. E-mail: moonightriver@gmail.com ")])])])])}],S={},q=Object(w["a"])(S,P,M,!1,null,null,null),L=q.exports,F=t("0763"),N=t.n(F),B={components:{Gototop:C,Toast:A,Footer:L},data:function(){return{bg:N.a}}},D=B,H=(t("5c0b"),Object(w["a"])(D,m,b,!1,null,null,null)),W=H.exports,G=(t("d3b7"),t("8c4f"));a["a"].use(G["a"]);var I=[{name:"Index",path:"/",component:function(){return t.e("chunk-129e763b").then(t.bind(null,"4bac"))}},{path:"/front",name:"Home",component:function(){return t.e("chunk-a42d0e08").then(t.bind(null,"9495"))},children:[{name:"Home",path:"/home",component:function(){return t.e("chunk-266172cb").then(t.bind(null,"ec5a"))}},{name:"About",path:"/about",component:function(){return t.e("chunk-56c9de4d").then(t.bind(null,"9cbb"))}},{name:"Works",path:"/works",component:function(){return t.e("chunk-02812be0").then(t.bind(null,"02f8"))}},{name:"Work",path:"/product/:id",component:function(){return t.e("chunk-eb21d1aa").then(t.bind(null,"4516"))}},{name:"Contact",path:"/contact",component:function(){return t.e("chunk-1df1d5b7").then(t.bind(null,"f743"))}},{name:"Cart",path:"/cart",component:function(){return t.e("chunk-69fbdd7e").then(t.bind(null,"62b3"))}},{name:"Favorite",path:"/favorite",component:function(){return t.e("chunk-6d66e4a9").then(t.bind(null,"b6d4"))}},{name:"Checkout",path:"/checkout",component:function(){return t.e("chunk-34c162cd").then(t.bind(null,"2cf6"))}},{name:"CheckoutFinish",path:"/checkout_finish",component:function(){return t.e("chunk-2d0af82c").then(t.bind(null,"0f44"))}},{name:"Order",path:"/order",component:function(){return t.e("chunk-ec0047f2").then(t.bind(null,"b84e"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-38383901").then(t.bind(null,"62d5"))}},{path:"/admin",name:"Back",component:function(){return t.e("chunk-2d0af536").then(t.bind(null,"0e9d"))},children:[{name:"Dashboard",path:"",component:function(){return t.e("chunk-25d78722").then(t.bind(null,"a92e"))},meta:{requiresAuth:!0}},{name:"Products",path:"products",component:function(){return t.e("chunk-23986b68").then(t.bind(null,"372d"))},meta:{requiresAuth:!0}},{name:"Coupon",path:"coupon",component:function(){return t.e("chunk-e214cf8a").then(t.bind(null,"73a8"))},meta:{requiresAuth:!0}},{name:"Pictures",path:"pictures",component:function(){return t.e("chunk-5a4d768a").then(t.bind(null,"2a16"))},meta:{requiresAuth:!0}},{name:"Orders",path:"Orders",component:function(){return t.e("chunk-3a472908").then(t.bind(null,"0d5f"))},meta:{requiresAuth:!0}},{name:"Animate",path:"animate",component:function(){return t.e("chunk-4a304661").then(t.bind(null,"d0f2"))},meta:{requiresAuth:!0}}]}],J=new G["a"]({routes:I}),R=J,V=(t("a9e3"),t("b680"),t("ac1f"),t("5319"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var a=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return a})))});window.$=s.a,a["a"].config.productionTip=!1,a["a"].use(u.a,r.a),a["a"].filter("currency",V),a["a"].use(p.a),a["a"].component("Loading",p.a),Object.keys(l).forEach((function(e){Object(d["d"])(e,l[e])})),Object(d["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(d["e"])("tw",h),a["a"].component("ValidationObserver",d["a"]),a["a"].component("ValidationProvider",d["b"]),new a["a"]({router:R,render:function(e){return e(W)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var a=t("9c0c"),c=t.n(a);c.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.e625fe35.js.map