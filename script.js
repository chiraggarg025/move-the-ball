document.addEventListener('keydown',function(e){
	// e.preventDefault();
	if(e.code=='KeyW'){
		let margin=document.getElementById('ball').style.marginTop;

		margin=Number(margin.substring(0,margin.length-2));
		if(margin>1){
			margin-=1;
		}
		document.getElementById('ball').style.marginTop=margin+'vh';
	}else if(e.code=='KeyS'){
		let margin=document.getElementById('ball').style.marginTop;
		margin=Number(margin.substring(0,margin.length-2));
		if(margin<78){
			margin+=1;
		}
		document.getElementById('ball').style.marginTop=margin+'vh';
	}else if(e.code=='KeyD'){
		let margin=document.getElementById('ball').style.marginLeft;
		margin=Number(margin.substring(0,margin.length-2));
		if(margin<89){
			margin+=1;
		}
		document.getElementById('ball').style.marginLeft=margin+'vw';
	}else if(e.code == 'KeyA'){
		let margin=document.getElementById('ball').style.marginLeft;
		margin=Number(margin.substring(0,margin.length-2));
		if(margin>1){
			margin-=1;
		}
		document.getElementById('ball').style.marginLeft=margin+'vw';
	}
})