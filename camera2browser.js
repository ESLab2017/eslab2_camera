var express = require('express');
var app = express();
var server = require('http').Server(app);
var os = require('os');
var path = require('path');
var port = 8888;

var av = require('tessel-av');
var camera = new av.Camera();

server.listen(port, function() {
    console.log(`http://${os.hostname()}.local:${port}`);
});

app.use(express.static(path.join(__dirname, '/public')));
app.get('/stream', (request, response) => {
    response.redirect(camera.url);
});