let currentDate = new Date();
module.exports.date = currentDate;
module.exports.name = "Alice";

global.date = currentDate;

module.exports.getMessage = function(name) {
    let hour = currentDate.getHours();
    if (hour > 16) {
        return "Доброго вечора, " + name;
    }
    else if (hour > 10)
        return "Доброго дня, " + name;
    else
        return "Доброго ранку, " + name;
}

module.exports.getMessage = function() {
    let hour = currentDate.getHours();
    if (hour > 16) {
        return "Доброго вечора, " + global.name;
    }
    else if (hour > 10)
        return "Доброго дня, " + name;
    else
        return "Доброго ранку, " + name;
}