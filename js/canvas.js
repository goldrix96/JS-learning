var canvasContainer = document.querySelector('.canvasContainer')

var MarkupCanvas = `
<h1 style="text-align:center";>Fun with HTML5 Canvas</h1>  
<p>Select Drawing Color</p>  
<span><input type="color" class="drawingColor" value="#bada55"></input></span>
<span><input type = "range" class="drawingWidth" max="100" min="0"><span><br>
<canvas id="draw" width="800" height="800" style="text-align:center;"></canvas>
` 


canvasContainer.innerHTML = MarkupCanvas;

var drawingColor = document.querySelector('.drawingColor')
var drawingColorValue = drawingColor.value
drawingColor.addEventListener('change', changeDrawingColor);
function changeDrawingColor(){
  drawingColorValue = this.value;
  console.log(drawingColorValue)
    // drawingColorValue = drawingColor.value
  }


var drawingWidth = document.querySelector('.drawingWidth')
var drawingWidthValue = drawingWidth.value;
drawingWidth.addEventListener('change', drawingWidthChange)
drawingWidth.addEventListener('mousemove', drawingWidthChange)
  function drawingWidthChange(){
    drawingWidthValue = this.value;
    console.log('hello')
  }





const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
ctx.strokeStyle = drawingColorValue;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = drawingWidthValue;
// ctx.globalCompositeOperation = 'multiply';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.strokeStyle = drawingColorValue;
  ctx.lineWidth = drawingWidthValue;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // hue++;
  // if (hue >= 360) {
  //   hue = 0;
  // }
  // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //   direction = !direction;
  // }
  // if(direction) {
  //   ctx.lineWidth++;
  // } else {
  //   ctx.lineWidth--;
  // }
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
