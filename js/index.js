const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power2.out',
  });
});

const greetingText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
  if (charIndex < greetingText.length) {
    greetingElement.textContent += greetingText.charAt(charIndex);
    charIndex++;
    setTimeout(typeGreeting, 100);
  }
}

const floatingElements = ['🎉', '✨', '🧑🏿‍🦲', '💫', '🎈'];
function createFloating() {
  const element = document.createElement('div');
  element.className = 'floating';
  element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
  element.style.left = Math.random() * 100 + 'vw';
  element.style.top = Math.random() * 100 + 'vh';
  element.style.fontSize = Math.random() * 20 + 20 + 'px';
  document.body.appendChild(element);

  gsap.to(element, {
    y: -500,
    x: Math.random() * 100 - 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 5 + 5,
    opacity: 1,
    ease: 'none',
    onComplete: () => element.remove(),
  });
}

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

document.querySelectorAll('.cta-button').forEach((button) => {
  button.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 1.5, duration: 0.2 });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 });
  });

  button.addEventListener('click', () => {
    gsap.to('body', {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        window.location.href = 'cause.html';
      },
    });
  });
});
