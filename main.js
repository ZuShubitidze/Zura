let obj1 = {
  name: "Temo",
  age: 25,
};
let obj2 = {
  name: "Lasha",
  age: 21,
};
function compare(obj1, obj2) {
  if (obj1.age > obj2.age) {
    console.log(obj1.name);
  } else if (obj1.age < obj2.age) {
    console.log(obj2.name);
  } else {
    console.log("Equal");
  }
}
compare(obj1, obj2);

//

function randomNum() {
  return parseInt(Math.random() * 10);
}

let a = randomNum();
while (a !== 3) {
  a = randomNum();
  console.log("a " + a);
}

let b = randomNum();
while (b !== 3) {
  b = randomNum();
  console.log("b " + b);
}

console.log(a.length);
console.log(b.length);
if (a.length > b.length) {
  console.log("a wins");
} else if (a.length === b.length) {
  console.log("equal");
} else {
  console.log("b wins");
}

//

let user = {
  name: "Zura",
  lastName: "Shubitidze",
  age: 24,
};

const user1 = {
  name: "Jil",
  age: 29,
};
