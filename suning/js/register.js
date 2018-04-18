
$(function(){
	//验证码
var sendSmsCode=document.getElementById("sendSmsCode");
var str="";
for (var i=0; i<4; i++) {
	str+=Math.floor(Math.random()*10);
}
sendSmsCode.innerHTML=str;
	
	var ok=document.getElementsByClassName("ok");
	var arr=[/^[1][3,4,5,7,8][0-9]{9}$/,/^[\x21-\x7E]{6,20}$/];
	var level=document.getElementsByClassName("level");
	var a=b=c=d=0;
	//文本框内容验证
	$("#mobileAlias").change(function(){
		if (arr[0].test($("#mobileAlias").val())) {
			$("#phone").text("").focus();
			ok[0].style.display="block";
			a=1;
		} else{
			ok[0].style.display="none";
			$("#phone").text("输入错误！");	
		}
	})
	
	$("#smsCode").change(function(){
		if ($("#smsCode").val()==str) {
			$("#yzm").text("").focus();
			ok[1].style.display="block";
			b=1;
		} else{
			ok[1].style.display="none";
			$("#yzm").text("输入错误！");	
		}
	})	
	$("#setPsw").click(function(){
		$(".suggestion-hide").show();
		$("#setPswTip").hide();
	})
	$("#setPsw").bind('input propertychange',function(){
		$("#setPsw_rank").show();
		if (arr[1].test($("#setPsw").val())) {
			if ($("#setPsw").val().length>=6) {
				level[0].style.background="#f60";
				level[1].style.background="#cacaca";

			}
			if($("#setPsw").val().length>=10){
				level[1].style.background="#f60";
				level[2].style.background="#cacaca";
			}
			if ($("#setPsw").val().length>=15) {
				level[2].style.background="#f60";
			}
			$("#setPswTip").text("").focus();
			ok[2].style.display="block";
		} else{
			level[0].style.background="#cacaca";
			level[1].style.background="#cacaca";
			level[2].style.background="#cacaca";
			ok[2].style.display="none";
		}
	})
	$("#setPsw").change(function(){
		if (arr[1].test($("#setPsw").val())) {
			c=1;
		} else{
			$(".suggestion-hide").hide();
			$("#setPsw_rank").hide();
			$("#setPswTip").show();
			$("#setPswTip").text("输入错误！");	
		}
	})		

	//勾选
	$("#protocol").click(function(){
		if ($(this).prop("checked")) {
			$("#protocolTip").text("");
			d=1;
		} else{
			$("#protocolTip").text("您必须同意苏宁服务条款后，才能提交注册");
		}
	})
	
	$("#save").click(function(){
		//手机
		if ($("#mobileAlias").val()=="") {
			$("#phone").text("请输入注册手机！");
			flag=true;
		}
		//验证码	
		if($("#smsCode").val()==""){
			$("#yzm").text("请输入验证码！");
			flag=true;
		}
		//密码
		if($("#setPsw").val()==""){			
			$("#setPswTip").show();
			$("#setPswTip").text("请输入密码！");
		}
		
			var data=JSON.stringify({name:$("#mobileAlias").val(),pass:$("#setPsw").val()});
			//console.log(data);
			$.cookie("uses",data);
	    	//console.log($.cookie("uses"))
	    	//console.log(a,b,c,d);
	    	if (a&&b&&c&&d) {    		
	    		$("#save").attr("href","home-page.html");
	    		console.log(flag==false);
		  	}
	})
	



})
