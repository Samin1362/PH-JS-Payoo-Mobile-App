// shared functions

function getIntValue(id) {
  return parseInt(document.getElementById(id).value);
}

function getIntInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}

function getStrValue(id) {
  return document.getElementById(id).value;
}

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// add button
document.getElementById("btn-add-money").addEventListener("click", (e) => {
  e.preventDefault();
  const addBank = getStrValue("add-bank");
  const addAccountNumber = getStrValue("add-account-number");
  const addAmount = getIntValue("add-amount");
  const addPinNumber = getStrValue("add-pin-number");

  const availableAmount = getIntInnerText("available-amount");
  const updatedAmount = availableAmount + addAmount;

  document.getElementById("available-amount").innerText = updatedAmount;
});

// cash out button
document.getElementById("btn-cash-out").addEventListener("click", (e) => {
  e.preventDefault();
  const cashOutAmount = getIntValue("cash-out-amount");
  const availableAmount = getIntInnerText("available-amount");
  document.getElementById("available-amount").innerText =
    availableAmount - cashOutAmount;
});

//transfer money button
document.getElementById("btn-transfer-money").addEventListener("click", (e) => {
  e.preventDefault();
  const amount = getIntValue("transfer-money-amount");
  const availableAmount = getIntInnerText("available-amount")
  document.getElementById("available-amount").innerText = availableAmount - amount;
})

// implementing toggle feature

document.getElementById("add-money-button").addEventListener("click", (e) => {
  handleToggle("add-money-section");
});

document.getElementById("cashOut-money-button").addEventListener("click", (e) => {
  handleToggle("cash-out-section");
});

document.getElementById("transfer-money-button").addEventListener("click", (e) => {
  handleToggle("transfer-money-section");
})
