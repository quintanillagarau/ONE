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
        "dragon": "El líder del Ejercito Revolucionario cuyo objetivo es destruir el gobierno mundial.",
        "yonko": "Los Cuatro Emperadores son los piratas más poderosos y temidos del mundo, tienen varios territorios en el 'Nuevo mundo' que están protegidos bajo su bandera.",
        "generacion": "La Peor Generación es un grupo de once piratas cuyas hazañas han sacudido el mundo haciendo que se les conociese como los 'Super Novas'.",
        "otros": "Los Shichibukai son unos piratas que han trabajado con el Gobierno Mundial a cambio de tener inmunidad a la hora de hacer lo que quieran."
    };
    
    Object.entries(clasesInfo).forEach(([clase, infoTexto]) => {
        crearModalParaClase(clase, infoTexto);
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
        modalTitle.style.color = "white";
        
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
                const personaje = img.getAttribute("alt") || "Información del personaje";
                modalTitle.textContent = personaje;
                modalContent.innerHTML = `<p>${infoTexto}</p>`;
                modal.style.display = "block";
            });
        });
    }

    const clasesInfo = {
        "marine-container": "Estos son los distintos rangos de la Marina en One Piece, cada uno con habilidades y responsabilidades únicas.",
        "marine-almirantes": "Los almirantes son los que más rango tienen despues del almirante de flota, tienen el poder de llamar a una 'Buster Call.'",
        "marine-vicealmirantes": "Los vicealmirantes son el tercer rango más alto de la marina, tienen varios deberes y más o menos autoridad dentro de su mismo rango.",
        "marine-capitanes": "Los capitanes son el sexto rango dentro de la marina, aún así hay algunos de los marines más importantes, como Koby o Tashigi"
    };
    
    Object.entries(clasesInfo).forEach(([clase, infoTexto]) => {
        crearModalParaClase(clase, infoTexto);
    });
});