(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d66e4a9"],{"99af":function(t,a,i){"use strict";var e=i("23e7"),s=i("d039"),r=i("e8b5"),o=i("861d"),n=i("7b0b"),c=i("50c4"),d=i("8418"),u=i("65f0"),f=i("1dde"),l=i("b622"),h=i("2d00"),v=l("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",m=h>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=f("concat"),C=function(t){if(!o(t))return!1;var a=t[v];return void 0!==a?!!a:r(t)},_=!m||!b;e({target:"Array",proto:!0,forced:_},{concat:function(t){var a,i,e,s,r,o=n(this),f=u(o,0),l=0;for(a=-1,e=arguments.length;a<e;a++)if(r=-1===a?o:arguments[a],C(r)){if(s=c(r.length),l+s>p)throw TypeError(g);for(i=0;i<s;i++,l++)i in r&&d(f,l,r[i])}else{if(l>=p)throw TypeError(g);d(f,l++,r)}return f.length=l,f}})},b6d4:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"cart favorite"},[i("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("div",{staticClass:"container"},[i("h1",{staticClass:"d-inline-block"},[t._v("我的最愛")]),i("hr"),t.favoriteProd.length>0?i("div",{staticClass:"cart-area"},[i("div",{staticClass:"clearfix"}),i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table"},[t._m(0),i("tbody",[t._l(t.favoriteProd,(function(a){return i("tr",{key:a.id},[i("td",{staticClass:"name"},[i("a",{attrs:{href:"#"}},[t._v(t._s(a.title))])]),i("td",{staticClass:"img"},[i("img",{attrs:{src:a.imageUrl[0],alt:a.title}})]),i("td",{staticClass:"unit"},[t._v(t._s(a.unit))]),i("td",{staticClass:"prod-price"},[t._v(" "+t._s(t._f("currency")(a.price))+" ")]),i("td",{staticClass:"add-to-cart"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(i){return t.addToCart(a.id)}}},[i("i",{staticClass:"fa fa-cart-plus"})])]),i("td",{staticClass:"trash"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(i){return t.rmFavorited(a.id)}}},[i("i",{staticClass:"fa fa-times"})])])])})),i("tr",[t._m(1),i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.favoriteTotalNum)+" ")])])],2),i("tfoot",[i("tr",[t._m(2),i("td",{staticClass:"text-center prod-price"},[t._v(" "+t._s(t._f("currency")(t.favoriteTotal))+" ")])])])])]),i("div",{staticClass:"float-right"},[i("button",{staticClass:"btn first",attrs:{type:"button"},on:{click:t.rmAllFavorites}},[i("i",{staticClass:"fa fa-times"}),t._v(" 全部移除 ")])])]):i("div",{staticClass:"cont-shop text-center"},[i("br"),i("p",[t._v("目前尚無我的最愛")]),i("br"),i("router-link",{staticClass:"btn",attrs:{to:"/works"}},[t._v("繼續挑選")])],1)])],1)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("th",[t._v("品名")]),i("th",[t._v("圖片")]),i("th",[t._v("單位")]),i("th",[t._v("單價")]),i("th",[t._v("購買")]),i("th",[t._v("移除")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("td",{staticClass:"text-right",attrs:{colspan:"5"}},[i("span",{staticClass:"total-word"},[t._v("總數")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("td",{staticClass:"text-right",attrs:{colspan:"5"}},[i("span",{staticClass:"total-word"},[t._v("總計")])])}],r=(i("99af"),i("4de4"),i("4160"),i("c975"),i("a434"),i("159b"),{data:function(){return{status:{loadingNum:""},carts:[],favoriteTotal:0,favoriteTotalNum:0,cartPageTotalNum:0,favoriteProd:[],favorited:JSON.parse(localStorage.getItem("favoriteList"))||[],prods:[]}},methods:{getProds:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/products?page=").concat(a,"&paged=40");this.$http.get(i).then((function(a){t.isLoading=!1,t.prods=a.data.data,t.pagination=a.data.meta.pagination,t.getFavorite()})).catch((function(a){t.isLoading=!1,t.$bus.$emit("message:push",a.response.data.message,"danger")}))},getFavorite:function(){var t=this;this.favoriteTotalNum=this.favorited.length,this.favoriteProd=this.prods.filter((function(a){return t.favorited.indexOf(a.id)>-1})),this.updateFavoriteTotal(),this.$bus.$emit("get-favorite-num")},updateFavoriteTotal:function(){var t=this;this.favoriteTotal=0,this.favoriteProd.forEach((function(a){t.favoriteTotal+=a.price}))},rmFavorited:function(t){var a=this.favorited.indexOf(t);-1!==a&&this.favorited.splice(a,1),localStorage.setItem("favoriteList",JSON.stringify(this.favorited)),this.getProds(),this.$bus.$emit("get-favorite-num:favorited",t)},rmAllFavorites:function(){this.favorited=[],localStorage.setItem("favoriteList",JSON.stringify(this.favorited)),this.getProds(),this.$bus.$emit("message:push","已全數移出","info"),this.$bus.$emit("get-favorite-num:favorited",null)},updateQuantity:function(t,a){var i=this;if(!(a<=0)){this.status.loadingNum=t;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/shopping"),s={product:t,quantity:a};this.$http.patch(e,s).then((function(){i.status.loadingNum="",i.favoriteTotalNum=0,i.cartPageTotalNum=0,i.$bus.$emit("get-cart-num"),i.updateFavoriteTotal(),i.getCart()}))}},getCart:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/shopping");this.$http.get(a).then((function(a){t.carts=a.data.data,t.cartTotalNum=0,t.carts.forEach((function(a){t.cartPageTotalNum+=a.quantity})),t.cartTotal=0,t.updateCartTotal()}))},addToCart:function(t){var a=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/shopping"),s={product:t,quantity:i};this.$http.post(e,s).then((function(t){a.isLoading=!1,a.$bus.$emit("message:push",t.data.data.product.title+"已加入購物車","info"),a.$bus.$emit("get-cart-num")})).catch((function(t){a.isLoading=!1,a.$bus.$emit("message:push",t.response.data.errors[0],"danger")}))}},created:function(){this.getProds(),this.getCart()}}),o=r,n=i("2877"),c=Object(n["a"])(o,e,s,!1,null,null,null);a["default"]=c.exports},c975:function(t,a,i){"use strict";var e=i("23e7"),s=i("4d64").indexOf,r=i("a640"),o=i("ae40"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,d=r("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:c||!d||!u},{indexOf:function(t){return c?n.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6d66e4a9.0d397488.js.map