// 1
function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "ErrorInMatrix";
  }
}

console.log(sum(1, 2));

// 2
function FatoCe(f) {
  if (typeof f === "number") {
    return "Celsius" + " " + (f - 32) / 1.8;
  } else {
    return "false";
  }
}

console.log(FatoCe(100));

// 3
function sum1(c, d) {
  if (typeof c === "number" && typeof d === "number") {
    return c * d - c;
  } else {
    return "false";
  }
}

console.log(sum1(5, 4));
