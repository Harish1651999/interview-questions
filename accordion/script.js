function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const isOpen = content.style.display === "block";

  // Close all other open items
  const accordions = document.querySelectorAll(".accordion-content");
  accordions.forEach((item) => {
    item.style.display = "none";
    item.previousElementSibling.classList.remove("open");
  });

  // If it was closed, open it
  if (!isOpen) {
    content.style.display = "block";
    header.classList.add("open");
  }
}
