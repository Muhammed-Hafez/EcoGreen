// Projects data
const projects = [
  {
    title: "Al Masa Hotel",
    subtitle: "(Ain ElSokhna)",
    id: "almasa",
    description: "",
    location: "",
    year: "",
    client: "",
    images: [
      "/images/swr elprojects/Almasa hotel/1.jpg",
      "/images/swr elprojects/Almasa hotel/2.jpg",
      "/images/swr elprojects/Almasa hotel/3.jpg",
      "/images/swr elprojects/Almasa hotel/4.jpg",
    ],
  },
  {
    title: "Al Riyada University",
    subtitle: "(Sadat City)",
    id: "uni",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu aliquet augue. Duis imperdiet nisi odio, eu rhoncus mauris feugiat facilisis. Nam ornare, elit sed tempor lobortis, metus ligula semper nisl, et malesuada metus nibh ac ipsum. Sed consectetur nisi in lacus euismod ullamcorper. ",
    location: "",
    year: "",
    client: "",
    images: [
      "./images/swr elprojects/Alriyada Uni/1.jpg",
      "./images/swr elprojects/Alriyada Uni/2.jpg",
      "./images/swr elprojects/Alriyada Uni/3.jpg",
      "./images/swr elprojects/Alriyada Uni/4.jpg",
    ],
  },
  {
    title: "Masa Villa",
    subtitle: "",
    id: "masa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu aliquet augue. Duis imperdiet nisi odio, eu rhoncus mauris feugiat facilisis. Nam ornare, elit sed tempor lobortis, metus ligula semper nisl, et malesuada metus nibh ac ipsum. Sed consectetur nisi in lacus euismod ullamcorper. ",
    location: "",
    year: "",
    client: "",
    images: [
      "./images/swr elprojects/Alriyada Uni/1.jpg",
      "./images/swr elprojects/Alriyada Uni/2.jpg",
      "./images/swr elprojects/Alriyada Uni/3.jpg",
      "./images/swr elprojects/Alriyada Uni/4.jpg",
    ],
  },
  {
    title: "Eagle Main building",
    subtitle: "",
    id: "eagle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu aliquet augue. Duis imperdiet nisi odio, eu rhoncus mauris feugiat facilisis. Nam ornare, elit sed tempor lobortis, metus ligula semper nisl, et malesuada metus nibh ac ipsum. Sed consectetur nisi in lacus euismod ullamcorper. ",
    location: "",
    year: "",
    client: "",
    images: [
      "./images/swr elprojects/Eagle/1.jpg",
      "./images/swr elprojects/Eagle/2.jpg",
      "./images/swr elprojects/Eagle/3.jpg",
      "./images/swr elprojects/Eagle/4.jpg",
    ],
  },
  {
    title: "Egypt German Hospital",
    subtitle: "",
    id: "hospital",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu aliquet augue. Duis imperdiet nisi odio, eu rhoncus mauris feugiat facilisis. Nam ornare, elit sed tempor lobortis, metus ligula semper nisl, et malesuada metus nibh ac ipsum. Sed consectetur nisi in lacus euismod ullamcorper. ",
    location: "",
    year: "",
    client: "",
    images: [
      "./images/swr elprojects/Hospital/1.jpg",
      "./images/swr elprojects/Hospital/2.jpg",
      "./images/swr elprojects/Hospital/3.jpg",
      "./images/swr elprojects/Hospital/4.jpg",
    ],
  },
  {
    title: "Enterprise Holding",
    subtitle: "",
    id: "enterprise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu aliquet augue. Duis imperdiet nisi odio, eu rhoncus mauris feugiat facilisis. Nam ornare, elit sed tempor lobortis, metus ligula semper nisl, et malesuada metus nibh ac ipsum. Sed consectetur nisi in lacus euismod ullamcorper. ",
    location: "",
    year: "",
    client: "",
    images: [
      "./images/swr elprojects/Enterprise/1.jpg",
      "./images/swr elprojects/Enterprise/2.jpg",
      "./images/swr elprojects/Enterprise/3.jpg",
      "./images/swr elprojects/Enterprise/4.jpg",
    ],
  },
  {
    title: "Main Gate Project",
    subtitle: "",
    id: "gate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu aliquet augue. Duis imperdiet nisi odio, eu rhoncus mauris feugiat facilisis. Nam ornare, elit sed tempor lobortis, metus ligula semper nisl, et malesuada metus nibh ac ipsum. Sed consectetur nisi in lacus euismod ullamcorper. ",
    location: "",
    year: "",
    client: "",
    images: [
      "./images/swr elprojects/Eagle/1.jpg",
      "./images/swr elprojects/Eagle/2.jpg",
      "./images/swr elprojects/Eagle/3.jpg",
      "./images/swr elprojects/Eagle/4.jpg",
    ],
  },
];

// Create project HTML
function createProjectHTML(project, index) {
  const specificIndex = index % 2 === 0 ? 0 : 2; // يختار الأولى في المشاريع الزوجية والثالثة في الفردية
  return `
        <div class="project-item" id="${project.id}">
            <div class="project-content">
                <h2 class="project-title">${project.title}</h2>
                        <h4 class="project-subtitle">${
                          project.subtitle
                        }</h4> <!-- العنوان الفرعي -->

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
