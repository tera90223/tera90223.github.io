// Load header and footer after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // Load header
  fetch('header.html')
    .then((res) => res.text())
    .then((data) => {
      const header = document.getElementById('header-placeholder');
      if (header) header.innerHTML = data;
    });

  // Load footer
  fetch('footer.html')
    .then((res) => res.text())
    .then((data) => {
      const footer = document.getElementById('footer-placeholder');
      if (footer) footer.innerHTML = data;
    });

  // Redirect if intro hasn't been seen
  if (!localStorage.getItem('hasSeenIntro')) {
    window.location.href = 'intro.html';
  }

  // Start carousel once DOM is ready
  const carouselPhrases = [
    'Master’s in Bioinformatics',
    'Translational Research Enthusiast',
    'Turning Data into Therapeutics',
    'Driven by Purpose, Guided by Data',
  ];

  let carouselIndex = 0;
  const carouselText = document.getElementById('carousel-text');

  if (carouselText) {
    setInterval(() => {
      carouselIndex = (carouselIndex + 1) % carouselPhrases.length;
      carouselText.classList.add('opacity-0');
      setTimeout(() => {
        carouselText.textContent = carouselPhrases[carouselIndex];
        carouselText.classList.remove('opacity-0');
      }, 300);
    }, 2500);
  }
});
