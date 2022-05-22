(function(){"use strict";var e={5856:function(e,n,r){var o=r(9242),t=r(3396);function a(e,n){const r=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(r)}var l=r(89);const i={},d=(0,l.Z)(i,[["render",a]]);var c=d,s=r(5431);(0,s.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=r(678),p=r(7139);const h=e=>((0,t.dD)("data-v-0acfddde"),e=e(),(0,t.Cn)(),e),f={class:"card-column-header kanban__title"},g=h((()=>(0,t._)("span",{class:"column-drag-handle"},"☰",-1))),m={class:"card-text"};function v(e,n,r,o,a,l){const i=(0,t.up)("Draggable"),d=(0,t.up)("Container");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(d,{orientation:"horizontal",onDrop:n[2]||(n[2]=e=>l.onColumnDrop(e)),"drag-handle-selector":".column-drag-handle",onDragStart:l.dragStart,"drop-placeholder":a.upperDropPlaceholderOptions,class:"kanban"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.scene.children,(e=>((0,t.wg)(),(0,t.j4)(i,{key:e.id},{default:(0,t.w5)((()=>[(0,t._)("div",{class:(0,p.C_)([e.props.className,"kanban__column"])},[(0,t._)("div",f,[g,(0,t.Uk)(" "+(0,p.zw)(e.name),1)]),(0,t.Wm)(d,{"group-name":"col",onDrop:n=>l.onCardDrop(e.id,n),onDragStart:n[0]||(n[0]=e=>l.log("drag start",e)),onDragEnd:n[1]||(n[1]=e=>l.log("drag end",e)),"get-child-payload":l.getCardPayload(e.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop","drop-placeholder":a.dropPlaceholderOptions,class:"kanban__content"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.children,(e=>((0,t.wg)(),(0,t.j4)(i,{key:e.id},{default:(0,t.w5)((()=>[(0,t._)("div",{class:(0,p.C_)([e.props.className,"item"]),style:(0,p.j5)(e.props.style)},[(0,t._)("h3",null,"Задача # "+(0,p.zw)(e.number),1),(0,t._)("p",m,(0,p.zw)(e.data),1)],6)])),_:2},1024)))),128))])),_:2},1032,["onDrop","get-child-payload","drop-placeholder"])],2)])),_:2},1024)))),128))])),_:1},8,["onDragStart","drop-placeholder"])])}var w=r(9767);const b=(e,n)=>{const{removedIndex:r,addedIndex:o,payload:t}=n;if(null===r&&null===o)return e;const a=[...e];let l=t;return null!==r&&([l]=a.splice(r,1)),null!==o&&a.splice(o,0,l),a},y=(e,n)=>{const r=[];for(let o=0;o<e;o+=1)r.push(n(o));return r},D="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",_=["В плане","В процессе","Завершённые"],C=["#84B0DC","#41B883","#7096BB","#97CAFC","#6CC1C0"],O=()=>{const e=Math.floor(5*Math.random());return C[e]},k={type:"container",props:{orientation:"horizontal"},children:y(3,(e=>({id:`column${e}`,type:"container",name:_[e],props:{orientation:"vertical",className:"card-container"},children:y(+(10*Math.random()).toFixed()+5,(n=>({type:"draggable",id:`${e}${n}`,props:{className:"card",style:{backgroundColor:O()}},number:Math.floor(100*Math.random()),data:D.slice(0,Math.floor(150*Math.random())+30)})))})))};var j={name:"DCards",components:{Container:w.W2,Draggable:w._l},data(){return{scene:k,upperDropPlaceholderOptions:{className:"cards-drop-preview",animationDuration:"150",showOnTop:!0},dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0}}},methods:{onColumnDrop(e){const n={...this.scene};n.children=b(n.children,e),this.scene=n},onCardDrop(e,n){if(null!==n.removedIndex||null!==n.addedIndex){const r={...this.scene},o=r.children.filter((n=>n.id===e))[0],t=r.children.indexOf(o),a={...o};a.children=b(a.children,n),r.children.splice(t,1,a),this.scene=r}},getCardPayload(e){return n=>this.scene.children.filter((n=>n.id===e))[0].children[n]},dragStart(){console.log()},log(...e){console.log()}}};const x=(0,l.Z)(j,[["render",v],["__scopeId","data-v-0acfddde"]]);var M=x;const N=[{path:"/",name:"home",component:M}],P=(0,u.p7)({history:(0,u.PO)("/"),routes:N});var z=P,S=r(65),B=(0,S.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(c).use(B).use(z).mount("#app")}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,o,t,a){if(!o){var l=1/0;for(s=0;s<e.length;s++){o=e[s][0],t=e[s][1],a=e[s][2];for(var i=!0,d=0;d<o.length;d++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[d])}))?o.splice(d--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var c=t();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,t,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,a,l=o[0],i=o[1],d=o[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(t in i)r.o(i,t)&&(r.m[t]=i[t]);if(d)var s=d(r)}for(n&&n(o);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},o=self["webpackChunkdraganddrop"]=self["webpackChunkdraganddrop"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(5856)}));o=r.O(o)})();
//# sourceMappingURL=app.f3923d46.js.map