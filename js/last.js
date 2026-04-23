const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const body = document.body;

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.setProperty('--translate-x', Math.random() * 100 - 50 + 'px');
  heart.style.setProperty('--float-duration', 4 + Math.random() * 3 + 's');
  heart.style.setProperty('--delay', Math.random() * 0.5 + 's');

  body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

document.addEventListener('click', (e) => {
  for (let i = 0; i < 3; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

document.addEventListener('mousemove', (e) => {
  if (Math.random() < 0.15) {
    createHeart(e.clientX, e.clientY);
  }
});

const goodbyeBtn = document.querySelector('.goodbye-btn');
goodbyeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Lorem ipsum dolor sit amet');
});
