(self["webpackChunkmeshok"]=self["webpackChunkmeshok"]||[]).push([[415],{9506:function(t){function e(t,e,l){const a=e.filter((e=>{const a=e[l].toLowerCase(),s=[...t].map((t=>a.includes(t)?t:"")).join("");return t===s}));return a}t.exports={FuzzySearch:e}},9098:function(t){function e(){class t{constructor(t,e,l,a,s){this.title=t,this.src=e,this.alt=l,this.text=a,this.footer=s}}const e=[new t("заголовок 1","https://picsum.photos/id/238/200/300","Title 1","But I must explain to you how all this mistaken idea of denouncing pleasure\n       the master - builder of human happiness.","футер заголовка 1"),new t("title 2","https://picsum.photos/id/239/200/300","Title 2","No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,\n       consequences that are extremely painful.","footer title 2"),new t("заголовок 3","https://picsum.photos/id/240/200/300","Title 3","Nor again is there anyone who loves or pursues or desires to obtain pain of itself,\n       can procure him some great pleasure.","футер заголовка 3"),new t("title 4","https://picsum.photos/id/241/200/300","Title 4","To take a trivial example, which of us ever undertakes laborious physical exercise,\n       except to obtain some","footer title 4"),new t("title 5","https://picsum.photos/id/242/200/300","Title 5","Advantage from it? a pain that produces no\n       resultant pleasure?","footer title 5")];return e}t.exports=e},3507:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return G}});var a=l(3396),s=l(9242),o=l(4870),n=l(9749);const i={key:0,class:"modal-mask"},r={class:"modal-wrapper"},c={class:"modal-container"},u={class:"modal-header"},h={class:"modal-body"},d=(0,a.Uk)("default body"),p={class:"modal-footer"},v=(0,a.Uk)("default footer");var w={setup(t){const e=(0,n.oR)();function l(){e.commit("ChangeStatusModal",{value:!1})}return(0,a.bv)((()=>{document.addEventListener("click",(t=>{const{target:e}=t;e.classList.contains("modal-mask")&&l()}))})),(t,n)=>((0,a.wg)(),(0,a.j4)(s.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,o.SU)(e).state.statusModal?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",r,[(0,a._)("div",c,[(0,a._)("div",u,[(0,a.WI)(t.$slots,"header")]),(0,a._)("div",h,[(0,a.WI)(t.$slots,"body",{},(()=>[d]))]),(0,a._)("div",p,[(0,a._)("button",{class:"modal-default-button",onClick:l},[(0,a.WI)(t.$slots,"footer",{},(()=>[v]))])])])])])):(0,a.kq)("",!0)])),_:3}))}};const m=w;var f=m,g=l(9506),k=l(7139);const _={class:"card"},b=["src","alt"],x={class:"content"};var U=(0,a.aZ)({props:{title:null,src:null,alt:null,text:null,footer:null},setup(t){const e=t;return(t,l)=>((0,a.wg)(),(0,a.iD)("article",_,[(0,a._)("header",null,[(0,a._)("h2",null,(0,k.zw)(e.title),1)]),(0,a._)("img",{src:e.src,alt:e.alt},null,8,b),(0,a._)("div",x,[(0,a._)("p",null,(0,k.zw)(e.text),1)]),(0,a._)("footer",null,(0,k.zw)(e.footer),1)]))}});const y=U;var z=y,C=l(9098),H=l.n(C);const M=t=>((0,a.dD)("data-v-05903d1c"),t=t(),(0,a.Cn)(),t),Z={class:"navbar"},A=M((()=>(0,a._)("img",{class:"img-logo",src:"https://meshok.net/nuxt/logo.svg",alt:"",width:"100",height:"29"},null,-1))),D=M((()=>(0,a._)("span",{class:"magnifying-glass"},"🔍",-1))),L={class:"search-wrapper"},S={for:"search"},T={class:"cards"};var j=(0,a.aZ)({setup(t){const e=(0,n.oR)(),l=(0,o.iH)(""),i=(0,o.qj)(H()()),r=(0,a.Fl)((()=>(0,g.FuzzySearch)(l.value,i,"title")));function c(){e.commit("ChangeStatusModal",{value:!0})}return(t,e)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",Z,[(0,a._)("div",{class:"navbar-toggler-icon",onClick:c,onKeydown:c},null,32),A,D,(0,a._)("div",L,[(0,a._)("label",S,[(0,a.wy)((0,a._)("input",{id:"search",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),placeholder:"Нечёткий поиск по заголовкам..."},null,512),[[s.nr,l.value]])])])]),(0,a._)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(r),((t,e)=>((0,a.wg)(),(0,a.j4)(z,(0,a.dG)({key:e},t),null,16)))),128))])],64))}}),V=l(89);const B=(0,V.Z)(j,[["__scopeId","data-v-05903d1c"]]);var I=B;const W=(0,a._)("pre",null,[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-share-fill",viewBox:"0 0 16 16"},[(0,a.Uk)("\n          "),(0,a._)("path",{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}),(0,a.Uk)("\n        ")]),(0,a.Uk)("    Share")],-1),q=(0,a._)("pre",null,[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-link",viewBox:"0 0 16 16"},[(0,a.Uk)("\n        "),(0,a._)("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"}),(0,a.Uk)("\n        "),(0,a._)("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"}),(0,a.Uk)("\n        ")]),(0,a.Uk)("    Get Link")],-1),F=(0,a._)("pre",null,[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-fill",viewBox:"0 0 16 16"},[(0,a.Uk)("\n        "),(0,a._)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0\n            0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0\n            0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"}),(0,a.Uk)("\n        ")]),(0,a.Uk)("    Edit name")],-1),R=(0,a._)("pre",null,[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash3-fill",viewBox:"0 0 16 16"},[(0,a.Uk)("\n        "),(0,a._)("path",{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5\n            0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5\n            0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"}),(0,a.Uk)("\n        ")]),(0,a.Uk)("    Delete collection")],-1),Y=(0,a.Uk)(" Закрыть ");var $=(0,a.aZ)({setup(t){return(t,e)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(f,null,{header:(0,a.w5)((()=>[])),body:(0,a.w5)((()=>[W,q,F,R])),footer:(0,a.w5)((()=>[Y])),_:1})])),(0,a.Wm)(I)],64))}});const E=$;var G=E}}]);
//# sourceMappingURL=MainView.fd475d1b.js.map