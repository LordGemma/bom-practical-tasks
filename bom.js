window.onload = function() {
  document.getElementById("form").addEventListener("submit", saveToStorage);
  const name = document.getElementById("userName");
  const email = document.getElementById("email");
  const userInfo = getFromStorage();
  if (userInfo) {
      name.value = userInfo.name;
      email.value = userInfo.email;
  }
};

function saveToStorage(e) {
  e.preventDefault();
  // add user data to local and session storages
  // write code below
}

function getFromStorage() {
  // load user data from any of storages
  // write code below
}
