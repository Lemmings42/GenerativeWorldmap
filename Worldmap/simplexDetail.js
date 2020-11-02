function invLerp(a, b, x) {
  return (x - a) / (b - a);
}

function noiseDetail2D(width, height, seed, scale, octaves, persistance, lacunarity) {
  simplexNoise = new SimplexNoise(seed);
  noiseMap = [
    []
  ];
  if (scale <= 0) {
    scale = 0.0001;
  }

  // var maxNoise = Number.MAX_VALUE;
  // var minNoise = -Number.MAX_VALUE;

  for (x = 0; x < width; x++) {
    noiseMap[x] = [];
    for (y = 0; y < height; y++) {
      amplitude = 1;
      frequency = 1;
      noiseVal = 0;

      for (var i = 0; i < octaves; i++) {
        noiseX = x / scale * frequency;
        noiseY = y / scale * frequency;

        noiseVal += (simplexNoise.noise2D(noiseX, noiseY)) * amplitude;

        amplitude *= persistance;
        frequency *= lacunarity;

        noiseVal /= (1-Math.pow(persistance, octaves))/(1-persistance);

        noiseMap[x][y] = noiseVal;
      }
      // if (noiseVal > maxNoise) {
      //   maxNoise = noiseVal;
      // }
      // if (noiseVal < minNoise) {
      //   minNoise = noiseVal;
      // }
    }
  }


  // for (x = 0; x < width; x++) {
  //   for (y = 0; y < height; y++) {
  //     var iL = invLerp(noiseMap[x][y], minNoise, maxNoise);
  //     noiseMap[x][y] = iL
  //     // noiseMap[x][y] = map(noiseMap[x][y], maxNoise, maxNoise, -1, 1);
  //   }
  // }
  return noiseMap;
}
