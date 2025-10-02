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

BILL.addEventListener("keyup", function(event){

  console.log(BILL.value);
})
