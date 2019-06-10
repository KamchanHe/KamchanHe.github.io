var yuanxinX=document.querySelector(".box2-1-1-2-1-1-1-1").offsetWidth+document.querySelector(".box2-1-1-2").offsetWidth,
yuanxinY=document.querySelector(".box1").offsetHeight+document.querySelector(".box2-1-1-2-1").offsetHeight+document.querySelector(".box2-1-1-2-1-1-1-2").offsetWidth;
console.log(yuanxinX,yuanxinY)
var box=document.querySelector(".box");
function rotate(obj,deg,scale1,x1,y1,deg2,scale2,x2,y2){
	var jiaodu=deg,suofang=scale1,weiyiX=x1,weiyiY=y1;
	obj.rotate=setInterval(function(){
		jiaodu++;
		suofang+=scale2;
		weiyiX+=x2;
		weiyiY+=y2;
		obj.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		obj.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==deg2) {clearInterval(obj.rotate)}
	},10)
	obj.style.transformOrigin="left 61.8%";
	obj.style.webkitTransformOrigin="left 61.8%";
	// obj.style.transformOrigin=`${yuanxinX}px ${yuanxinY}px`;//27.466667 54.064039
	// obj.style.webkitTransformOrigin=`${yuanxinX}px ${yuanxinY}px`//'103px 439px';
}
// rotate(box,0,1,0,0,90,0.618/90,0,0);
// rotate(box,0,1,0,0,90,0.618/90,38/90,0);

// function rotate1(){
// 	var jiaodu=0,suofang=1,weiyi=0;
// 	var rotate1=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.0068889;
// 		weiyi+=0.422222222;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyi}%) translateY(-0%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyi}%) translateY(-0%)`;
// 		if (jiaodu==90) {clearInterval(rotate1)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,90,1.618,0,0,180,(1.618*1.618-1.618)/90,0,0);
// rotate(box,90,1.618,38,0,180,(1.618*1.618-1.618)/90,0,14/90);

// function rotate2(){
// 	var jiaodu=90,suofang=1.62,weiyiY=0,weiyiX=36;
// 	var rotate2=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.01111111;
// 		weiyiY+=0.162222222;
// 		weiyiX+=0.02222222;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==180) {clearInterval(rotate2)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,180,Math.pow(1.618,2),0,0,270,(Math.pow(1.618,3)-Math.pow(1.618,2))/90,0,0);
// rotate(box,180,Math.pow(1.618,2),38,14,270,(Math.pow(1.618,3)-Math.pow(1.618,2))/90,-14.4/90,0.6/90);

// function rotate3(){
// 	var jiaodu=180,suofang=2.618,weiyiX=38,weiyiY=14;
// 	var rotate3=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.01797778;
// 		weiyiX+=-0.16;
// 		weiyiY+=0.00666667;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==270) {clearInterval(rotate3)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,270,Math.pow(1.618,3),0,0,360,(Math.pow(1.618,4)-Math.pow(1.618,3))/90,0,0);
// rotate(box,270,Math.pow(1.618,3),23.6,14.6,360,(Math.pow(1.618,4)-Math.pow(1.618,3))/90,0.4/90,-5.9/90);

// function rotate4(){
// 	var jiaodu=270,suofang=4.236,weiyiX=23.6,weiyiY=14.6;
// 	var rotate4=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.03182222;
// 		weiyiX+=0.00444444;
// 		weiyiY+=-0.06555556;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==360) {clearInterval(rotate4)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,360,Math.pow(1.618,4),0,0,450,(Math.pow(1.618,5)-Math.pow(1.618,4))/90,0,0);
// rotate(box,360,Math.pow(1.618,4),24,8.7,450,(Math.pow(1.618,5)-Math.pow(1.618,4))/90,5.1/90,0.4/90);

