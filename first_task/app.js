const os = require("os");
const greeting = require("./greeting");
const User = require("./user");
const welcome = require("./welcome");

global.name = "Serhii";
global.console.log(date);

let userName = os.userInfo().username;
let user1 = new User("Victor", 19);
let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log(`Дата запиту - ${greeting.date}`);
console.log(greeting.getMessage(userName));
user1.sayHi();

var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`);
var greeting2 = require("./greeting.js");
greeting2.name= "Bob";
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);

welcome.getMorningMessage();
welcome.getEveningMessage();

console.log(greeting.getMessage());

console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);