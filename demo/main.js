var generateWhiteNoise = require('../index');

// register the oscilloscope component so we can use it
require('openmusic-oscilloscope').register('openmusic-oscilloscope');

var ac = new AudioContext();
var sampleRate = ac.sampleRate;
var bufferSourceNode = ac.createBufferSource();

var analyser = ac.createAnalyser();
var gain = ac.createGain();

var oscilloscope = document.querySelector('openmusic-oscilloscope');

// Create a mono buffer of 1 second length
var buffer = ac.createBuffer(1, sampleRate, sampleRate);

// Generate one second of white noise samples
var noiseData = generateWhiteNoise(sampleRate);

// Copy the sample data into the first (0) channel of the buffer
var channelData = buffer.getChannelData(0);
noiseData.forEach(function(v, i) {
	channelData[i] = v;
});

// set the gain to a smaller value so the noise is not too loud
gain.gain.setValueAtTime(0.05, ac.currentTime);

bufferSourceNode.connect(analyser);
analyser.connect(gain);
gain.connect(ac.destination);

bufferSourceNode.loop = true;
bufferSourceNode.buffer = buffer;
bufferSourceNode.start();

oscilloscope.attachTo(analyser);
