/*! linkfocus - v1.0 - 2013-05-30 11:39:24 AM
* Copyright (c) 2013 wanyan; Licensed  */
KISSY.add("mobile/linkfocus/1.0/index",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a),b._init()}var f=b.all;return a.extend(e,d,{init:function(a){function b(a){a.addEventListener("touchend",h,!1),a.addEventListener("touchmove",g,!1)}function d(a){a.removeEventListener("touchend",h,!1),a.removeEventListener("touchmove",g,!1)}function e(){var a=this;b(a)}function g(){var a=this;d(a)}function h(){var a=this;a.className+=" c-linkfocus-active",setTimeout(function(){var b=a.className;a.className=b.replace(" c-linkfocus-active",""),d(a)},200)}appVersion=navigator.appVersion,webkitTest=/webkit/gi,androidTest=/android/gi,webkitTest.test(appVersion)&&androidTest.test(appVersion)&&(c.addStyleSheet("* {-webkit-tap-highlight-color:rgba(0,0,0,0);}"),a!==!1&&(c.addStyleSheet(".c-linkfocus{-webkit-mask:none;}"),c.addStyleSheet(".c-linkfocus-move{-webkit-mask:none;}"),c.addStyleSheet(".c-linkfocus-active{background:transparent!important;background-color:transparent!important;-webkit-mask-clip: content-box;-webkit-mask-origin: content;-webkit-mask-repeat: no-repeat;-webkit-border-radius: 3px;-webkit-mask-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.3)));}"),f(a).on("touchstart",e)))}},{ATTRS:{}}),e},{requires:["node","dom","base"]});