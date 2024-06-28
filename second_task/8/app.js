const fs = require("fs");
fs.appendFileSync("hello.txt", "Hello wo wo wo!");
fs.appendFile("hello.txt", "Hello MID", function(error){
   if (error) throw error;
   console.log("Write file complete");
   let data = fs.readFileSync("hello.txt", "utf8");
   console.log(data); 
});