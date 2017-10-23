function date(){
	var d = new Date();
	var month = d.getMonth();
	month=month+1
	var day=d.getDate();
	var week = "周" + "日一二三四五六".split("")[new Date().getDay()];
	 
	document.getElementById("weather-time").innerHTML=month+"月"+day+"日"+"<br>"+week;
}
$(document).ready(function(){
  $(".home-list-btn").mouseover(function(){
    $(this).next("div").slideDown(0);
  });
  $(".home-list").mouseleave(function(){
    $(this).children("div").slideUp(0);
  });
});
$(document).ready(function(){
  $(".home-list-btn1").mouseover(function(){
    $(this).next("div").slideDown(0);
  });
  $(".home-list").mouseleave(function(){
    $(this).children("div").slideUp(0);
  });
});
$(document).ready(function(){
  $(".home-list-btn2").mouseover(function(){
    $(this).next("div").slideDown(0);
  });
  $(".home-list").mouseleave(function(){
    $(this).children("div").slideUp(0);
  });
});
function tiao(){
	
		
    var str=prompt("请添加你感兴趣的内容","QQ空间");
    if(str)
    {
       	alert("您刚输入的是："+ str)
    }
}
//function showimg(){
//
//
//window.open ('new_file.html', 'newwindow', 'height=1208, width=1920, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no') 
//
//}
//window.onload=function()
//{
// function adsorption()
// {
// 	
//	   	var headerWrap=document.getElementsByClassName('qrcode');
//	    var scrollTop=0;
//	    window.onscroll=function()
//	    {
//	    	
//	    	scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
//	    	if(scrollTop>100)
//	    	{
//	    		
//	      		headerWrap.className='fix';
//	     	}
//	    	else
//	    	{
//	     		headerWrap.className='qrcode';
//	     	}
//	    }
//  }
// 
// adsorption();
//}
$(document).ready(function(){
	$("#go_top").hide();
	$(function () {
		//检测屏幕高度
		var height=$(window).height();
		//scroll() 方法为滚动事件
		$(window).scroll(function(){
			if ($(window).scrollTop()>height){
				$("#go_top").fadeIn(500);
			}else{
				$("#go_top").fadeOut(500);
				}
		});
		$("#go_top").click(function(){
			$('body,html').animate({scrollTop:0},100);
			return false;
		});
	});
});
			