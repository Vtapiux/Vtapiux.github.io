// Obtener elementos del DOM
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');

// Función para abrir el modal
function openModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = 'none';
}

// Evento para abrir el modal al hacer clic en el botón
openModalButton.addEventListener('click', openModal);

// Evento para cerrar el modal al hacer clic en el botón de cerrar
closeButton.addEventListener('click', closeModal);

// Evento para cerrar el modal si se hace clic fuera del modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
