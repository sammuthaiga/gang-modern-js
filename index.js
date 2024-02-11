// retun values
const calAreas = function (radius) {
    let area = 3.14 * radius**2;
    console.log(area);
}

calAreas(5);

const calArea1 = function (radius) {
    return 3.14 * radius**2;
}

const area = calArea1(5);
console.log(area);

const calVol = function(area) {
    return area * 5;
}

const volume = calVol(area);
console.log(volume);

// Self Practice working with returned values
const payDay = function (name, time, day, rate) {
    return `Hello ${name}, you worked ${time} hours on ${day} and earned $${time * rate}`;
}

const payList = payDay('John', 8, 'Monday', 10);
console.log(payList);
