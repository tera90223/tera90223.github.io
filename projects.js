console.log('Projects JS Loaded'); // Check if JS file is loaded

const projects = [
  {
    title: 'BRCA Therapeutic Target Ranking',
    description:
      'A pipeline integrating RNA-seq and proteomics for biomarker discovery using TCGA BRCA data.',
    image: 'project1.jpg', // Use a placeholder or themed image
    link: '', // optional
  },
  {
    title: 'Coming Soon',
    description: 'New project dropping soon...',
    image: 'placeholder.jpg',
    link: '',
  },
  {
    title: 'Coming Soon',
    description: 'Stay tuned for upcoming work!',
    image: 'placeholder.jpg',
  },
];

// Function to create project cards dynamically
function loadProjects() {
  console.log('Loading Projects'); // Check if the function is called
  const projectsGrid = document.getElementById('projects-grid');

  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add(
      'bg-white',
      'shadow-lg',
      'rounded-lg',
      'p-6',
      'transform',
      'transition',
      'duration-500',
      'opacity-0',
      'hover:scale-105'
    );
    projectCard.innerHTML = `
      <h3 class="text-xl font-semibold">${project.title}</h3>
      <p class="text-gray-600 mt-2">${project.description}</p>
      <a href="${project.link}" class="mt-4 text-blue-500 hover:underline">Learn more</a>
    `;

    // Append the project card to the grid
    projectsGrid.appendChild(projectCard);

    // Fade-in effect for the card
    setTimeout(() => {
      projectCard.classList.remove('opacity-0');
      projectCard.classList.add('opacity-100');
    }, 300); // Delay for fade-in effect
  });
}

// Call the function to load projects when the page is ready
window.onload = loadProjects;
