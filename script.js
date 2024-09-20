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
// Search functionality
document.getElementById("search").addEventListener("input", function () {
  let searchTerm = this.value.toLowerCase();
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let arabicText = item.querySelector(".arabic").textContent.toLowerCase();
    let literalText = item
      .querySelector(".literal-translation")
      .textContent.toLowerCase();
    let englishText = item
      .querySelector(".english-equivalent")
      .textContent.toLowerCase();

    if (
      arabicText.includes(searchTerm) ||
      literalText.includes(searchTerm) ||
      englishText.includes(searchTerm)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Toggle linking phrases
document
  .getElementById("linkingPhrasesBtn")
  .addEventListener("click", function () {
    let linkingPhrasesSection = document.getElementById("linkingPhrases");
    if (linkingPhrasesSection.classList.contains("hidden")) {
      linkingPhrasesSection.classList.remove("hidden");
      this.textContent = "Hide Linking Phrases";
    } else {
      linkingPhrasesSection.classList.add("hidden");
      this.textContent = "Show Linking Phrases";
    }
  });

// Toggle proverbs
document.getElementById("proverbsBtn").addEventListener("click", function () {
  let proverbsSection = document.getElementById("proverbs");
  if (proverbsSection.classList.contains("hidden")) {
    proverbsSection.classList.remove("hidden");
    this.textContent = "Hide Proverbs";
  } else {
    proverbsSection.classList.add("hidden");
    this.textContent = "Show Proverbs";
  }
});
