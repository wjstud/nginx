(function(n){function e(e){for(var c,u,r=e[0],f=e[1],i=e[2],h=0,d=[];h<r.length;h++)u=r[h],o[u]&&d.push(o[u][0]),o[u]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(n[c]=f[c]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,u=1;u<t.length;u++){var r=t[u];0!==o[r]&&(c=!1)}c&&(a.splice(e--,1),n=f(f.s=t[0]))}return n}var c={},u={app:0},o={app:0},a=[];function r(n){return f.p+"js/"+({}[n]||n)+"."+{"chunk-0fef29fb":"33860987","chunk-6b3beace":"81655c1c","chunk-76a52266":"33965446","chunk-2a3e2332":"f1882607","chunk-2b112963":"90f4b389","chunk-2d2137a6":"ed43d7c5","chunk-2fb39f54":"406c44e8","chunk-3b98fda5":"50749d5c","chunk-42168482":"fad1124b","chunk-4649132d":"cb916f7c","chunk-47b92460":"e7d8df1d","chunk-493ab1b0":"36066fb3","chunk-54f9e7e2":"c506a928","chunk-5b90210e":"5f29e560","chunk-5cbf5ef0":"65a62984","chunk-61d0beb4":"021b04dc","chunk-67c29776":"357cc8ef","chunk-67cc1819":"c2abcdf5","chunk-69ac5078":"41178276","chunk-6d3be74c":"fc53b4e6","chunk-72272c13":"bcf00e74","chunk-73fb4290":"e3923ded","chunk-7770234c":"3472c603","chunk-7d135f12":"9e2b3cff","chunk-8057bbbe":"2ba32245","chunk-82ddb76a":"51d4cbc6","chunk-8daaa538":"5fc5c497","chunk-8f803bfc":"454c84b4","chunk-93185976":"6216238f","chunk-9cd80058":"fde6d8c6","chunk-9e7ec558":"43a53ce3","chunk-a2868cfc":"4fef4797","chunk-abffd934":"825fc767","chunk-d8ae394c":"58fffd31","chunk-eeb0cd4e":"94028680","chunk-f5662890":"6032165d","chunk-f85f83ea":"74f3656a","chunk-fde185e0":"c4e9b685"}[n]+".js"}function f(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(n){var e=[],t={"chunk-0fef29fb":1,"chunk-6b3beace":1,"chunk-76a52266":1,"chunk-2a3e2332":1,"chunk-2b112963":1,"chunk-2fb39f54":1,"chunk-3b98fda5":1,"chunk-42168482":1,"chunk-4649132d":1,"chunk-47b92460":1,"chunk-493ab1b0":1,"chunk-54f9e7e2":1,"chunk-5b90210e":1,"chunk-5cbf5ef0":1,"chunk-61d0beb4":1,"chunk-67c29776":1,"chunk-67cc1819":1,"chunk-69ac5078":1,"chunk-6d3be74c":1,"chunk-72272c13":1,"chunk-73fb4290":1,"chunk-7770234c":1,"chunk-7d135f12":1,"chunk-8057bbbe":1,"chunk-82ddb76a":1,"chunk-8daaa538":1,"chunk-8f803bfc":1,"chunk-93185976":1,"chunk-9cd80058":1,"chunk-9e7ec558":1,"chunk-a2868cfc":1,"chunk-abffd934":1,"chunk-d8ae394c":1,"chunk-eeb0cd4e":1,"chunk-f5662890":1,"chunk-f85f83ea":1,"chunk-fde185e0":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0fef29fb":"32b5425e","chunk-6b3beace":"a844302b","chunk-76a52266":"b549268e","chunk-2a3e2332":"5b9dfdbf","chunk-2b112963":"f582452e","chunk-2d2137a6":"31d6cfe0","chunk-2fb39f54":"4a23aa41","chunk-3b98fda5":"5b9dfdbf","chunk-42168482":"fcfa01a6","chunk-4649132d":"5b9dfdbf","chunk-47b92460":"5b9dfdbf","chunk-493ab1b0":"5e46c0ae","chunk-54f9e7e2":"0d8f065e","chunk-5b90210e":"53ba0de9","chunk-5cbf5ef0":"3a8f236e","chunk-61d0beb4":"171c9d2f","chunk-67c29776":"5b9dfdbf","chunk-67cc1819":"5b9dfdbf","chunk-69ac5078":"3db2fe76","chunk-6d3be74c":"100003c8","chunk-72272c13":"b39b974d","chunk-73fb4290":"8efd5120","chunk-7770234c":"e31a2d32","chunk-7d135f12":"5b9dfdbf","chunk-8057bbbe":"06cfb88a","chunk-82ddb76a":"26adfde1","chunk-8daaa538":"0f45b0d4","chunk-8f803bfc":"83279bab","chunk-93185976":"5b9dfdbf","chunk-9cd80058":"5b9dfdbf","chunk-9e7ec558":"5b9dfdbf","chunk-a2868cfc":"a23a5966","chunk-abffd934":"d5ccb057","chunk-d8ae394c":"5b9dfdbf","chunk-eeb0cd4e":"5b9dfdbf","chunk-f5662890":"39347c4d","chunk-f85f83ea":"5c2756fd","chunk-fde185e0":"5cd8fb7f"}[n]+".css",o=f.p+c,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var i=a[r],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){i=d[r],h=i.getAttribute("data-href");if(h===c||h===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete u[n],l.parentNode.removeChild(l),t(a)},l.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(l)}).then(function(){u[n]=0}));var c=o[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise(function(e,t){c=o[n]=[e,t]});e.push(c[2]=a);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,f.nc&&h.setAttribute("nonce",f.nc),h.src=r(n),i=function(e){h.onerror=h.onload=null,clearTimeout(d);var t=o[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");a.type=c,a.request=u,t[1](a)}o[n]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:h})},12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(e)},f.m=n,f.c=c,f.d=function(n,e,t){f.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},f.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},f.t=function(n,e){if(1&e&&(n=f(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)f.d(t,c,function(e){return n[e]}.bind(null,c));return t},f.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return f.d(e,"a",e),e},f.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},f.p="/H5/",f.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=h;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"1d0a":function(n,e,t){"use strict";function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1*n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(n<3601){var c=Math.floor(n/3600),u=Math.floor(n/60),o=n%60;return c=c<10?"0"+c:c,u=u<10?"0"+u:u,o=o<10?"0"+o:o,(1*c===0?"":c+e)+u+e+o}if(0===t){var a=n.getFullYear(),r=n.getMonth()+1,f=n.getDate();return a+"年"+r+"月"+f+"日"}if(1===t){var i=n.getFullYear(),h=n.getMonth()+1,d=n.getDate(),l=n.getHours(),b=n.getMinutes(),p=n.getSeconds();return l=l<10?"0"+l:l,b=b<10?"0"+b:b,p=p<10?"0"+p:p,i+"年"+h+"月"+d+"日"+l+":"+b}}e["a"]=c},4942:function(n,e){(function(n,e){var t=n.documentElement,c="orientationchange"in window?"orientationchange":"resize";recalc=function(){var n=t.clientWidth;n>769&&(n=750),n&&(t.style.fontSize=n/7.5+"px")},n.addEventListener&&(e.addEventListener(c,recalc,!1),n.addEventListener("DOMContentLoaded",recalc,!1))})(document,window)},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],a=(t("5c0b"),t("2877")),r={},f=Object(a["a"])(r,u,o,!1,null,null,null),i=f.exports,h=t("8c4f");c["a"].use(h["a"]);var d=new h["a"]({mode:"history",base:"/H5/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"homePage",component:function(){return Promise.all([t.e("chunk-0fef29fb"),t.e("chunk-6b3beace")]).then(t.bind(null,"2265"))}},{path:"/homePage",name:"homePage",component:function(){return Promise.all([t.e("chunk-0fef29fb"),t.e("chunk-6b3beace")]).then(t.bind(null,"2265"))}},{path:"/detailActivities",name:"detailActivities",component:function(){return t.e("chunk-fde185e0").then(t.bind(null,"b29f"))}},{path:"/detailTopic",name:"detailTopic",component:function(){return t.e("chunk-f5662890").then(t.bind(null,"d982"))}},{path:"/about",name:"about",component:function(){return t.e("chunk-2b112963").then(t.bind(null,"ef4c"))}},{path:"/agreement",name:"agreement",component:function(){return t.e("chunk-7770234c").then(t.bind(null,"9365"))}},{path:"/replyDetail",name:"replyDetail",component:function(){return t.e("chunk-73fb4290").then(t.bind(null,"a8c0"))}},{path:"/newSongRanking",name:"newSongRanking",component:function(){return t.e("chunk-5cbf5ef0").then(t.bind(null,"10e8"))}},{path:"/contributeRanking",name:"contributeRanking",component:function(){return t.e("chunk-69ac5078").then(t.bind(null,"a0ad"))}},{path:"/popularityRanking",name:"popularityRanking",component:function(){return t.e("chunk-493ab1b0").then(t.bind(null,"1815"))}},{path:"/FAQ",name:"FAQ",component:function(){return t.e("chunk-72272c13").then(t.bind(null,"1d58"))},children:[{path:"",component:function(){return t.e("chunk-2d2137a6").then(t.bind(null,"ad9f"))}},{path:"answer",component:function(){return t.e("chunk-61d0beb4").then(t.bind(null,"2bd9"))}}]},{path:"/feedback",name:"feedback",component:function(){return t.e("chunk-42168482").then(t.bind(null,"0c4b"))}},{path:"/myFeedback",name:"myFeedback",component:function(){return t.e("chunk-82ddb76a").then(t.bind(null,"09ed"))}},{path:"/subFeedback",name:"subFeedback",component:function(){return t.e("chunk-5b90210e").then(t.bind(null,"f569"))}},{path:"/signin",name:"signin",component:function(){return t.e("chunk-8f803bfc").then(t.bind(null,"24b7"))}},{path:"/tipOffs",name:"tipOffs",component:function(){return t.e("chunk-f85f83ea").then(t.bind(null,"1381"))}},{path:"/idolPage",name:"idolPage",component:function(){return Promise.all([t.e("chunk-0fef29fb"),t.e("chunk-76a52266")]).then(t.bind(null,"12b7"))}},{path:"/detailPresell",name:"detailPresell",component:function(){return t.e("chunk-2fb39f54").then(t.bind(null,"29d5"))}},{path:"/detailWelfare",name:"detailWelfare",component:function(){return t.e("chunk-8057bbbe").then(t.bind(null,"4db3"))}},{path:"/detailSupport",name:"detailSupport",component:function(){return t.e("chunk-54f9e7e2").then(t.bind(null,"cd9e"))}},{path:"/supportList",name:"supportList",component:function(){return t.e("chunk-6d3be74c").then(t.bind(null,"69c3"))}},{path:"/notePresell",name:"notePresell",component:function(){return t.e("chunk-7d135f12").then(t.bind(null,"c11b"))}},{path:"/noteSignIn",name:"noteSignIn",component:function(){return t.e("chunk-47b92460").then(t.bind(null,"4af3"))}},{path:"/noteIntegral",name:"noteIntegral",component:function(){return t.e("chunk-eeb0cd4e").then(t.bind(null,"3aa6"))}},{path:"/noteNewSong",name:"noteNewSong",component:function(){return t.e("chunk-67c29776").then(t.bind(null,"d2d4"))}},{path:"/notePopularity",name:"notePopularity",component:function(){return t.e("chunk-2a3e2332").then(t.bind(null,"f8ee"))}},{path:"/notePrivilege",name:"notePrivilege",component:function(){return t.e("chunk-4649132d").then(t.bind(null,"7596"))}},{path:"/noteContribute",name:"noteContribute",component:function(){return t.e("chunk-67cc1819").then(t.bind(null,"05cb"))}},{path:"/noteRanking",name:"noteRanking",component:function(){return t.e("chunk-9e7ec558").then(t.bind(null,"9181"))}},{path:"/notePurchase",name:"notePurchase",component:function(){return t.e("chunk-9cd80058").then(t.bind(null,"feae"))}},{path:"/noteSupport",name:"noteSupport",component:function(){return t.e("chunk-3b98fda5").then(t.bind(null,"e681"))}},{path:"/noteSugarCoins",name:"noteSugarCoins",component:function(){return t.e("chunk-93185976").then(t.bind(null,"b056"))}},{path:"/noteWelfareExchange",name:"noteWelfareExchange",component:function(){return t.e("chunk-d8ae394c").then(t.bind(null,"30e5"))}},{path:"/share",name:"share",component:function(){return t.e("chunk-abffd934").then(t.bind(null,"cd83"))}},{path:"/isApp",name:"isApp",component:function(){return t.e("chunk-8daaa538").then(t.bind(null,"00ff"))}},{path:"*",name:"notFount",component:function(){return t.e("chunk-a2868cfc").then(t.bind(null,"ec20"))}}]}),l=t("2f62");c["a"].use(l["a"]);var b=new l["a"].Store({state:{},mutations:{},actions:{}}),p=t("9483");Object(p["a"])("".concat("/H5/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var k=t("b970"),s=t("bc3a"),m=t.n(s),g=t("4328"),v=t.n(g);t("157a"),t("4942");function y(){window.location.href="/H5/isApp"}var w=y;function P(n){var e=/^[^\?]+\?([\w\W]+)$/,t=/([^&=]+)=([\w\W]*?)(&|$)/g,c=e.exec(n),u={};if(c&&c[1]){var o,a=c[1];while(null!=(o=t.exec(a)))u[o[1]]=decodeURIComponent(o[2])}return u}var S=P,A=t("1d0a");t("3b2b"),t("a481"),t("28a5"),t("1c4c"),t("ac6a"),t("5df3"),t("4f7f");function E(n,e){var t=[],c=new Set,u=e;if(!n)return!1;if(n instanceof Array){n.forEach(function(n){c.add(n)}),c=Array.from(c);for(var o=0;o<c.length;o++){var a=c[o].split("_");t.push(a)}for(var r=0;r<t.length;r++){var f=e.indexOf(t[r][1]);if(f>-1){var i=document.createElement("a");i.innerHTML="@"+t[r][1],i.style.color="#0A66FF",i.setAttribute("onclick",'location.href="/isApp?id='+t[r][0]+'"'),u=u.replace(new RegExp("@"+t[r][1],"gim"),i.outerHTML)}e.length>80&&(u=u.slice(0,1e3),u+='<a class="seeMore" style="height: .4rem;width: .8rem;color: #136bfb;text-align: center;       font-size: .28rem;background: #fff;">...全文</a>')}return u}console.warn("@参数应为数组")}var x=E;t("18a0");t.d(e,"loadScript",function(){return O}),c["a"].config.productionTip=!1,c["a"].prototype.$axios=m.a,c["a"].prototype.$qs=v.a,c["a"].prototype.$isApp=w,c["a"].prototype.$queryParams=S,c["a"].prototype.$formatTime=A["a"],c["a"].prototype.$atSomebody=x,c["a"].use(k["b"]),new c["a"]({router:d,store:b,render:function(n){return n(i)}}).$mount("#app"),window.log=console.log;var O=function(n,e){var t=document.createElement("script");t.onload=function(){return e()},t.src=n,document.body.appendChild(t)}},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),u=t.n(c);u.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.48825cbc.js.map