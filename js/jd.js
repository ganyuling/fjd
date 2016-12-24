/**
 * 
 * @authors 甘雨令 (245323430@qq.com)
 * @date    2016-10-02 16:25:34
 * @version $Id$
 */

$(function(){

/*-------bar下拉菜单-------*/
    ;(function(){
    var timer1 = null;
       function barShow(barA){
        $(''+barA+'').hover(function(){
            // $(this).children('.barA1').attr('id', 'chu');
            $(this).addClass('loc_s')
            $(this).children('div').show()

        },function(){
            $(this).removeClass('loc_s')
            $(this).children('div').hide()
        })
        }
        barShow('.bar_l>li')
        barShow('.bar_r >ul>li') 

        $('.location_in li a').click(function(){
            clearInterval(timer1);

            $('.bar_l >li span').html($(this).html())
            $('.loc_jcW').width($('.bar_l >li').width()+10)
            $('.location_in li a').removeClass('loc_cun');
            $(this).addClass('loc_cun')

            timer1 = setTimeout(function(){
                 $('.location_in').hide()
            },300)
           
        })



    })();
	

/*------轮播图------*/
    ;(function(){

        var num = 0;
        var timer = null;
        //鼠标移动按钮
		$('.banner ol li').hover(function() {
			clearInterval(timer);
            $('.ban_btn >a').show();
			$(this).addClass('li01').siblings().removeClass('li01');
			$('.banner ul li').eq( $(this).index()).css({'z-index':15}).stop().hide().fadeIn().siblings().css({'z-index':13});
             
            num = $(this).index();
		},function(){
            troll();
        });
        //鼠标移动banner上停止移动 
        $('.banner').hover(function() {
            $('.ban_btn >a').show();
            clearInterval(timer);
        }, function() {
            troll(); 
            $('.ban_btn >a').hide();
        });
        //调用banner轮播播放
        troll();
        //鼠标移动左侧的按钮
        $('.hre_01').click(function(){
            num++;
              if (num === $('.banner ol li').length )  num = 0;
            runTr();       
        })
        //鼠标移动右侧的按钮
        $('.hre_02').click(function(){
            num--;
            if (num <0 )  num = $('.banner ol li').length;   
            runTr();               
        })
        //函数变量
        function troll(){
            clearInterval(timer);
            timer = setInterval(function(){
            num++;
            if (num === $('.banner ol li').length )  num = 0;    
            runTr();
            },2000)
        }
        function runTr(){
            $('.banner ol li').eq(num).addClass('li01').siblings().removeClass('li01');
                $('.banner ul li').eq(num).stop().css({'z-index':15}).hide().fadeIn().siblings().css({'z-index':12})
        }
    })();

/* bannmer左侧tab栏切换*/
    ;(function(){ 
        //鼠标移上触发的事件
        $('.con01_l > ul li').hover(function(){

            $(this).children('a').addClass('con_cur').siblings().removeClass('con_cur')
            $('.ban_all .ban_con').eq($(this).index()).show().siblings().hide()
        },function(){
            $(this).children('a').removeClass('con_cur');
            $('.ban_all .ban_con').hide() 
        })
        //鼠标移上显示的区域显示
         $(' .ban_all .ban_con').hover(function() {
             $('.con01_l > ul li a').eq($(this).index()).addClass('con_cur').siblings().removeClass('con_cur')
             $(this).show()
         }, function() {
             $('.con01_l > ul li a').removeClass('con_cur');
             $(this).hide()
         });

    })();

/*---each加工函数----*/
    ;(function(){
        $('.tab_ul >ul span').each(function(index ,el){
                var num = -(index * 25);
            $(el).css({'background-position': '0  '+num+'px'});
        })
    })();

/*-------tab栏/选项卡------*/
    ;(function(){
        //鼠标移入选项卡切换
        $('.tab_info h4 a').mouseover(function(event) {
           
            $(this).addClass('tab_cur').siblings().removeClass('tab_cur');
            $('.tab_ul01 li').eq($(this).index()).attr('id', 'tab_li').siblings().attr('id', '');
        });
        //鼠标移入调用函数显示和隐藏
        lifeserv('.fore01',0);
        lifeserv('.fore02',1);
        lifeserv('.fore03',2);
        lifeserv('.fore04',3);
        //点击触发事件
        $('.tab_info .guanbi').click(function(){
           
            $('.table_01 .tab_ul').show().siblings().hide() 

          $('.tab_ul .tab_p').show()

        })
        $('.tab_ul .tab_p').mouseout(function(){
            $(this).hide()
        })
        //自定义函数封装
        function lifeserv(a,i){
            $('.tab_ul  '+a+'').mouseover(function(){
                $('.tab_info h4 a').removeClass('tab_cur')
                $('.table_01').children('.tab_info').show().siblings().hide()
                $('.tab_info h4 a:eq('+i+')').addClass('tab_cur');
                $('.tab_ul01 li:eq(0) ').attr('id', 'tab_li').siblings().attr('id', '');
            })
        }
})();

/*------右侧导航栏------*/
    ;(function(){
        var num = null;
        //鼠标移入触发的事件
        $('.right_nav_u li,.right_nav_d li').hover(function(){
           if (num != $(this).index()) {
                $(this).children('.nav_jd').stop().css({background:'#c81623'})
                $(this).children('.tab_text').stop().css({background:'#c81623'}).animate({left:-62});
            }
        },function(){
            $(this).children('.nav_jd').stop().css({background:'#7a6e6e'})
            $(this).children('.tab_text').stop().css({background:'#7a6e6e'}).animate({left: 34});
            if (num == $(this).index()) { 
                 $('.tab_text,.nav_jd').css({background:'#7a6e6e'});
                $(this).children('.nav_jd').css({'background-color':'#c81623'})  
             }
        })
        //鼠标点击触发的事件
        $('.right_nav_u li').click(function(event) {
            if ($(this).index()==0) {
                $('.win_index').show()
                $('#login').show()
            }else {
                $(this).parents('.right_sideBar').stop().animate({right:0});
                $(this).children('.tab_text,.nav_jd').css({'background-color':'#7a6e6e'})
                $('.toolbar').eq( $(this).index() ).stop().animate({right:0}).siblings().animate({right:-270})
                 num = $(this).index() 
            }
        });
        //鼠标移到关闭按钮关闭
        $('.tool_h3 span ,#jingdong').click(function(event) {

            $('.right_sideBar').stop().animate({right:-270})
            $('.tab_text,.nav_jd').css({'background-color':'#7a6e6e'})
            num =null;
        
        });
        //点击登录
        $('.login_btn a').click(function(){
            $('#login').hide()
            $('.win_index').hide()
            $('.tab_text,.nav_jd').css({background:'#7a6e6e'});
            $('.tab_text,.nav_jd:eq(0)').css({'background-color':'#c81623'})
            $('.right_sideBar:eq(0)').stop().animate({right:0});
            $('.toolbar').eq(0).stop().animate({right:0}).siblings().animate({right:-270})
                num = 0
        })
      
        //关闭登录框
        $('.dialog_title span').click(function(){
            $('#login').hide()
            $('.win_index').hide()
            
        })
    })();

/*--------------------- scorll左侧导航栏  -------------------*/
    ;(function(){
    //返回顶部
        $('.tab_scoll,nav_jd01').click(function(){
            $('body,html').stop().animate({scrollTop:0})
        
        })

    // 左侧导航栏 
        //获取window的可视高度
        var winH = ($(window).height())/2; 
        var timer = null;
        
        //scroll滚动监听
        $(window).scroll(function(){
            var sorcH = $(window).scrollTop();
            clearTimeout(timer);
            timer = setTimeout(function(){  
                if ( sorcH > srcNum(0)) {
                
                    $('.left_nav').show()
               
                    if( sorcH < srcNum(1)){
                        scrollTab('0');


                    }else if ( sorcH < srcNum(2)) {
                        scrollTab('1'); 
                    }else if ( sorcH < srcNum(3)) {
                        scrollTab('2');
                    }else if ( sorcH < srcNum(4)) {
                        scrollTab('3');
                    }else if ( sorcH < srcNum(5)) {
                        scrollTab('4');
                    }else if ( sorcH < srcNum(6)) {
                        scrollTab('5');
                    }else if ( sorcH < srcNum(7)) {
                        scrollTab('6');
                    }else if ( sorcH < srcNum(8)) {
                        scrollTab('7');
                    }else if ( sorcH < srcNum(9)) {
                        scrollTab('8');
                    }else if ( sorcH < srcNum(10)) {
                        scrollTab('9');
                    }else if ( sorcH < srcNum(11)) {
                        scrollTab('10');  
                    }else if ( sorcH < srcNum(12)) {
                        scrollTab('11');    
                    }else  {
                       $('.left_nav').hide()  
                    }
                
            }else {
                $('.left_nav').hide()
            }
        },100)
     
        })
        //左侧导航栏点击触发楼层
        $('.left_nav li').click(function(){

            var scT = $('#jingdong').children('#fzxb').eq($(this).index()).offset().top
            $('body,html').stop().animate({scrollTop: scT})
            $(this).children('span').addClass('col_cur').siblings().removeClass('col_cur')
        })
        //获取左侧导航楼层高度
        function srcNum(ab){
          var scT = $('#jingdong').children('#fzxb').eq(ab).offset().top - winH;
          
          return parseInt(scT);
        }
        //scroll滚动调用
         function scrollTab(num){
            $('.left_nav li span').removeClass('col_cur')

            $('.left_nav li:eq('+num+')').children('span').addClass('col_cur')
            $('.fs_l .str_cur').eq(num).slideDown(1000)
            $('.fs_l .str_cur:not(:eq('+num+'))').slideUp()
        }

    })();

/*------点击无缝隙轮播图------*/
    ;(function(){

        var num = 0;
   
        $('.hre_11').click(function(){
    
           if (num == 0){
                num =3
            }   
            if (num == 3) {      
            $('.time_in').css({left: -3000})
            }     
            num--;
            $('.time_in').animate({left: -1000 *num})       
        })
        $('.hre_12').click(function(){   
            if (num == 3) {      
            $('.time_in').css({left: 0})
            num = 0
            }
            num++;
            $('.time_in').animate({left: -1000 *num})

        })



    })();

/*------选项卡------*/
    ;(function(){

        $('.fs_r >ul li').mouseover(function(event) {
        
            $(this).addClass('fs_li_01').siblings().removeClass('fs_li_01'),
            $('.fzxb_box .fzxb_all').eq($(this).index()).show().siblings().hide()
        });
    })();



var num =0
$('.guess_top a').click(function(){
    num++;
    if (num>2) {
        num=0
    }
    $('.guess_s ul').css({left:-1006*num})
})

        timer2 = null;
        num3= 0;
            function roundUp(){
            clearInterval(timer2)
            timer2 = setInterval(function(){
                num3-=120;
                if (num3 < -400) {
                    num3 = 0; 
                    $('.tt_r ul').css('top','0')
                }
                $('.tt_r ul').stop().animate({top:num3});

            },2000)
        }
        roundUp();
        $('.tt_r ul').hover(function(){
            clearInterval(timer2)
        },function(){
            clearInterval(timer2)
            roundUp();
        })







})