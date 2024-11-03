 function toggleDropdown() {
            document.getElementById("dropdownMenu").classList.toggle("show");
        }

        function agregarAlCarrito(producto, precio, cantidadId) {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
        
            if (isLoggedIn !== 'true') {
                alert("Debes iniciar sesión para agregar productos al carrito.");
                return;
            }
        
            const cantidad = document.getElementById(cantidadId).value;
            // Aquí agregarías la lógica para agregar el producto y la cantidad al carrito
            console.log(`Producto: ${producto}, Precio: ${precio}, Cantidad: ${cantidad}`);
            // Resto de la lógica del carrito
        }

        function cerrarSesion() {
            localStorage.removeItem("gastos");
            window.location.href = 'index.html';
        }

        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-btn')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };