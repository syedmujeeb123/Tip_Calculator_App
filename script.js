"use strict";
const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const errorText = document.querySelector(".error-text");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btns = document.querySelectorAll(".btns");
const customBtn = document.querySelector(".btn-custom");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const totalBill = document.querySelector(".total-bill");
const resetBtn = document.querySelector(".reset-btn");

//
// tipAmount = Number(billValue) * (percent / 100);
// totalAmount = billValue + tipAmount;
// tipAmount = tipAmount.textContent;
// billValue = billInput.value;
// tipAmount = Number(billValue) * (5 / 100);
//   const totalAmount = parseFloat(querySelector(".total-amount").value);
//   totalAmount = billValue + tipAmount;

// btn1.addEventListener("click", () => {
//   tipAmount.textContent = btn1.textContent.match(/\d+/)[0];
//   const tipsAmount =
// });

// billInput = 5 = Number(25) * (5/100);
// //  50 = 25 + 5;

// btns.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     const myTip = Number(button.textContent.match(/\d+/)[0]);
//     const mybill = parseFloat(billInput.value);
//     const mypeople = parseFloat(peopleInput.value);
//     const billformula = mybill * (myTip / 100);
//     const peopleformula = billformula / mypeople;
//     const peopleCalculation = billformula + mybill;
//     const halfcalc = peopleCalculation / mypeople;
//     tipAmount.textContent = peopleformula;
//     totalAmount.textContent = halfcalc;
//   });
// });

// resetBtn.addEventListener("click", () => {
//   window.location.reload();
// });

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const mytip = Number(button.textContent.match(/\d+/)[0]);
    const mybill = parseFloat(billInput.value);
    const mypeople = parseFloat(peopleInput.value);

    //Formulas
    const billformula = mybill * (mytip / 100);
    const peopleformula = billformula / mypeople;
    const actualbill = billformula + mybill;
    const halfcalc = actualbill / mypeople;
    tipAmount.textContent = peopleformula.toFixed(2);
    totalAmount.textContent = halfcalc.toFixed(2);
    totalBill.textContent = (mybill + billformula).toFixed(2);

    if (peopleInput.value === "") {
      errorText.classList.remove("hidden");
      peopleInput.classList.add("outerline-color");
      errorText.style.color = "red";
    } else {
      peopleInput.classList.remove("outerline-color");
      errorText.classList.add("hidden");
    }
  });
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

customBtn.addEventListener("input", (e) => {
  e.preventDefault();
  const customButton = parseFloat(customBtn.value);
  const mybill = parseFloat(billInput.value);
  const mypeople = parseFloat(peopleInput.value);
  const custombill = mybill * (customButton / 100);
  const customformala = custombill / mypeople;
  const actualcustom = custombill + mybill;
  const halfcalccaustom = actualcustom / mypeople;
  tipAmount.textContent = customformala.toFixed(2);
  totalAmount.textContent = halfcalccaustom;
  totalBill.textContent = (mybill + custombill).toFixed(2);

  if (peopleInput.value === "") {
    errorText.classList.remove("hidden");
    peopleInput.classList.add("outerline-color");
    errorText.style.color = "red";
  } else {
    peopleInput.classList.remove("outerline-color");
    errorText.classList.add("hidden");
  }
});
