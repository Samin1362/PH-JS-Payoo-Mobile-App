
// add button 
document.getElementById("btn-add-money").addEventListener("click", (e) => {
  e.preventDefault();
  const addBank = document.getElementById("add-bank").value;
  const addAccountNumber = document.getElementById("add-account-number").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);
  const addPinNumber = document.getElementById("add-pin-number").value;

  const availableAmount = parseInt(
    document.getElementById("available-amount").innerText
  );
  const updatedAmount = availableAmount + addAmount;

  document.getElementById("available-amount").innerText = updatedAmount;
});

// cash out button 
document.getElementById("btn-cash-out").addEventListener("click", (e) => {
  e.preventDefault();
  const cashOutAmount = parseInt(document.getElementById("cash-out-amount").value);
  const availableAmount = parseInt(document.getElementById("available-amount").innerText);
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
