const pages = document.querySelectorAll(".page");
let current = 0;

setInterval(() => {
  pages[current].classList.remove("active");
  current++;

  if (current >= pages.length) {
    showPopup();
    current = pages.length - 1;
    return;
  }

  pages[current].classList.add("active");
}, 25000);

// Start music
document.getElementById("startBtn").onclick = () => {
  document.getElementById("bgMusic").play();
  document.getElementById("startOverlay").style.display = "none";
};

// Floating text
const words = [
  "I love you 🤍",
  "My whole world",
  "Always us",
  "Home is you",
  "Forever ♾️"
];

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = words[Math.floor(Math.random() * words.length)];
  span.style.left = Math.random() * 100 + "vw";
  document.querySelector(".floating-container").appendChild(span);

  setTimeout(() => span.remove(), 15000);
}, 2500);

// Final popup
function showPopup() {
  setTimeout(() => {
    alert("I love you beyond everything and everyone 🤍");
  }, 2000);
}

