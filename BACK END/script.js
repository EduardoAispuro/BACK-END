// ============================================
// DATOS DE EJEMPLO
// ============================================

const productos = [
    { id: 1, nombre: "Laptop Dell", precio: 1200, categoria: "electrónica", stock: 15 },
    { id: 2, nombre: "Mouse Logitech", precio: 25, categoria: "electrónica", stock: 50 },
    { id: 3, nombre: "Teclado Mecánico", precio: 80, categoria: "electrónica", stock: 30 },
    { id: 4, nombre: "Monitor Samsung", precio: 300, categoria: "electrónica", stock: 20 },
    { id: 5, nombre: "Camiseta Nike", precio: 35, categoria: "ropa", stock: 100 },
    { id: 6, nombre: "Pantalón Levi's", precio: 60, categoria: "ropa", stock: 75 },
    { id: 7, nombre: "Zapatos Adidas", precio: 90, categoria: "ropa", stock: 40 },
    { id: 8, nombre: "Audífonos Sony", precio: 150, categoria: "electrónica", stock: 25 },
    { id: 9, nombre: "Tablet iPad", precio: 800, categoria: "electrónica", stock: 10 },
    { id: 10, nombre: "Chaqueta Columbia", precio: 120, categoria: "ropa", stock: 30 }
];

const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com", edad: 28, activo: true },
    { id: 2, nombre: "María García", email: "maria@example.com", edad: 34, activo: true },
    { id: 3, nombre: "Carlos López", email: "carlos@example.com", edad: 22, activo: false },
    { id: 4, nombre: "Ana Martínez", email: "ana@example.com", edad: 45, activo: true },
    { id: 5, nombre: "Luis Rodríguez", email: "luis@example.com", edad: 31, activo: false },
    { id: 6, nombre: "Sofia Torres", email: "sofia@example.com", edad: 27, activo: true }
];

// ============================================
// FUNCIONES DE PRODUCTOS
// ============================================

/**
 * Muestra todos los productos usando map()
 */
