'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0); //infinity
console.log('string' * 9); // NaN


// console.log(something); // null

let something1;
console.log(something1); //undefined

let person = {
    name: 'John',
    age: 25,
    isMarried: true
}

console.log(person);
console.log(person["name"]);
console.log(person.age);

let arr = ['photo.png', 'photo1.png', 'photo3.png'];
console.log(arr[1]);  //массив

