"use strict";

const form = document.querySelector(".form");
const nameInput = document.querySelector(".nameInput");
const emailInput = document.querySelector(".emailInput");
const companyNameInput = document.querySelector(".companyInput");
const url = "http://localhost:3000/users";

form.addEventListener("submit", handleEmailFormSubmit);

//  form validation

function FormValidation() {
  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  if (name === "") {
    nameInput.style.borderColor = "red";
    return false;
  } else {
    nameInput.style.borderColor = "#dddddd";
  }

  if (email === "") {
    emailInput.style.borderColor = "red";
    return false;
  } else {
    emailInput.style.borderColor = "#dddddd";
  }

  if (/^[0-9]+$/.test(email)) {
    emailInput.style.borderColor = "red";
    return false;
  } else {
    emailInput.style.borderColor = "#dddddd";
  }

  if (/^[0-9]+$/.test(name)) {
    nameInput.style.borderColor = "red";
    return false;
  } else {
    nameInput.style.borderColor = "#dddddd";
  }
  if (email.length <= 3) {
    emailInput.style.borderColor = "red";
    return false;
  } else {
    emailInput.style.borderColor = "#dddddd";
  }
  if (name.length <= 3) {
    nameInput.style.borderColor = "red";
    return false;
  } else {
    nameInput.style.borderColor = "#dddddd";
  }
}

// post request

function handleEmailFormSubmit(evt) {
  evt.preventDefault();
  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  const company = companyNameInput.value.trim();

  const emailToAdd = {
    email,
    name,
    company
  };
  form.reset();
  emailInput.style.borderColor = "transperent";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(emailToAdd),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Error while fetching " + response.statusText);
    })
    .catch(error => {
      console.log(error);
    });
}
