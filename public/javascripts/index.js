'use strict';
(function () {
    //轮播图
    function carousel() {
        var oWrap=$('.carousel_wrapper'),
            oUl=oWrap.find('ul').eq(0),
            aLi=oUl.find('li'),
            aImg=oUl.find('img'),
            oPagination=oWrap.find('.carousel-pagination'),
            aNavA=oPagination.find('a');
        var imgWidth=1920,
            iNow=0,
            timer=null,
            length=aLi.length;
        oUl.css('width',aImg.length*imgWidth);
        function toReSize() {
            var viewWidth=$(window).width();
            if(viewWidth>1240){
                for(var i=0;i<aImg.length;i++){
                    aImg.eq(i).css('left',-(imgWidth-viewWidth)/2);
                }
            }
        }
        toReSize();
        $(window).resize(function() {
            toReSize();
        });
        aNavA.on('click',function () {
            iNow=$(this).index();
           $(this).addClass('active').siblings('a').removeClass('active');
            oUl.animate({'left':-iNow*imgWidth},'linear');
        });
        function toRun() {
            iNow++;
            if(iNow === length-1){
                aLi.eq(0).css({
                    'left': (length) * imgWidth,
                    'position': 'relative'
                });
            }else if(iNow > length-1){
                aNavA.eq(0).addClass('active').siblings('a').removeClass('active');
            }
            aNavA.eq(iNow).addClass('active').siblings('a').removeClass('active');
            oUl.animate({'left':-iNow*imgWidth},'linear',function () {
                if(iNow > length-1){
                    oUl.css('left', 0);
                    iNow=0;
                    aLi.eq(0).css({
                        'left': 0,
                        'position': 'relative'
                    });
                }
            });
        }
       timer=setInterval(toRun, 3000);
        oWrap.hover(function () {
            clearInterval(timer);
        },function () {
            timer=setInterval(toRun, 3000);
        });
    }
    //当前滚动条高度
    function scrollTop() {
        var topNav=$('#header').find('nav'),
            arrTop=[840+45,1562+45];
        topNav.find('a').on('click',function () {
            var $index=$(this).index();
            $(this).addClass('active').append('<i class="ico ico-fire"></i>')
                    .siblings('a').removeClass('active').remove('span');
            if($index<topNav.find('a').length-1){
                $('html,body').animate({'scrollTop':arrTop[$index-1]});
            }
        })
    }
    //我们的产品适配手机
    function itemBox() {
        $('.item-box').on('touchend',function(e) {
            $('.dl-product').find('li').removeClass('active');
            $(this).closest('li').addClass('active');
        });
    }
    //发送短信验证码输入框显示
    // function showMsgCode() {
    //     var inputTel=$('#inputTel'),
    //         msgCode=$('#msgCode');
    //     inputTel.on('focus',function () {
    //         msgCode.removeClass('hidden');
    //     });
    // }

    function start() {
        //轮播图
         carousel();
        //当前滚动条高度
         scrollTop();
        //发送短信验证码输入框显示
        //showMsgCode();
        //我们的产品适配手机
         itemBox();
    }
    return {
        start: start
    }
}()).start();