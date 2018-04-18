//形参obj表示要发生样式变化的DOM对象，json表示哪些样式属性变化什么样一个目标值
function startMove(obj,json,fn){
	//开启一个定时器之前先清除定时器，这是真理
	//把定时器加到obj上,避免不同DOM对象定时器相互干扰
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//看见flag，先不用理会，后续你就知道了
		var flag = true;
		//让每一个样式属性同时变化
		for(var attr in json){
			//attr表示的样式属性名称
			//json[attr]表示属性值，及目标值，即最终要达到的属性值
			var iTarget = json[attr];
			//由于像素的变化需要加px，这里又需要考虑透明度的变化，所以需要进行判断
			if(attr == "opacity"){
				//考虑到filter和opacity的取值有100倍的关系，便于计算与取值，在opacity的值基础上乘以100
				//没关系，后边赋值时再除以100
				var iCur = parseInt(getStyle(obj,"opacity")*100);
			}else{
				//parseInt为了去除单位px
				var iCur = parseInt(getStyle(obj,attr));
			}
			//iSpeed为每一次的变化值，这个值是逐渐减小，趋向于0
			var iSpeed = (iTarget - iCur)/8;
			//但是永远不能直接等于0，导致属性值变到某个程度时，不再发生变化
			//iSpeed是一个小于1的数时，考虑取整，涉及向上还是向下的问题
			//如果是一个正数，向下取整，取到0，在没有达到目标值时，就不再变化了，不符合要求
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed): Math.floor(iSpeed);
			
			//在赋值时，仍然考虑透明度和像素
			if(attr == "opacity"){
				obj.style.opacity = (iCur+iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")"
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			
			//这时需要考虑什么清除定时器的问题，
			//如果所有都达到目标值时，才可以清除定时器
			//判断某个属性值是否达到了目标值，如果没有达到就将flag置为false
			//这个flag可以在上面定义出来，表示所有都达到了目标值
			if(iCur != iTarget){
				flag = false;
			}
			
		}
		//如果flag为true，表示都达到了目标值，可以清除该对象上定时器
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		
	},30);
}
function getStyle(obj,attr){
				if(window.getComputedStyle){
					return getComputedStyle(obj,null)[attr];
				}
					return obj.currentStyle[attr];
			}