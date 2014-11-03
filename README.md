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

## Demo

** YOU NEED SUPPORT FOR WEB COMPONENTS IN YOUR BROWSER BECAUSE WE'RE NOT SHIMMING ANYTHING IN **

Firefox: go to `about:config`, find `dom.webcomponents.enabled` and set it to true.

Chrome: maybe nothing to do?

Run `npm install` so it installs stuff for the demo. Then `gulp build`, and then you can open `build/demo/index.html` for the demo.

If you do changes in the code, you'll need to rebuild the demo. Use `gulp build` or `gulp` only for running `build` and setting up a `watch` loop that automatically rebuilds the demo as you change its files.
