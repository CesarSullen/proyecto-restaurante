    // Lista de platos para el plato del día
    const dishes = [
        {
            name: "Ropa Vieja",
            price: "$14.99",
            description: "Carne desmenuzada en salsa de tomate con pimientos y cebolla"
        },
        {
            name: "Lechón Asado",
            price: "$16.99",
            description: "Pierna de cerdo asada lentamente con mojo criollo"
        },
        {
            name: "Arroz con Pollo",
            price: "$13.99",
            description: "Arroz amarillo con pollo, vegetales y especias"
        },
        {
            name: "Ajiaco Cubano",
            price: "$9.99",
            description: "Sopa espesa con carne, maíz, malanga, plátano y yuca"
        },
        {
            name: "Langosta Enchilada",
            price: "$24.99",
            description: "Langosta entera en salsa de tomate picante"
        },
        {
            name: "Tres Leches",
            price: "$6.50",
            description: "Bizcocho empapado en mezcla de tres leches"
        },
        {
            name: "Mojito",
            price: "$8.99",
            description: "Ron, menta, limón, azúcar y soda"
        }
    ];
    
    // Función para seleccionar un plato diferente cada día
    function getDailyDish() {
        const today = new Date().getDate(); // Día del mes (1-31)
        const dishIndex = today % dishes.length;
        return dishes[dishIndex];
    }
    
    // Mostrar el plato del día
    document.addEventListener('DOMContentLoaded', function() {
        const dailyDish = getDailyDish();
        const dailyDishElement = document.getElementById('daily-dish');
        
        dailyDishElement.innerHTML = `
            <div class="menu-item">
                <div>
                    <div class="menu-item-name">${dailyDish.name}</div>
                    <div class="menu-item-description">${dailyDish.description}</div>
                </div>
                <div class="menu-item-price">${dailyDish.price}</div>
            </div>
            <p>¡Disfruta de nuestro especial del día con un 10% de descuento!</p>
        `;
    });