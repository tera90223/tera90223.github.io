// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const skipBtn = document.getElementById('skipBtn');

  // Initialize Typed.js for the intro text
  const typed = new Typed('#typed-text', {
    strings: [
      "Hi, I'm Chantera Lazard.",
      'I study biology through data',
      'Turning code into care.',
      'Bioinformatics. Oncology. Data for Healing.',
      'This is where science meets purpose.',
      'Welcome to my portfolio.',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    showCursor: true,
    loop: false,
    onComplete: () => {
      setTimeout(() => {
        localStorage.setItem('hasSeenIntro', 'true');
        window.location.href = 'index.html';
      }, 1000);
    },
  });

  // Allow manual skipping of the intro
  skipBtn.addEventListener('click', () => {
    localStorage.setItem('hasSeenIntro', 'true');
    window.location.href = 'index.html';
  });
});

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: {
        src: 'path_to_your_custom_particle_image.png', // Optional custom image
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      out_mode: 'out',
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
