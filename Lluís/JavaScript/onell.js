

function mostrarTerminos() {
            alert("Marcando esta casilla aceptas que tu cuerpo, mente y alma, trabajo asado y futuro, benficios y propiedades, pasen a ser propiedad del Gobierno Mundial; Asi como aceptas subir en el proximo barco de la marina que pase por tu Dirección. En caso de no cumplir con esto se te tachara de Desertor y se te pondra recompensa como pirata. ");
        }

        function mostrarDatos(event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            let nombre = document.getElementById("nombre").value;
            let direccion = document.getElementById("direccion").value;
            let apellido1 = document.getElementById("apellido1").value;
            let apellido2 = document.getElementById("apellido2").value;
            let checkbox = document.getElementById("terminos");
            let resultadoDiv = document.getElementById("resultado");

            if (nombre === "" || direccion === "" || apellido1 === "") {
                alert("Por favor, completa todos los campos obligatorios.");
                return;
            }

            if (!checkbox.checked) {
                alert("Debes marcar la casilla de términos y condiciones.");
                return;
            }

            resultadoDiv.innerHTML = `Bienvenido a la Marina <strong>${nombre} ${apellido1} ${apellido2}</strong> <br> 
                                      En breve una patrulla pasará por <strong>${direccion}</strong> a reclutarte.`;
            resultadoDiv.style.display = "block"; // Muestra el cuadro de texto
        }

        document.getElementById("miFormulario").addEventListener("submit", mostrarDatos);
