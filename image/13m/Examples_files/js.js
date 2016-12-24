/**
 * 
 * @authors Gan Yuling (yumiao@126.com)
 * @date    2016-09-22 19:34:58
 * @version $Id$
 */
window.onload = function(){

	//bar下拉
	var BarHide = document.getElementById('topA1');
	var BarShow = document.getElementById('topBar');

	//下拉函数
	function pullDown1(a,b){
		a.onmouseover = function(){
		b.style.display = 'block';
	}
		a.onmouseout = function(){
		b.style.display = 'none';
	}
	}
	pullDown1(topA1,topBar);

	//header下拉
	var navMenu = document.getElementById('J_navMenu');
	var headerMenu = document.getElementById('header_mnue');
	var headerLi = headerMenu.getElementsByTagName('li');
	var oDiv = navMenu.getElementsByTagName('div');
	var timer = null;
	var num  = 0;
	
	for (var i = 1; i < headerLi.length -2; i++) {
		
		headerLi[i].index = i;
		num  = 0;
		headerLi[i].onmouseover =show;	
		function show(){
			for (var i = 1; i < headerLi.length- 2; i++) {
				navMenu.style.display = 'none';
				oDiv[i].style.display = 'none';
			}
			for (var i = 1; i < oDiv.length-2 ; i++) {
			oDiv[this.index].style.display = 'block';
		}
			navMenu.style.display = 'block';
			clearInterval(timer);
			timer = setInterval(function(){
				if (num < 240) {
					num +=30;
					
					navMenu.style.height = num +'px';
					for (var i = 1; i < headerLi.length- 2; i++) {
						oDiv[i].style.height = num +'px';
					}
				}	
			},30);	
		}
		//隐藏
		headerLi[i].onmouseout = hide;
		navMenu.onmouseout = hide;
		
		 function hide(){
		 
			clearInterval(timer);
			
			
			timer =setInterval(function(){
				if (num >=0) {
					num -=30;	
					navMenu.style.height = num +'px';
					for (var i = 1; i < headerLi.length- 2; i++) {
						oDiv[i].style.height = num +'px';
						oDiv[i].style.display = 'none';
					}	
				
				}		
			},30);	
		}
		navMenu.onmouseover = function(){
			clearInterval( timer );
			navMenu.style.display = 'block';
			navMenu.style.height = '240px';

		}
	}
	
}	

