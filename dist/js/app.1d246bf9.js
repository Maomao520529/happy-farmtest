(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],b=0,f=[];b<u.length;b++)c=u[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"80211b35"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var b=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3280:function(e,t,n){"use strict";n("f120")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("7bb1"),a=n("3aa8"),c=n("cbdf"),u=n("9457"),i=(n("b0c0"),{id:"nav"}),l=Object(r["f"])("Home"),b=Object(r["f"])(" | "),s=Object(r["f"])("About");function f(e,t,n,o,a,c){var u=Object(r["x"])("router-link"),f=Object(r["x"])("router-view");return Object(r["t"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",i,[Object(r["g"])(u,{to:"/"},{default:Object(r["F"])((function(){return[l]})),_:1}),b,Object(r["g"])(u,{to:"/about"},{default:Object(r["F"])((function(){return[s]})),_:1})]),Object(r["g"])(f),Object(r["f"])(" "+Object(r["A"])(a.name),1)],64)}var d={data:function(){return{name:"老闆的家"}}};n("3280");d.render=f;var m=d,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O={class:"home"},j={class:"mb-3"},v=Object(r["e"])("label",{for:"email",class:"form-label"},"Email",-1),h=["onClick"],g=Object(r["e"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function y(e,t,n,o,a,c){var u=Object(r["x"])("Field"),i=Object(r["x"])("error-message"),l=Object(r["x"])("Form");return Object(r["t"])(),Object(r["d"])("div",O,[Object(r["g"])(l,{onSubmit:c.onSubmit},{default:Object(r["F"])((function(e){var n=e.errors,o=e.values,c=e.validate;return[Object(r["f"])(Object(r["A"])(n)+" "+Object(r["A"])(o)+" ",1),Object(r["e"])("div",j,[v,Object(r["g"])(u,{id:"email",name:"email",type:"email",class:Object(r["n"])(["form-control",{"is-invalid":n["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.email=e})},null,8,["class","modelValue"]),Object(r["g"])(i,{name:"email",class:"invalid-feedback"})]),Object(r["e"])("button",{class:"btn me-2 btn-outline-primary",type:"button",onClick:c},"驗證",8,h),g]})),_:1},8,["onSubmit"])])}var w={name:"Home",data:function(){return{user:{}}},methods:{onSubmit:function(){console.log(this.user)}},created:function(){console.log(this)}};w.render=y;var x=w,_=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=Object(p["a"])({history:Object(p["b"])(),routes:_}),k=S;Object(o["e"])("required",a["c"]),Object(o["e"])("email",a["a"]),Object(o["e"])("min",a["b"]),Object(o["d"])({generateMessage:Object(c["a"])({zh_TW:u}),validateOnInput:!0}),Object(c["b"])("zh_TW");var P=Object(r["c"])(m).use(k);P.component("Form",o["c"]),P.component("Field",o["b"]),P.component("ErrorMessage",o["a"]),P.mount("#app")},f120:function(e,t,n){}});
//# sourceMappingURL=app.1d246bf9.js.map