
window.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion__header");
  
    for (const acc of accordions) {
      acc.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        }
        else {
          panel.style.display = "block";
        }
      });
    }
  });
  
