"use strict";
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector(".cta_button");
const subscribe = document.querySelector(".card-subscription");
const thanksMsg = document.querySelector(".msg_success");
const errorMsg = document.querySelector(".valid_email");
const dismissBtn = document.querySelector(".btn_success");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let email = input.value;
  if (email.includes("@") === false) {
    input.classList.toggle("error");
    errorMsg.style.visibility = "visible";
  } else {
    subscribe.style.display = "none";
    thanksMsg.style.display = "inline-block";
  }
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  thanksMsg.style.display = "none";
  subscribe.style.display = "flex";
});
