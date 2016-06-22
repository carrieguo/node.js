/**
 * Created by Carrie on 2016/6/22.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request,response){
    var urlObj = url.parse(request.url);
    //console.log(urlObj);
    var pathname = urlObj.pathname;

    if(pathname === '/'){
        //pathname = '/index.html';
        readFile_and_response('/index.html',response);
    }
    else if (pathname === '/ajax'){
        response.end('{"mag":"this is a json response."}')
    }
    else {
        readFile_and_response(pathname,response);
    }
}).listen(8090);

function readFile_and_response (path,response){
    fs.readFile(path.substr(1),'utf-8',function(err,data){
        if(err){
            response.writeHead(404);
            response.end('file not found.')
        }
        else{
            response.end(data);
        }
    });
}