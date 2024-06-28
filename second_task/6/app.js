const fs = require("fs");
fs.readFile("hello.txt", "utf8",
    function(error, data){
        console.log("async");
        if(error) throw error;
        console.log(data);
    });

console.log("sync");
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);