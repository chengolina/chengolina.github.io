// JavaScript Document
      var curIndex = 0,  //当前index
            imgLen = $(".ImgList li").length;  //图片总数
          // 定时器自动变换2.5秒每次
    var autoChange = setInterval(function(){ 
        if(curIndex <  imgLen-1){ 
            curIndex ++; 
        }else{ 
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);  
    },2500);

     //左箭头滑入滑出事件处理
    $("#prev").hover(function(){ 
        //滑入清除定时器
        clearInterval(autoChange);
    },function(){ 
        //滑出则重置定时器
        autoChangeAgain();
    });
    //左箭头点击处理
    $("#prev").click(function(){ 
        //根据curIndex进行上一个图片处理
        curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
        changeTo(curIndex);
    });
    
    //右箭头滑入滑出事件处理
   $("#next").hover(function(){ 
        //滑入清除定时器
        clearInterval(autoChange);
    },function(){ 
        //滑出则重置定时器
        autoChangeAgain();
    });
    //右箭头点击处理
    $("#next").click(function(){ 
        curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
        changeTo(curIndex);
    });

    //对右下角按钮index进行事件绑定处理等
    $(".InfoIcon").find("li").each(function(item){ 
        $(this).hover(function(){ 
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        },function(){ 
            autoChangeAgain();
        });
    });

    //清除定时器时候的重置定时器--封装
    function autoChangeAgain(){ 
            autoChange = setInterval(function(){ 
            if(curIndex < imgLen-1){ 
                curIndex ++;
            }else{ 
                curIndex = 0;
            }
        //调用变换处理函数
            changeTo(curIndex);  
        },2500);
        }

    function changeTo(num){ 
        var goLeft = num*960;
        $(".ImgList").animate({left: "-" + goLeft + "px"},500);
        $(".InfoList").find("li").removeClass("InfoShow").eq(num).addClass("InfoShow");
        $(".InfoIcon").find("li").removeClass("InfoIconNum").eq(num).addClass("InfoIconNum");
		
    }
	//ProductGroup Tabs Change
	$(".ProductNav ul li").click(function(){
		var num=$(this).index();
		
		//if($(this).hasClass(".labelword li.onlabel")){
		//	$(".labelcontent li").removeClass("on").eq(num).addClass("on");
		//}
		//else{
		$(".ProductContent li").removeClass("Index").eq(num).addClass("Index");
		//$(".ProductNav li").removeClass("onlabel").eq(num).addClass("onlabel");
		//}
	});
	//dropdown code
	$('.dropdown-toggle').dropdown();
  