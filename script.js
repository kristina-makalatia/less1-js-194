// variables
//primitive types
let nameUser = "nika"; //string
let userAge = 25; //number
let userStatus = false; //boolean
let userInfo = null; //null
let y; //undefined

let item1 = 10;
let item2 = 15;

let sum = item1 + item2;
console.log(sum);

let item3 = "good";
let item4 = "Evening";

let result = item3 + " " + item4;
console.log(result);

let a = 25;
a -= 10;
// a = a - 10
console.log(a);

console.log(typeof a);

//
let number1 = String(10);

console.log(typeof number1);

let string = Number("25");
let string2 = Number(true);
let string3 = Number(false);
let string4 = Number("Hello");
let string5 = Number(null);

console.log(string5); //nan

console.log(typeof string);

//
let element1 = 10;
let element2 = "5";

let resultNew = element1 - element2;
console.log(resultNew); //5
console.log(typeof resultNew); //number

//
let newItem = 15;

if (newItem > 20) {
  console.log("Hello 1");
} else if (newItem > 10 && newItem < 13) {
  console.log("Hello2");
} else if (newItem > 10 || newItem < 14) {
  console.log("hello3");
} else if (newItem < 20) {
  console.log("hello4");
} else {
  console.log("Error");
}

let resultCondiition2 =
  newItem > 20
    ? "hello 1"
    : newItem > 10 && newItem < 13
    ? "hello2"
    : newItem > 10 || newItem < 14
    ? "hello3"
    : newItem < 20
    ? "hello4"
    : "error";

console.log(resultCondiition2);

//
let x = 14;

// if (x < 10) {
//   console.log("hi 1");
// } else {
//   console.log("hi error");
// }

let conditionResult = x < 10 ? "hi 1" : "hi error";

console.log(conditionResult);
