var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

var canvas2 = document.getElementById('Picasso');
var ctx2 = canvas2.getContext('2d');

function degreesToRadians(degrees){
  return degrees * 2 * Math.PI / 360
}

ctx2.fillRect(60,100,20,20);
ctx2.clearRect(62,107,8,8);
ctx2.beginPath();
ctx2.moveTo(10,10);
ctx2.lineTo(30, 75);
ctx2.lineTo(100, 0);
ctx2.fill();

ctx2.beginPath();
ctx2.arc(70,19,150,0,2*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(0,25,150,0,2*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(4,60,70,0,3*Math.PI);
ctx2.stroke();

// ctx.beginPath();
// ctx.arc(50,100,50,0,degreesToRadians(360),true);
// ctx.stroke();

ctx2.beginPath();
ctx2.arc(0,0,100,200,400,true);
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(0, 70);
ctx2.arc(100,100,50,20,100);
ctx2.stroke();

function drawPacman(x,y,radius){
  ctx.beginPath();
  ctx.arc(x,y,radius,degreesToRadians(30),degreesToRadians(320),false);
  ctx.lineTo(x,y);
  ctx.fill();

}

for (var y = 2; y <= 180; y += 20){
  drawPacman (50,y,8)
}

canvas.onclick= function (event){
  console.log(event)
  drawPacman(event.offsetX,event.offsetY,5)
}