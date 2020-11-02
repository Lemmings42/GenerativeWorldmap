let mins = [];
let maxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(640, 360);
}
// noiseDetail(1);
function draw() {
  var xoff = 0

  loadPixels();
  seed = Math.random()
  var noiseSpace = noiseDetail2D(width, height, seed, 100, 4, 1 / 2, 2);
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      // var v = noise(xoff, yoff) * 255;
      var v = noiseSpace[x][y];
      var c = map(v, -1, 1, 0, 255);
      var r = c;
      var g = c;
      var b = c;

      if (v < -1 || v > 1) {
        r = 255
        g = 0
        b = 0
      }
      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;

    }
  }


  mins.push(noiseSpace.reduce((acc, val)=>{let temp=val.reduce((acc2, val2)=>(val2<acc2)?val2:acc2);return (temp<acc)?temp:acc}, 0));

  maxes.push(noiseSpace.reduce((acc, val)=>{let temp=val.reduce((acc2, val2)=>(val2>acc2)?val2:acc2);return (temp>acc)?temp:acc}, 0));
  updatePixels();
  if (frameCount >= 100){
    noLoop();
    console.log("Min", mins.reduce((acc, val)=>(val<acc)?val:acc));
    console.log("Max", maxes.reduce((acc, val)=>(val>acc)?val:acc));
  }
}