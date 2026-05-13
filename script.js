function cambiarPestana(idPestana, boton) {
    // Ocultar contenidos
    const pestanas = document.querySelectorAll('.tab-content');
    pestanas.forEach(p => p.classList.remove('active'));

    // Mostrar el contenido clicado
    document.getElementById(idPestana).classList.add('active');

    // Cambiar estado de los botones del menú
    const botonesNav = document.querySelectorAll('.nav-btn');
    botonesNav.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
}

function mostrarProyecto(idProyecto, miniCard) {
    // Al haber solo uno ahora, esta función está lista para cuando añadas más
    const visores = document.querySelectorAll('.project-viewer');
    visores.forEach(v => v.classList.remove('active'));
    visores.forEach(v => v.style.display = 'none');

    const visorSeleccionado = document.getElementById('visor-' + idProyecto);
    visorSeleccionado.style.display = 'block';
    setTimeout(() => visorSeleccionado.classList.add('active'), 10);

    const miniCards = document.querySelectorAll('.mini-card');
    miniCards.forEach(c => c.classList.remove('active'));
    miniCard.classList.add('active');
}

// Al cargar la página, comprueba si venimos de un enlace con #proyectos
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#proyectos') {
        // Buscamos el botón de la barra lateral que abre proyectos
        const btnProyectos = document.querySelector('button[onclick*="proyectos"]');
        if (btnProyectos) {
            cambiarPestana('proyectos', btnProyectos);
        }
    }
});
