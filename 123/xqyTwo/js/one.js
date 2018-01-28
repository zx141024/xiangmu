window.onload=function(){
	            var btn=document.getElementById('btn');
				var txt=document.getElementById('liuYan');
				var box=document.getElementById('box');
	            var div1=document.getElementById('div1');
	            var qrsc=document.getElementById("QRSC")
	            var qd=document.getElementById("QD")
	            var qx=document.getElementById("QX")
	            var sc=document.getElementById("shanchu");
	            btn.onclick=function(){
	      
	               	var arr=[1,2,3,4,5,6,7,8,9,10,11,12]
					var imgs=document.createElement("img")
					var b=Math.ceil(Math.random()*12)||1
					imgs.src="img/tx"+b+".jpg";
					
						
		            var box1=document.createElement('p');
			        box1.innerHTML=txt.value;
				  
		         
		           var btn1=document.createElement('span');
				 	btn1.innerHTML="删除";
				 	btn1.style.color="#0C72C3"
				    btn1.onclick=function(){
				    	qrsc.style.display="block"
		                  	sc.onclick=function(){
				    			qrsc.style.display="none"
				    	}
				 		
		                  	qx.onclick=function(){
				    			qrsc.style.display="none"
				    	}
		                  	qd.onclick=function(){
		                  	box.removeChild(box1);
		                  			box.removeChild(imgs);
		                  	qrsc.style.display="none"
		                  	}
				 		
				    }
				    box1.appendChild(btn1);
				    var n=txt.value;
					if(n!=''){
						box.appendChild(imgs);
						box.appendChild(box1);
						txt.value='';
					}
					
		
		
		
		      	
	            }
		
		
		
		
		
		
		
		
					

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
					
}
	                
	
            
	
	
	
	
	
	
	
	
	
	
	

