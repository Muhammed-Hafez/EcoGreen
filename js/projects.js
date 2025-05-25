// Projects data
const projects = [
  {
    title: "Al Masa Hotel",
    subtitle: "(Ain ElSokhna)",
    id: "almasa",
    location: "El-Ain Shoknha",
    scopeOfWork:
      "Structure glazing, Aluminum cladding, Aluminum Doors and windows, Skylight",
    mainContractor: "Almasa Hotel Nasr City",
    client: "Almasa Group",
    images: [
      "./images/Swr elprojects/Almasa hotel/1.jpg",
      "./images/Swr elprojects/Almasa hotel/2.jpg",
      "./images/Swr elprojects/Almasa hotel/3.jpg",
      "./images/Swr elprojects/Almasa hotel/4.jpg",
    ],
  },
  {
    title: "Al Riyada University",
    subtitle: "(Sadat City)",
    id: "uni",
    location: "Sadat City",
    scopeOfWork: "Curtain wall, Aluminum cladding, Aluminum Doors and windows",
    mainContractor: "Madinet Elsadat Co. for Private University",
    client: "Al Riyada University",
    images: [
      "./images/Swr elprojects/Alriyada Uni/1.jpg",
      "./images/Swr elprojects/Alriyada Uni/2.jpg",
      "./images/Swr elprojects/Alriyada Uni/4.jpg",
      "./images/Swr elprojects/Alriyada Uni/3.jpg",
    ],
  },
  {
    title: "Masa Villa",
    subtitle: "",
    id: "masa",
    location: "El-Ain Shoknha",
    scopeOfWork: "Structure glazing, Aluminum Doors and windows, Skylight",
    mainContractor: "Almasa Hotel Nasr City",
    client: "Private Owner",
    images: [
      "./images/Swr elprojects/Alriyada Uni/1.jpg",
      "./images/Swr elprojects/Alriyada Uni/2.jpg",
      "./images/Swr elprojects/Alriyada Uni/3.jpg",
      "./images/Swr elprojects/Alriyada Uni/4.jpg",
    ],
  },
  {
    title: "Eagle Main building",
    subtitle: "",
    id: "eagle",
    location: "Sheraton Helioples - Cairo",
    scopeOfWork:
      "Structure glazing, Aluminum cladding, Aluminum Doors and windows",
    mainContractor: "Eagle Contracting",
    client: "Eagle Group",
    images: [
      "./images/Swr elprojects/Eagle/1.jpg",
      "./images/Swr elprojects/Eagle/2.jpg",
      "./images/Swr elprojects/Eagle/3.jpg",
      "./images/Swr elprojects/Eagle/4.jpg",
    ],
  },
  {
    title: "Egypt German Hospital",
    subtitle: "",
    id: "hospital",
    location: "6th October City, Giza",
    scopeOfWork:
      "Canopy, Aluminum cladding, Aluminum Doors and windows, Skylight, Structure glazing",
    mainContractor: "Egypt German Hospital",
    client: "Egypt German Hospital Admin",
    images: [
      "./images/Swr elprojects/Hospital/1.jpg",
      "./images/Swr elprojects/Hospital/2.jpg",
      "./images/Swr elprojects/Hospital/3.jpg",
      "./images/Swr elprojects/Hospital/4.jpg",
    ],
  },
  {
    title: "Enterprise Holding",
    subtitle: "",
    id: "enterprise",
    location: "Sheraton Helioples - Cairo",
    scopeOfWork:
      "Structure glazing, Aluminum cladding, Aluminum Doors and windows",
    mainContractor: "Enterprise Holding",
    client: "Enterprise Holding Group",
    images: [
      "./images/Swr elprojects/Enterprise/1.jpg",
      "./images/Swr elprojects/Enterprise/2.jpg",
      "./images/Swr elprojects/Enterprise/3.jpg",
      "./images/Swr elprojects/Enterprise/4.jpg",
    ],
  },
  {
    title: "Main Gate Project",
    subtitle: "",
    id: "gate",
    location: "Sadat City",
    scopeOfWork: "Curtain wall, Aluminum cladding, Aluminum Doors and windows",
    mainContractor: "Madinet Elsadat Co. for Private University",
    client: "Al Riyada University",
    images: [
      "./images/Swr elprojects/Eagle/1.jpg",
      "./images/Swr elprojects/Eagle/2.jpg",
      "./images/Swr elprojects/Eagle/3.jpg",
      "./images/Swr elprojects/Eagle/4.jpg",
    ],
  },
];

// Create project HTML
// Define which images to highlight for each project
const highlightedImages = [
  { right: { large: 3, small: 0 } },
  { left: { large: 3, small: 0 } },
  { right: { large: 3, small: 2 } },
  { left: { large: 3, small: 1 } },
  { right: { large: 3, small: 0 } },
  { left: { large: 3, small: 2 } },
  { right: { large: 3, small: 1 } },
];

function createProjectHTML(project, index) {
  const highlight = highlightedImages[index] || {};

  // حساب الحجم هنا، مش برا الدالة
  const isSmallScreen = window.innerWidth <= 768;

  return `
    <div class="project-item" id="${project.id}">
        <div class="project-content">
            <div class="project-head">
                <h2 class="project-title">${project.title}<br/> 
                  <span>${project.subtitle}</span>
                </h2>
            </div>
            <dl class="project-details">
  <div class="project-label">
    <dt>Location :</dt>
    <dd>${project.location}</dd>
  </div>
  <div class="project-label">
    <dt>Scope of Work :</dt>
    <dd>${project.scopeOfWork}</dd>
  </div>
  <div class="project-label">
    <dt>Client :</dt>
    <dd>${project.client}</dd>
  </div>
  <div class="project-label">
    <dt>Main Contractor :</dt>
    <dd>${project.mainContractor}</dd>
  </div>
</dl>

        </div>
        <div class="project-gallery">
            ${project.images
              .map((img, imgIndex) => {
                const classes = [];

                // نستخدم small أو large حسب الحجم
                if (
                  imgIndex ===
                  (isSmallScreen
                    ? highlight.right?.small
                    : highlight.right?.large)
                )
                  classes.push("highlight-right");
                if (
                  imgIndex ===
                  (isSmallScreen
                    ? highlight.left?.small
                    : highlight.left?.large)
                )
                  classes.push("highlight-left");

                return `
                  <div class="gallery-item ${classes.join(" ")}" 
                       data-project="${index}" 
                       data-index="${imgIndex}">
                      <img src="${img}" alt="${project.title} - Image ${
                  imgIndex + 1
                }">
                  </div>
                `;
              })
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

  // Swipe events for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  document.querySelectorAll(".project-gallery").forEach((gallery) => {
    gallery.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });

    gallery.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    });
  });

  // Handle swipe direction
  function handleSwipe() {
    const swipeThreshold = 50; // الحد الأدنى لتحريك الصورة
    if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe right: Show previous image
      const project = projects[currentProject];
      currentImage =
        (currentImage - 1 + project.images.length) % project.images.length;
      showImage(currentProject, currentImage);
    } else if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left: Show next image
      const project = projects[currentProject];
      currentImage = (currentImage + 1) % project.images.length;
      showImage(currentProject, currentImage);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initProjects);
