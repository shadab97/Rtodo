(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),o=c.n(n),s=c(7),r=c.n(s),i=(c(13),c(4)),l=c(2),d=(c(14),c.p+"static/media/icon-sun.910b1f9a.svg");var j=function(e){var t=e.title;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h2",{className:"logo",children:t}),Object(a.jsx)("img",{src:d,alt:"theme",width:"30px",height:"30px"})]})},u=c.p+"static/media/icon-cross.6ee81d30.svg";var m=function(){var e=Object(n.useContext)(p);return Object(a.jsx)(a.Fragment,{children:e.todoa.map((function(t){return Object(a.jsxs)("div",{className:"TodoList",children:[Object(a.jsx)("button",{"aria-label":"Add new item",type:"submit",className:"input-check ".concat(t.completed?"checked":"")}),Object(a.jsx)("p",{className:"Form-input ".concat(t.completed?"strikethrouw":""),children:t.name}),Object(a.jsx)("img",{src:u,alt:"",className:"delete",onClick:function(){return function(t){console.log(e);var c=e.todoa.filter((function(e){if(e.key!==t)return e}));e.tdispatch({type:"remove",newarray:c}),localStorage.setItem("todos",JSON.stringify(Object(i.a)(c)))}(t.key)}})]},t.key)}))})},p=o.a.createContext();var b=function(){var e;if(localStorage.getItem("todos"))e=JSON.parse(localStorage.getItem("todos"));else;var t=Object(n.useReducer)((function(e,t){switch(t.type){case"remove":case"add":case"changename":case"completed":case"active":return t.newarray}}),e),c=Object(l.a)(t,2),o=c[0],s=c[1],r=Object(n.useState)(1),d=Object(l.a)(r,2),u=(d[0],d[1],Object(n.useState)(0)),b=Object(l.a)(u,2),h=b[0],O=b[1],v=Object(n.useState)([]),f=Object(l.a)(v,2),x=f[0],g=f[1],y=Object(n.useState)(""),N=Object(l.a)(y,2),k=N[0],S=N[1],w=function(e){return console.log(e),o.filter((function(t){return"active"===e&&t.active||"completed"===e&&t.completed?t:"clear"!==e||t.completed?void 0:t}))},C=function(e){var t=Math.floor(1e3*Math.random()+o.length+1);e.preventDefault(),s({type:"add",newarray:[].concat(Object(i.a)(o),[{name:k,completed:!1,active:!0,key:t}])}),localStorage.setItem("todos",JSON.stringify([].concat(Object(i.a)(o),[{name:k,completed:!1,active:!0,key:t}]))),S("")};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"App-container",children:[Object(a.jsx)(j,{title:"TODO"}),Object(a.jsxs)("form",{className:"Form",onSubmit:C,children:[Object(a.jsx)("button",{"aria-label":"Add new item",type:"submit",className:"input-check",onSubmit:C}),Object(a.jsx)("input",{type:"text",placeholder:"create a new todo",className:"Form-input",autoFocus:!0,value:k,onChange:function(e){S(e.target.value)}})]}),Object(a.jsxs)("div",{className:"Todolist-wrapper",children:[Object(a.jsx)(p.Provider,{value:{todoa:h?x:o,tdispatch:s},children:Object(a.jsx)(m,{})}),Object(a.jsxs)("div",{className:"TodoFooter",children:[Object(a.jsxs)("p",{children:[h?x.length:o.length>0," items"]}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("span",{onClick:function(){O(0)},children:"All"}),Object(a.jsx)("span",{onClick:function(){O(1),g(w("active"))},children:"Active"}),Object(a.jsx)("span",{onClick:function(){O(1),g(w("completed"))},children:"Completed"})]}),Object(a.jsx)("span",{onClick:function(){O(0),s({type:"remove",newarray:w("clear")})},children:"clear completed "})]})]}),Object(a.jsx)("p",{className:"dragdropmsg",children:"Drag and drop to reorder the list"})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),o(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.8d38f480.chunk.js.map