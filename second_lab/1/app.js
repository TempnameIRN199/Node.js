const express = require("express");
const path = require('path');

app = express();
app.use(express.static(path.join('public')));

app.listen(3000, function(){
    console.log("Engine start");
});