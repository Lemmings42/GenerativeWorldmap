function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(640, 360);
}

function draw() {
  var inc = 0.01
  var xoff = 0

  loadPixels();
  var space = [[]];
  for (var x = 0; x < width; x++) {
    space[x] = [];
    var yoff = 0
    for (var y = 0; y < height; y++) {
      space[x][y] = noise(xoff, yoff)
      var index = (x + y * width) * 4;

      pixels[index+0] =  space[x][y] * 255;
      pixels[index+1] =  space[x][y] * 255;
      pixels[index+2] =  space[x][y] * 255;
      pixels[index+3] =  255;

      yoff += inc;
    }
    xoff += inc;
  }
  updatePixels();
}
