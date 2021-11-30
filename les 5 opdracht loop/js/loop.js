console.log("loop.js loaded")

// Opdracht 1

// const userNumber = prompt("noem een getal onder de 15");
// for (let i = 1; i <= userNumber; i++) {
//   console.log(i)
// }

// Opdracht 2

for (let i = 1; i <= 10; i++) {
  console.log(`${i} foot = ${i * 30.48} cm`)
}

// Opdracht 3

let string = "";
for (let a = 1; a <= 6; a++) {
  for (let j = 1; j <= a; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string)

// 

let string2 = "";
for (let b = 1; b <= 6; b++) {
  for (let j = 1; j <= 7 - b; j++) {
    string2 += j;
  }
  string2 += "\n";
}
console.log(string2);