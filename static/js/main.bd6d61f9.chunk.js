(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),o=c.n(n),r=c(7),s=c.n(r),i=(c(13),c(3)),l=c(2),d=c.p+"static/media/bg-desktop-light.3508d620.jpg",j=(c(14),c.p+"static/media/icon-sun.910b1f9a.svg");var p=function(e){var t=e.title;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h2",{className:"logo",children:t}),Object(a.jsx)("img",{src:j,alt:"theme",width:"30px",height:"30px"})]})},m=c.p+"static/media/icon-cross.6ee81d30.svg";var u=function(){var e=Object(n.useContext)(b);return Object(a.jsx)(a.Fragment,{children:e.todoa.map((function(t){return Object(a.jsxs)("div",{className:"TodoList",children:[Object(a.jsx)("button",{"aria-label":"Add new item",className:"input-check ".concat(t.completed?"checked":""),onClick:function(){return function(t){var c=e.todoa.map((function(e){return e.key===t&&(e.completed=!e.completed),e}));e.tdispatch({type:"completed",newarray:c}),localStorage.setItem("todos",JSON.stringify(Object(i.a)(c)))}(t.key)}}),Object(a.jsx)("p",{onClick:function(){return function(t){var c=e.todoa.map((function(e){return e.key===t&&(e.active=!e.active),e}));e.tdispatch({type:"active",newarray:c}),localStorage.setItem("todos",JSON.stringify(Object(i.a)(c)))}(t.key)},className:"Form-input ".concat(t.active?"":"strikethrouw"),children:t.name}),Object(a.jsx)("img",{src:m,alt:"",className:"delete",onClick:function(){return function(t){var c=e.todoa.filter((function(e){if(e.key!==t)return e}));e.tdispatch({type:"remove",newarray:c}),localStorage.setItem("todos",JSON.stringify(Object(i.a)(c)))}(t.key)}})]},t.key)}))})},b=o.a.createContext();var h=function(){var e;e=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[{name:"Complete online js course",completed:!0,active:!0,key:1},{name:"making todo",completed:!0,active:!1,key:2},{name:"Another React app",completed:!1,active:!0,key:3}];var t=Object(n.useReducer)((function(e,t){switch(t.type){case"remove":case"add":case"changename":case"completed":case"active":return t.newarray;default:return e}}),e),c=Object(l.a)(t,2),o=c[0],r=c[1],s=Object(n.useState)(1),j=Object(l.a)(s,2),m=(j[0],j[1],Object(n.useState)(0)),h=Object(l.a)(m,2),O=h[0],f=h[1],g=Object(n.useState)([]),v=Object(l.a)(g,2),x=v[0],y=v[1],k=Object(n.useState)(""),S=Object(l.a)(k,2),N=S[0],w=S[1],C=Object(n.useState)(1),F=Object(l.a)(C,2),I=F[0],A=F[1],J=Object(n.useState)(0),T=Object(l.a)(J,2),D=T[0],M=T[1],L=Object(n.useState)(0),P=Object(l.a)(L,2),_=P[0],B=P[1],R=function(e){return o.filter((function(t){return"active"===e&&t.active||"completed"===e&&t.completed?t:"clear"!==e||t.completed?void 0:t}))},q=function(e){var t="".concat(Math.floor(1e3*Math.random()+o.length+1)).concat(N);e.preventDefault(),r({type:"add",newarray:[].concat(Object(i.a)(o),[{name:N,completed:!1,active:!0,key:t}])}),localStorage.setItem("todos",JSON.stringify([].concat(Object(i.a)(o),[{name:N,completed:!1,active:!0,key:t}]))),w("")};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{src:d,alt:"",width:"100%",height:"200px"}),Object(a.jsxs)("div",{className:"App-container",children:[Object(a.jsx)(p,{title:"TODO"}),Object(a.jsxs)("form",{className:"Form",onSubmit:q,children:[Object(a.jsx)("button",{"aria-label":"Add new item",type:"submit",className:"input-check",onSubmit:q}),Object(a.jsx)("input",{type:"text",required:!0,placeholder:"create a new todo",className:"Form-input",autoFocus:!0,value:N,onChange:function(e){w(e.target.value)}})]}),Object(a.jsxs)("div",{className:"Todolist-wrapper",children:[Object(a.jsx)(b.Provider,{value:{todoa:O?x:o,tdispatch:r},children:Object(a.jsx)(u,{})}),Object(a.jsxs)("div",{className:"TodoFooter",children:[Object(a.jsxs)("p",{children:[O?x.length:o.length," items"]}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("span",{onClick:function(){f(0),A(1),M(0),B(0)},className:I?"drak-text":"",children:"All"}),Object(a.jsx)("span",{onClick:function(){f(1),M(1),A(0),B(0),y(R("active"))},className:D?"drak-text":"",children:"Active"}),Object(a.jsx)("span",{onClick:function(){f(1),B(1),A(0),M(0),y(R("completed"))},className:_?"drak-text":"",children:"Completed"})]}),Object(a.jsx)("span",{onClick:function(){f(0),r({type:"completed",newarray:R("clear")}),localStorage.setItem("todos",JSON.stringify(Object(i.a)(R("clear"))))},children:"clear completed "})]}),Object(a.jsx)("p",{className:"dragdropmsg",children:"Drag and drop to reorder the list"}),Object(a.jsxs)("p",{className:"credit",children:["Challenge by ",Object(a.jsx)("a",{href:"https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW",target:"_blank",rel:"noopener noreferrer",children:"Frontend Mentor."})," Coded by ",Object(a.jsx)("a",{href:"http://shadab97.github.io",target:"_blank",rel:"noopener noreferrer",children:"Shadab Ali."})]})]})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),o(e),r(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.bd6d61f9.chunk.js.map