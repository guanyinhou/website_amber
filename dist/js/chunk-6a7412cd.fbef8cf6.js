(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a7412cd"],{"02f8":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"works"},[e("div",{staticClass:"container"},[e("h1",[t._v("作品集")]),e("hr"),e("br"),e("ul",{staticClass:"row prod-list"},t._l(t.prods,(function(a){return e("li",{key:a.id,staticClass:"col-sm-3"},[e("router-link",{attrs:{to:"/product/"+a.id}},[e("div",{staticClass:"prod-image"},[e("img",{attrs:{src:a.imageUrl[0],alt:a.title}})]),e("div",{staticClass:"prod-title"},[t._v(t._s(a.title))]),a.origin_price===a.price?e("div",{staticClass:"prod-origin-price"},[t._v(" 售價 "+t._s(t._f("currency")(a.origin_price))+" ")]):e("span",[e("div",{staticClass:"prod-origin-price old-price"},[t._v(" 售價 "+t._s(t._f("currency")(a.origin_price))+" ")]),e("div",{staticClass:"prod-price"},[e("b",[t._v("特價 "+t._s(t._f("currency")(a.price)))])])])]),e("a",{staticClass:"add-to-cart",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addToCart(a.id)}}},[e("i",{staticClass:"fa fa-cart-plus"})])],1)})),0),e("hr"),e("div",{staticClass:"float-right"},[e("pagination",{attrs:{pages:t.pagination},on:{update:t.getProds}})],1)])])},s=[],r=(e("99af"),e("4160"),e("159b"),e("1799")),n={components:{pagination:r["a"]},data:function(){return{prods:[],isLoading:!1,pagination:{}}},methods:{addToCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/shopping"),s={product:t,quantity:e};console.log(s),this.$http.post(i,s).then((function(t){a.isLoading=!1,console.log(t),a.$bus.$emit("message:push",t.data.data.product.title+"已加入購物車","success"),a.$bus.$emit("get-cart-num")})).catch((function(t){a.isLoading=!1,console.dir(t.response.data.errors[0]),a.$bus.$emit("message:push",t.response.data.errors[0],"danger")}))},updateCartTotal:function(){var t=this;this.carts.forEach((function(a){t.cartTotal+=a.product.price*a.quantity}))},getProds:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/products?page=").concat(a);this.$http.get(e).then((function(a){t.isLoading=!1,t.prods=a.data.data,t.pagination=a.data.meta.pagination})).catch((function(a){console.dir(a),t.isLoading=!1,t.$bus.$emit("message:push",a.response.data.message,"danger")}))}},created:function(){this.getProds()}},c=n,o=e("2877"),p=Object(o["a"])(c,i,s,!1,null,null,null);a["default"]=p.exports},1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(" "+t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],r={props:["pages"],methods:{updatePage:function(t){this.$emit("update",t)}}},n=r,c=e("2877"),o=Object(c["a"])(n,i,s,!1,null,null,null);a["a"]=o.exports},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),r=e("e8b5"),n=e("861d"),c=e("7b0b"),o=e("50c4"),p=e("8418"),l=e("65f0"),u=e("1dde"),d=e("b622"),g=e("2d00"),f=d("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",_=g>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=u("concat"),m=function(t){if(!n(t))return!1;var a=t[f];return void 0!==a?!!a:r(t)},C=!_||!b;i({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,i,s,r,n=c(this),u=l(n,0),d=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],m(r)){if(s=o(r.length),d+s>h)throw TypeError(v);for(e=0;e<s;e++,d++)e in r&&p(u,d,r[e])}else{if(d>=h)throw TypeError(v);p(u,d++,r)}return u.length=d,u}})}}]);
//# sourceMappingURL=chunk-6a7412cd.fbef8cf6.js.map