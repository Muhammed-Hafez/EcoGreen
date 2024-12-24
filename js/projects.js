// Projects data
const projects = [
  {
    title: "Eco-Friendly Office Complex",
    description:
      "A state-of-the-art office complex featuring sustainable architecture and green energy solutions. The building incorporates solar panels, rainwater harvesting, and natural ventilation systems.",
    location: "San Francisco, CA",
    year: "2023",
    client: "Tech Innovations Inc.",
    images: [
      "./images/Carosell/001.png",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    ],
  },
  {
    title: "Sustainable Housing Development",
    description:
      "A residential community designed with sustainability at its core. Features include energy-efficient homes, community gardens, and integrated renewable energy systems.",
    location: "Portland, OR",
    year: "2023",
    client: "Green Living Communities",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8",
    ],
  },
  {
    title: "Green Energy Research Center",
    description:
      "A cutting-edge research facility dedicated to developing new renewable energy technologies. The building itself serves as a living laboratory for sustainable practices.",
    location: "Boston, MA",
    year: "2022",
    client: "Renewable Energy Institute",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    ],
  },
  {
    title: "Urban Vertical Garden",
    description:
      "An innovative vertical garden project transforming urban spaces into green havens. Incorporates advanced hydroponics and smart irrigation systems.",
    location: "Chicago, IL",
    year: "2022",
    client: "City Green Initiative",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1520262454473-a1a82276a574",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    ],
  },
  {
    title: "Eco-Tourism Resort",
    description:
      "A luxury resort designed to minimize environmental impact while providing an immersive nature experience. Features include solar power and sustainable water management.",
    location: "Costa Rica",
    year: "2022",
    client: "EcoStay Resorts",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    ],
  },
  {
    title: "Smart Green School",
    description:
      "An educational facility that combines sustainable architecture with smart technology. Features include natural lighting systems and interactive learning spaces.",
    location: "Seattle, WA",
    year: "2021",
    client: "Future Education Foundation",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    ],
  },
  {
    title: "Renewable Energy Park",
    description:
      "A public park that generates its own energy through various renewable sources. Includes educational exhibits and interactive demonstrations of green technology.",
    location: "Austin, TX",
    year: "2021",
    client: "Green Energy Alliance",
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ],
  },
];

// Create project HTML
function createProjectHTML(project, index) {
  const specificIndex = index % 2 === 0 ? 0 : 2; // يختار الأولى في المشاريع الزوجية والثالثة في الفردية
  return `
        <div class="project-item">
            <div class="project-content">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                <dl class="project-details">
                    <dt>Location:</dt>
                    <dd>${project.location}</dd>
                    <dt>Year:</dt>
                    <dd>${project.year}</dd>
                    <dt>Client:</dt>
                    <dd>${project.client}</dd>
                </dl>
            </div>
            <div class="project-gallery">
                ${project.images
                  .map(
                    (img, imgIndex) => `
                    <div class="gallery-item ${
                      imgIndex === specificIndex ? "highlighted" : ""
                    }" data-project="${index}" data-index="${imgIndex}">
                        <img src="${img}" alt="${project.title} - Image ${
                      imgIndex + 1
                    }">
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
}

// Initialize projects section
function initProjects() {
  const projectsContainer = document.querySelector(".project-container");
  if (!projectsContainer) return;

  // Create lightbox
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-nav">
                <button class="lightbox-button prev">&larr;</button>
                <button class="lightbox-button next">&rarr;</button>
            </div>
        </div>
    `;
  document.body.appendChild(lightbox);

  // Add projects to container
  projects.forEach((project, index) => {
    projectsContainer.innerHTML += createProjectHTML(project, index);
  });

  // Lightbox functionality
  let currentProject = 0;
  let currentImage = 0;

  function showImage(projectIndex, imageIndex) {
    const project = projects[projectIndex];
    const lightboxImg = document.querySelector(".lightbox-image");
    lightboxImg.src = project.images[imageIndex];
    currentProject = projectIndex;
    currentImage = imageIndex;
  }

  // Event listeners
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const projectIndex = parseInt(item.dataset.project);
      const imageIndex = parseInt(item.dataset.index);
      showImage(projectIndex, imageIndex);
      lightbox.classList.add("active");
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.querySelector(".prev").addEventListener("click", () => {
    const project = projects[currentProject];
    currentImage =
      (currentImage - 1 + project.images.length) % project.images.length;
    showImage(currentProject, currentImage);
  });

  lightbox.querySelector(".next").addEventListener("click", () => {
    const project = projects[currentProject];
    currentImage = (currentImage + 1) % project.images.length;
    showImage(currentProject, currentImage);
  });

  // Close lightbox on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".project-item").forEach((item) => {
    observer.observe(item);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initProjects);
