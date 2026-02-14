const reasons = [
  {
    text: 'You deserve a life that feels as beautiful as your heart.',
    emoji: '🌟',
  },
  {
    text: 'You have handled more than people know, and you are still standing',
    emoji: '🌿',
  },
  {
    text: 'This year is yours to grow, to win, and to shine',
    emoji: '✊',
  },
  {
    text: 'Trust yourself more. You are capable of more than you think',
    emoji: '🍊',
  },
];

let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

function createReasonCard(reason) {
  const card = document.createElement('div');
  card.className = 'reason-card';
  const text = document.createElement('div');
  text.className = 'reason-text';
  text.innerHTML = `${reason.emoji} ${reason.text}`;
  card.appendChild(text);
  reasonsContainer.appendChild(card);

  gsap.from(card, {
    opacity: 0,
    y: 40,
    duration: 0.5,
    ease: 'back.out(1.7)',
  });
}

function displayNewReason() {
  if (isTransitioning) return;
  isTransitioning = true;

  if (currentReasonIndex < reasons.length) {
    createReasonCard(reasons[currentReasonIndex]);
    reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
    currentReasonIndex++;

    if (currentReasonIndex === reasons.length) {
      shuffleButton.textContent = 'See Whats Next';
      shuffleButton.addEventListener('click', () => {
        gsap.to('body', {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            window.location.href = 'last.html';
          },
        });
      });
    }

    createFloatingElement();

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

shuffleButton.addEventListener('click', () => {
  gsap.to(shuffleButton, {
    scale: 0.9,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
  });
  displayNewReason();
});

function createFloatingElement() {
  const elements = ['🌸', '✨', '💖', '🌊', '⭐'];
  const element = document.createElement('div');
  element.className = 'floating';
  element.textContent = elements[Math.floor(Math.random() * elements.length)];
  element.style.left = Math.random() * window.innerWidth + 'px';
  element.style.top = Math.random() * window.innerHeight + 'px';
  element.style.fontSize = Math.random() * 20 + 12 + 'px';
  document.body.appendChild(element);

  gsap.to(element, {
    y: -300,
    opacity: 0,
    duration: Math.random() * 5 + 5,
    ease: 'power1.out',
    onComplete: () => element.remove(),
  });
}
setInterval(createFloatingElement, 2500);

const cursor = document.querySelector('.custom-cursor');
let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power2.out',
  });
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

function animateCursor() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

window.addEventListener('load', () => {
  gsap.to('h1', {
    opacity: 1,
    duration: 1,
    y: 20,
    ease: 'bounce.out',
  });

  gsap.to('.cta-button', {
    opacity: 1,
    duration: 1,
    y: -20,
    ease: 'back.out',
  });

  typeGreeting();

  setInterval(createFloating, 1000);
});

document.querySelectorAll('.shuffle-button').forEach((button) => {
  button.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 1.5, duration: 0.2 }); // cursor membesar
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 }); // kembali normal
  });
});
