(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e,n){"use strict";var r=n(156);e.a=r.create({})},154:function(t,e,n){var content=n(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("98302d0c",content,!0,{sourceMap:!1})},179:function(t,e,n){"use strict";var r=n(154);n.n(r).a},180:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".title[data-v-0adbdda0]{margin:30px 0}.users[data-v-0adbdda0]{list-style:none;margin:0;padding:0}.user[data-v-0adbdda0]{margin:10px 0}",""])},184:function(t,e,n){"use strict";n.r(e);n(37);var r,c=n(5),o=n(152),l={asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/users");case 2:return e=t.sent,data=e.data,t.abrupt("return",{users:data});case 5:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),head:function(){return{title:"Users"}}},d=(n(179),n(14)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("img",{staticClass:"logo",attrs:{src:n(97),alt:"Nuxt.js Logo"}}),t._v(" "),r("h1",{staticClass:"title"},[t._v("\n    USERS\n  ")]),t._v(" "),r("ul",{staticClass:"users"},t._l(t.users,(function(e,n){return r("li",{key:n,staticClass:"user"},[r("nuxt-link",{attrs:{to:{name:"id",params:{id:n}}}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),0)])}),[],!1,null,"0adbdda0",null);e.default=component.exports}}]);