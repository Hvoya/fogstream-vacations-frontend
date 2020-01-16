//server.js
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist'));
});
app.listen(port);
