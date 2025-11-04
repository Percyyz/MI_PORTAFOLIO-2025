// Selecciona el icono de menú y el elemento de navegación
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Función para alternar el menú
function toggleMenu() {
    nav.classList.toggle('nav-visible');
    // Opcional: podrías cambiar el icono aquí si quisieras (ej. X)
}

// Escucha el clic en el icono de hamburguesa
menuIcon.addEventListener('click', toggleMenu);

// Cierra el menú automáticamente cuando se hace clic en un enlace (para navegar)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Solo cierra si el menú está visible (en móvil)
        if (nav.classList.contains('nav-visible')) {
            toggleMenu();
        }
    });
});