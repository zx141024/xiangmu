$(function(){
	/*注册框    登录框*/
	$("#closeX").click(function(){
		$("#zck").css("display","none");
		$("#dlk").css("display","none");
	})
	$("#closeX2").click(function(){
		$("#zck").css("display","none");
		$("#dlk").css("display","none");
	})
	$("#yhdl").click(function(){
		$("#dlk").css("display","block");
	})
	$("#mfzc").click(function(){
		$("#dlk").css("display","none");
		$("#zck").css("display","block");
	})
	$("#fhdl").click(function(){
		$("#dlk").css("display","block");
		$("#zck").css("display","none");
	})
	$("#sjhdl").click(function(){
		$("#dlk").css("display","block");
		$("#zck").css("display","none");
	})
	
	/*表单验证*/
	$("#xyb").click(function(){
		if($("#telspan1").html()=='<span style="color: green;">✔</span>'
		&& $("#pwspan1").html()=='<span style="color: green;">✔</span>'){
			alert("注册成功");
			$("#dlk").css("display","block");
			$("#zck").css("display","none");
		}
	})
	$("#dl").click(function(){
		if($("#telspan2").html()=='<span style="color: green;">✔</span>'
		&& $("#pwspan2").html()=='<span style="color: green;">✔</span>'){
			alert("登录成功");
			$("#dlk").css("display","none");
			$("#zck").css("display","none");
			$("#yhdl").html("已登录");
		}
	})
	
	/*播放器*/
	var on=true;
	$(".icn-vol").click(function(){
		if(on==true){
			$(".m-vol").css("visibility","");
			on=false;
		}else{
			$(".m-vol").css("visibility","hidden");
			on=true;
		}
	})
	$(".ply").click(function(){
		if(on==true){
			$(".ply").css("background-position","-40px -165px");
			on=false;
		}else{
			$(".ply").css("background-position","0 -204px");
			on=true;
		}
	})
	
})
