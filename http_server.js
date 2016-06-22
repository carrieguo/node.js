/**
 * Created by Carrie on 2016/6/22.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    fs.readFile('index.html','utf-8',function(err,data){
        response.end(data);
    });
});

server.listen(8080);