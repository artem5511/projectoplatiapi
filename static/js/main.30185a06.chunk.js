(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/Sequence diagram for payment.ec46bfeb.jpg"},20:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(16),c=n.n(r),o=(n(28),n(6)),m=n(1),u=(n(29),function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Integration Guide for POS-systems ",l.a.createElement("br",null),"and Applications",l.a.createElement("br",null),l.a.createElement("br",null),"\u201cOplati\u201d Payment System"))}),i=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About \u201cOplati\u201d Payment System"),l.a.createElement("p",null,"This is a demo website about React-router-dom library"))},s=n(17),d=n.n(s),p=(n(30),n(49)),E=new Headers;E.append("regNum","OPL000000722"),E.append("password","cloudBY12345"),E.append("Content-Type","application/json");var b={method:"POST",headers:E,body:JSON.stringify({sum:17,shift:"smena 2",orderNumber:"777",regNum:"OPL000000722",details:{receiptNumber:"123",items:[{type:1,name:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f 1",quantity:1,price:10,cost:10},{type:1,name:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f 2",quantity:2,price:3.5,cost:7}],amountTotal:17,footerInfo:"\u041b\u0412\u041e - QR \u0434\u043b\u044f \u0432\u0441\u0435\u0445!"}}),redirect:"follow",mode:"cors"},f=function(){fetch("https://bpay-testcashdesk.lwo.by/ms-pay/pos/webPayments",b).then(function(e){return e.text()}).then(function(e){return console.log(e)}).catch(function(e){return console.log("error",e)})},h=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Merchant Presented Mode - Dynamic Website QR"),"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 QR-\u043a\u043e\u0434\u0430 \u043c\u0435\u0440\u0447\u0430\u043d\u0442\u0430 - \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 QR \u043d\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435",l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:d.a})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(p.a,{variant:"contained",color:"secondary",size:"large",onClick:f},"\u041e\u041f\u041b\u0410\u0422\u0418\u0422\u042c")))},y=(n(33),function(){return l.a.createElement("div",{className:"bl"},"This page doesn't exist. Go ",l.a.createElement(o.b,{to:"/",style:{color:"blue"}},"Home"))}),g=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"one"},l.a.createElement("header",{className:"hed"},l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement(o.b,{to:"/methods"},"Methods of Payment"),l.a.createElement(o.b,{to:"/about"},"About  \u201cOplati\u201d")),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(u,null)}),l.a.createElement(m.a,{path:"/methods",element:l.a.createElement(h,null)}),l.a.createElement(m.a,{path:"/about",element:l.a.createElement(i,null)}),l.a.createElement(m.a,{path:"*",element:l.a.createElement(y,null)}))))},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(g,null)))),v()}},[[20,1,2]]]);
//# sourceMappingURL=main.30185a06.chunk.js.map