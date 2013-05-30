/*
combined files : 

gallery/linkfocus/1.0/index

*/
/**
 * @fileoverview 统一超链接反馈样式
 * @author wanyan<wanyan.wz@taobao.com>
 * @module linkfocus
 **/
KISSY.add('mobile/linkfocus/1.0/index',function (S, Node,Dom,Base) {
    var EMPTY = '';
    var $ = Node.all;
    
    /**
     * 请修改组件描述
     * @class Linkfocus
     * @constructor
     * @extends Base
     */
    function Linkfocus(comConfig) {
        var self = this;
        //调用父类构造函数
        Linkfocus.superclass.constructor.call(self, comConfig);
        self._init();
    }
    S.extend(Linkfocus, Base, /** @lends Linkfocus.prototype*/{

        init: function(selector){
                appVersion = navigator.appVersion,
                webkitTest = (/webkit/gi),
                androidTest = (/android/gi)
                ;

            function addEvent(el) {
                el.addEventListener('touchend', ontouchend, false);
                el.addEventListener('touchmove', ontouchmove, false);
            }

            function removeEvent(el) {
                el.removeEventListener('touchend', ontouchend, false);
                el.removeEventListener('touchmove', ontouchmove, false);
            }
            
            function ontouchstart(e) {
                var el = this;
                addEvent(el);
            }
            
            function ontouchmove(e) {
                var el = this;
                removeEvent(el)
            }
            
            function ontouchend(e) {
                var el = this;

                el.className += ' c-linkfocus-active';
                
                setTimeout(function() {
                    var className = el.className;
                    el.className = className.replace(' c-linkfocus-active', '');
                    removeEvent(el);
                }, 200);
            }


                if (webkitTest.test(appVersion) && 
                        androidTest.test(appVersion))  {
                    //alert(1);
                    //var ss = document.styleSheets[0];
                    Dom.addStyleSheet('* {-webkit-tap-highlight-color:rgba(0,0,0,0);}');
                    
                    if (selector !== false) {
                        Dom.addStyleSheet('.c-linkfocus{-webkit-mask:none;}');
                        Dom.addStyleSheet('.c-linkfocus-move{-webkit-mask:none;}');
                        Dom.addStyleSheet('.c-linkfocus-active{'+
                            'background:transparent!important;'+
                            'background-color:transparent!important;'+
                            '-webkit-mask-clip: content-box;'+
                            '-webkit-mask-origin: content;'+
                            '-webkit-mask-repeat: no-repeat;'+
                            '-webkit-border-radius: 3px;'+
                            '-webkit-mask-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.3)));}');

                        //$(selector).addClass('c-linkfocus-active');
                        $(selector).on('touchstart', ontouchstart);

                        /*
                        if (typeof selector == 'string') {
                            //$(document).on('touchstart', selector || '*[class~="c-linkfocus"]', ontouchstart);
                            $(selector).on('touchstart', ontouchstart);
                        } else if(typeof selector == 'object') {
                            $(selector).on('touchstart', ontouchstart);
                        }
                        */
                    }
                }

        }

    }, {ATTRS : /** @lends Linkfocus*/{

    }});
    return Linkfocus;
}, {requires:['node', 'dom', 'base']});