// function rotate5(){
// 	var jiaodu=360,suofang=7.1,weiyiX=24,weiyiY=8.7;
// 	var rotate5=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.04444444;
// 		weiyiX+=0.05666667;
// 		weiyiY+=0.00444444;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==450) {clearInterval(rotate5)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,450,Math.pow(1.618,5),0,0,540,(Math.pow(1.618,6)-Math.pow(1.618,5))/90,0,0);
// rotate(box,450,Math.pow(1.618,5),29.1,9.1,540,(Math.pow(1.618,6)-Math.pow(1.618,5))/90,-0.02/90,2.27/90);

// function rotate6(){
// 	var jiaodu=450,suofang=11.1,weiyiX=29.1,weiyiY=9.1;
// 	var rotate6=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.08444444;
// 		weiyiX+=-0.00022222;
// 		weiyiY+=0.02522222;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==540) {clearInterval(rotate6)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,540,Math.pow(1.618,6),0,0,630,(Math.pow(1.618,7)-Math.pow(1.618,6))/90,0,0);
// rotate(box,540,Math.pow(1.618,6),28.08,11.37,630,(Math.pow(1.618,7)-Math.pow(1.618,6))/90,-1.89/90,-1.6/90);

// function rotate7(){
// 	var jiaodu=540,suofang=18.7,weiyiX=29.08,weiyiY=11.37;
// 	var rotate7=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.11333333;
// 		weiyiX+=-0.021;
// 		weiyiY+=-0.00177778;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==630) {clearInterval(rotate7)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

// rotate(box,630,Math.pow(1.618,7),0,0,720,(Math.pow(1.618,8)-Math.pow(1.618,7))/90,0,0);
// rotate(box,630,Math.pow(1.618,7),28.9,11.21,720,(Math.pow(1.618,8)-Math.pow(1.618,7))/90,-0.26/90,-0.82/90);

// function rotate8(){
// 	var jiaodu=630,suofang=28.9,weiyiX=27.19,weiyiY=11.21;
// 	var rotate8=setInterval(function(){
// 		jiaodu++;
// 		suofang+=0.19844444;
// 		weiyiX+=-0.00288889;
// 		weiyiY+=-0.00911111;
// 		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
// 		if (jiaodu==720) {clearInterval(rotate8)}
// 	},10)
// 	box.style.transformOrigin="left 61.8%";
// 	box.style.webkitTransformOrigin="left 61.8%";
// };

