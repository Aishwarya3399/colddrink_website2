document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  // Toggle the visibility of the menu when the hamburger icon is clicked
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

const pepsiImage = document.querySelector(".pepsi");
const secElement = document.querySelector(".sec");
const container = document.getElementById("carouselImages");
let currentIndex = 0;

function imgSlider(image) {
  const pepsiImage = document.querySelector(".pepsi");
  pepsiImage.src = `./assets/${image}`;
}

function changeBgColor(color) {
  secElement.style.background = color;
}

let currentDirection = "left";
let marqueeContent = document.getElementById("carouselContent");

// Function to change the scroll direction
function changeDirection(direction) {
  if (direction === currentDirection) return;

  // Toggle direction based on arrow click
  if (direction === "left") {
    marqueeContent.style.animation = "scroll-left 30s linear infinite";
  } else if (direction === "right") {
    marqueeContent.style.animation = "scroll-right 30s linear infinite";
  }

  currentDirection = direction;
}


// Gallery Page

document.addEventListener("DOMContentLoaded", function () {
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");

    imageModal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget; // Button that triggered the modal
      const imageSrc = button.getAttribute("data-img"); // Extract image source
      const description = button.getAttribute("data-description"); // Extract

      // Update modal content
      modalImage.setAttribute("src", imageSrc);
      modalDescription.textContent = description;
    });
  });