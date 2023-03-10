// get all dropdown buttons
const dropdownBtns = document.querySelectorAll(".dropbtn");

// add click event listener to each dropdown button
dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // hide all other dropdowns
    dropdownBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        const otherContainer = otherBtn.parentElement;
        const otherContent = otherContainer.querySelector(".dropdown-content");
        otherContent.classList.remove("show");
        otherContainer
          .querySelector(".fa-caret-down")
          .classList.remove("fa-rotate-180");
      }
    });

    // get the corresponding content element and icon element
    const container = btn.parentElement;
    const content = container.querySelector(".dropdown-content");
    const icon = container.querySelector(".fa-caret-down");

    // toggle the content visibility and icon rotation
    content.classList.toggle("show");
    icon.classList.toggle("fa-rotate-180");
  });
});

// add click event listener to document to hide dropdowns when clicked outside
document.addEventListener("click", (event) => {
  // check if the click is outside of any dropdown buttons
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".dropdown-content *")
  ) {
    // hide all dropdowns
    dropdownBtns.forEach((btn) => {
      const container = btn.parentElement;
      const content = container.querySelector(".dropdown-content");
      content.classList.remove("show");
      container
        .querySelector(".fa-caret-down")
        .classList.remove("fa-rotate-180");
    });
  }
});

// carousel
let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

document.querySelectorAll(".slider__navlink").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});
