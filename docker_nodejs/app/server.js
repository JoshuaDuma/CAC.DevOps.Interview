const express = require('express');
const path = require('path');
const app = express();

// Constants
const PORT = process.env.PORT;
const SERVER_ID = process.env.SERVER_ID;

app.use(express.static(path.join(__dirname, 'website/build')));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});