window.onload=function(){
	var menuBtn=document.getElementById("menubtn");
	var nav=document.getElementById("nav");
	menuBtn.onclick=function(){
		if(nav.style.display=="block"){
			nav.style.display="none";
		}else{
			nav.style.display="block";
		}
	}
}
