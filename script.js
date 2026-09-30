let proyectoActual = 0;

const proyectos = document.querySelectorAll(".proyecto");

const indicadores = document.getElementById("indicadores");

function crearIndicadores() {

    indicadores.innerHTML = "";

    for (let i = 0; i < proyectos.length; i++) {

        const indicador = document.createElement("div");

        indicador.classList.add("indicador");

        indicador.onclick = function () {

            proyectoActual = i;

            actualizarCarrusel();

        };

        indicadores.appendChild(indicador);
    }
}

function actualizarCarrusel() {

    proyectos.forEach(function (proyecto, indice) {

        proyecto.classList.remove(
            "centro",
            "izquierda",
            "derecha",
            "muy-izquierda",
            "muy-derecha"
        );


        let posicion = indice - proyectoActual;

        if (posicion > proyectos.length / 2) {

            posicion -= proyectos.length;
        }

        if (posicion < -proyectos.length / 2) {

            posicion += proyectos.length;
        }


        if (posicion === 0) {

            proyecto.classList.add("centro");

        }

        else if (posicion === -1) {

            proyecto.classList.add("izquierda");

        }

        else if (posicion === 1) {

            proyecto.classList.add("derecha");

        }

        else if (posicion < -1) {

            proyecto.classList.add("muy-izquierda");

        }

        else {

            proyecto.classList.add("muy-derecha");

        }

    });


    const puntos = document.querySelectorAll(".indicador");

    puntos.forEach(function (punto, indice) {

        punto.classList.remove("activo");

        if (indice === proyectoActual) {

            punto.classList.add("activo");
        }

    });
}

function siguienteProyecto() {

    proyectoActual++;

    if (proyectoActual >= proyectos.length) {

        proyectoActual = 0;
    }

    actualizarCarrusel();
}

function anteriorProyecto() {

    proyectoActual--;

    if (proyectoActual < 0) {

        proyectoActual = proyectos.length - 1;
    }

    actualizarCarrusel();
}

function seleccionarProyecto(indice) {


    if (indice !== proyectoActual) {

        proyectoActual = indice;

        actualizarCarrusel();

        return;
    }

    const proyecto = proyectos[indice];

    const nombre = proyecto
        .querySelector("h2")
        .textContent;

    abrirProyecto(nombre);
}

function abrirProyecto(nombre) {

    document.getElementById("inicio").style.display = "none";

    document.querySelector("header").style.display = "none";

    document.getElementById("detalle")
        .classList.remove("oculto");


    document.getElementById("tituloProyecto")
        .textContent = nombre;


    let desc = "";

    let links = "";


    if (nombre === "COL-FI") {

        desc = "Proyecto de comunicación entre alumnos.";

        links = `
            <a href="#" class="github" target="_blank">
                💻 GitHub
            </a>

            <a href="#" class="documentacion">
                📄 Documentación
            </a>

            <a href="#" class="infografias">
                🖼️ Infografía
            </a>

            <a href="https://www.youtube.com/@proyecto-colfi"
               class="videos"
               target="_blank">
                🎥 Video
            </a>
        `;
    }


    else if (nombre === "EL ARCHIPIÉLAGO") {

        desc = "Sistema educativo interactivo por islas.";

        links = botonesGenerales();
    }


    else if (nombre === "ESTILIZA TU VIDA") {

        desc = "Proyecto sobre hábitos y organización personal.";

        links = botonesGenerales();
    }


    else if (nombre === "LIBRITOS") {

        desc = "Intercambio de libros entre estudiantes.";

        links = botonesGenerales();
    }


    else if (nombre === "NUESTRA CANTINA") {

        desc = "Sistema de pedidos para la cantina escolar.";

        links = botonesGenerales();
    }


    else if (nombre === "OSO POLAR") {

        desc = "Proyecto sobre cambio climático y conciencia ambiental.";

        links = botonesGenerales();
    }


    else if (nombre === "PROYECTOS EN C") {

        desc = "Programas realizados en lenguaje C.";

        links = botonesGenerales();
    }


    else if (nombre === "SAN TELMO VERDE") {

        desc = "Proyecto de sustentabilidad y espacios verdes.";

        links = botonesGenerales();
    }


    document.getElementById("descripcionProyecto")
        .textContent = desc;


    document.getElementById("botones-proyecto")
        .innerHTML = links;


    window.scrollTo(0, 0);
}


function botonesGenerales() {

    return `

        <a href="#" class="github" target="_blank">
            💻 GitHub
        </a>

        <a href="#" class="documentacion">
            📄 Documentación
        </a>

        <a href="#" class="infografias">
            🖼️ Infografía
        </a>

        <a href="#" class="videos">
            🎥 Video
        </a>

    `;
}

function volver() {

    document.getElementById("inicio")
        .style.display = "block";


    document.querySelector("header")
        .style.display = "block";


    document.getElementById("detalle")
        .classList.add("oculto");


    window.scrollTo(0, 0);
}

crearIndicadores();

actualizarCarrusel();

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {

        siguienteProyecto();
    }

    if (event.key === "ArrowLeft") {

        anteriorProyecto();
    }

});
