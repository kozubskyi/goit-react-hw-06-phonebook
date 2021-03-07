(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{23:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(7),a=n.n(r),i=(n(23),n(14)),s=n(5),u=(n(32),n(3)),l=n(41),b=Object(u.b)("phonebook/addContact",(function(t,e){return{payload:{id:Object(l.a)(),name:t,number:e}}})),j=Object(u.b)("phonebook/deleteContact"),f=Object(u.b)("phonebook/changeFilter"),d=n(1),m=function(t){var e=t.items,n=t.onContactAdd,o=Object(c.useState)(""),r=Object(i.a)(o,2),a=r[0],s=r[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),b=l[0],j=l[1],f=function(){s(""),j("")};return Object(d.jsxs)("form",{className:"Phonebook__form",onSubmit:function(t){t.preventDefault(),e.map((function(t){return t.name})).includes(a)?alert("".concat(a," is already in contacts.")):n(a,b),f()},children:[Object(d.jsx)("label",{htmlFor:"Phonebook-form__name",children:"Name"}),Object(d.jsx)("input",{type:"text",id:"Phonebook-form__name",name:"name",value:a,onChange:function(t){return s(t.target.value)},required:!0,autoComplete:"off"}),Object(d.jsx)("label",{htmlFor:"Phonebook-form__number",children:"Number"}),Object(d.jsx)("input",{type:"tel",id:"Phonebook-form__number",name:"number",value:b,onChange:function(t){return j(t.target.value)},required:!0,autoComplete:"off",pattern:"^[ 0-9]+$"}),Object(d.jsx)("button",{className:"btn",type:"submit",children:"Add contact"})]})};m.defaultProps={items:[]};var O=Object(s.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onContactAdd:function(e,n){return t(b(e,n))}}}))(m),h=(n(34),function(t){var e=t.filter,n=t.onFilterChange;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"find-contacts__label",htmlFor:"find-contacts-form__filter",children:"Find contacts by name"}),Object(d.jsx)("input",{type:"search",id:"find-contacts-form__filter",name:"filter",className:"find-contacts__input",value:e,onChange:n,required:!0,autoComplete:"off",autoFocus:!0})]})});h.defaultProps={filter:""};var p=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onFilterChange:function(e){return t(f(e.target.value))}}}))(h),x=(n(35),function(t){var e=t.items,n=t.filter,c=t.onContactDelete;return Object(d.jsx)("ul",{className:"contacts__list",children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){var e=t.id,n=t.name,o=t.number;return Object(d.jsxs)("li",{className:"contacts__item",children:[Object(d.jsxs)("p",{children:[n,": ",o]}),Object(d.jsx)("button",{type:"button",className:"btn",onClick:function(){return c(e)},children:"Delete"})]},e)}))})});x.defaultProps={items:[],filter:""};var _=Object(s.b)((function(t){return{items:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{onContactDelete:function(e){return t(j(e))}}}))(x),C=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"main-title",children:"Phonebook"}),Object(d.jsx)(O,{}),Object(d.jsx)("h2",{className:"title__contacts",children:"Contacts"}),Object(d.jsx)(p,{}),Object(d.jsx)(_,{})]})};n(36);var g,k=function(){return Object(d.jsx)(C,{})},v=n(17),y=n(9),N=n(2),F=n(4),P=n(18),w=n.n(P),A=n(10),D=Object(u.c)([],(g={},Object(A.a)(g,b.type,(function(t,e){return[].concat(Object(y.a)(t),[e.payload])})),Object(A.a)(g,j.type,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),g)),S=Object(u.c)("",Object(A.a)({},f.type,(function(t,e){return e.payload}))),q=Object(N.c)({items:D,filter:S}),J={key:"contacts",storage:w.a,blacklist:["filter"]},L=Object(N.c)({contacts:Object(F.g)(J,q)}),z=(Object(y.a)(Object(u.d)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),Object(u.a)({reducer:L,devTools:!1,middleware:!1})),B={store:z,persistor:Object(F.h)(z)};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(s.a,{store:B.store,children:Object(d.jsx)(v.a,{loading:null,persistor:B.persistor,children:Object(d.jsx)(k,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.be4763f6.chunk.js.map