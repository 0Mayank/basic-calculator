let app = document.querySelector(".calculator");
let screen = document.querySelector(".screen");
let result = 0;
let prev_op = null;

app.addEventListener("click", function(event) {
  let target = event.target;
  if (target.tagName !== "BUTTON") {
    return;
  }
  let num = +screen.innerText;

  if (target.classList.contains("operations-button")) {
    let op = target.innerText;
    if (prev_op === null) {
      result = num;
      prev_op = op;
    } else if (prev_op === "+") {
      result += num;
    } else if (prev_op === "—") {
      result -= num;
    } else if (prev_op === "÷") {
      result /= num;
    } else if (prev_op === "×") {
      result *= num;
    }

    if (op === "=") {
      screen.innerText = result;
    } else {
      screen.innerText = "0";
    }
    prev_op = op;
  } else if (target.classList.contains("cancel")) {
    prev_op = null;
    screen.innerText = 0;
  } else if (target.classList.contains("back")) {
    if (prev_op === "=") {
      screen.innerText = 0;
      prev_op = null;
    } else { screen.innerText = screen.innerText.slice(0, -1); }
  } else {
    if (prev_op === "=") {
      screen.innerText = target.innerText;
      prev_op = null;
    } else {
      if (screen.innerText === "0") {
        screen.innerText = target.innerText;
      } else {
        screen.innerText += target.innerText;
      }
    }
  }
});
