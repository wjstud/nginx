(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73fb4290"],{"174d":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.b5d4699a.png"},a039:function(t,e,a){"use strict";var s=a("174d"),i=a.n(s);i.a},a8c0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"replyDetail"},[a("div",{staticClass:"detail-topic"},[t._m(0),a("div",{staticClass:"topic-text"},[t._v(t._s(t.topic.text))]),t._m(1),a("div",{staticClass:"topic-comment"},[a("section",{staticClass:"tab-content",class:{paddingContent:t.tabFixed}},[0===t.tabIndex?a("ul",{staticClass:"comment-list"},t._l(5,function(e,s){return a("li",{key:e,staticClass:"comment-item"},[t._m(2,!0),a("div",{staticClass:"comment-detail-box"},[a("i",{staticClass:"three-point",on:{click:function(e){return t.showTipOffs(s)}}},[t._v("…")]),a("p",{staticClass:"p-nickname"},[t._v("Eason")]),a("div",{staticClass:"detail-text"},[t._v("到时候就会等于毫无演艺活动，到时候就会等于毫无演艺活动,可能会就此淡出演艺圈吧...")]),t._m(3,!0)]),a("div",{staticClass:"clearfix"})])}),0):t._e()])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic-sender"},[s("img",{staticClass:"sender-head-img",attrs:{src:a("9d64"),alt:""}}),s("div",{staticClass:"sender-nickname-date"},[s("div",{staticClass:"nickname"},[t._v("周杰伦")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"master-operate"},[a("div",{staticClass:"comment-operate"},[a("div",{staticClass:"operate operate-time"},[t._v("2018年6月20日")]),a("div",{staticClass:"operate operate-like"},[t._v("20000")]),a("div",{staticClass:"operate operate-write"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-head-img"},[s("img",{attrs:{src:a("b34b"),alt:"head.jpg"}}),s("i",{staticClass:"s-vip"},[t._v("v")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-operate"},[a("div",{staticClass:"operate operate-time"},[t._v("2018年6月20日")]),a("div",{staticClass:"operate operate-like"},[t._v("20000")]),a("div",{staticClass:"operate operate-write"})])}],c={name:"replyDetail",props:{msg:String},data:function(){return{changeSort:!1,sortStyle:"按时间",sortIndex:0,tabIndex:0,tabFixed:!1,topic:{headImage:"https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",nickname:"周杰伦",sendTime:"2018年01月01日",text:"我需要冷静一下了，我太优秀，简直是一件很nice的事情哦，biubiu，哒哒哒"}}},mounted:function(){var t=this;this.$axios({method:"post",url:"/CommentAPI/replyDetails",data:this.$qs.stringify({commentId:10,page:0})}).then(function(e){if(console.log(e),1e3!==e.data.status)return t.$toast(e.data.msg),!1;if(null!==e.data.data)e.data.data}).catch(function(t){console.log(t)})},methods:{scrollTopDis:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector(".topic-comment").offsetTop;this.tabFixed=t>e}}},n=c,o=(a("a039"),a("2877")),l=Object(o["a"])(n,s,i,!1,null,"6788c47d",null);e["default"]=l.exports},b34b:function(t,e,a){t.exports=a.p+"img/haha.09eb556c.jpg"}}]);
//# sourceMappingURL=chunk-73fb4290.e3923ded.js.map