(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(16),i=n.n(c),u=n(6),l=n(9),s=n(15),E=n(17),d={red:"#f00",green:"#0f0",blue:"#00f"},S=n(11),f=n(27),m=n(29),p=n(30),b=n(20),h=n.n(b),v=n(31),U=n(10),R=n(14),g=function(e){return fetch(e).then((function(e){return e.json()}))};!function(e){e.USERS_REQUEST="@@users/USERS_REQUEST",e.USERS_SUCCESS="@@users/USERS_SUCCESS",e.USERS_FAILURE="@@users/USERS_FAILURE"}(r||(r={}));var O,j={list:[],loading:!1,error:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.USERS_REQUEST:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case r.USERS_SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{list:t.payload,loading:!1});default:return e}},T=Object(R.a)((function(e){return e.users}),(function(e){return e.list}));!function(e){e.FIRST_REQUEST="@@integration/first/FIRST_REQUEST"}(O||(O={}));var _,w={data:[],loading:!1};Object(R.a)((function(e){return e.integration.first}),(function(e){return e.data}));!function(e){e.SECOND_REQUEST="@@integration/second/SECOND_REQUEST"}(_||(_={}));var C={data:[],loading:!1},Q=(Object(R.a)((function(e){return e.integration.second}),(function(e){return e.data})),Object(S.combineReducers)({first:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.FIRST_REQUEST:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});default:return e}},second:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.SECOND_REQUEST:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});default:return e}}})),k=function(e,t){return Object(S.createStore)(function(e){return Object(S.combineReducers)({router:Object(s.b)(e),users:y,integration:Q})}(e),t,Object(m.composeWithDevTools)(Object(S.applyMiddleware)(Object(f.a)(e),p.a)))},x=n(32);function I(){var e=Object(x.a)(["\n  border: 1px solid ",";\n  padding: 10px;\n"]);return I=function(){return e},e}var F=E.b.div(I(),(function(e){return e.theme.green})),D=function(){var e=Object(l.f)(T,l.d),t=Object(l.e)();return a.createElement(F,null,a.createElement("button",{type:"button",onClick:function(){return t(function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:r.USERS_REQUEST}),e.next=3,g("https://jsonplaceholder.typicode.com/users");case 3:n=e.sent,console.log("userList",n),t({type:r.USERS_SUCCESS,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"GET USER LIST"),a.createElement("ul",null,e.map((function(e){return a.createElement("li",{key:e.id},e.name)}))))},L=n(23),N=n(2),W=function(){return a.createElement("h1",null,"Home")},A=function(){return a.createElement("h1",null,"Users")},B=function(){return a.createElement("div",null,a.createElement("div",null,a.createElement(L.a,{to:"/home",activeStyle:{color:"red"}},"Home"),a.createElement(L.a,{to:"/users",activeStyle:{color:"red"}},"Users")),a.createElement("div",null,a.createElement(N.c,null,a.createElement(N.a,{path:"/home",component:W}),a.createElement(N.a,{path:"/users",component:A}))),a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=Object(u.a)(),J=k(H,void 0);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:J,context:l.b},o.a.createElement(s.a,{history:H,context:l.b},o.a.createElement(E.a,{theme:d},o.a.createElement(B,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f7c6cc94.chunk.js.map