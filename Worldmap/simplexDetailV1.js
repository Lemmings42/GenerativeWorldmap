function noiseDetail2D(width, height, oct, amp, lac) {
  sNoise = new SimplexNoise(1);
  output = [
    []
  ];
  var layers = [
    [
      []
    ]
  ];
  var woff = 0;
  for (var w = 0; w < oct; w++) {
    var xoff = w / lac;
    layers[w] = [
      []
    ];
    for (var x = 0; x < width; x++) {
      var yoff = w / lac;
      layers[w][x] = [];
      for (var y = 0; y < height; y++) {
        n = sNoise.noise2D(xoff, yoff);
        // val = map(n, 0, 1, -1, 1);
        layers[w][x][y] = n * Math.pow(amp, w);


        yoff += lac * Math.pow(2, w);
      }
      xoff += lac * Math.pow(2, w);
    }
    woff += 1 / lac
  }

  for (var x = 0; x < width; x++) {
    output[x] = [];
    for (var y = 0; y < height; y++) {
      var points = [];
      for (var w = 0; w < oct; w++) {
        points.push(layers[w][x][y]);
      }
      var sum = points.reduce((a, b) => a + b, 0);
      var avg = (sum / points.length);
      output[x][y] = sum;
      //var index = (x + y * width);
    }
  }
  return output
}
