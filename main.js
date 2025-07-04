// Typing Effect
document.addEventListener('DOMContentLoaded', () => {
  const typedText = document.querySelector('.typed-text');
  const words = ["Fuel Your Brand", "Ignite Your Vision", "Design That Inspires"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const pauseTime = 2000;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, typingSpeed / 2);
      }
    } else {
      typedText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }
  type();
});

// Details Toggle
const detailsBtn = document.querySelector('.details-toggle');
const detailsPanel = document.querySelector('.details-panel');

detailsBtn.addEventListener('click', () => {
  detailsPanel.classList.toggle('open');
});

// Scroll Animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
