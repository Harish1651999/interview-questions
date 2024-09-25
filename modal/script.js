// Get elements
const modal = document.getElementById("customModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-btn");
const closeModalBottomBtn = document.getElementById("closeModalBtn");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when close button (x) is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when the bottom close button is clicked
closeModalBottomBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
