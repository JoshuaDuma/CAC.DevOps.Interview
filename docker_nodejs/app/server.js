const express = require('express');
const path = require('path');
const app = express();

// Constants
const PORT = process.env.PORT;
const SERVER_ID = process.env.SERVER_ID;

app.use(express.static(path.join(__dirname, 'website/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});