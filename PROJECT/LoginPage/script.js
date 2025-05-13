let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;

  const formTitle = document.getElementById("formTitle");
  const button = document.querySelector("button");
  const toggleText = document.getElementById("toggleText");
  const signupFields = document.getElementById("signupFields");

  if (isLogin) {
    formTitle.textContent = "Login";
    button.textContent = "Login";
    toggleText.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">SignUp</a>`;
    signupFields.style.display = "none";
  } else {
    formTitle.textContent = "Sign Up";
    button.textContent = "Sign Up";
    toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
    signupFields.style.display = "block";
  }
}

function handleAction() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Username and password cannot be empty.");
    return;
  }

  if (isLogin) {
    alert(`Daxil olundu: ${username}`);
  } else {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthdate = document.getElementById("birthdate").value;

    if (!firstName || !lastName || !email || !birthdate) {
      alert("Please fill out all registration fields.");
      return;
    }

    alert(`Registration is successful: ${firstName} ${lastName}, ${email}`);
  }
}
