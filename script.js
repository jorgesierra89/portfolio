// Función para cambiar las pestañas principales (Sobre mí, Proyectos, etc.)
function cambiarPestana(idPestana, boton) {
    // 1. Ocultar todas las pestañas
    const pestanas = document.querySelectorAll('.tab-content');
    pestanas.forEach(p => p.classList.remove('active'));

    // 2. Mostrar la seleccionada
    document.getElementById(idPestana).classList.add('active');

    // 3. Quitar clase 'active' de todos los botones del menú lateral
    const botonesNav = document.querySelectorAll('.nav-btn');
    botonesNav.forEach(b => b.classList.remove('active'));

    // 4. Poner 'active' al botón pulsado
    boton.classList.add('active');
}

// Función para cambiar de proyecto dentro de la pestaña Proyectos
function mostrarProyecto(idProyecto, miniCard) {
    // 1. Ocultar todos los visores de proyecto
    const visores = document.querySelectorAll('.project-viewer');
    visores.forEach(v => v.style.display = 'none');

    // 2. Mostrar el proyecto seleccionado
    document.getElementById('visor-' + idProyecto).style.display = 'block';

    // 3. Quitar clase 'active' de todas las miniaturas
    const miniCards = document.querySelectorAll('.mini-card');
    miniCards.forEach(c => c.classList.remove('active'));

    // 4. Activar la miniatura pulsada
    miniCard.classList.add('active');
}
