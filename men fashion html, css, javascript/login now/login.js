const submitButton = document.querySelector(".loginbtn");

const User = document.querySelector(".takeusername");

submitButton.addEventListener("submit", onEvent);

function onEvent(e) {
  console.log("cool");
  e.preventDefault();
}

User.addEventListener("keyup", addUserName);

function addUserName(e) {
  console.log("YES");

  e.target.value;

  e.preventDefault();
}
