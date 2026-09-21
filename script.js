function abrirProyecto(nombre) { 
    // Ocultamos la página principal 
    document.getElementById("inicio").style.display = "none"; 
    // Ocultamos el título principal 
    document.querySelector("header").style.display = "none"; 
    // Mostramos la página del proyecto 
    document.getElementById("detalle").classList.remove("oculto"); 
    // Cambiamos el título 
    document.getElementById("tituloProyecto").textContent = nombre; 
    //  DESCRIPCIÓN + LINKS
    let desc = "";
    let links = "";
    if (nombre === "COL-FI") {
        desc = "Proyecto de comunicación entre alumnos.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="https://www.youtube.com/@proyecto-colfi" class="boton videos" target="_blank">🎥 Video</a>
        `;
    }
    else if (nombre === "EL ARCHIPIÉLAGO") {
        desc = "Sistema educativo interactivo por islas.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    else if (nombre === "ESTILIZA TU VIDA") {
        desc = "Proyecto sobre hábitos y organización personal.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    else if (nombre === "LIBRITOS") {
        desc = "Intercambio de libros entre estudiantes.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    else if (nombre === "NUESTRA CANTINA") {
        desc = "Sistema de pedidos para la cantina escolar.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    else if (nombre === "OSO POLAR") {
        desc = "Proyecto sobre cambio climático y conciencia ambiental.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    else if (nombre === "PROYECTOS EN C") {
        desc = "Programas realizados en lenguaje C.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    else if (nombre === "SAN TELMO VERDE") {
        desc = "Proyecto de sustentabilidad y espacios verdes.";
        links = `
            <a href="#" class="boton github" target="_blank">💻 GitHub</a>
            <a href="#" class="boton documentacion">📄 Documentación</a>
            <a href="#" class="boton infografias">🖼️ Infografía</a>
            <a href="#" class="boton videos">🎥 Video</a>
        `;
    }
    //  meter contenido en pantalla
    document.getElementById("descripcionProyecto").textContent = desc;
    document.querySelector(".botones").innerHTML = links;
    // Subimos al principio de la página 
    window.scrollTo(0, 0); 
} 
function volver() { 
    // Mostramos nuevamente la página principal 
    document.getElementById("inicio").style.display = "block"; 
 
    // Mostramos el título 
    document.querySelector("header").style.display = "block"; 
 
    // Ocultamos la página del proyecto 
    document.getElementById("detalle").classList.add("oculto"); 
 
    // Volvemos arriba 
    window.scrollTo(0, 0); 
}
