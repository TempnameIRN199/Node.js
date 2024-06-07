const http = require('http');
const url = new URL('http://localhost:8080/default.htm?year=2017&month=february');

http.createServer((require, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>URL</h1>');
    response.write(`<p>Host: ${url.host}</p>`);
    response.write(`<p>Path: ${url.pathname}</p>`);
    response.write('<p>Params:</p>');
    response.write('<ul>');
    for (let [key, value] of url.searchParams) {
        response.write(`<li>${key}: ${value}</li>`);
    }
    response.write('</ul>');
    response.end();
}
).listen(3000, 'localhost', function() {
    console.log('Engine start');
});