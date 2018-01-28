window.onload=function(){
	var ul3=document.getElementsByClassName('ul3');
	var span1=document.querySelector(".span1")
	var img=document.querySelectorAll(".span1 img")
	var span2=document.querySelector(".span2")
	var img1=document.querySelectorAll(".span2 img")
	var img2=document.querySelectorAll(".four1 img");
	var div=document.querySelectorAll(".four1 div");
	var xz=document.querySelector(".xz");
	var gb=document.querySelector(".gb");
	var video=document.querySelector("video");
	
   xz.onclick=function(){
   	video.src="mc.mp4"
   	video.style.display="block";
   	 	gb.style.display='block';
   }
	gb.onclick=function(){
   	video.pause()
   	video.style.display="none";
   	gb.style.display='none';
   }
	
	
	
	
	
	console.log(img1);
	console.log(div);
	span1.onmouseover=function(){
		img[1].style.display="none";
		img[0].style.display="block";
	}
	span1.onmouseout=function(){
		img[0].style.display="none";
		img[1].style.display="block";
	}
	span2.onmouseover=function(){
		img1[1].style.display="none";
		img1[0].style.display="block";
	}
	span2.onmouseout=function(){
		img1[0].style.display="none";
		img1[1].style.display="block";
	}
	var n=0;
	span1.onclick=function(){
		n--;
		move(ul3[0],{left:-292*n},500,'linear');
		span2.style.display="block";
		if(n<-7){
			n=0
		span1.style.display="none";	
		}
		if(n<=1){
			n=1;
			span1.style.display="none";	
		}
	}
	span2.onclick=function(){
		n++;
		move(ul3[0],{left:-292*n},500,'linear');
		/*ul3[0].style.left=-292*n+"px";*/
		span1.style.display="block";
		if(n>7){
			n=0
		span2.style.display="none";	
		}
		if(n>=5){
			n=5;
			span2.style.display="none";	
		}
			
		
	}
	          for(var i=0;i<div.length;i++){
				div[i].index=i;         	
         	div[i].onmouseover=function(){
         		img2[this.index].style.left=-270+'px';
         	}
         	div[i].onmouseout=function(){
         		img2[this.index].style.left=270+'px';
         	}

                }




	     
}
