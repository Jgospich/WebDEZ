//test code
// I can inizialze variables with number and string
// let myNum = 6;
// const myName = "Chris";
// alert(myName);
// alert(myNum);
// myNum = 25;
// alert(myNum);

// add a canvas to the page


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// initializing variables

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Create a function to draw a triangle on the canvas

let drawTriangle= true
let drawCircle=false
function drawTriangle() {
  if(true)
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}
// Create a function to draw a square on the canvas
function drawSquare() {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}
// Create a function to draw a circle on the canvas
function drawCircle() {
  if(false)
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
// Performs the functions from the blocks above
function main() {
  drawTriangle();
  drawSquare();
  drawCircle();
}

main();