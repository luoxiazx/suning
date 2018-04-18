$(function(){
	

var oa=document.getElementsByClassName("login-tab")[0].children;
var scanlogin=document.getElementsByClassName("scan-login")[0];
var pclogin=document.getElementsByClassName("pc-login")[0];
var qc=document.getElementsByClassName("clear");
var user=document.getElementById("userName");
var pass=document.getElementById("password");
var btn=document.getElementById("submit");
var loginerror=document.getElementsByClassName("login-error")[0];
var txt=document.getElementById("txt");
var arr=[/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]*$/,/^[\x21-\x7E]{6,20}$/];
var arr1=["账号错误！","请输入6-20位密码！"]

for (let i=0; i<oa.length; i++) {
		oa[i].onclick=function(){
			if(i==0){
				scanlogin.style.display="block"
				pclogin.style.display="none";
			}else{
				scanlogin.style.display="none";
				pclogin.style.display="block";
			}
			for (var j=0; j<oa.length; j++) {
				oa[j].className="";
				oa[j].childNodes[1].style.display="none";
			}
				this.childNodes[1].style.display="block";
				this.className="tab-on";
		}
}

//验证
user.onchange=function(){
	var val=user.value;
	var reg=arr[0];
	yz(val,reg,0)
}
pass.onchange=function(){
	var val=pass.value;
	var reg=arr[1];
	yz(val,reg,1)
}

function yz(val,reg,i){
	if (reg.test(val)) {
		loginerror.style.display="none";
	} else{
		loginerror.style.display="block";
		txt.innerText=arr1[i];
	}
}
btn.onclick=function(){
		if(user.value==""&&pass.value==""){
			loginerror.style.display="block";
			txt.innerText="请输入用户名 密码";
		}else{
			if(user.value==""){
			loginerror.style.display="block";
			txt.innerText="请输入用户名";
			}
			if(pass.value==""){
				loginerror.style.display="block";
				txt.innerText="请输入密码";
			}
		}
		if (user.value!==""&&pass.value!=="") {
			btn.href="home-page.html";
		}
	}

qc[0].onclick=function(){
	user.value="";
}
qc[1].onclick=function(){
	pass.value="";
}


})