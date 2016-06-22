/**
 * Created by Carrie on 2016/6/22.
 */
process.stdout.write('this is stdout.');
process.stderr.write('this is stderr.');

process.stdin.setEncoding('utf-8');
/*
process.stdin.on('data',function(data){
    console.log(data);
});*/

/*
process.stdin.on('readable',function(){
    var data = process.stdin.read();
    console.log(data);
});
*/

/*process.on('exit',function(){
    console.log('program will exit.');
});*/

process.on('SIGINT',function(){
    console.log('program has a sigint.');
});
