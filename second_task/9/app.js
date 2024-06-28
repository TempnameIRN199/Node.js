const fs = require("fs");
fs.unlinkSync("hello.txt");

fs.unlink("hello.txt", (err) => {
   if (err) console.log(err);
   else console.log("hello.txt was deleted");
})