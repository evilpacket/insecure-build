var chromedriver = require('chromedriver');
 
args = [
    // optional arguments 
];

chromedriver.start(args);
// run your tests 

setTimeout(function () {
  chromedriver.stop();
}, 5000)
