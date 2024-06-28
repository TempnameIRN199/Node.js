function displaySync(callback){
    callback();
}
console.log("Engine start");

setTimeout(function(){
    console.log("timeout 500");
}, 500);
setTimeout(function(){
    console.log("timeout 100");
}, 100);
displaySync(function(){console.log("without timeout")});
console.log("Engine kaput");