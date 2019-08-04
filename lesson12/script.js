let obj = new Object();

let options = {
  width: 1024,
  height: 1024,
  name: "test"
};

console.log(options.name);

options.bool = false;
options.colors = {
  border: "black",
  background: "red"
};

delete options.bool; //удаление свойства

console.log(options);

for (let key in options) {
  console.log("Свойство " + key + " имеет значение " + options[key]); 
} 

console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];

arr.pop(); //удаляет последний
arr.push("5"); //добавляет в конец
arr.shift(); // удаляет первый
arr.unshift("1"); // добавляет в начало

// arr[99] = 99;
// console.log(arr.length); // последнйи индекс + 1
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function(item,i,mass) {
//   console.log(i + ": " + item + "( массив: " + mass + ")");
// });
// console.log(arr);


// let mass = [1,4,5,7];

// for (let key of mass) {
//   console.log(key);
// }

// let answer = prompt("",""),
//     mass = [];

// mass =answer.split(",");  

// console.log(mass);
// // console.log(mass.join(','));
// console.log(mass.sort());


let mass = [1,15,4];

function compareNum(a,b) {
  return a-b;
}

console.log(mass.sort(compareNum));
