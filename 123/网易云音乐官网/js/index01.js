window.onload=function(){
	var block=document.querySelectorAll(".block");
	var con=document.querySelector(".con_one");
	var redio=document.getElementById("radio");
	var nav3=document.querySelectorAll("#radio span");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var  kj=document.getElementById("dkj");
	var  dl=document.querySelector('.dl');
	var  ul1=document.querySelector(".ul1 li ul");
	var  dl=document.querySelector(".ul1 li");
	var  li1=ul1.querySelectorAll('li');
	
	dl.onmousemove=function(){
		ul1.style.display='block';
	}
	dl.onmouseout=function(){
		ul1.style.display='none';
	}
	for(var a=0;a<li1.length;a++){
		li1[a].onmousemove=function(){
			this.style.background='#5F5F5F';
		}
		li1[a].onmouseout=function(){
			this.style.background='#242424';
		}
	}			
				
	var num=0;
    var timer;
    var arr=['#2f1157','#000000','#f3eeda','#e2785e','#f9fbfa','#000000','#fe413d'];
	for(var i=0;i<nav3.length;i++){
		nav3[i].index=i;
		nav3[i].onmouseover=function(){
			removeStyle(num);
			addStyle(this.index);
			num=this.index;
		}
	}
				
	function removeStyle(n){
		nav3[n].removeAttribute("class");
	    block[n].style.display="none";
	}
	
	function addStyle(n){
		kj.style.background=arr[n];
		nav3[n].className="active";
		block[n].style.display="block";
	}	
				
	function moves(){
		removeStyle(num);
		num++;//0 1 2 3 
		if(num==nav3.length){
			num=0;
		}
		addStyle(num);
	}	
				
	timer=setInterval(moves,2000);
	
	prev.onclick=function(ev){
		clearInterval(timer);
		removeStyle(num);
		if(num==0){
			num=nav3.length;
		}
		num--;
		addStyle(num);
		ev.cancelBubble=true;
	}
		    	
	next.onclick=function(ev){
		clearInterval(timer);
	     moves();
	     ev.cancelBubble=true;
	}
	
	con.onmouseenter=function(){
		clearInterval(timer);
	}
	
	con.onmouseleave=function(){
		timer=setInterval(moves,2000);
	}
	
	
	
	/*返回顶部*/
	var fhdb=document.getElementById("fhdbTop");
	var height=document.documentElement.clientHeight;
	window.onscroll=function(){
		var h=document.documentElement.scrollTop||document.body.scrollTop;
		if(h>height){
			fhdb.style.display="block";
		}else{
			fhdb.style.display="none";
		}
	}
	fhdb.onclick=function(ev){
		var t=document.documentElement.scrollTop||document.body.scrollTop;
		var timer=setInterval(function(){
			t-=100;
			window.scrollTo(0,t);
			if(t<0){
				clearInterval(timer);
				return;
			}
		},16);
		ev.cancelBubble=true;
	}
	
	
	/*音乐播放*/
	var zhengti=document.getElementById("zhengti");
	zhengti.onmouseover=function(){
		zhengti.style.top=-53+"px";
	}
	zhengti.onmouseout=function(){
		zhengti.style.top=-7+"px";
	}
	
	
	/*表单验证*/
	var zck=document.getElementById("zck");
	var dlk=document.getElementById("dlk");
	var xyb=document.getElementById("xyb1");
	var dl=document.getElementById("dl");
	var tel1=document.getElementById("tel1");
	var tel2=document.getElementById("tel2");
	var telspan1=document.getElementById("telspan1");
	var telspan2=document.getElementById("telspan2");
	var passWord1=document.getElementById("passWord1");
	var passWord2=document.getElementById("passWord2");
	var pwspan2=document.getElementById("pwspan2");
	var a1=1;
	var a2=1;
	tel1.oninput=function(){ 
		var regex=/^1[3579]\d{9}$/;
	    if(tel1.value==""||tel1.value==null){
			telspan1.innerHTML='<span style="color: red;">?</span>';
		}else if(!regex.test(tel1.value)){
			telspan1.innerHTML='<span style="color: red;">X</span>';
		}else{
			telspan1.innerHTML='<span style="color: green;">✔</span>';
		}
	}
	passWord1.oninput=function(){
		var Regex=/^[a-zA-Z0-9]{6,}$/;
		if(passWord1.value=="" || passWord1.value==null){
			pwspan1.innerHTML='<span style="color: red;">?</span>';
		}else if(!Regex.test(passWord1.value)){
			pwspan1.innerHTML='<span style="color: red;">X</span>';
		}else{
			pwspan1.innerHTML='<span style="color: green;">✔</span>';
		}
	}
	tel2.oninput=function(){ 
		if(tel2.value==""||tel2.value==null){
			telspan2.innerHTML='<span style="color: red;">?</span>';
		}else if(tel2.value!=tel1.value){
			telspan2.innerHTML='<span style="color: red;">X</span>';
		}else{
			telspan2.innerHTML='<span style="color: green;">✔</span>';
		}
	}
	passWord2.oninput=function(){
		if(passWord2.value=="" || passWord2.value==null){
			pwspan2.innerHTML='<span style="color: red;">?</span>';
		}else if(passWord2.value!=passWord1.value){
			pwspan2.innerHTML='<span style="color: red;">X</span>';
		}else{
			pwspan2.innerHTML='<span style="color: green;">✔</span>';
		}
	}
	
	
	var zuo=document.getElementById("zuo");	
	var you=document.getElementById("you");	
	var huikuang=document.getElementById("huikuang");

	//move(huikuang,{left:-780},500,"linear");
	zuo.onclick=function(ev){
		ev.cancelBubble=true;
		move(huikuang,{left:-790},500,'linear');
	}
	you.onclick=function(ev){
		ev.cancelBubble=true;
		move(huikuang,{left:0},500,'linear');
	}
	
		
	
		
	
	
}
	
