const express = require('express');
const path = require('path');
const app = express();

// Constants
const PORT = process.env.PORT;
const SERVER_ID = process.env.SERVER_ID;
var filePath = "./website/build/index.html"
var resolvedPath = path.resolve(filePath);

app.use(express.static(path.join(__dirname, 'website/build')));

app.get('/*', function (req, res) {
  res.sendFile(resolvedPath, function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});