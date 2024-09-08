document.addEventListener("DOMContentLoaded", () => {
  const collapsibleSections = document.querySelectorAll(".collapsible");

  collapsibleSections.forEach((section) => {
    section.addEventListener("click", () => {
      section.classList.toggle("active");
      const content = section.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});
