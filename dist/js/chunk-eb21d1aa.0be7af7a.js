(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb21d1aa"],{4516:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"work"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center"},[e("h1",[t._v(t._s(t.work.title))])]),e("hr"),e("div",{staticClass:"prod-zone"},[t._l(5,(function(i,a){return e("div",{key:a,staticClass:"prod-img"},[e("img",{attrs:{src:t.work.imageUrl[a]}})])})),e("div",{staticClass:"text-center"},[t.work.origin_price===t.work.price?e("div",{staticClass:"prod-origin-price"},[t._v(" 售價 "+t._s(t._f("currency")(t.work.origin_price))+" ")]):e("span",[e("div",{staticClass:"prod-origin-price old-price"},[t._v(" 售價 "+t._s(t._f("currency")(t.work.origin_price))+" ")]),e("div",{staticClass:"prod-price"},[e("h2",[t._v("特價 "+t._s(t._f("currency")(t.work.price)))])])]),e("div",{staticClass:"add-to-cart"},[e("button",{staticClass:"btn",on:{click:function(i){return t.addToCart(t.work.id)}}},[e("i",{staticClass:"fa fa-cart-plus"}),t._v(" 加入購物車 ")]),-1===t.favorited.indexOf(t.work.id)?e("button",{staticClass:"btn",on:{click:function(i){return t.updateFavorite(t.work.id)}}},[e("i",{staticClass:"fa fa-heart-o"}),t._v(" 加入我的最愛 ")]):e("button",{staticClass:"btn",on:{click:function(i){return t.updateFavorite(t.work.id)}}},[e("i",{staticClass:"fa fa-heart text-danger"}),t._v(" 已加入我的最愛 ")])])]),e("div",{staticClass:"prod-content"},[e("div",{staticClass:"sub-title"},[t._v("產品介紹")]),e("div",{domProps:{innerHTML:t._s(t.work.content)}})]),e("div",{staticClass:"prod-content"},[e("div",{staticClass:"sub-title"},[t._v("產品材質")]),e("p",[t._v(t._s(t.work.description))])])],2)])])},r=[],s=(e("99af"),e("c975"),e("a434"),{data:function(){return{work:[],favorited:JSON.parse(localStorage.getItem("favoriteList"))||[]}},created:function(){this.getWork()},methods:{updateFavorite:function(t){-1===this.favorited.indexOf(t)?(this.favorited.push(t),this.$bus.$emit("message:push","已加入我的最愛","info")):(this.favorited.splice(this.favorited.indexOf(t),1),this.$bus.$emit("message:push","已移出我的最愛","info")),localStorage.setItem("favoriteList",JSON.stringify(this.favorited)),this.favoriteTotalNum=this.favorited.length,this.$bus.$emit("get-favorite-num:favorited",t)},getWork:function(){var t=this,i=this.$route.params.id;this.$http.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/product/").concat(i)).then((function(i){t.work=i.data.data}))},addToCart:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/shopping"),r={product:t,quantity:e};console.log(r),this.$http.post(a,r).then((function(t){console.log(t),i.$bus.$emit("message:push",t.data.data.product.title+"已加入購物車","info"),i.$bus.$emit("get-cart-num")})).catch((function(t){i.$bus.$emit("message:push",t.response.data.errors[0],"danger")}))}}}),o=s,n=e("2877"),c=Object(n["a"])(o,a,r,!1,null,null,null);i["default"]=c.exports},"99af":function(t,i,e){"use strict";var a=e("23e7"),r=e("d039"),s=e("e8b5"),o=e("861d"),n=e("7b0b"),c=e("50c4"),d=e("8418"),u=e("65f0"),f=e("1dde"),l=e("b622"),p=e("2d00"),h=l("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=p>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),k=f("concat"),w=function(t){if(!o(t))return!1;var i=t[h];return void 0!==i?!!i:s(t)},C=!b||!k;a({target:"Array",proto:!0,forced:C},{concat:function(t){var i,e,a,r,s,o=n(this),f=u(o,0),l=0;for(i=-1,a=arguments.length;i<a;i++)if(s=-1===i?o:arguments[i],w(s)){if(r=c(s.length),l+r>v)throw TypeError(g);for(e=0;e<r;e++,l++)e in s&&d(f,l,s[e])}else{if(l>=v)throw TypeError(g);d(f,l++,s)}return f.length=l,f}})},c975:function(t,i,e){"use strict";var a=e("23e7"),r=e("4d64").indexOf,s=e("a640"),o=e("ae40"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,d=s("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!d||!u},{indexOf:function(t){return c?n.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-eb21d1aa.0be7af7a.js.map