(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var r,o=n(0),c=n.n(o),a=n(9),l=n(11),u=n(6),i=n(10),s=n(24),E=n(26),S=n(27),m=n(18),p=n.n(m),d=n(28),h=n(13),f=n(29),b=function(e){return new Promise((function(t){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}))}))};!function(e){e.USERS_REQUEST="@@users/USERS_REQUEST",e.USERS_SUCCESS="@@users/USERS_SUCCESS",e.USERS_FAILURE="@@users/USERS_FAILURE"}(r||(r={}));var U={list:[],loading:!1,error:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.USERS_REQUEST:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case r.USERS_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{list:t.payload,loading:!1});default:return e}},R=Object(f.a)((function(e){return e.users}),(function(e){return e.list})),j=Object(u.a)(),y=function(e){var t;return Object(i.createStore)((t=j,Object(i.combineReducers)({router:Object(l.b)(t),users:v})),e,Object(E.composeWithDevTools)(Object(i.applyMiddleware)(Object(s.a)(j),S.a)))},O=n(15),w=n.n(O),g=function(){var e=Object(a.f)(R,a.d),t=Object(a.e)();return o.createElement("div",null,o.createElement("button",{type:"button",onClick:function(){return t(function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:r.USERS_REQUEST}),e.next=3,b("https://jsonplaceholder.typicode.com/users");case 3:n=e.sent,console.log("userList",n),t({type:r.USERS_SUCCESS,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"GET USER LIST"),o.createElement("ul",null,e.map((function(e){return o.createElement("li",null,e.name)}))))},_=n(21),C=n(2),T=function(){return o.createElement("h1",null,"Home")},k=function(){return o.createElement("h1",null,"Users")},x=function(){return o.createElement("div",null,o.createElement("div",null,o.createElement(_.a,{to:"/home",activeStyle:{color:"red"}},"Home"),o.createElement(_.a,{to:"/users",activeStyle:{color:"red"}},"Users")),o.createElement("div",null,o.createElement(C.c,null,o.createElement(C.a,{path:"/home",component:T}),o.createElement(C.a,{path:"/users",component:k}))),o.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=y();w.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(a.a,{store:I,context:a.b},c.a.createElement(l.a,{history:j,context:a.b},c.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.66af79dd.chunk.js.map