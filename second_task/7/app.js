const fs = require("fs");
fs.writeFile("hello.txt", "Hello world!", function(error){
    if (error) throw error;
    console.log("async");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
});