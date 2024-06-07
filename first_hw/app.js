const http = require('http');
const url = require('url');

http.createServer((require, response) => {
    const parsedUrl = url.parse(require.url, true);
    const host = require.headers.host;
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    const responseMessage = `Host: ${host}, Pathname: ${pathname}, Query: ${JSON.stringify(query)}`;
    response.setHeader('Content-Type', 'text/plain');
    response.end(responseMessage);
}
).listen(3000, '127.0.0.1', function() {
    console.log('Engine start');
});