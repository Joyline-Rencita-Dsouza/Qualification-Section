const experienceBtn = document.getElementById('experience-btn');
const educationBtn = document.getElementById('education-btn');
const experienceContent = document.getElementById('experience');
const educationContent = document.getElementById('education');

experienceBtn.addEventListener('click', () => {
  experienceBtn.classList.add('active');
  educationBtn.classList.remove('active');
  experienceContent.classList.add('active');
  educationContent.classList.remove('active');
});

educationBtn.addEventListener('click', () => {
  educationBtn.classList.add('active');
  experienceBtn.classList.remove('active');
  educationContent.classList.add('active');
  experienceContent.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const handleResize = () => {
    const icons = document.querySelectorAll(".icon-left, .icon-right");
    const line = document.querySelector(".line");

    if (window.innerWidth <= 800) {
      // Hide icons and vertical line on small devices
      icons.forEach(icon => (icon.style.display = "none"));
      if (line) line.style.display = "none";
    } else {
      // Show icons and vertical line on larger devices
      icons.forEach(icon => (icon.style.display = ""));
      if (line) line.style.display = "";
    }
  };

  // Run on initial load
  handleResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
});


document.addEventListener("DOMContentLoaded", () => {
  const handleResize = () => {
    const cards = document.querySelectorAll(".card");
    const line = document.querySelector(".line");

    if (window.innerWidth <= 1024) {
      // Center-align content and text for iPads and smaller devices
      cards.forEach(card => {
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.textAlign = "center";

        const details = card.querySelector(".details");
        if (details) {
          details.style.textAlign = "center";
        }
      });

      // Hide the vertical line
      if (line) line.style.display = "none";
    } else {
      // Reset to default layout for larger screens
      cards.forEach(card => {
        card.style.display = "";
        card.style.flexDirection = "";
        card.style.alignItems = "";
        card.style.textAlign = "";

        const details = card.querySelector(".details");
        if (details) {
          details.style.textAlign = "";
        }
      });

      // Show the vertical line
      if (line) line.style.display = "";
    }
  };

  // Run on initial load
  handleResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
});

document.addEventListener("DOMContentLoaded", () => {
  const handleResize = () => {
    const cards = document.querySelectorAll(".card");
    const icons = document.querySelectorAll(".icon-left, .icon-right");

    if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
      // Remove icons and increase card width
      cards.forEach(card => {
        card.style.width = "90%";
        card.style.margin = "20px auto";
      });
      icons.forEach(icon => (icon.style.display = "none"));
    } else {
      // Reset styles for larger or smaller screens
      cards.forEach(card => {
        card.style.width = "";
        card.style.margin = "";
      });
      icons.forEach(icon => (icon.style.display = ""));
    }
  };

  // Run on initial load
  handleResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
});
