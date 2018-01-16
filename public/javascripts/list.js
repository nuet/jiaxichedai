'use strict';
(function () {
    //手风琴效果
    function accordion() {
        var $accordion=$('.accordion'),
            $dt=$accordion.find('dt');
        $accordion.find('dl').eq(0).addClass('active').find('dd').show()
            .end().find('dt').find('a').text('-');
        $dt.on('click','a',function () {
            var parent=$(this).closest('dl');
            if(parent.hasClass('active')){
                parent.removeClass('active').find('dd').slideUp('slow');
                $(this).text('+');
            }else{
                $accordion.find('dl').removeClass('active').find('dd').slideUp('slow')
                    .end().find('a').text('+');
                parent.addClass('active').find('dd').slideDown('slow');
                $(this).text('-');
            }
        })
    }
    //加入我们
    function scrollTop() {
        if(window.location.search.indexOf('join')>0){
            $('html,body').animate({'scrollTop':'1450px'});
        }
    }
    function start() {
        //手风琴效果
         accordion();
        //加入我们
         scrollTop();
    }
    return {
        start: start
    }
}()).start();