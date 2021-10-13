const port = 3000;
const express = require("express");
const app = express();
const path = require('path');


app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, '/static/index.html'))

}).listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});

app.post('/api/v1/', function (req, res) {
  res.send('POST request to the homepage')
})
