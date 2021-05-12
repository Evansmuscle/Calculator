const buttons = Array.from(document.querySelectorAll(".btn"));
const input = document.querySelector(".number-input");
const enterButton = document.querySelector(".btn-enter");
const deleteOneCharacter = document.querySelector(".btn-charDel");
input.focus();

console.log(buttons);

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const calculationsArr = ["+", "-", "*", "/", "1/x", "%", "x2"];
let calculationType;
let savedNumber;
let shownValue;

buttons.forEach((el) => {
  console.log(el.textContent);
  el.addEventListener("click", function () {
    if (el.textContent.trim() === "C") {
      savedNumber = null;
      input.value = null;
      calculationType = null;
      shownValue = null;
      input.focus();
    }

    if (el.textContent === "CE") {
      input.value = null;
      input.focus();
    }

    if (el.textContent === ",") {
      input.value += ".";
      input.focus();
    }

    if (el.textContent === "+/-") {
      let numInp = Number(input.value);
      if (numInp > 0) {
        input.value = "-".concat(input.value);
        input.focus();
      }
      if (numInp < 0) {
        numInp = Math.abs(numInp);
        input.value = numInp;
        input.focus();
      }
      if (!input.value) {
        input.value += "-";
        input.focus();
      }
    }

    if (numbers.includes(el.textContent)) {
      input.value += el.textContent;
      input.focus();
    }

    if (el.textContent.trim() === deleteOneCharacter.textContent) {
      input.value = input.value.slice(0, -1);
      input.focus();
    }

    if (el.textContent === "√x") {
      input.value = String(Math.sqrt(Number(input.value)));
      input.focus();
    }

    if (calculationsArr.includes(el.textContent.trim())) {
      savedNumber = input.value;
      input.value = null;
      input.focus();
      if (el.textContent === "+") {
        calculationType = "+";
        input.focus();
      } else if (el.textContent === "-") {
        calculationType = "-";
        input.focus();
      } else if (el.textContent === "*") {
        calculationType = "*";
        input.focus();
      } else if (el.textContent === "/") {
        calculationType = "/";
        input.focus();
      } else if (el.textContent === "1/x") {
        input.value = 1 / Number(savedNumber);
        input.focus();
      } else if (el.textContent === "%") {
        calculationType = "%";
        input.focus();
      } else if (el.textContent.trim() === "x2") {
        input.value = Number(savedNumber) ** 2;
        input.focus();
      }
      console.log(calculationType);
    }
  });
});

enterButton.addEventListener("click", function () {
  if (savedNumber) {
    const numSaved = Number(savedNumber);
    const numInput = Number(input.value);
    if (calculationType === "+") {
      input.value = numSaved + numInput;
      input.focus();
    } else if (calculationType === "-") {
      input.value = numSaved - numInput;
      input.focus();
    } else if (calculationType === "*") {
      input.value = numSaved * numInput;
      input.focus();
    } else if (calculationType === "/") {
      input.value = numSaved / numInput;
      input.focus();
    } else if (calculationType === "%") {
      input.value = (numSaved / 100) * numInput;
      input.focus();
    }
  }
});

// document.addEventListener("keydown" function(event) {
//   if (event.isComposing || event.keyCode === 107) {
//     savedNumber = input.value;
//     input.value = null;
//     calculationType = "+";
//     input.focus();
//   }
//   if (event.isComposing || event.keyCode === 109) {
//     savedNumber = input.value;
//     input.value = null;
//     calculationType = "-";
//     input.focus();
//   }
//   if (event.isComposing || event.keyCode === 111) {
//     savedNumber = input.value;
//     input.value = null;
//     calculationType = "/";
//     input.focus();
//   }
//   if (event.isComposing || event.keyCode === 106) {
//     savedNumber = input.value;
//     input.value = null;
//     calculationType = "*";
//     input.focus();
//   }
//   // if (event.isComposing || event.keyCode === 107) {
//   //   savedNumber = input.value;
//   //   calculationType = "+";
//   // }
// });
