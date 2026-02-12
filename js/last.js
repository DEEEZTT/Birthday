const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Floating Hearts
const body = document.body;

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.setProperty("--translate-x", Math.random() * 100 - 50 + "px");
  heart.style.setProperty("--float-duration", 4 + Math.random() * 3 + "s");
  heart.style.setProperty("--delay", Math.random() * 0.5 + "s");

  body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000); // hapus setelah 7 detik
}

document.addEventListener("click", (e) => {
  for (let i = 0; i < 3; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

// Optional: Hearts spawn when moving mouse
document.addEventListener("mousemove", (e) => {
  if (Math.random() < 0.05) {
    // 5% chance per gerakan mouse
    createHeart(e.clientX, e.clientY);
  }
});

// Goodbye button effect
const goodbyeBtn = document.querySelector(".goodbye-btn");
goodbyeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("From me, Human."); // Bisa diganti animasi/fadeout
});
