const BILL_CONTAINER = document.getElementById("bill-container");
const PEOPLE_CONTAINER = document.getElementById("people-container");
const BILL = document.getElementById("bill");
const TIP_BUTTONS = document.querySelectorAll(".tip-button");
const CUSTOM_TIP = document.getElementById("custom-tip");
const PEOPLE = document.getElementById('people');
const ERROR_MESSAGE = document.getElementById("error-message");
const TIP_AMOUNT = document.getElementById("tip-amount");
const TOTAL = document.getElementById("total-amount");
const RESET_BUTTON = document.getElementById("reset-button");
const TIP = document.getElementsByClassName("tip");


// initial values
let tipPercentage = 0;

// add green border to bill input when input is focused and has a value greater than 0
BILL.addEventListener("input", function() {
  let billAmount = parseFloat(BILL.value);
  console.log(billAmount);
    if(billAmount <= 0 || !billAmount) {
        RESET_BUTTON.disabled = true;
    } else {
        RESET_BUTTON.disabled = false;
    }
});

// add green border to bill input when input is focused
BILL.addEventListener("focus", function() {
    BILL_CONTAINER.classList.add("focus");
});

// remove green border to bill input when input is NOT focused
BILL.addEventListener("blur", function() {
        BILL_CONTAINER.classList.remove("focus");
  })

// add orange border to people input when input is has a value of 0 and show error message
PEOPLE.addEventListener("input", function() {
  let numberOfPeople = parseInt(PEOPLE.value);
  console.log(numberOfPeople);
    if(parseInt(numberOfPeople) === 0) {
        PEOPLE_CONTAINER.classList.add("error");
        ERROR_MESSAGE.style.display = "flex";
    } else {
        PEOPLE_CONTAINER.classList.remove("error");
        ERROR_MESSAGE.style.display = "none";
    }
  });

  // set values back to initial values when reset button is clicked
RESET_BUTTON.addEventListener("click", function() {
    BILL.value = "";
    PEOPLE.value = "";
    BILL_CONTAINER.classList.remove("focus");
    PEOPLE_CONTAINER.classList.remove("error");
    ERROR_MESSAGE.style.display = "none";
    CUSTOM_TIP.value = "";
    TIP_AMOUNT.innerText = "$0.00";
    TOTAL.innerText = "$0.00";
    TIP_BUTTONS.forEach(btn => btn.classList.remove("active"));
    RESET_BUTTON.disabled = true;
});

TIP_BUTTONS.forEach(button => {
    button.addEventListener("click", function(event) {
      tipPercentage = parseFloat(event.target.value);
      TIP_BUTTONS.forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");
      CUSTOM_TIP.value = "";
    })
})

CUSTOM_TIP.addEventListener("focus", function() {
    TIP_BUTTONS.forEach(btn => btn.classList.remove("active"));
})