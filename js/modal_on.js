function abrirModal(event) {
    // Extraemos el ID del elemento que disparó el evento
    const id = event.currentTarget.id;
    const imgNumber = id.substr(3);

    // Obtenemos el modal correspondiente
    const modal = document.getElementById('modal' + imgNumber);
    console.log(modal);

    if (modal) {
        // Crear velo si no existe
        if (!document.querySelector('.modal-backdrop')) {
            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop fade show';
            backdrop.style.pointerEvents = 'none'; // Anulamos los clics en el velo
            document.body.appendChild(backdrop);
        }

        // Mostrar el modal
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.classList.add('modal-open');
        const closeButton = modal.querySelector(".btn-close");
        closeButton.addEventListener("click", cerrarModal);

        // Detener la propagación del evento
        event.stopPropagation();
    }
}

function cerrarModal() {
  const modal = document.querySelector(".modal.show");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");

    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  }
}

// Seleccionamos todos los contenedores de imágenes
const imageContainers = document.querySelectorAll('.image-container');

// Añadimos el evento de click a cada contenedor de imagen
imageContainers.forEach(container => {
    const hoverDiv = container.querySelector('.image-hover'); // Selecciona la imagen dentro del contenedor
    if (hoverDiv) {
        hoverDiv.style.cursor = 'pointer'; // Agregar cursor de puntero
        hoverDiv.addEventListener('click', abrirModal); // Agrega el evento a la imagen
    }
});
