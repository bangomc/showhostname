var http = require('http');
var os = require('os');

var porta = process.env.PORT == undefined ? 8080 : process.env.PORT;

var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello World! from hostname: ${os.hostname()}`);
});

var iniciar = function(){
    console.log(`Servidor ouvindo na porta: ${porta}`);
    app.listen(porta);
}

iniciar();