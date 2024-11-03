// Verificar si el usuario está logueado
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Elementos del DOM
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');

// Mostrar el botón de cerrar sesión y ocultar el de inicio de sesión si el usuario está logueado
if (isLoggedIn === 'true') {
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline-block';
}

// Función para cerrar sesión
function cerrarSesion() {
    // Aquí puedes limpiar el localStorage o cualquier lógica necesaria
    // Elimina el historial de gastos
    localStorage.removeItem("gastos");
    localStorage.removeItem('usuario'); // Por ejemplo, si guardas usuario en localStorage
    window.location.href = 'index.html'; // Redirige a la página principal
}