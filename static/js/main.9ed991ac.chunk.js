(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),u=(n(9),n(1)),o=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"loading..."))},i=function(e){var t=e.tour,n=e.deleteTour,c=t.image,l=t.name,o=t.price,i=t.info,m=t.id,s=Object(a.useState)(!1),f=Object(u.a)(s,2),E=f[0],d=f[1];return r.a.createElement("div",{className:"single-tour"},r.a.createElement("img",{src:c,alt:""}),r.a.createElement("footer",null,r.a.createElement("div",{className:"tour-info"},r.a.createElement("h4",null,l),r.a.createElement("h4",{className:"tour-price"},"$",o)),r.a.createElement("p",null,E?i:i.slice(0,200).concat("..."),r.a.createElement("button",{onClick:function(){d((function(e){return!e}))}},E?"Show Less":"Read More")),r.a.createElement("button",{onClick:function(){return n(m)},className:"delete-btn"},"not interested")))},m=function(e){var t=e.tours,n=e.deleteTour;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Our Tours"),r.a.createElement("div",{className:"underline"})),t.map((function(e){return r.a.createElement(i,{key:e.id,tour:e,deleteTour:n})})))};var s=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),i=Object(u.a)(l,2),s=i[0],f=i[1],E=function(){f(!0),fetch("https://course-api.com/react-tours-project").then((function(e){return e.json()})).then((function(e){c(e),f(!1)}))};return Object(a.useEffect)((function(){E()}),[]),r.a.createElement("main",null,s&&r.a.createElement(o,null),!s&&n.length>0&&r.a.createElement(m,{tours:n,deleteTour:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}}),!s&&0===n.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"no tours left"),r.a.createElement("button",{className:"btn",onClick:function(){return E()}},"refresh")))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.9ed991ac.chunk.js.map