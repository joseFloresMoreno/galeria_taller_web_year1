//Funcion para recuperar el modal activo
function recuperarModalActivo() {
  // Buscar el modal activo
  const modal = document.querySelector(".modal.show");
  if (modal) return modal; // Retorna el modal activo
}

// Función para cerrar el modal activo
function cerrarModal() {
  const modal = recuperarModalActivo();
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

// Detectar cuando se abre un modal preguntando por su clase
document.addEventListener("click", function (e) {
  // Busca si algún modal se abrió después de un click
  const modal = recuperarModalActivo();
  console.log(modal);
  if (modal) {
    // Obtener el boton cerrar del modal abierto
    const closeButton = modal.querySelector(".btn-close");
    closeButton.addEventListener("click", cerrarModal);
  }
});
