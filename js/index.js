// $(function(){
    //页面加载，文字移动
    //$('.Business_contain').css('transform','translate(20px,20px)');
    $(".business-animate").animate({left:"0px",top:'0px',opacity:'1'},"slow");
    //鼠标悬浮，放大图标
    $('.jansi_main .Business_contain .Business_item .img_box').mouseenter(function(){
        $(this).addClass('active');
    }).mouseleave(function(){
        $(this).removeClass('active');
    })

    //下拉菜单的切换
    $(".drop-click").on("click", function(e){
        $(".menu-display").show();
        $(document).on("click", function(){
            $(".menu-display").hide();
        });
        e.stopPropagation();//阻止冒泡
    });
    $(".menu-display").on("click", function(e){
        e.stopPropagation();//阻止冒泡
    });

    /*$('.navbar-right li a').on('click',function(){
        $(this).css('color','red');
    })*/

    var lis=$('.cooperation>li');
    var buts=$('.cooperation>.but');
    var plays=$('.play_but>span');
    var now=0,next=0,flag=true;
    var t=setInterval(fn,5000);
    $('.cooperation').hover(function () {
        clearInterval(t);
        buts.animate({opacity:1})
    },function () {
        t=setInterval(fn,5000);
        buts.animate({opacity:0})
    });
    $('.pre').on('click',function () {
            fn();
    });
    $('.next').on('click',function () {
        if(flag){
            flag=false;
            next--;
            if(next<0){
                next=lis.length-1
            }
            lis.css({left:'-100%'});
            lis.eq(now).css({left:'0'});
            lis.eq(now).animate({left:'100%'},2000,function () {
                flag=true;
            });
            lis.eq(next).animate({left:'0'},2000,function () {
                flag=true;
            });
            plays.eq(now).removeClass('play_but_hot');
            plays.eq(next).addClass('play_but_hot');
            now=next;
        }
    });
    function fn(){
        if(flag){
            flag=false;
            next++;
            next=next%lis.length;
            lis.css({left:'100%'});
            lis.eq(now).css({left:'0'});
            lis.eq(now).animate({left:'-100%'},2000,function () {
                flag=true;
            });
            lis.eq(next).animate({left:'0'},2000,function () {
                flag=true;
            });
            plays.eq(now).removeClass('play_but_hot');
            plays.eq(next).addClass('play_but_hot');
            now=next;
        }
    }
    window.onblur=function () {
        clearInterval(t);
    };
    window.onfocus=function () {
        t=setInterval(fn,5000);
    };
// });
// http://111.231.75.58:17790/v2/api-docs