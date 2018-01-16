'use strict';
(function () {
    //导航滚动
    function winScrollTop() {
        $(window).scroll(function () {
            var scrollTop=$(window).scrollTop();
            if(scrollTop>=(410-$('#header').height())){
                $('#header').addClass('bg');
            }else{
                $('#header').removeClass('bg');
            }
        });
    }
    function start() {
        //导航滚动
         winScrollTop();
    }
    return {
        start: start
    }
}()).start();