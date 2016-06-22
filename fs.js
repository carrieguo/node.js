/**
 * Created by Carrie on 2016/6/22.
 */
var carrie_fs = require('fs');
//异步读取
console.log('start async');
carrie_fs.readFile('node.js','utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
        console.log('end async');
    }
});

//同步读取
console.log('start sync');
var data = carrie_fs.readFileSync('global.js','utf-8');
console.log(data);
console.log('end sync');