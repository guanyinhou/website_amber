(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a472908"],{"0d5f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"orders"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),e("div",{staticClass:"clearfix"}),e("table",{staticClass:"table mt-4"},[t._m(1),e("tbody",t._l(t.orders,(function(a,s){return e("tr",{key:s,class:{"text-secondary":!a.paid}},[e("td",[t._v(t._s(s+1))]),e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(t._s(a.payment))]),e("td",[t._v(t._s(t._f("currency")(a.amount)))]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"order.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var s=a.paid,i=e.target,n=!!i.checked;if(Array.isArray(s)){var r=null,c=t._i(s,r);i.checked?c<0&&t.$set(a,"paid",s.concat([r])):c>-1&&t.$set(a,"paid",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrder(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-info"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])])])})),0)]),e("hr"),e("div",{staticClass:"float-right"},[e("Pagination",{attrs:{pages:t.Pagination},on:{update:t.getOrders}})],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-right mt-4"},[e("h3",{staticClass:"float-left"},[t._v("訂單列表")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("目次")]),e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("付款狀態")])])])}],n=(e("99af"),e("1799")),r={components:{Pagination:n["a"]},data:function(){return{isLoading:!1,isNew:!1,Pagination:{},orders:{user:{}}}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.orders=a.data.data,t.Pagination=a.data.meta.pagination,t.isLoading=!1})).catch((function(a){t.isLoading=!1,t.$bus.$emit("message:push",a.response.data.message,"danger")}))},setOrder:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(t){a.$bus.$emit("message:push","付款狀態已修改(".concat(t,")"),"info"),a.getOrders()})).catch((function(t){a.$bus.$emit("message:push",t.response.data.message,"danger")}))}}},c=r,o=e("2877"),d=Object(o["a"])(c,s,i,!1,null,null,null);a["default"]=d.exports},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(" "+t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},i=[],n={props:["pages"],methods:{updatePage:function(t){this.$emit("update",t)}}},r=n,c=e("2877"),o=Object(c["a"])(r,s,i,!1,null,null,null);a["a"]=o.exports},"99af":function(t,a,e){"use strict";var s=e("23e7"),i=e("d039"),n=e("e8b5"),r=e("861d"),c=e("7b0b"),o=e("50c4"),d=e("8418"),l=e("65f0"),u=e("1dde"),p=e("b622"),f=e("2d00"),g=p("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",_=f>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=u("concat"),b=function(t){if(!r(t))return!1;var a=t[g];return void 0!==a?!!a:n(t)},C=!_||!m;s({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,s,i,n,r=c(this),u=l(r,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(n=-1===a?r:arguments[a],b(n)){if(i=o(n.length),p+i>h)throw TypeError(v);for(e=0;e<i;e++,p++)e in n&&d(u,p,n[e])}else{if(p>=h)throw TypeError(v);d(u,p++,n)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-3a472908.9f6188f3.js.map