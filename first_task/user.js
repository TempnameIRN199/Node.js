function user(name, age){
    this.name = name;
    this.age = age;
    this.displayInfo = function(){
        console.log(`Ім\'я: ${this.name} Вік: ${this.age}`);
    }
}
user.prototype.sayHi = function(){
    console.log(`Привіт, мене звати ${this.name}`);
}
module.exports = user;