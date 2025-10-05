const BILL_CONTAINER = document.getElementById("bill-container");
const PEOPLE_CONTAINER = document.getElementById("people-container");
const BILL = document.getElementById("bill");
const TIP_BUTTONS = document.querySelectorAll(".tip-button");
const CUSTOM_TIP = document.getElementById("custom-tip");
const PEOPLE = document.getElementById('people');
const ERROR_MESSAGE = document.getElementById("error-message");
const TIP_AMOUNT = document.getElementById("tip-amount");
const TOTAL = document.getElementById("total");
const RESET_BUTTON = document.getElementById("reset-button");


// initial values
let tipPercentage = 0;
let billAmount = 0;
let numberOfPeople = 1;

// add green border to bill input when input is focused and has a value greater than 0
BILL.addEventListener("input", function() {
    if(BILL.value <= 0 || !BILL.value) {
        BILL_CONTAINER.classList.remove("focus");
    } else {
        BILL_CONTAINER.classList.add("focus");
    }
});

// add orange border to people input when input is has a value of 0 and show error message
PEOPLE.addEventListener("input", function() {
    if(PEOPLE.value <= 0 || !PEOPLE.value) {
        PEOPLE_CONTAINER.classList.add("error");
        ERROR_MESSAGE.style.display = "flex";
    } else {
        PEOPLE_CONTAINER.classList.remove("error");
        ERROR_MESSAGE.style.display = "none";
    }
  });