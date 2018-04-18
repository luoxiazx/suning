$(function(){
	//顶部广告
	$("#Top-advertisement span").click(function(){
		$("#Top-advertisement").hide();
	})	
	//导航
	$("#login").click(function(){
		$("#dlzc").attr("href","login.html");
	})
	$("#register").click(function(){
		$("#dlzc").attr("href","register.html");
	}) 
})
//轮播
$(function(){
			//加载图片
			for (let i=0; i<$(".img").length; i++) {
    			$(".img")[i].style.background="url(../img/home-page/lun"+(i+1)+".jpg) no-repeat center";
    		}
            //第一张显示
            $(".pic li").eq(0).show();
            //鼠标滑过手动切换，淡入淡出
            $("#position li").mouseover(function() {
                $(this).addClass('cur').siblings().removeClass("cur");
                var index = $(this).index();
                i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
                // $(".pic li").eq(index).show().siblings().hide();
                $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
            });
            //自动轮播
            var i=0;
            var timer=setInterval(play,2000);
            //向右切换
            var play=function(){
                i++;
                i = i > 4 ? 0 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            //向左切换
            var playLeft=function(){
                i--;
                i = i < 0 ? 4 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            //鼠标移入移出效果
            $("#container").hover(function() {
                clearInterval(timer);
            }, function() {
                timer=setInterval(play,2000);
            });
            //左右点击切换
            $("#prev").click(function(){
                playLeft();
            })
            $("#next").click(function(){
                play();
            })
    })

//倒计时			
	var oDate = new Date("2018-03-23 13:20:00");	
	var h=document.getElementById("h");	
	var m=document.getElementById("m");
	var s=document.getElementById("s");
	var timer = setInterval(function(){				
		var nowDate = new Date();		
		//总的时间差
		var ss = Math.floor((oDate-nowDate)/1000);		
		//时
		var hour = Math.floor(ss/3600);
		//分
		var minute = Math.floor(ss/60)%60;
		//秒
		var second = ss%60;
		if (hour<10) {
			hour="0"+hour;
		}
		if (minute<10) {
			minute="0"+minute;
		}
		if (second<10) {
			second="0"+second;
		}
		h.innerHTML=hour;
		m.innerHTML=minute;
		s.innerHTML=second;
		//console.log(ss);
		if(ss<=0){
			console.log("aaa")
			clearInterval(timer);
			h.innerHTML="00";
			m.innerHTML="00";
			s.innerHTML="00";
		}
	},1000);

$(function(){
	var data=[
{"title":"苏宁生鲜",
		"txt1":"新鲜水果",
		"txt2":"海鲜水产",
		"txt3":"牛排",
		"txt4":"苹果",
		"txt5":"猪肉",
		"txt6":"方便面",
		"txt7":"冰淇淋",
		"txt8":"西瓜",
		"txt9":"鲫鱼",
		"txt10":"土豆",
		"txt11":"猪肉",
		"txt12":"猪蹄",
		"txt13":"香蕉"}
]

var olists=document.getElementsByClassName("lists");
var ali=$(".lists .list");
var nav=document.getElementsByClassName("navlist");
var str="";
	for (var i=0; i<7; i++) {
		str+="<li><div class='left'><p>"+data[0].title+"</p></div><div class='right'><span>"+data[0].txt1+"</span><span>"+data[0].txt4+"</span><span>"+data[0].txt4+"</span><span>"+data[0].txt4+"</span><span>"+data[0].txt6+"</span><span>"+data[0].txt8+"</span><span>"+data[0].txt10+"</span><span>"+data[0].txt4+"</span><span>"+data[0].txt12+"</span></div></li>";
		//console.log(str);
		nav[0].innerHTML=str;
	}
			str="";
	for (var i=0; i<4; i++) {
		str+="<li><div class='left'><p>"+data[0].title+"</p></div><div class='right'><span>"+data[0].txt1+"</span><span>"+data[0].txt4+"</span><span>"+data[0].txt2+"</span></div></li>";
		nav[1].innerHTML=str;
	}
	
	var span=$(".navlist li .right span");
	//console.log(span);
	for (let j=0; j<span.length; j++) {
		span[j].onclick=function(){
			window.location.href="goodsList.html";
			//console.log("aaaa")
		}
	}
})
$(function(){
	$(".tom").click(function(){
		$(this).css("color","#e42e3c");
		$(".dj").css("color","#fff")
		$("#tomorrow").show();
		$("#today").hide();
	})
	$(".dj").click(function(){
		$(this).css("color","#e42e3c");
		$(".tom").css("color","#fff")
		$("#tomorrow").hide();
		$("#today").show();
	})
	//优选好物
	var ap=$(".yxhw p");
	var str="";
	for (let i=0; i<ap.length; i++) {
		ap[i].onmouseover=function(){
			for (var j=0; j<ap.length; j++) {
				ap[j].className="";
			}	
			this.className="hover";	
			//console.log(i);
	str="<ul><li><a href='detail.html'><img src='../img/home-page/sp"+(i+1)+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li><li><a href='detail.html'><img src='../img/home-page/sp"+(i+1)+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li><li><a href='detail.html'><img src='../img/home-page/sp"+(i+1)+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li><li><a href='detail.html'><img src='../img/home-page/sp"+(i+1)+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li></ul>"
	$(".sp").html(str);
			
			
		}	
	}	
/*	console.log(a);
	str+="<ul><li><a href='detail.html'><img src='../img/home-page/sp"+1+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li><li><a href='detail.html'><img src='../img/home-page/sp"+1+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li><li><a href='detail.html'><img src='../img/home-page/sp"+1+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li><li><a href='detail.html'><img src='../img/home-page/sp"+1+".jpg'/></a><p>佳洁士（Crest）健康专家全优7效牙膏 消...</p></li></ul>"
	$(".sp").html(str);*/
})