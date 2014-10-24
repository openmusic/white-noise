# openmusic-white-noise

> Function to generate n samples of white noise

[![Install with NPM](https://nodei.co/npm/openmusic-white-noise.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-white-noise/)

## Usage

Install first: `npm install openmusic-white-noise`.

Then you can use it in your code:

```javascript
var generateWhiteNoise = require('openmusic-white-noise');

// this generates an array with 100 white noise samples
var samples = generateWhiteNoise(100);

// a second of white noise if sampling rate is 44100:
var whiteNoiseSecond = generateWhiteNoise(44100);
```

