console.log('Projects JS Loaded'); // Check if JS file is loaded

const projects = [
  {
    title: 'Pan-Cancer Biomarker Discovery',
    description:
      'Reproducible DESeq2-based pipeline inspired by TNMplot to identify biomarkers across breast, lung, and colon cancer using TCGA data.',
    image: 'project1.jpg', // Use a placeholder or themed image
    link: 'https://github.com/tera90223/Cancer-Biomarker-Discovery-Reproducible-Study-Based-on-TNMplot', // GitHub or detailed blog page
    tags: ['RNA-seq', 'Proteomics', 'TCGA', 'ML'],
    status: 'Completed',
    date: 'December 2024',
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
      <div class="flex flex-col h-full">
        <img src="${project.image}" alt="${
      project.title
    }" class="w-full h-40 object-cover rounded-md mb-4" />
        <h3 class="text-xl font-bold text-blue-500">${project.title}</h3>
        <p class="text-blue-500 mt-2 flex-grow">${project.description}</p>

        ${
          project.tags
            ? `<div class="mt-2 flex flex-wrap gap-2">${project.tags
                .map(
                  (tag) =>
                    `<span class="text-xs bg-blue-800 text-white px-2 py-1 rounded-full">${tag}</span>`
                )
                .join('')}</div>`
            : ''
        }

        <a href="${
          project.link
        }" target="_blank" class="mt-4 inline-block text-blue-400 hover:underline">Learn more</a>
      </div>
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
