(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a7412cd"],{"02f8":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"works"},[s("div",{staticClass:"container"},[s("h1",[t._v("作品集")]),s("hr"),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"prod-cate"},[s("h4",[t._v("作品分類")]),s("ul",[s("li",[s("a",{class:{active:t.isAll},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getAll(a)}}},[t._v(" 全部 ")])]),s("li",[s("a",{class:{active:t.isLand},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getLand()}}},[t._v(" 風景畫 ")])]),s("li",[s("a",{class:{active:t.isSea},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getSea()}}},[t._v(" 海景畫 ")])])])])]),s("div",{staticClass:"col-sm-9"},[s("ul",{staticClass:"row prod-list"},t._l(t.prods,(function(a){return s("li",{key:a.id,staticClass:"col-lg-3 col-md-4 col-sm-6 col-6 full-479"},[s("router-link",{attrs:{to:"/product/"+a.id}},[s("div",{staticClass:"prod-image"},[s("img",{attrs:{src:a.imageUrl[0],alt:a.title}})]),s("div",{staticClass:"prod-title"},[t._v(t._s(a.title))]),a.origin_price===a.price?s("div",{staticClass:"prod-origin-price"},[t._v(" 售價 "+t._s(t._f("currency")(a.origin_price))+" ")]):s("span",[s("div",{staticClass:"prod-origin-price old-price"},[t._v(" 售價 "+t._s(t._f("currency")(a.origin_price))+" ")]),s("div",{staticClass:"prod-price"},[s("b",[t._v("特價 "+t._s(t._f("currency")(a.price)))])])])]),s("a",{staticClass:"add-to-cart",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.addToCart(a.id)}}},[s("i",{staticClass:"fa fa-cart-plus"})])],1)})),0)])]),s("hr"),s("div",{staticClass:"float-right"},[s("pagination",{attrs:{pages:t.pagination},on:{update:t.getProds}})],1)])])},i=[],n=(s("99af"),s("4de4"),s("4160"),s("159b"),s("1799")),r={components:{pagination:n["a"]},data:function(){return{prods:[],isLoading:!1,pagination:{},isAll:!0,isLand:!1,isSea:!1}},methods:{addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/shopping"),i={product:t,quantity:s};console.log(i),this.$http.post(e,i).then((function(t){a.isLoading=!1,console.log(t),a.$bus.$emit("message:push",t.data.data.product.title+"已加入購物車","success"),a.$bus.$emit("get-cart-num")})).catch((function(t){a.isLoading=!1,console.dir(t.response.data.errors[0]),a.$bus.$emit("message:push",t.response.data.errors[0],"danger")}))},updateCartTotal:function(){var t=this;this.carts.forEach((function(a){t.cartTotal+=a.product.price*a.quantity}))},getProds:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/products?page=").concat(a);this.$http.get(s).then((function(a){t.isLoading=!1,t.prods=a.data.data,console.log(t.prods),t.pagination=a.data.meta.pagination})).catch((function(a){console.dir(a),t.isLoading=!1,t.$bus.$emit("message:push",a.response.data.message,"danger")}))},getAll:function(){this.getProds(),this.isAll=!0,this.isLand=!1,this.isSea=!1},getLand:function(){var t=this;this.isLoading=!0,this.isAll=!1,this.isLand=!0,this.isSea=!1;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/products");this.$http.get(a).then((function(a){t.isLoading=!1,t.prods=a.data.data,console.log(a),t.pagination=a.data.meta.pagination;var s=JSON.parse(JSON.stringify(t.prods));s=t.prods.filter((function(t){return"風景"===t.category})),t.prods=s})).catch((function(a){console.dir(a),t.isLoading=!1,t.$bus.$emit("message:push",a.response.data.message,"danger")}))},getSea:function(){var t=this;this.isLoading=!0,this.isAll=!1,this.isLand=!1,this.isSea=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/products");this.$http.get(a).then((function(a){t.isLoading=!1,t.prods=a.data.data,console.log(a),console.log(t.prods.length),t.pagination=a.data.meta.pagination;var s=JSON.parse(JSON.stringify(t.prods));s=t.prods.filter((function(t){return"海景"===t.category})),t.prods=s})).catch((function(a){console.dir(a),t.isLoading=!1,t.$bus.$emit("message:push",a.response.data.message,"danger")}))}},created:function(){this.getProds()}},o=r,c=s("2877"),l=Object(c["a"])(o,e,i,!1,null,null,null);a["default"]=l.exports},1799:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,e){return s("li",{key:e,staticClass:"page-item",class:{active:a===t.pages.current_page}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.updatePage(a)}}},[t._v(" "+t._s(a)+" ")])])})),s("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},i=[],n={props:["pages"],methods:{updatePage:function(t){this.$emit("update",t)}}},r=n,o=s("2877"),c=Object(o["a"])(r,e,i,!1,null,null,null);a["a"]=c.exports},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),o=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),p=s("1dde"),u=s("b622"),g=s("2d00"),h=u("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",b=g>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=p("concat"),_=function(t){if(!r(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},C=!b||!m;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,s,e,i,n,r=o(this),p=d(r,0),u=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?r:arguments[a],_(n)){if(i=c(n.length),u+i>f)throw TypeError(v);for(s=0;s<i;s++,u++)s in n&&l(p,u,n[s])}else{if(u>=f)throw TypeError(v);l(p,u++,n)}return p.length=u,p}})}}]);
//# sourceMappingURL=chunk-6a7412cd.c4a5cd1e.js.map