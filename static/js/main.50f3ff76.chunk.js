(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(17);function c(){return{id:"counterFirst",reducerMap:{counterFirst:r.d}}}},17:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return E}));var r,c=n(2),u=n(7);!function(e){e.COUNTER_INCREASE="@@counterFirst/COUNTER_INCREASE",e.COUNTER_DECREASE="@@counterFirst/COUNTER_DECREASE"}(r||(r={}));var o={value:0},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.COUNTER_INCREASE:return Object(c.a)(Object(c.a)({},e),{},{value:e.value+1});case r.COUNTER_DECREASE:return Object(c.a)(Object(c.a)({},e),{},{value:e.value-1});default:return e}},i=Object(u.a)((function(e){return e.counterFirst}),(function(e){return e.value})),l=function(){return{type:r.COUNTER_INCREASE}},E=function(){return{type:r.COUNTER_DECREASE}}},23:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var r,c=n(0),u=n.n(c),o=n(5),a=n.n(o),i=n(4),l=n(22),E=n(19),s=n(20),d=n(6),C=n(2),v=n(7);!function(e){e.COUNTER_INCREASE="@@counterSecond/COUNTER_INCREASE",e.COUNTER_DECREASE="@@counterSecond/COUNTER_DECREASE"}(r||(r={}));var O={value:0},f=Object(v.a)((function(e){return e.counterSecond}),(function(e){return e.value})),R=(Object(l.a)(),Object(d.createStore)({initialState:{},extensions:[Object(s.getThunkExtension)()],advancedComposeEnhancers:Object(E.composeWithDevTools)({name:"dynamic-modules-app"})},{id:"users",reducerMap:{counterSecond:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.COUNTER_INCREASE:return Object(C.a)(Object(C.a)({},e),{},{value:e.value+1});case r.COUNTER_DECREASE:return Object(C.a)(Object(C.a)({},e),{},{value:e.value-1});default:return e}}}})),m=n(21),b=n(16),p=c.lazy((function(){return n.e(3).then(n.bind(null,46))})),S=function(){return c.createElement(d.DynamicModuleLoader,{modules:[Object(b.a)()]},c.createElement(c.Suspense,{fallback:c.createElement("div",null,"loading...")},c.createElement(p,null)))},N=function(){var e=Object(i.useSelector)(f),t=Object(i.useDispatch)();return c.createElement("div",null,c.createElement("h1",null,"Counter Second: ",e),c.createElement("button",{type:"button",onClick:function(){return t({type:r.COUNTER_INCREASE})}},"increase"),c.createElement("button",{type:"button",onClick:function(){return t({type:r.COUNTER_DECREASE})}},"decrease"))},h=function(){var e=c.useState(!1),t=Object(m.a)(e,2),n=t[0],r=t[1];return c.createElement("div",null,c.createElement("button",{type:"button",onClick:function(){return r((function(e){return!e}))}},"re"),n&&c.createElement(S,null),c.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(i.Provider,{store:R},u.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.50f3ff76.chunk.js.map