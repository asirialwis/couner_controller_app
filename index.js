// document.getElementById("count-el").innerText = 5;

//change the count-el in the HTML to reflect the new count
countEl = document.getElementById("count-el");
countE2 = document.getElementById("count-el");
countE3 = document.getElementById("count-el");

saveEl = document.getElementById("save-el");

console.log(saveEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function decrement() {
  if (count > 0) {
    count = count - 1;
    countE2.innerText = count;
  } else {
    cout = 28;
  }
  // count = count - 1;
  // countE2.innerText = count;
}

function reset() {
  count = 0;
  countE3.innerText = count;
}

function save() {
  let countstr = count + " , ";
  if (count != 0) {
    saveEl.textContent = saveEl.textContent + countstr;
  }

  count = 0;
  countE2.innerText = count;
}
