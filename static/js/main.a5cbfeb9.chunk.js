(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var r,o=n(0),c=n.n(o),a=n(15),u=n.n(a),l=n(6),i=n(9),s=n(13),E=n(16),m={red:"#f00",green:"#0f0",blue:"#00f"},S=n(10),d=n(26),p=n(28),f=n(29),h=n(19),b=n.n(h),v=n(30),U=n(14),j=n(31),R=function(e){return new Promise((function(t){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}))}))};!function(e){e.USERS_REQUEST="@@users/USERS_REQUEST",e.USERS_SUCCESS="@@users/USERS_SUCCESS",e.USERS_FAILURE="@@users/USERS_FAILURE"}(r||(r={}));var y={list:[],loading:!1,error:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.USERS_REQUEST:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case r.USERS_SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{list:t.payload,loading:!1});default:return e}},g=Object(j.a)((function(e){return e.users}),(function(e){return e.list})),w=function(e,t){return Object(S.createStore)(function(e){return Object(S.combineReducers)({router:Object(s.b)(e),users:O})}(e),t,Object(p.composeWithDevTools)(Object(S.applyMiddleware)(Object(d.a)(e),f.a)))},_=n(32);function C(){var e=Object(_.a)(["\n  border: 1px solid ",";\n  padding: 10px;\n"]);return C=function(){return e},e}var k=E.b.div(C(),(function(e){return e.theme.green})),x=function(){var e=Object(i.f)(g,i.d),t=Object(i.e)();return o.createElement(k,null,o.createElement("button",{type:"button",onClick:function(){return t(function(){var e=Object(v.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:r.USERS_REQUEST}),e.next=3,R("https://jsonplaceholder.typicode.com/users");case 3:n=e.sent,console.log("userList",n),t({type:r.USERS_SUCCESS,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"GET USER LIST"),o.createElement("ul",null,e.map((function(e){return o.createElement("li",{key:e.id},e.name)}))))},T=n(22),I=n(2),L=function(){return o.createElement("h1",null,"Home")},Q=function(){return o.createElement("h1",null,"Users")},W=function(){return o.createElement("div",null,o.createElement("div",null,o.createElement(T.a,{to:"/home",activeStyle:{color:"red"}},"Home"),o.createElement(T.a,{to:"/users",activeStyle:{color:"red"}},"Users")),o.createElement("div",null,o.createElement(I.c,null,o.createElement(I.a,{path:"/home",component:L}),o.createElement(I.a,{path:"/users",component:Q}))),o.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=Object(l.a)(),B=w(A,void 0);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:B,context:i.b},c.a.createElement(s.a,{history:A,context:i.b},c.a.createElement(E.a,{theme:m},c.a.createElement(W,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a5cbfeb9.chunk.js.map