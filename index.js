// Type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result = Number('hello');
console.log(result);

let result1 = String(50);
console.log(result1, typeof result1);

let result2 = Boolean(100);
console.log(result2, typeof result2);

let result3 = Boolean(0);
console.log(result3, typeof result3);

let result4 = Boolean('0');
console.log(result4, typeof result4);

let result5 = Boolean('');
console.log(result5, typeof result5);
let result6 = Boolean(' ');
console.log(result6, typeof result6);
let result7 = Boolean('hello');
console.log(result7, typeof result7);
let result8 = Boolean('false');
console.log(result8, typeof result8);
let result9 = Boolean(false);
console.log(result9, typeof result9);
let result10 = Boolean(true);
console.log(result10, typeof result10);
let result11 = Boolean(null);
console.log(result11, typeof result11);
let result12 = Boolean(undefined);
console.log(result12, typeof result12);
let result13 = Boolean(NaN);
console.log(result13, typeof result13);
let result14 = Boolean(Infinity);
console.log(result14, typeof result14);
let result15 = Boolean(-Infinity);
console.log(result15, typeof result15);
let result16 = Boolean(1 / 0);
console.log(result16, typeof result16);
let result17 = Boolean(-1 / 0);
console.log(result17, typeof result17);




