// Homework 28.05.2024
// 1
let arrReplace = ["string", "valueToReplace", "valueToReplaceWith"];
arrReplace.splice(1, 1, "valueToReplaceWith");
arrReplace.pop(); // To delete extra valueToReplaceWith
console.log(arrReplace);
// 1

// 2
let sentence = `yo soy zura`;
console.log(sentence.toUpperCase());
// 2

// 3
let arrAge = [21, 25, 68, 46, 31, 101];
arrAge.sort(function (a, b) {
  return a - b;
});
console.log(arrAge);
// 3

// 4 // არ ვიცი 3 და 4 ერთი დავალებაა თუ არა საიტზე ისე წერია, ასე რომ ცალცალკე გავაკეთებ პრაქტიკისთვის
let arrAge2 = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];
arrAge2.sort((a, b) => a.age - b.age);
console.log(arrAge2);
// 4
// Homework 28.05.2024

// დავალება 1
// function sumAll(num1, num2, ...n) {
//   let sum = 0;
//   let sum2 = 1;

//   for (let num of n) {
//     sum = num1 + num2;
//     sum2 *= num;
//   }
//   return sum + " and " + sum2;
// }
// console.log(sumAll(3, 5, 10, 11, 12, 21));
// // დავალება 1

// // დავალება 2
// const user3 = {
//   bank: {
//     name: "TB",
//     founded: 1999,
//     address: {
//       city: "Tbilisi",
//     },
//   },
// };

// const {
//   bank: { address: { city } = {} },
// } = user3;
// console.log(city);
// // დავალება 2

// // დავალება 3

// const user2 = {
//   bank: {
//     name: "TB",
//     founded: 1999,
//     address: "Tbilisi",
//   },
// };

// const copiedUser2 = {
//   ...user2,
//   bank: {
//     ...user2.bank,
//   },
// };
// console.log(user2);
// console.log(copiedUser2.bank.address);

// დავალება 3 დასასრული

// let obj1 = {
//   name: "Temo",
//   age: 25,
// };
// let obj2 = {
//   name: "Lasha",
//   age: 21,
// };
// function compare(obj1, obj2) {
//   if (obj1.age > obj2.age) {
//     console.log(obj1.name);
//   } else if (obj1.age < obj2.age) {
//     console.log(obj2.name);
//   } else {
//     console.log("Equal");
//   }
// }
// compare(obj1, obj2);

// //

// function randomNum() {
//   return parseInt(Math.random() * 10);
// }

// let a = randomNum();
// while (a !== 3) {
//   a = randomNum();
//   console.log("a " + a);
// }

// let b = randomNum();
// while (b !== 3) {
//   b = randomNum();
//   console.log("b " + b);
// }

// console.log(a.length);
// console.log(b.length);
// if (a.length > b.length) {
//   console.log("a wins");
// } else if (a.length === b.length) {
//   console.log("equal");
// } else {
//   console.log("b wins");
// }

// //

// let user = {
//   name: "Zura",
//   lastName: "Shubitidze",
//   age: 24,
// };

// const user1 = {
//   name: "Jil",
//   age: 29,
// };
