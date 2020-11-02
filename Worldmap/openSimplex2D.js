function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(640, 360);

  // simpNoise = new SimplexNoise(Date.now());

}

function draw() {
  var inc = 0.025;

  loadPixels();
  var xoff = 0;
  for (var x = 0; x < width; x++) {
    var yoff = 0;
    for (var y = 0; y < height; y++) {
      var i = (x + y * width) * 4;
      // var val = simpNoise.noise2D(xoff, yoff)

      ///////////////////below outputs grayscale values

      var gray = map(val, 0, 1, 0, 255);

      pixels[i + 0] = gray;
      pixels[i + 1] = gray;
      pixels[i + 2] = gray;
      pixels[i + 3] = 255;

      yoff += inc;
    }
    xoff += inc;
  }
  updatePixels();
}
