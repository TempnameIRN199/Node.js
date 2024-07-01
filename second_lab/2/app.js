const fs = require("fs");
const Parser = require("./parser");

fs.readFile("data.txt", "utf8", (err,data) => {
    if(err) {
        console.error("Error: ", err);
        return;
    }

    const parser = new Parser();
    const result = parser.parse(data);
    console.log(JSON.stringify(result, null, 2));
});