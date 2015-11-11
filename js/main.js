 
//方式一
/*var playimgs=document.getElementById("imgplay").getElementsByTagName("img");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
function hide(){for(var i=1;i<playimgs.length;i++){

	playimgs[i].style.display="none";
}}
hide();

function change(num){
for(var i=0;i<playimgs.length;i++){

	playimgs[i].style.display="none";
} playimgs[num].style.display="";	
 }
*/
//方式二
 

var playimg=document.getElementById("imgplay").getElementsByTagName("img")[0];
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var list=document.getElementsByClassName("list");
var liveflag=0;
function change(num){
	playimg.src="img/"+(num+1)+".jpg";
	liveflag=num;

 }

prev.onclick=function(){
	 
	 
	if(liveflag>0){liveflag--;
		playimg.src="img/"+(liveflag+1)+".jpg";
	}

	
}
next.onclick=function(){
	if(liveflag<7){
		liveflag++;
		playimg.src="img/"+(liveflag+1)+".jpg";
		
	}
	
}
function show(num){
	list[num].style.display="";
    list[num].style.position="absolute";
	list[num].style.left=238+num*110+"px";
		for(var i=0;i<list.length;i++){
		if(i!=num){
			list[i].style.display="none";
			list[i].style.paddingLeft="";
		}
	}
}
setInterval(function(){var num= parseInt(Math.random()*7) ; change(num)},2000);