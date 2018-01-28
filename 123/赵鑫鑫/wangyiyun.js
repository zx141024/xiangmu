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
				var  li1=ul1.querySelectorAll('li')
	
				
				
				
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
			      var arr=['#89a5bc','#d2c7c3','#090b08','#c4a2b0','#b1c9cd','#010101','#fff']
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
				
			
				
				function move(){
					removeStyle(num);
					num++;//0 1 2 3 
					if(num==nav3.length){
						num=0;
					}
					
					addStyle(num);
				}	
				
				timer=setInterval(move,2000);
				
		    	prev.onclick=function(){
		    		clearInterval(timer);
					removeStyle(num);
					if(num==0){
						num=nav3.length;
					}
					num--;
					addStyle(num);
				}
		    	
				next.onclick=function(){
		    		clearInterval(timer);
				     move();
				}
				
				con.onmouseenter=function(){
					clearInterval(timer);
				}
				
				con.onmouseleave=function(){
					timer=setInterval(move,2000);
				}
				
			}