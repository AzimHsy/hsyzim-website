document.getElementById("login").addEventListener("click", function () {
  const name = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const correctUsername = "hsyzim";
  const correctPassword = "hsyzim20719";

  if (name === correctUsername && pass === correctPassword) {
    window.location.href = "mainpage.html";
    alert(
      "Welcome to your website sayang ! \nAs it is your Special Day, I made a special website for you \neven tho there is no much more that I can give you. \nI hope you like it! 🥰 (Press F11 for fullscreen)"
    );
  } else {
    alert("Salah laa !! \nMasukkan la betul betul cayang");
  }
});
