// Load header and footer
fetch('header.html')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

fetch('footer.html')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

const lines = [
  'Hi, I’m Chantera Lazard.',
  'I’m earning my Master’s in Bioinformatics at Northeastern University.',
  'My work lives at the intersection of oncology, machine learning, and real-world impact.',
  'I build reproducible pipelines that rank biomarkers as therapeutic targets —',
  'with one goal in mind: to develop precise, accessible cancer therapies.',
];

const introPlayed = localStorage.getItem('introPlayed');

if (!introPlayed) {
  document.body.classList.add('intro-playing');

  let typed = new Typed('#typed-text', {
    strings: lines,
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: false,
    showCursor: false,
    smartBackspace: false,
    loop: false,
    onComplete: () => {
      localStorage.setItem('introPlayed', 'true');
      showIntro();
    },
  });
} else {
  // If intro already played, skip animation
  const hero = document.getElementById('heroSection');
  const intro = document.getElementById('introSection');
  hero.remove(); // Get rid of the hero section
  intro.classList.remove('hidden'); // Show the actual intro section
}

document.getElementById('skipIntro').addEventListener('click', () => {
  typed.destroy(); // Stop the typing animation
  document.getElementById('typed-text').innerHTML = lines.join('<br>'); // Show full text
  showIntro(); // Reveal and scroll to about me
});

function showIntro() {
  const intro = document.getElementById('introSection');
  const hero = document.getElementById('heroSection');

  // Remove scroll lock
  document.body.classList.remove('intro-playing');

  // Add fade-in class for introSection
  intro.classList.remove('hidden');
  intro.classList.add('fade-in');

  // Smooth scroll to About Me section after fade-in
  intro.scrollIntoView({ behavior: 'smooth' });

  // Add fade-out class to the hero section
  hero.classList.add('fade-out');

  // After fade-out duration (800ms), remove the hero section
  setTimeout(() => {
    hero.remove(); // Cleanly remove the hero section from DOM
  }, 800); // Match fade-out duration for smooth transition
}

const carouselPhrases = [
  'Master’s in Bioinformatics',
  'Translational Research Enthusiast',
  'Turning Data into Therapeutics',
  'Driven by Purpose, Guided by Data',
];

let carouselIndex = 0;
const carouselText = document.getElementById('carousel-text');

setInterval(() => {
  carouselIndex = (carouselIndex + 1) % carouselPhrases.length;
  carouselText.classList.add('opacity-0');
  setTimeout(() => {
    carouselText.textContent = carouselPhrases[carouselIndex];
    carouselText.classList.remove('opacity-0');
  }, 300);
}, 2500);
