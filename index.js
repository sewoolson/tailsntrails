const form = document.querySelector("form");
const modal = document.getElementById("signup-modal");
const closeBtn = document.getElementById("close-modal");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ⛔ stop GET navigation
  modal.hidden = false;
});

closeBtn.addEventListener("click", () => {
  modal.hidden = true;
});

// Optional: click outside modal to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.hidden = true;
  }
});
