function login() {
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("emailError");

  // Simple email check
  if (!email.includes("@") || !email.includes(".")) {
    error.innerText = "❌ Please enter a valid email (must include @ and .)";
    return;
  } else {
    error.innerText = "";
  }

  if (role === "doctor") {
    window.location.href = "doctor.html";
  } else {
    window.location.href = "user.html";
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
