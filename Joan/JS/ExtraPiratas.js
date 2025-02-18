document.addEventListener("DOMContentLoaded", function () {
    // Función para crear y manejar un modal por clase con información diferente
    function crearModalParaClase(clase, infoTexto) {
        const imagenes = document.querySelectorAll(`.${clase} img`);
        
        const modal = document.createElement("div");
        modal.classList.add("modalPopUp");
        modal.style.display = "none";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.background = "rgba(0, 0, 0, 0.8)";
        modal.style.padding = "20px";
        modal.style.borderRadius = "10px";
        modal.style.color = "white";
        modal.style.zIndex = "1000";
        modal.style.maxWidth = "400px";
        modal.style.textAlign = "center";
        
        const modalContent = document.createElement("div");
        const modalTitle = document.createElement("h2");
        modalTitle.style.color = "white"; // Cambia el color del título
        
        const closeButton = document.createElement("button");
        closeButton.textContent = "Cerrar";
        closeButton.style.marginTop = "10px";
        closeButton.style.padding = "5px 10px";
        closeButton.style.cursor = "pointer";
        
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        });
        
        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);
        modal.appendChild(closeButton);
        document.body.appendChild(modal);
        
        imagenes.forEach(img => {
            img.addEventListener("click", function () {
                const personaje = img.getAttribute("alt") || "Información del grupo";
                modalTitle.textContent = personaje;
                modalContent.innerHTML = `<p>${infoTexto}</p>`;
                modal.style.display = "block";
            });
        });
    }

    // Crear un modal para cada categoría de personajes con información diferente
    const clasesInfo = {
        "dragon": "El líder del Ejercito Revolucionario.",
        "yonko": "Los Cuatro Emperadores son los piratas más poderosos y temidos del mundo.",
        "generacion": "La Peor Generación es un grupo de once piratas cuyas hazañas han sacudido el mundo.",
        "otros": "Aquí están los Shichibukai, piratas que han trabajado con el Gobierno Mundial."
    };
    
    Object.entries(clasesInfo).forEach(([clase, infoTexto]) => {
        crearModalParaClase(clase, infoTexto);
    });
});