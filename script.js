document.getElementById("continueBtn").addEventListener("click", () => {
  const check = document.getElementById("notRobot").checked;
  if (!check) {
    alert("Please complete the captcha!");
    return;
  }

  // Open Linkvertise in a new tab
  window.open("https://linkvertise.com/", "_blank");

  // Show Generate Key button
  document.getElementById("generateSection").style.display = "block";
});

document.getElementById("generateBtn").addEventListener("click", () => {
  const key = "KEY-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  document.getElementById("keyDisplay").textContent = "Your Key: " + key;
});
