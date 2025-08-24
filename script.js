
document.getElementById("loginButton").addEventListener("click", (e) => {
  e.preventDefault();

  const actualMobileNumber = 123456;
  const actualPinNumber = 1234;

  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  const mobileNumberConverted = parseInt(mobileNumber);
  const pinNumberConverted = parseInt(pinNumber);

  if (actualMobileNumber === mobileNumberConverted && actualPinNumber === pinNumberConverted){
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }

})