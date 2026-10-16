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
            <a href="https://github.com/gr1ll0o/project-colfi" class="github" target="_blank">💻 GitHub</a>
            <a href="https://docs.google.com/document/d/1PVfnwmBnhD6HTRc6OsHt6ldV3749Nwtq/edit" class="documentacion">📄 Documentación</a>
            <a href="https://col-fi.netlify.app/" class="pagina-web">🌐Pagina Web</a>
            <a href="https://www.youtube.com/@proyecto-colfi"class="videos"target="_blank">🎥 Video</a>
        `;
    }
    else if (nombre === "EL ARCHIPIÉLAGO") {
        desc = "Sistema educativo interactivo por islas.";
        links = `
        <a href="https://github.com/Thiago-Campobello/Archipielago-Page" class="github" target="_blank">💻 GitHub</a>
        <a href="https://docs.google.com/document/d/18Fg4He4ZZ8E8c6ndEebvp549EcrE2yuDHbqqPFAUO8A/edit?tab=t.0" class="documentacion">📄 Documentación</a>
        <a href="https://www.canva.com/design/DAHYIM3VGlo/S9uICLuVTbobadBPxOsVjw/edit?ui=eyJFIjp7IkE_IjoiTiIsIlMiOiJBQUZqLXJUTzlwNCIsIlQiOjN9fQ" class="infografias">🖼️ Infografía</a>
        <a href="https://thiago-campobello.github.io/Archipielago-Page/ElArchipielago.html" class="pagina-web">🌐 Pagina Web</a>
`;
    }
    else if (nombre === "ESCAPA DE LA 35") {
        desc = "Sistema educativo interactivo por islas.";
        links = `
        <a href="https://github.com/AlvarezPaul/Juego35" class="github" target="_blank">💻 GitHub</a>
        <a href="https://docs.google.com/document/d/1GFsjViJiPnZ1obTiey-AY4Ti4-jejEsQxB0f-Myzk28/edit?tab=t.5s3qu5oj72wp#heading=h.fq5pdyy8vqjy" class="documentacion">📄 Documentación</a>
        <a href="https://drive.google.com/file/d/1Qh774u_Km4Vobdn-40ejYh17-6evzXPF/view" class="infografias">🖼️ Infografía</a>
        <a href="https://alvarezpaul.github.io/Juego35/" class="pagina-web">🌐 Pagina Web</a>
`;
    }
    else if (nombre === "LIBRITOS") {
        desc = "App para ayudar a compañeros a aprobar las materias.";
        links = `
        <a href="#" class="github" target="_blank">💻 GitHub</a>
        <a href="#" class="documentacion">📄 Documentación</a>
        <a href="#" class="infografias">🖼️ Infografía</a>
        <a href="https://libritop.github.io/Librito/" class="pagina-web">🌐 Pagina Web</a>
`;
    }
    else if (nombre === "NUESTRA CANTINA") {
        desc = "Sistema de pedidos para la cantina escolar.";
        links = `
        <a href="https://github.com/Ruskov33/Proyecto-Cantina" class="github" target="_blank">💻 GitHub</a>
        <a href="https://docs.google.com/document/d/1HbkqlRHTCQFXY9NXJZmbTSTmGtfUdJSPKrRs6MzrYfc/edit?pli=1&tab=t.0" class="documentacion">📄 Documentación</a>
        <a href="https://drive.google.com/file/d/11e7S_RpJI-ZU6N3Wg-a44U3Ai47RQbaF/view?pli=1" class="infografias">🖼️ Infografía</a>
        <a href="https://nuestra-cantina.netlify.app/Im%C3%A1genes/Cantina.mp4" class="videos">🎥 Video</a>
`;
    }
    else if (nombre === "OSO POLAR") {
        desc = "Juego sobre el reciclaje y para cuidar a polo.";
        links = `
        <a href="https://github.com/Lolo399-beep/EcoPulse2" class="github" target="_blank">💻 GitHub</a>
        <a href="https://ecopulse2-production.up.railway.app/#mapa" class="mapa-tapitas">🗺️ Mapa de tapitas</a>
        <a href="https://docs.google.com/document/d/1zRS4Fa2MeJ9rye4WjNLyftYZRMgj2puOYZcq_x3zb_A/edit?tab=t.0" class="documentacion">📄 Documentación</a>
        <a href="https://ecopulse2-production.up.railway.app/#juego" class="juego">🎮 Juego</a>
`;
    }
    else if (nombre === "SAN TELMO VERDE") {
        desc = "Proyecto de sustentabilidad y espacios verdes.";
        links = `
        <a href="#" class="github" target="_blank">💻 GitHub</a>
        <a href="#" class="documentacion">📄 Documentación</a>
        <a href="#" class="infografias">🖼️ Infografía</a>
        <a href="San-Telmo-Verde.up.railway.app" class="pagina-web">🌐 Pagina Web</a>
`;
    }
      else if (nombre === "SURCO APRENDE") {
        desc = "Proyecto sobre la música y crear ritmos";
        links = `
        <a href="#" class="github" target="_blank">💻 GitHub</a>
        <a href="#" class="documentacion">📄 Documentación</a>
        <a href="#" class="infografias">🖼️ Infografía</a>
        <a href="https://surcoaprende-production.up.railway.app/#inicio" class="pagina-web">🌐 Pagina Web</a>
`;
    }
    document.getElementById("descripcionProyecto")
        .textContent = desc;
    document.getElementById("botones-proyecto")
        .innerHTML = links;
    window.scrollTo(0, 0);
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
