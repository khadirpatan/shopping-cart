(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./aashirvad.jpg":15,"./akiva.jpg":16,"./amrutam.jpg":17,"./amul.jpg":18,"./fresh.jpg":19,"./mothersDairy.jpg":20,"./nandini.jpg":21,"./nestle.jpg":22,"./patanjali.jpg":23,"./srisri.jpg":24};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/aashirvad.f0f57bf2.jpg"},function(e,t,a){e.exports=a.p+"static/media/akiva.e0f7a96c.jpg"},function(e,t,a){e.exports=a.p+"static/media/amrutam.2de1a6c0.jpg"},function(e,t,a){e.exports=a.p+"static/media/amul.1766a06b.jpg"},function(e,t,a){e.exports=a.p+"static/media/fresh.7c36da2a.jpg"},function(e,t,a){e.exports=a.p+"static/media/mothersDairy.9f7390ca.jpg"},function(e,t,a){e.exports=a.p+"static/media/nandini.0e6174dc.jpg"},function(e,t,a){e.exports=a.p+"static/media/nestle.88d0cd7c.jpg"},function(e,t,a){e.exports=a.p+"static/media/patanjali.734434f4.jpg"},function(e,t,a){e.exports=a.p+"static/media/srisri.3a2abf39.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(11),a(1)),l=(a(3),a(4),function(){return r.a.createElement("div",{className:"header h1"},"Shopping Cart")}),s=(a(12),function(e){return r.a.createElement("div",{className:"modalContainer"},r.a.createElement("div",{className:"modalWindow"},r.a.createElement("div",{className:"modlaTilte"},"\xa0\xa0\xa0Check out Confirmation",r.a.createElement("span",{className:"closeButton",onClick:function(){return e.setOpenModal(!1)}}," ","X"," ")),e.price&&0!==e.price?r.a.createElement("div",{className:"modalContent"},e.cart.map((function(e,t){return r.a.createElement("div",{className:"itemDescription",key:t},e.name," -",r.a.createElement("span",{style:{color:"grey"}},"\xa0",e.quantity," no's - \u20b9"," ",e.quantity*e.price))})),r.a.createElement("div",{className:"totalAmount"},"Total Price : \u20b9 ",r.a.createElement("strong",null,e.price))):r.a.createElement("div",{className:"noItemsMsg"},"No items added to cart."),r.a.createElement("div",{className:"modalFooter"},r.a.createElement("button",{className:"successBtn",onClick:function(){return e.setOpenModal(!1)}},"Buy Now")," ","\xa0\xa0",r.a.createElement("button",{className:"closeBtn",onClick:function(){return e.setOpenModal(!1)}},"Close"))))}),m=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(null),m=Object(o.a)(l,2),u=m[0],d=m[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),E=f[0],v=f[1];return Object(n.useEffect)((function(){if(e.cart&&e.cart.length>=1){var t=0,a=0,n=!0,r=!1,c=void 0;try{for(var o,l=e.cart[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;t=Number(t)+Number(s.quantity),a+=Number(s.quantity)*Number(s.price)}}catch(m){r=!0,c=m}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}i(t),d(a)}}),[e.cart]),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footerInnerDiv"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"h4"},"Qty : ",c),r.a.createElement("br",null),r.a.createElement("div",{className:"h4"},"Total : ",u)),r.a.createElement("div",{className:"right"},r.a.createElement("button",{className:"button",onClick:function(){return v(!0)}},"CHECKOUT"))),E?r.a.createElement(s,{cart:e.cart,price:u,qty:c,setOpenModal:v}):null)},u=(a(13),function(e){var t=e.addToCart,c=e.removeFromCart,i=e.product,l=e.index,s=Object(n.useState)(0),m=Object(o.a)(s,2),u=m[0],d=m[1],p=function(e){d(u+1),t(e)};return r.a.createElement("div",{className:"productsContainer",key:l},r.a.createElement("div",{className:"productsLeft"},r.a.createElement("img",{src:a(14)("./".concat(i.imgUrl)),className:"productImage",alt:i.imgUrl}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,i.OfferText)),r.a.createElement("div",{className:"productsRight"},r.a.createElement("div",{className:"productTitle"},r.a.createElement("strong",null,i.brandName)),r.a.createElement("div",{className:"productDetails"},i.productName,r.a.createElement("br",null),i.quantity,r.a.createElement("br",null),"MRP ",i.mrp,r.a.createElement("br",null),r.a.createElement("strong",null,"RS ",i.price)),r.a.createElement("div",{className:"addingToCart"},r.a.createElement("div",{className:"addToCartDiv"},r.a.createElement("button",{className:"addTocartBtn",onClick:function(){p(i)}},"ADD TO CART")),r.a.createElement("div",{className:"incrimentDecerementDiv"},r.a.createElement("span",{className:"roundBorder",onClick:function(){!function(e){u>=1&&d(u-1),c(e)}(i)}}," ","-"," "),"\xa0\xa0",u,"\xa0\xa0",r.a.createElement("span",{className:"roundBorder2",onClick:function(){p(i)}},"+"," ")))))}),d=function(e){return r.a.createElement(r.a.Fragment,null,e.productData&&e.productData.map((function(t,a){return r.a.createElement(u,{key:a,product:t,index:a,addToCart:e.addToCart,removeFromCart:e.removeFromCart,cart:e.cart})})))},p=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(l,null)),r.a.createElement("div",{style:{paddingBottom:"120px"}},r.a.createElement(d,{productData:e.productData,addToCart:function(e){var t=!1,a=c.map((function(a){return a.id===e.id?(t=!0,a.quantity++,a):a}));t||a.push({id:e.id,name:e.productName,price:e.price,quantity:1}),i(a)},removeFromCart:function(e){var t=c.map((function(t,a){return t.id===e.id?(t.quantity>=1&&t.quantity--,t):t}));i(t)},cart:c})),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(m,{cart:c})))};var f=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),l=Object(o.a)(i,2),s=l[0],m=l[1];return Object(n.useEffect)((function(){fetch("data.json").then((function(e){return e.json()})).then((function(e){c(e.productData)})).catch((function(e){m("Error While Getting Data")}))}),[]),r.a.createElement("div",{className:"App"},s?r.a.createElement("div",null," Error White Getting Data"):r.a.createElement(p,{productData:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.19bd8b3c.chunk.js.map