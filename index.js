let result;
let button = document.getElementById("button");
let max = 2;
let min = 1;
let counter1 = 0;
let counter2 = 0;

button.onclick = function () {
  result = Number;
  result = Math.floor(Math.random() * max) + min;

  if (result === 1) {
    document.getElementById("endresult").textContent = "Kopf";
  } else {
    document.getElementById("endresult").textContent = "Zahl";
  }

  if (result === 1) {
    counter1++;
    document.getElementById("counter1").textContent = "Kopf :" + counter1;
  } else {
    counter2++;
    document.getElementById("counter2").textContent = "Zahl :" + counter2;
  }
};
