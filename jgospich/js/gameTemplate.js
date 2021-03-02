//sources
// https://eloquentjavascript.net/code/chapter/17_canvas.js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

//initializing variables to create a canvas
// Global variables that are altered throughought the page
let canvasDiv;
let canvas;
let ctx;
// Lets Us know if the game has been inizialized
let initialized = false;

// setup mouse position variables
// Mouse variable that inizales movments
// Object
let mouseX = 0;
let mouseY = 0;
let mouseClickX = 0;
let mouseClickY = 0;
// Assigns the value to the previous assigned variables 
function init() {
  // create a new div element inside the html document 
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  // and give it some content
  canvas = document.createElement('canvas');
  // add the text node to the newly created div
  canvasDiv.appendChild(canvas);
  // add the newly created element and its content into the DOM
  // Inline
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = 500;
  canvas.height = 500;
  // Getting Info from CSS
  //Gets the canvas width of the element from "Chuck" and changes the CSS
  document.getElementById("chuck").style.width = canvas.width +'px';
  document.getElementById("chuck").style.height = canvas.height +'px';
  // The context of the canvas- Lets us draw on the canvas 
  ctx = canvas.getContext('2d');
  initialized = true;
}

// create an object to hold attributes in order to draw a shape on canvas
// Local variables because they are inside the function
let oSquare = {
  w: 50,
  h: 50,
  x: 150,
  y: 200,
  // controlls the object on the canvas going up or down
  vx: 3,
  vy: 1,
  color: 'black'
};

// gets mouse position when clicked
// Gets the mouse postion and sets it to a variable 
addEventListener('mousemove', e => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
});

// gets mouse position when clicked
addEventListener('mousedown', mouseClick);

// Function perfoms task to move the object either up or down
function mouseClick(e) {
  console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseClickX = e.clientX;
  mouseClickY = e.clientY;
  return [mouseClickX, mouseClickY];
}

// updates all elements on canvas
//
function update() {
  mySquare.x += mySquare.vx;
  if (mySquare.x + mySquare.w > canvas.width || mySquare.x < 0) {
    mySquare.vx *= -1;
  }
}

// draws text on canvas
function drawText(
  _or, font, align, base, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

// draws a square, circle, or rectangle
function drawSquare() {
  ctx.fillStyle = mySquare.color;
  ctx.fillRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
  ctx.strokeRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
}

// function drawCircle() {
//   ctx.fillStyle = myCircle.color;
//   ctx.beginPath();
//   ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
//   ctx.stroke();
//   ctx.fill();
// }

// draws all the stuff on the canvas that you want to draw
function draw() {
  // clears the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText('black', "24px Helvetica", "left", "top", "FPS: " + fps, 400, 0);
  drawText('black', "24px Helvetica", "left", "top", "mousepos: " + mouseX + " " + mouseY, 0, 0);
  drawText('black', "24px Helvetica", "left", "top", "mouseclick: " + mouseClickX + " " + mouseClickY, 0, 32);
  drawSquare();
}

// set variables necessary for game loop
let delta;
let fps;
let gameDelta;
let then = performance.now();
let now;

//main game loop
function main() {
    // These are the variables locally inside the function 
  let now = performance.now();
  delta = now - then;
  gameDelta = Math.min(delta, 0.25);
  // The FPS is out of a 1000 and is rounded up because of Ceil
  fps = (Math.ceil(1000 / delta));
  if (initialized) {
    update();
    draw();
  }
  then = now;
  requestAnimationFrame(main);
}