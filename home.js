// shared functions 

function getIntValue (id) {
  return parseInt(document.getElementById(id).value);
}

function getIntInnerText (id) {
  return parseInt(document.getElementById(id).innerText);
}

function getStrValue (id) {
  return document.getElementById(id).value;
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
  document.getElementById("available-amount").innerText = availableAmount - cashOutAmount;
})

// implementing toggle feature

document.getElementById("add-money-button").addEventListener("click", (e) => {
  document.getElementById("add-money-section").style.display = "block";
  document.getElementById("cash-out-section").style.display = "none";
});

document
  .getElementById("cashOut-money-button")
  .addEventListener("click", (e) => {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
  });
