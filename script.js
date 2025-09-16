// Global variable example
let isBoxMoved = false;

// Function with parameter and return value
function toggleClass(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function demonstrating local vs global scope
function moveBox() {
  const box = document.getElementById('animateBox'); // local scope
  isBoxMoved = toggleClass(box, 'move'); // reuse function
}

// Function to open/close modal
function toggleModal(show) {
  const modal = document.getElementById('modal');
  modal.style.display = show ? 'block' : 'none';
}

// Event listeners
document.getElementById('colorBtn').addEventListener('click', moveBox);

document.getElementById('openModalBtn').addEventListener('click', () => toggleModal(true));

document.getElementById('closeModal').addEventListener('click', () => toggleModal(false));

window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if (e.target === modal) toggleModal(false);
});
