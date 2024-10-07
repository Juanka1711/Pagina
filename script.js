// Función para alternar entre modo claro y oscuro
const toggleModeBtn = document.getElementById('toggleMode');
toggleModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains('dark-mode')) {
        toggleModeBtn.textContent = 'Modo claro';
    } else {
        toggleModeBtn.textContent = 'Modo oscuro';
    }
});
