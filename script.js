const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Auto page change every 25 seconds
setInterval(() => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add("active");
}, 25000);

// Music play after first click
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
}, { once: true });

// Floating love words & emojis
const floatingTexts = [
  "I love you ❤️",
  "My whole world 🌍",
  "My best boy 🤍",
  "I admire you ✨",
  "Beginning • Middle • End ♾️",
  "Forever us 💕",
  "Home is you 🫶",
  "Always 💖"
];

const container = document.querySelector(".floating-container");

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = floatingTexts[Math.floor(Math.random() * floatingTexts.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = (18 + Math.random() * 12) + "px";
  container.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 12000);
}, 1500);
