let count = 0;
const countEl = document.querySelector("#count-el");
const warning = document.querySelector("#red-text");
const prevEl = document.querySelector("#prev-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function decrement() {
  if (count > 0) {
    count--;
    countEl.innerText = count;
  }
}

function save() {
  let prevNumber = count + " - ";
  prevEl.textContent += prevNumber;
}
