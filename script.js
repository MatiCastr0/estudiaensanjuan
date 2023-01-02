// Cargamos el archivo JSON con la información de las carreras universitarias
fetch("carreras.json")
  .then((response) => response.json())
  .then((carreras) => {
    // Añadimos un manejador de eventos al formulario para capturar el evento "submit"
    document
      .getElementById("formulario")
      .addEventListener("submit", (event) => {
        // Prevenimos el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();
        // Obtenemos el valor del campo de búsqueda
        const busqueda = document.getElementById("busqueda").value;
        // Filtrar el array de carreras utilizando la búsqueda del usuario como criterio
        const resultados = carreras.filter((carrera) =>
          carrera.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
        // Mostramos los resultados de la búsqueda en la página
        mostrarResultados(resultados);
      });
  });

// Función para mostrar los resultados de la búsqueda en la página
function mostrarResultados(resultados) {
  // Borramos los resultados anteriores
  document.getElementById("resultados").innerHTML = "";
  // Recorremos el array de resultados y mostramos cada uno de ellos en la página
  resultados.forEach((carrera) => {
    const elemento = document.createElement("div");
    elemento.innerHTML = `
    <div class="card mb-3">
    <img src="${carrera.imagen}" class="card-img-top img-fluid" alt="${carrera.nombre}">
    <div class="card-body">
        <h5 class="card-title">${carrera.nombre}</h5>
        <p class="card-text">${carrera.descripcion}</p>
        <p class="card-text"><small class="text-muted"><img src="${carrera.logo}" alt="${carrera.universidad}" style="height: 1em;"> ${carrera.universidad}</small></p>
        <a href="${carrera.enlace}" class="btn btn-primary" target="_blank">Ver más</a>
      </div>
    </div>
   `;
    document.getElementById("resultados").appendChild(elemento);
  });
}

fetch("carreras.json")
  .then((response) => response.json())
  .then((carreras) => {
    // Recorremos el array de carreras y mostramos cada una de ellas en la página
    carreras.forEach((carrera) => {
      const elemento = document.createElement("div");
      elemento.innerHTML = `
            <div class="card mb-3">
            <img src="${carrera.imagen}" class="card-img-top img-fluid" alt="${carrera.nombre}">
            <div class="card-body">
                <h5 class="card-title">${carrera.nombre}</h5>
                <p class="card-text">${carrera.descripcion}</p>
                <p class="card-text"><small class="text-muted"><img src="${carrera.logo}" alt="${carrera.universidad}" style="height: 1em;"> ${carrera.universidad}</small></p>                <a href="${carrera.enlace}" class="btn btn-primary" target="_blank">Ver más</a>
              </div>
            </div>

        `;
      document.getElementById("carreras").appendChild(elemento);
    });
  });
