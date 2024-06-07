const http = require("http");

function notFound(response){
    response.statusCode = 404;
    response.end("Not Found");
}



http.createServer(function(request,response){
    const url = request.url;
    switch(url){
        case '/':
            response.setHeader("Content-Type", "text/plain");
            response.end("Hello, world!");
            break;
        case '/about':
            response.setHeader("Content-Type", "text/plain");
            response.end("About");
            break;
        case '/contact':
            response.setHeader("Content-Type", "text/plain");
            response.end("Contact");
            break;
        default:
            notFound(response);
            break;
    }
}).listen(3000, "127.0.0.1",function(){
    console.log("Engine start");
});
