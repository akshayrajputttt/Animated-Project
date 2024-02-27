var score=0;
var hit=0;
function makebubble(){
    var clutter='';
    for(var i=1;i<=140;i++){
        var a=Math.floor(Math.random()*10);
        clutter = clutter + `<div class="bubble">${a}</div>`
    }
    document.querySelector('#panel-bottom').innerHTML = clutter;
}
var timer=60;
function runtime(){
setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector('#timerval').textContent = timer;
    }
    
},1000)
}
function getnewhit(){
   hit = Math.floor(Math.random()*10);
document.querySelector("#get").textContent = hit;
}
;
function newscore(){
   score += 10;
   document.querySelector("#scoree").textContent = score;
}
var b=document.querySelector("#panel-bottom");
b.addEventListener("click" , function(dets){
   var clicked= Number(dets.target.textContent)
   if(clicked==hit){
    newscore();
    getnewhit();
    makebubble();
   }
})
runtime();
makebubble();
getnewhit();
newscore();