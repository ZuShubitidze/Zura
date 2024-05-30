//
// Homework 30.05
// 1
const htmlDiv = document.createElement("div");
const htmlbtn = document.createElement("button");
const btnText = document.createTextNode("Button");
const divText = document.createTextNode("Div Tag");

htmlbtn.append(btnText);
htmlDiv.append(divText);
document.body.appendChild(htmlbtn);
document.body.append(htmlDiv);
htmlDiv.setAttribute("id", "divId");
htmlbtn.setAttribute("id", "btnId");

const btn = document.querySelector("#btnId");
btn.addEventListener("click", () => {
  htmlDiv.style.display = "none";
});

console.log(document.body);
// 1

// 2
const newHtmlDiv = document.createElement("div");
newHtmlDiv.setAttribute("id", "card");

const htmlH2 = document.createElement("h2");
const htmlH2Text = document.createTextNode("Gandalf");
htmlH2.append(htmlH2Text);

const htmlA = document.createElement("a");
const htmlAText = document.createTextNode("Go to profile");
htmlA.setAttribute("href", "#");
htmlA.append(htmlAText);

document.body.append(newHtmlDiv);
newHtmlDiv.appendChild(htmlH2);
newHtmlDiv.appendChild(htmlA);
// 2

// 3
const gameTitleH1 = document.createElement("h1"); // Header
const gameTitle = document.createTextNode("Quiz Game");
document.body.append(gameTitleH1);
gameTitleH1.append(gameTitle);
gameTitleH1.style.color = "blue";
gameTitleH1.style.textAlign = "center"; // Header

document.body.style.backgroundColor = "yellow"; // Background

const question = document.createElement("h3"); // Question 1
const questionText = document.createTextNode(
  "The name of the most famous and decisive battle of Alexander the Great against Persian King Darius?"
);
document.body.append(question);
question.append(questionText); // Question 1

const question2 = document.createElement("h3"); // Question 2
const question2Text = document.createTextNode(
  "Who united Germany in the second part of 19th century?"
);
document.body.append(question2);
question2.append(question2Text);
question2.style.display = "none"; // Question 2

const answerUl = document.createElement("div"); // Answers 1
const answer1 = document.createElement("button");
const answer3 = document.createElement("button");
const answer2 = document.createElement("button");
const answer4 = document.createElement("button");
const answer1Text = document.createTextNode("Issus");
const answer2Text = document.createTextNode("Gaugamela");
const answer3Text = document.createTextNode("Thermopylae");
const answer4Text = document.createTextNode("Marathon");
document.body.append(answerUl);
answerUl.append(answer1, answer2, answer3, answer4);
answer1.append(answer1Text);
answer2.append(answer2Text);
answer3.append(answer3Text);
answer4.append(answer4Text); // Answers 1

const answer21 = document.createElement("button"); // Answers 2
const answer22 = document.createElement("button");
const answer23 = document.createElement("button");
const answer24 = document.createElement("button");
const answer21Text = document.createTextNode("Adolf Hitler");
const answer22Text = document.createTextNode("Otto Von Bismark");
const answer23Text = document.createTextNode("Karl Heinz Rumenige");
const answer24Text = document.createTextNode("Gerd Muller");
answerUl.append(answer21, answer22, answer23, answer24);
answer21.append(answer21Text);
answer22.append(answer22Text);
answer23.append(answer23Text);
answer24.append(answer24Text);
answer24.style.display = "none";
answer23.style.display = "none";
answer22.style.display = "none";
answer21.style.display = "none"; // Answers 2

answer1.addEventListener("click", () => {
  // Colors and Dipslay
  answer1.style.backgroundColor = "red";
  answer1.style.transition = "5s";
  answer1.style.display = "none";
  answer2.style.display = "none";
  answer4.style.display = "none";
  answer3.style.display = "none";
  question.style.display = "none";
  question2.style.display = "initial";
  answer21.style.display = "initial";
  answer22.style.display = "initial";
  answer23.style.display = "initial";
  answer24.style.display = "initial";
});
answer2.addEventListener("click", () => {
  answer2.style.backgroundColor = "green";
  answer2.style.display = "none";
  answer4.style.display = "none";
  answer3.style.display = "none";
  answer1.style.display = "none";
  question.style.display = "none";
  question2.style.display = "initial";
  answer21.style.display = "initial";
  answer22.style.display = "initial";
  answer23.style.display = "initial";
  answer24.style.display = "initial";
});
answer3.addEventListener("click", () => {
  answer3.style.backgroundColor = "red";
  answer4.style.display = "none";
  answer2.style.display = "none";
  answer3.style.display = "none";
  answer1.style.display = "none";
  question.style.display = "none";
  question2.style.display = "initial";
  answer21.style.display = "initial";
  answer22.style.display = "initial";
  answer23.style.display = "initial";
  answer24.style.display = "initial";
});
answer4.addEventListener("click", () => {
  answer4.style.backgroundColor = "red";
  answer4.style.display = "none";
  answer2.style.display = "none";
  answer3.style.display = "none";
  answer1.style.display = "none";
  question.style.display = "none";
  question2.style.display = "initial";
  answer21.style.display = "initial";
  answer22.style.display = "initial";
  answer23.style.display = "initial";
  answer24.style.display = "initial";
});

answer21.addEventListener("click", () => {
  answer21.style.backgroundColor = "red";
});
answer22.addEventListener("click", () => {
  answer22.style.backgroundColor = "green";
});
answer23.addEventListener("click", () => {
  answer23.style.backgroundColor = "red";
});
answer24.addEventListener("click", () => {
  answer24.style.backgroundColor = "red";
});
// Colors and Dipslay

// 3
// Homework 30.05
//

// Homework 28.05.2024
// 1
// let arrReplace = ["string", "valueToReplace", "valueToReplaceWith"];
// arrReplace.splice(1, 1, "valueToReplaceWith");
// arrReplace.pop(); // To delete extra valueToReplaceWith
// console.log(arrReplace);
// 1

// 2
// let sentence = `yo soy zura`;
// console.log(sentence.toUpperCase());
// 2

// 3
// let arrAge = [21, 25, 68, 46, 31, 101];
// arrAge.sort(function (a, b) {
//   return a - b;
// });
// console.log(arrAge);
// 3

// 4 // არ ვიცი 3 და 4 ერთი დავალებაა თუ არა საიტზე ისე წერია, ასე რომ ცალცალკე გავაკეთებ პრაქტიკისთვის
// let arrAge2 = [
//   { name: "Lasha", age: 30 },
//   { name: "Saba", age: 20 },
// ];
// arrAge2.sort((a, b) => a.age - b.age);
// console.log(arrAge2);
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
