var dataset = document.getElementById("dataset").innerText.toString().split(":");
var net = new brain.recurrent.LSTM();
net.train(dataset, {
      iterations: 100,
      errorThresh: 0.005,
      log: true,
      logPeriod: 1,
      learningRate: 0.3,
      momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
      
});
net.run("");
