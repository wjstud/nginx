(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abffd934"],{1899:function(o,n,e){"use strict";var i=e("66c0"),s=e.n(i);s.a},"66c0":function(o,n,e){},cd83:function(o,n,e){"use strict";e.r(n);var i=function(){var o=this,n=o.$createElement,i=o._self._c||n;return i("div",{staticClass:"share"},[i("img",{attrs:{src:e("fad1"),alt:""}}),i("div",{staticClass:"go-app",on:{click:o.downloadApp}})])},s=[],t={name:"Share",mounted:function(){window.location.href="sweetfans://login",this.systemInfo()},created:function(){document.title="分享有礼"},methods:{systemInfo:function(){var o=window.navigator.userAgent.toLowerCase(),n=o.indexOf("android")>-1,e=o.indexOf("iphone os")>-1,i=o.indexOf("mac os x")>-1,s=o.indexOf("windows")>-1,t=o.indexOf("micromessenger")>-1,a=o.indexOf("weibo")>-1,d=o.indexOf("qq/")>-1,c=o.indexOf("qzone/")>-1;n&&(d&&console.log("android > QQ"),t&&console.log("android > weixin"),a&&console.log("android > weibo"),c&&console.log("android > qzone")),e&&(d&&console.log("ios > QQ"),t&&console.log("ios > weixin"),a&&console.log("ios > weibo"),c&&console.log("ios > qzone")),this.isPC()&&(console.log("PC"),i>-1?window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.sweetfans.app":s>-1&&(window.location.href="sweetfans://login",window.location.href="https://apps.apple.com/cn/app/%E9%A5%AD%E7%B3%96/id1135608630"))},isPC:function(){for(var o=window.navigator.userAgent.toLowerCase(),n=["android","iphone","symbianos","windows phone","ipad","ipod"],e=!0,i=0;i<n.length;i++)if(o.indexOf(n[i])>0){e=!1;break}return e},downloadApp:function(){var o=window.navigator.userAgent.toLowerCase(),n=o.indexOf("android")>-1,e=o.indexOf("iphone os")>-1,i=o.indexOf("weibo")>-1;if(n){if(window.location.href="sweetfans://login",i)return!1;setTimeout(function(){window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.sweetfans.app"},10)}else e&&(window.location.href="sweetfans://login",setTimeout(function(){window.location.href="https://apps.apple.com/cn/app/%E9%A5%AD%E7%B3%96/id1135608630"},10))}}},a=t,d=(e("1899"),e("2877")),c=Object(d["a"])(a,i,s,!1,null,"0f68fdc2",null);n["default"]=c.exports},fad1:function(o,n,e){o.exports=e.p+"img/people.0741c7fb.png"}}]);
//# sourceMappingURL=chunk-abffd934.825fc767.js.map