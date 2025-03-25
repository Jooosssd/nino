window.addEventListener('DOMContentLoaded', () => {
    fetch('../html/extras/topbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('container top-bar').innerHTML = html;

            // Asigna los eventos después de cargar el HTML
            document.getElementById('minimize').addEventListener('click', () => {
                window.electronAPI.minimize();
            });

            document.getElementById('maximize').addEventListener('click', () => {
                window.electronAPI.maximize();
            });

            document.getElementById('close').addEventListener('click', () => {
                window.electronAPI.close();
            });
        })
        .catch(error => console.error('Error cargando el topbar:', error));
});
