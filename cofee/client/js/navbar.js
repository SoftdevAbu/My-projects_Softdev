document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const profileLink = document.getElementById("profileLink");
  const logoutLink = document.getElementById("logoutLink");

  // Show/hide links based on login status
  if (token) {
    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";
    if (profileLink) profileLink.style.display = "inline";
    if (logoutLink) logoutLink.style.display = "inline";
  } else {
    if (profileLink) profileLink.style.display = "none";
    if (logoutLink) logoutLink.style.display = "none";
  }

  // Logout click
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("cart"); // clear cart on logout
      window.location.href = "login.html"; // redirect to login
    });
  }
});
