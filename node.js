/**
 * Created by Carrie on 2016/6/21.
 */
function sum (n){
    //console.log("hello world");
    var sum = 0;
    for(var i=0; i<=n; i++){
        sum +=i;
    }
    return sum;
}

exports.sum = sum;