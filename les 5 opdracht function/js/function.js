console.log("main.js loaded in")

// Opdracht 1

let theTemp = 30;
temperature();

function temperature() {
    if(theTemp <= 10) {
      alert("Het is koud");
    }else if(theTemp > 10 && theTemp <= 16) {
      document.getElementById("demo").innerHTML = "Het is niet warm, dus doe een jas aan";
    }else if(theTemp >16 && theTemp < 24) {
      console.log("Het is niet koud, maar ook niet warm");
    }else if(theTemp >= 24 && theTemp < 30) {
      document.getElementById("demo2").innerHTML = "Je hoeft geen jas aan te doen";
    }else if(theTemp >= 30) {
      alert("het is beter als je je gaat insmeren");
    }else {
      console.log("geen geldige temperatuur ingesteld");
    }
}

// Opdracht 2

const leerlingCijfer1 = 10;
const leerlingCijfer2 = 1;

function toetsCijfers(cijfers) {
  const voldoende = "voldoende";
  if( cijfers < 5.5) {
    console.log("on" + voldoende)
  } else if(cijfers >= 5.5) {
    console.log(voldoende )
  }
}

toetsCijfers(leerlingCijfer1)
toetsCijfers(leerlingCijfer2)

// Opdracht 3

const userNumber1 = 9;
const userNumber2 = 12;
const userNumber3 = 5;
const userNumber4 = 6;

function theNumber(userNumbers) {
  if (userNumbers % 2) {
    console.log(false);
  } else {
    console.log(true);
  }
}

theNumber(userNumber1);
theNumber(userNumber2);
theNumber(userNumber3);
theNumber(userNumber4);