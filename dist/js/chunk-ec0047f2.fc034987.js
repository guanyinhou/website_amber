(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec0047f2"],{"99af":function(e,t,r){"use strict";var a=r("23e7"),s=r("d039"),i=r("e8b5"),o=r("861d"),n=r("7b0b"),d=r("50c4"),l=r("8418"),c=r("65f0"),u=r("1dde"),v=r("b622"),f=r("2d00"),m=v("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!s((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),_=u("concat"),g=function(e){if(!o(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)},w=!b||!_;a({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,a,s,i,o=n(this),u=c(o,0),v=0;for(t=-1,a=arguments.length;t<a;t++)if(i=-1===t?o:arguments[t],g(i)){if(s=d(i.length),v+s>p)throw TypeError(h);for(r=0;r<s;r++,v++)r in i&&l(u,v,i[r])}else{if(v>=p)throw TypeError(h);l(u,v++,i)}return u.length=v,u}})},b84e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order"},[r("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),r("div",{staticClass:"container"},[r("h1",[e._v("訂單查詢")]),r("hr"),r("p",[e._v("請依序在下方欄位中填寫訂單查詢所需資料：")]),r("div",{staticClass:"text-center"},[r("validation-observer",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("form",{staticClass:"form-signin",on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.searchOrder(e.order))}}},[r("br"),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"}),r("div",{staticClass:"col-sm-4"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,s=t.classes;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.email,expression:"order.email"}],staticClass:"form-control",attrs:{type:"email",name:"Email",placeholder:"E-mail",classes:s,required:""},domProps:{value:e.order.email},on:{input:function(t){t.target.composing||e.$set(e.order,"email",t.target.value)}}}),r("span",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!0)}),r("br"),r("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,s=t.classes;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.id,expression:"order.id"}],staticClass:"form-control",attrs:{type:"text",name:"Order Number",placeholder:"Order Number",classes:s,required:""},domProps:{value:e.order.id},on:{input:function(t){t.target.composing||e.$set(e.order,"id",t.target.value)}}}),r("span",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"col-sm-4"})]),r("br"),r("br"),r("br"),r("div",{staticClass:"btn-zone"},[r("button",{staticClass:"btn",attrs:{type:"submit",disabled:a}},[e._v(" 送出查詢 ")]),r("br")])])]}}])}),r("div",{staticClass:"order-result",class:{active:e.resultShow}},[r("br"),r("br"),r("br"),r("hr"),r("br"),r("table",{staticClass:"table-bordered"},[e._m(0),r("tbody",[r("tr",[r("td",[e._v(e._s(e.result.id))]),r("td",[e._v(e._s(e.result.created.datetime))]),r("td",[e._v(e._s(e._f("currency")(e.result.amount)))]),e.result.paid?r("td",[e._v("已付款")]):r("td",[e._v("未付款")]),e._m(1)])])])])],1)])],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("訂單編號")]),r("th",[e._v("訂單日期")]),r("th",[e._v("訂單金額")]),r("th",[e._v("付款狀態")]),r("th",[e._v("購買內容")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("a",{attrs:{href:""}},[e._v("詳細")])])}],i=(r("99af"),{data:function(){return{isLoading:!1,order:{email:"fwe@geg.yukt",id:"ex9cr2VHx2tOPTGxxomQvTPQK5qy8zX6w85cFOJwlkawYdan3X9QtnxgURH407tP"},orders:{},result:{created:{datetime:""}},resultShow:!1}},methods:{searchOrder:function(e){var t=this;this.isLoading=!0;var r="".concat("https://course-ec-api.hexschool.io","/api/").concat("bba8c8a3-a5f2-4a81-91ef-9273532ebb26","/ec/orders/").concat(e.id);console.log(r),this.$http.get(r).then((function(r){t.isLoading=!1,t.result=r.data.data,console.log(t.result);var a=t.result.user.email;e.email===a&&(t.order.id="",t.resultShow=!0)})).catch((function(e){t.isLoading=!1,console.dir(e)}))}}}),o=i,n=r("2877"),d=Object(n["a"])(o,a,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-ec0047f2.fc034987.js.map