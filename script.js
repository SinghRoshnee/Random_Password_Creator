let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let special_symbol = "!@#$%^&*_-";
let all_char = uppercase + lowercase + num + special_symbol;

const randompass = document.querySelector(".Password");
let passwordLength = 12;
let saveBtn = document.querySelector(".save-btn");
let passwordgenerated = false;

function createpassword() {
  if (passwordgenerated == false) {
    saveBtn.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
      saveBtn.innerHTML = "Clear";
      saveBtn.style.background = "#fffafa";
      saveBtn.style.color = "#333";

      let random_password = "";
      random_password +=
        uppercase[Math.floor(Math.random() * uppercase.length)];
      random_password +=
        lowercase[Math.floor(Math.random() * lowercase.length)];
      random_password += num[Math.floor(Math.random() * num.length)];
      random_password +=
        special_symbol[Math.floor(Math.random() * special_symbol.length)];

      while (passwordLength > random_password.length) {
        random_password +=
          all_char[Math.floor(Math.random() * all_char.length)];
      }
      randompass.value = random_password;
      passwordgenerated = true;
    }, 2000);
  } else {
    saveBtn.innerHTML = " Click to Create";
    saveBtn.style.background = "#69ebbb";
    saveBtn.style.color = "#fff"
    saveBtn.style.pointerEvents = "auto";

    randompass.value = "";
  }
}

//code to copy the password
function copyPassword() {
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