function mostrarTodosProductos() {
    const resultado = document.getElementById('productos-resultado');
    
    // Usar map para transformar los datos
    const productosHTML = productos.map(producto => 
        `<div class="producto-item">
            <strong>${producto.nombre}</strong> - 
            $${producto.precio} - 
            Categoría: ${producto.categoria} - 
            Stock: ${producto.stock}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Todos los Productos (${productos.length})</h3>
        ${productosHTML}
    `;
}

/**
 * Filtra productos por categoría usando filter()
 */
function filtrarPorCategoria(categoria) {
    const resultado = document.getElementById('productos-resultado');
    
    // Usar filter para obtener productos de una categoría específica
    const productosFiltrados = productos.filter(producto => 
        producto.categoria === categoria
    );
    
    const productosHTML = productosFiltrados.map(producto => 
        `<div class="producto-item">
            <strong>${producto.nombre}</strong> - 
            $${producto.precio} - 
            Stock: ${producto.stock}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Productos de ${categoria} (${productosFiltrados.length})</h3>
        ${productosHTML}
    `;
}

/**
 * Filtra productos por precio usando filter()
 */
function filtrarPorPrecio(precioMaximo) {
    const resultado = document.getElementById('productos-resultado');
    
    // Usar filter para obtener productos con precio menor al especificado
    const productosFiltrados = productos.filter(producto => 
        producto.precio < precioMaximo
    );
    
    const productosHTML = productosFiltrados.map(producto => 
        `<div class="producto-item">
            <strong>${producto.nombre}</strong> - 
            $${producto.precio} - 
            Categoría: ${producto.categoria}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Productos menores a $${precioMaximo} (${productosFiltrados.length})</h3>
        ${productosHTML}
    `;
}

/**
 * Calcula el precio total de todos los productos usando reduce()
 */
function calcularTotal() {
    const resultado = document.getElementById('productos-resultado');
    
    // Usar reduce para sumar todos los precios
    const total = productos.reduce((acumulador, producto) => 
        acumulador + producto.precio, 0
    );
    
    // Calcular el promedio
    const promedio = total / productos.length;
    
    resultado.innerHTML = `
        <h3>Cálculos con reduce()</h3>
        <div class="stat-card">
            <p><strong>Precio Total:</strong> $${total.toFixed(2)}</p>
            <p><strong>Precio Promedio:</strong> $${promedio.toFixed(2)}</p>
            <p><strong>Total de Productos:</strong> ${productos.length}</p>
        </div>
    `;
}

// ============================================
// FUNCIONES DE BÚSQUEDA
// ============================================

/**
 * Busca un producto por nombre usando find()
 */
function buscarProducto() {
    const busqueda = document.getElementById('buscar-input').value.toLowerCase();
    const resultado = document.getElementById('busqueda-resultado');
    
    if (!busqueda) {
        resultado.innerHTML = '<p class="error">Por favor ingresa un nombre para buscar</p>';
        return;
    }
    
    // Usar find para encontrar el primer producto que coincida
    const productoEncontrado = productos.find(producto => 
        producto.nombre.toLowerCase().includes(busqueda)
    );
    
    if (productoEncontrado) {
        resultado.innerHTML = `
            <h3>Producto Encontrado</h3>
            <div class="producto-item destacado">
                <strong>${productoEncontrado.nombre}</strong><br>
                Precio: $${productoEncontrado.precio}<br>
                Categoría: ${productoEncontrado.categoria}<br>
                Stock: ${productoEncontrado.stock} unidades
            </div>
        `;
    } else {
        resultado.innerHTML = `<p class="error">No se encontró ningún producto con "${busqueda}"</p>`;
    }
}

// ============================================
// FUNCIONES DE USUARIOS
// ============================================

/**
 * Muestra todos los usuarios usando map()
 */
function mostrarUsuarios() {
    const resultado = document.getElementById('usuarios-resultado');
    
    const usuariosHTML = usuarios.map(usuario => 
        `<div class="usuario-item ${usuario.activo ? 'activo' : 'inactivo'}">
            <strong>${usuario.nombre}</strong> - 
            ${usuario.email} - 
            ${usuario.edad} años - 
            ${usuario.activo ? '✅ Activo' : '❌ Inactivo'}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Todos los Usuarios (${usuarios.length})</h3>
        ${usuariosHTML}
    `;
}

/**
 * Filtra usuarios activos usando filter()
 */
function filtrarUsuariosActivos() {
    const resultado = document.getElementById('usuarios-resultado');
    
    // Usar filter para obtener solo usuarios activos
    const usuariosActivos = usuarios.filter(usuario => usuario.activo);
    
    const usuariosHTML = usuariosActivos.map(usuario => 
        `<div class="usuario-item activo">
            <strong>${usuario.nombre}</strong> - 
            ${usuario.email} - 
            ${usuario.edad} años
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Usuarios Activos (${usuariosActivos.length})</h3>
        ${usuariosHTML}
    `;
}

/**
 * Obtiene todos los emails usando map()
 */
function obtenerEmails() {
    const resultado = document.getElementById('usuarios-resultado');
    
    // Usar map para extraer solo los emails
    const emails = usuarios.map(usuario => usuario.email);
    
    const emailsHTML = emails.map(email => 
        `<div class="email-item">📧 ${email}</div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Lista de Emails</h3>
        ${emailsHTML}
    `;
}

/**
 * Busca un usuario por ID usando find()
 */
function buscarUsuarioPorId() {
    const resultado = document.getElementById('usuarios-resultado');
    const idBuscado = Math.floor(Math.random() * 6) + 1; // ID aleatorio entre 1 y 6
    
    // Usar find para buscar por ID
    const usuarioEncontrado = usuarios.find(usuario => usuario.id === idBuscado);
    
    if (usuarioEncontrado) {
        resultado.innerHTML = `
            <h3>Usuario con ID ${idBuscado}</h3>
            <div class="usuario-item destacado">
                <strong>${usuarioEncontrado.nombre}</strong><br>
                Email: ${usuarioEncontrado.email}<br>
                Edad: ${usuarioEncontrado.edad} años<br>
                Estado: ${usuarioEncontrado.activo ? '✅ Activo' : '❌ Inactivo'}
            </div>
        `;
    }
}

// ============================================
// FUNCIONES DE ESTADÍSTICAS
// ============================================

/**
 * Calcula estadísticas usando reduce() y otros métodos
 */
function calcularEstadisticas() {
    const resultado = document.getElementById('estadisticas-resultado');
    
    // Calcular estadísticas con reduce
    const stats = productos.reduce((acc, producto) => {
        acc.totalPrecio += producto.precio;
        acc.totalStock += producto.stock;
        acc.count++;
        return acc;
    }, { totalPrecio: 0, totalStock: 0, count: 0 });
    
    const promedioPrecio = stats.totalPrecio / stats.count;
    const promedioStock = stats.totalStock / stats.count;
    
    // Contar productos por categoría
    const porCategoria = productos.reduce((acc, producto) => {
        acc[producto.categoria] = (acc[producto.categoria] || 0) + 1;
        return acc;
    }, {});
    
    resultado.innerHTML = `
        <h3>Estadísticas Generales</h3>
        <div class="stats-grid">
            <div class="stat-card">
                <h4>💰 Precio Promedio</h4>
                <p class="stat-value">$${promedioPrecio.toFixed(2)}</p>
            </div>
            <div class="stat-card">
                <h4>📦 Stock Promedio</h4>
                <p class="stat-value">${promedioStock.toFixed(0)} unidades</p>
            </div>
            <div class="stat-card">
                <h4>🏷️ Total Productos</h4>
                <p class="stat-value">${stats.count}</p>
            </div>
            <div class="stat-card">
                <h4>📊 Por Categoría</h4>
                <p class="stat-value">
                    ${Object.entries(porCategoria).map(([cat, count]) => 
                        `${cat}: ${count}`
                    ).join('<br>')}
                </p>
            </div>
        </div>
    `;
}

/**
 * Agrupa productos por categoría usando reduce()
 */
function agruparPorCategoria() {
    const resultado = document.getElementById('estadisticas-resultado');
    
    // Usar reduce para agrupar por categoría
    const agrupados = productos.reduce((acc, producto) => {
        if (!acc[producto.categoria]) {
            acc[producto.categoria] = [];
        }
        acc[producto.categoria].push(producto);
        return acc;
    }, {});
    
    const categoriasHTML = Object.entries(agrupados).map(([categoria, items]) => 
        `<div class="categoria-grupo">
            <h4>${categoria.toUpperCase()} (${items.length} productos)</h4>
            ${items.map(item => 
                `<div class="producto-item">${item.nombre} - $${item.precio}</div>`
            ).join('')}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Productos Agrupados por Categoría</h3>
        ${categoriasHTML}
    `;
}

/**
 * Encuentra el producto más caro usando reduce()
 */
function productoMasCaro() {
    const resultado = document.getElementById('estadisticas-resultado');
    
    // Usar reduce para encontrar el producto más caro
    const masCaro = productos.reduce((max, producto) => 
        producto.precio > max.precio ? producto : max
    );
    
    // Encontrar el más barato también
    const masBarato = productos.reduce((min, producto) => 
        producto.precio < min.precio ? producto : min
    );
    
    resultado.innerHTML = `
        <h3>Productos Extremos</h3>
        <div class="stats-grid">
            <div class="stat-card destacado">
                <h4>💎 Más Caro</h4>
                <p><strong>${masCaro.nombre}</strong></p>
                <p class="stat-value">$${masCaro.precio}</p>
            </div>
            <div class="stat-card">
                <h4>💵 Más Barato</h4>
                <p><strong>${masBarato.nombre}</strong></p>
                <p class="stat-value">$${masBarato.precio}</p>
            </div>
        </div>
    `;
}

// ============================================
// FUNCIONES DE TRANSFORMACIÓN
// ============================================

/**
 * Aplica descuento a todos los productos usando map()
 */
function aplicarDescuento(porcentaje) {
    const resultado = document.getElementById('transformaciones-resultado');
    
    // Usar map para crear nuevos productos con descuento
    const productosConDescuento = productos.map(producto => ({
        ...producto,
        precioOriginal: producto.precio,
        precioConDescuento: producto.precio * (1 - porcentaje / 100),
        descuento: porcentaje
    }));
    
    const productosHTML = productosConDescuento.map(producto => 
        `<div class="producto-item">
            <strong>${producto.nombre}</strong><br>
            Precio Original: <span style="text-decoration: line-through;">$${producto.precioOriginal}</span><br>
            Precio con ${producto.descuento}% descuento: 
            <span class="precio-descuento">$${producto.precioConDescuento.toFixed(2)}</span>
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Productos con ${porcentaje}% de Descuento</h3>
        ${productosHTML}
    `;
}

/**
 * Convierte nombres a mayúsculas usando map()
 */
function convertirMayusculas() {
    const resultado = document.getElementById('transformaciones-resultado');
    
    // Usar map para transformar los nombres
    const productosTransformados = productos.map(producto => ({
        ...producto,
        nombreOriginal: producto.nombre,
        nombreMayusculas: producto.nombre.toUpperCase()
    }));
    
    const productosHTML = productosTransformados.map(producto => 
        `<div class="producto-item">
            <strong>${producto.nombreMayusculas}</strong><br>
            Precio: $${producto.precio} - Categoría: ${producto.categoria}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Nombres en Mayúsculas</h3>
        ${productosHTML}
    `;
}

/**
 * Filtra y transforma productos premium usando filter() y map()
 */
function productosPremium() {
    const resultado = document.getElementById('transformaciones-resultado');
    
    // Combinar filter y map para obtener productos premium (precio > 100)
    const premium = productos
        .filter(producto => producto.precio > 100)
        .map(producto => ({
            ...producto,
            etiqueta: '⭐ PREMIUM',
            precioFormateado: `$${producto.precio.toFixed(2)}`
        }));
    
    const productosHTML = premium.map(producto => 
        `<div class="producto-item premium">
            ${producto.etiqueta} <strong>${producto.nombre}</strong><br>
            Precio: ${producto.precioFormateado} - Stock: ${producto.stock}
        </div>`
    ).join('');
    
    resultado.innerHTML = `
        <h3>Productos Premium (Precio > $100)</h3>
        <p>Total: ${premium.length} productos</p>
        ${productosHTML}
    `;
}

// ============================================
// FUNCIONES AVANZADAS (COMPOSICIÓN)
// ============================================

/**
 * Ejemplo de composición de funciones
 */
function buscarYTransformar() {
    // Combinar múltiples operaciones funcionales
    const resultado = productos
        .filter(p => p.categoria === 'electrónica')
        .filter(p => p.precio > 100)
        .map(p => ({
            nombre: p.nombre.toUpperCase(),
            precio: p.precio,
            descuento: p.precio * 0.9
        }))
        .sort((a, b) => b.precio - a.precio);
    
    return resultado;
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Mostrar productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarTodosProductos();
    console.log('✅ Aplicación de Programación Funcional cargada correctamente');
    console.log('📦 Productos disponibles:', productos.length);
    console.log('👥 Usuarios registrados:', usuarios.length);
});
