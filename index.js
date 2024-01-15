const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closingBtn = document.querySelector(".closing-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
