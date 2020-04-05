(function(e){function n(n){for(var o,s,a=n[0],c=n[1],u=n[2],l=0,h=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(n);while(h.length)h.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},r={app:0},i=[];function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="compass/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var d=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.error?t("div",[t("h1",[e._v("Sorry,")]),t("h3",[e._v(e._s(e.error))])]):e.hasAccess?t("div",[t("h3",[e._v("You look towards")]),t("h1",[e._v(e._s(e.direction))]),t("footer",[e._v(e._s(Math.round(e.heading))+"°")])]):t("div",[t("p",[e._v("In order to use the compass you need to give access to your device's device orientation")]),t("button",{on:{click:e.requestPermission}},[e._v("Give access")])])},i=[],s={name:"Compass",data:()=>({hasAccess:!1,heading:0,error:(!DeviceOrientationEvent||!DeviceOrientationEvent.requestPermission)&&"Device orientation not supported by your device"}),computed:{direction(){return this.heading<0?"Ooops":this.heading<22.5?"North":this.heading<67.5?"North-East":this.heading<112.5?"East":this.heading<157.5?"South-East":this.heading<202.5?"South":this.heading<247.5?"South-West":this.heading<292.5?"West":this.heading<337.5?"North-West":this.heading<360?"North":"Ooops"}},methods:{async requestPermission(){const e=await DeviceOrientationEvent.requestPermission();"granted"==e?(this.hasAccess=!0,window.addEventListener("deviceorientation",this.handleOrientation)):this.error=`Access ${e}`},handleOrientation(e){let n;if(e.webkitCompassHeading)n=e.webkitCompassHeading;else{if(!e.absolute)return;n=e.alpha}window.innerWidth>window.innerHeight&&(n+=90,n%=360),this.heading=n}}},a=s,c=(t("034f"),t("2877")),u=Object(c["a"])(a,r,i,!1,null,null,null),d=u.exports,l=t("9483");Object(l["a"])("compass/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.bfb8f1e3.js.map