function rotate11(){
	var jiaodu=90,suofang=1.62,weiyi=38;
	var rotate11=setInterval(function(){
		jiaodu--;
		suofang+=-0.0068889;
		weiyi+=-0.422222222;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyi}%) translateY(-0%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyi}%) translateY(-0%)`;
		if (jiaodu==0) {clearInterval(rotate11)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate22(){
	var jiaodu=180,suofang=2.62,weiyiY=14.6;
	var rotate22=setInterval(function(){
		jiaodu--;
		suofang+=-0.01111111;
		weiyiY+=-0.16222222;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-38%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-38%) translateY(-${weiyiY}%)`;
		if (jiaodu==90) {clearInterval(rotate22)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate33(){
	var jiaodu=270,suofang=4.236,weiyiX=23.6,weiyiY=14.6;
	var rotate33=setInterval(function(){
		jiaodu--;
		suofang+=-0.01795556;
		weiyiX+=0.16;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-14.6%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-14.6%)`;
		if (jiaodu==180) {clearInterval(rotate33)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate44(){
	var jiaodu=360,suofang=7.1,weiyiX=24,weiyiY=8.7;
	var rotate44=setInterval(function(){
		jiaodu--;
		suofang+=-0.03182222;
		weiyiX+=-0.00444444;
		weiyiY+=0.06555556;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==270) {clearInterval(rotate44)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate55(){
	var jiaodu=450,suofang=11.1,weiyiX=29.1,weiyiY=9.1;
	var rotate55=setInterval(function(){
		jiaodu--;
		suofang+=-0.04444444;
		weiyiX+=-0.05666667;
		weiyiY+=-0.00444444;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==360) {clearInterval(rotate55)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate66(){
	var jiaodu=540,suofang=18.7,weiyiX=29.08,weiyiY=11.37;
	var rotate66=setInterval(function(){
		jiaodu--;
		suofang+=-0.08444444;
		weiyiX+=0.00022222;
		weiyiY+=-0.02522222;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==450) {clearInterval(rotate66)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate77(){
	var jiaodu=630,suofang=28.9,weiyiX=27.19,weiyiY=11.21;
	var rotate77=setInterval(function(){
		jiaodu--;
		suofang+=-0.11333333;
		weiyiX+=0.021;
		weiyiY+=0.00177778;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==540) {clearInterval(rotate77)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};
function rotate88(){
	var jiaodu=720,suofang=46.76,weiyiX=26.93,weiyiY=10.39;
	var rotate88=setInterval(function(){
		jiaodu--;
		suofang+=-0.19844444;
		weiyiX+=0.00288889;
		weiyiY+=0.00911111;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==630) {clearInterval(rotate88)}
	},10)
	box.style.transformOrigin="left 61.8%";
	box.style.webkitTransformOrigin="left 61.8%";
};

function backTop(){
	var jiaodu=720,suofang=46.76,weiyiX=26.93,weiyiY=10.39;
	var rotateBack=setInterval(function(){
		jiaodu--;
		// jiaodu=jiaodu-2;
		suofang+=-0.06364396;
		// suofang+=-0.12988889;
		weiyiX+=-0.03740278;
		// weiyiX+=-0.07480556;
		weiyiY+=-0.01443056;
		// weiyiY+=-0.03886111;
		box.style.transform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		box.style.webkitTransform=`rotate(-${jiaodu}deg) scale(${suofang}) translateX(-${weiyiX}%) translateY(-${weiyiY}%)`;
		if (jiaodu==0) {
			box.style.transform=`rotate(0deg) scale(1) translateX(0%) translateY(0%)`;
			box.style.webkitTransform=`rotate(0deg) scale(1) translateX(0%) translateY(0%)`;
			num=0;
			clearInterval(rotateBack)
		}
	},10)
}
// box.style.transform=`rotate(-90deg) scale(1.618) translateX(-36%) translateY(0%)`;
// box.style.transform=`rotate(-180deg) scale(2.618) translateX(-38%) translateY(-14%)`;
// box.style.transform=`rotate(-270deg) scale(4.236) translateX(-24%) translateY(-14.6%)`;
// box.style.transform=`rotate(-360deg) scale(7.1) translateX(-24%) translateY(-8.7%)`;
// box.style.transform=`rotate(-450deg) scale(11.1) translateX(-29.1%) translateY(-9.1%)`;
// box.style.transform=`rotate(-540deg) scale(18.7) translateX(-29.08%) translateY(-11.37%)`;
// box.style.transform=`rotate(-630deg) scale(28.9) translateX(-27.19%) translateY(-11.21%)`;
// box.style.transform=`rotate(-720deg) scale(46.76) translateX(-26.93%) translateY(-10.39%)`;
// box.style.transformOrigin="left 61.8%";
var start=0,end=0,isMove=true,num=0,hasMove=false;
box.addEventListener("touchstart",function(e){
	// e.preventDefault();
	start=e.touches[0].pageX;
})
box.addEventListener("touchmove",function(e){
	e.preventDefault();
	// isMove=true;
	hasMove=true;
	end=e.touches[0].pageX;
})
box.addEventListener("touchend",function(e){
	// e.preventDefault();
	if (isMove&&hasMove) {
		isMove=false;
		if (end<start) {
			if(++num>8){
				num=8;
				return setTimeout(function(){isMove=true},1800)
			}
			else{
				if (num==1) {
					// rotate1();
					//rotate(box,0,1,0,0,90,0.61804/90,0,0);
					rotate(box,0,1,0,0,90,0.618/90,38/90,0);
				}
				if (num==2) {
					// rotate2();
					//rotate(box,90,1.618,0,0,180,(1.618*1.618-1.618)/90,0,0);
					rotate(box,90,1.618,38,0,180,(1.618*1.618-1.618)/90,0.2/90,14/90);
				}
				if (num==3) {
					// rotate3();
					//rotate(box,180,Math.pow(1.618,2),0,0,270,(Math.pow(1.618,3)-Math.pow(1.618,2))/90,0,0);
					rotate(box,180,Math.pow(1.618,2),38,14,270,(Math.pow(1.618,3)-Math.pow(1.618,2))/90,-14.4/90,0.6/90);
				}
				if (num==4) {
					// rotate4();
					//rotate(box,270,Math.pow(1.618,3),0,0,360,(Math.pow(1.618,4)-Math.pow(1.618,3))/90,0,0);
					rotate(box,270,Math.pow(1.618,3),23.6,14.6,360,(Math.pow(1.618,4)-Math.pow(1.618,3))/90,0,-5.6/90);
				}
				if (num==5) {
					// rotate5();
					//rotate(box,360,Math.pow(1.618,4),0,0,450,(Math.pow(1.618,5)-Math.pow(1.618,4))/90,0,0);
					rotate(box,360,Math.pow(1.618,4),23.7,9,450,(Math.pow(1.618,5)-Math.pow(1.618,4))/90,5.5/90,0);
				}
				if (num==6) {
					// rotate6();
					//rotate(box,450,Math.pow(1.618,5),0,0,540,(Math.pow(1.618,6)-Math.pow(1.618,5))/90,0,0);
					rotate(box,450,Math.pow(1.618,5),29.2,9,540,(Math.pow(1.618,6)-Math.pow(1.618,5))/90,0,2.1/90);
				}
				if (num==7) {
					// rotate7();
					//rotate(box,540,Math.pow(1.618,6),0,0,630,(Math.pow(1.618,7)-Math.pow(1.618,6))/90,0,0);
					rotate(box,540,Math.pow(1.618,6),29.2,11.1,630,(Math.pow(1.618,7)-Math.pow(1.618,6))/90,-2/90,0.1/90);
				}
				if (num==8) {
					// rotate8();
					//rotate(box,630,Math.pow(1.618,7),0,0,720,(Math.pow(1.618,8)-Math.pow(1.618,7))/90,0,0);
					rotate(box,630,Math.pow(1.618,7),27.2,11.2,720,(Math.pow(1.618,8)-Math.pow(1.618,7))/90,-0.26/90,-0.7/90);
				}
			}
		}
		if (end>start) {
			if(--num<0){
				num=0;
				return setTimeout(function(){isMove=true},1800)
			}
			else{
				if (num==0) {
					rotate11();
					// rotate(box,90,1.618,38,0,0,-0.618/90,-38/90,0);
				}
				if (num==1) {
					rotate22();
					// rotate(box,180,1.618*1.618,38.2,14,90,-(1.618*1.618-1.618)/90,-0.2/90,-14/90);
				}
				if (num==2) {
					rotate33();
					// rotate(box,180,Math.pow(1.618,2),38,14,270,(Math.pow(1.618,3)-Math.pow(1.618,2))/90,-14.4/90,0.6/90);
				}
				if (num==3) {
					rotate44();
					// rotate(box,270,Math.pow(1.618,3),23.6,14.6,360,(Math.pow(1.618,4)-Math.pow(1.618,3))/90,0,-5.6/90);
				}
				if (num==4) {
					rotate55();
					// rotate(box,360,Math.pow(1.618,4),23.7,9,450,(Math.pow(1.618,5)-Math.pow(1.618,4))/90,5.5/90,0);
				}
				if (num==5) {
					rotate66();
					// rotate(box,450,Math.pow(1.618,5),29.2,9,540,(Math.pow(1.618,6)-Math.pow(1.618,5))/90,0,2.1/90);
				}
				if (num==6) {
					rotate77();
					// rotate(box,630,Math.pow(1.618,7),27.2,11.1,540,-(Math.pow(1.618,7)-Math.pow(1.618,6))/90,2/90,-0.1/90);
				}
				if (num==7) {
					rotate88();
					// rotate(box,720,Math.pow(1.618,8),26.94,10.5,630,-(Math.pow(1.618,8)-Math.pow(1.618,7))/90,0.26/90,0.7/90);
				}
			}
		}
		setTimeout(function(){
			isMove=true;
		},1800);
	}
	start=0;
	end=0;
	hasMove=false;
})



var box3Ul=document.querySelector(".box-1-2-inBox-top"),box3LiArr=box3Ul.children,
box3View=document.querySelectorAll(".box-1-2-inBox-bottom");
for (var box3LiArrI = 0; box3LiArrI < box3LiArr.length; box3LiArrI++) {
	box3LiArr[box3LiArrI].index=box3LiArrI;
	box3LiArr[box3LiArrI].onclick=function(e){
		e.preventDefault();
		index=this.index;
		for (var i = 0; i < box3View.length; i++) {
			box3View[i].style.display="none";
		}
		box3View[index].style.display="block";
	}
}

var box4Ul=document.querySelector(".box2-1-1-2-inBox-bottom"),box4LiArr=box4Ul.children[0].children,
box4View=box4Ul.children[1].children;
for (var box4LiArrI = 0; box4LiArrI < box4LiArr.length; box4LiArrI++) {
	box4LiArr[box4LiArrI].index=box4LiArrI;
	box4LiArr[box4LiArrI].onclick=function(e){
		e.preventDefault();
		index=this.index;
		for (var i = 0; i < box4View.length; i++) {
			box4View[i].style.display="none";
		}
		box4View[index].style.display="block";
	}
}


var box6Ul=document.querySelector(".box2-1-1-2-1-2-inBox").children[0],
box6LiArr=box6Ul.children;
var color=["rgb(63, 117, 163)","rgb(86, 156, 87)","rgb(182, 77, 76)","rgb(81, 111, 129)","rgb(151, 60, 208)","rgb(31, 147, 145)","rgb(152, 102, 56)","rgb(212, 93, 36)","rgb(69, 69, 69)","rgb(66, 122, 169)","rgb(86, 156, 87)"];
for (var box6I = 0; box6I < box6LiArr.length; box6I++) {
	box6LiArr[box6I].style.background=color[box6I];
}



var sliderBox=document.querySelector(".slider"),
sliderUl=sliderBox.children[0],
arrowLeft=document.querySelector(".left"),
arrowRight=document.querySelector(".right"),
sliderNum=0;
arrowRight.onclick=function(e){
	e.preventDefault();
	e.stopPropagation();
	sliderNum=++sliderNum>4?4:sliderNum;
	sliderUl.style.transform=`translateX(-${sliderNum*sliderBox.offsetWidth}px)`;
}

arrowLeft.onclick=function(e){
	e.preventDefault();
	e.stopPropagation();
	sliderNum=--sliderNum<0?0:sliderNum
	sliderUl.style.transform=`translateX(-${sliderNum*sliderBox.offsetWidth}px)`;
}

$("#show").children('li').each(function(index, el) {
	$(this).click(function(){
		$(this).children("p").slideDown(400).end().siblings().children('p').slideUp(400);
		$(this).children("p").fadeIn(100).end().siblings().children('p').fadeOut(100);
		$(this).animate({"height":"35%"}, 400).siblings().animate({"height":"15%"},400);
	})
});



$(".top").click(function(event) {
	backTop();
});














