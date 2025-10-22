# 🚀 Programación Funcional en JavaScript

Proyecto de demostración de programación funcional utilizando métodos nativos de JavaScript como `filter()`, `find()`, `map()`, `reduce()` y más.

## 📋 Descripción

Esta aplicación web interactiva demuestra el uso de programación funcional en JavaScript mediante ejemplos prácticos de gestión de productos y usuarios. Incluye operaciones de filtrado, búsqueda, transformación y análisis de datos.

## ✨ Características

### Funciones Implementadas

- **filter()**: Filtrado de productos por categoría y precio
- **find()**: Búsqueda de productos y usuarios específicos
- **map()**: Transformación y mapeo de datos
- **reduce()**: Cálculos agregados y estadísticas
- **Composición de funciones**: Combinación de múltiples operaciones

### Secciones de la Aplicación

1. **📦 Gestión de Productos**
   - Mostrar todos los productos
   - Filtrar por categoría (electrónica, ropa)
   - Filtrar por precio
   - Calcular precio total

2. **🔍 Búsqueda de Productos**
   - Búsqueda por nombre usando `find()`
   - Búsqueda en tiempo real

3. **👥 Gestión de Usuarios**
   - Listar todos los usuarios
   - Filtrar usuarios activos
   - Extraer emails
   - Buscar por ID

4. **📊 Estadísticas y Análisis**
   - Calcular promedios con `reduce()`
   - Agrupar productos por categoría
   - Encontrar productos extremos (más caro/barato)

5. **🔄 Transformaciones de Datos**
   - Aplicar descuentos
   - Convertir nombres a mayúsculas
   - Filtrar productos premium

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con gradientes y animaciones
- **JavaScript (ES6+)**: Programación funcional pura
  - Arrow functions
  - Destructuring
  - Spread operator
  - Template literals

## 📁 Estructura del Proyecto

```
BACK END/
│
├── index.html          # Estructura HTML principal
├── script.js           # Lógica de programación funcional
├── styles.css          # Estilos CSS modernos
└── README.md           # Documentación del proyecto
```

## 🚀 Cómo Usar

### Opción 1: Abrir Localmente

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador web
3. Interactúa con los diferentes botones para ver las funciones en acción

### Opción 2: Servidor Local

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 💡 Ejemplos de Código

### Uso de filter()
```javascript
const productosFiltrados = productos.filter(producto => 
    producto.categoria === 'electrónica'
);
```

### Uso de find()
```javascript
const productoEncontrado = productos.find(producto => 
    producto.nombre.toLowerCase().includes(busqueda)
);
```

### Uso de map()
```javascript
const productosConDescuento = productos.map(producto => ({
    ...producto,
    precioConDescuento: producto.precio * 0.9
}));
```

### Uso de reduce()
```javascript
const total = productos.reduce((acumulador, producto) => 
    acumulador + producto.precio, 0
);
```

## 📚 Conceptos de Programación Funcional

- **Inmutabilidad**: No se modifican los datos originales
- **Funciones Puras**: Sin efectos secundarios
- **Composición**: Combinación de funciones simples
- **Declarativo**: Enfoque en "qué" hacer, no en "cómo"

## 🎨 Características de Diseño

- Diseño responsive (móvil, tablet, desktop)
- Gradientes modernos
- Animaciones suaves
- Interfaz intuitiva
- Tarjetas interactivas con hover effects

## 📊 Datos de Ejemplo

El proyecto incluye:
- 10 productos de diferentes categorías
- 6 usuarios con diferentes estados
- Precios variados para demostrar cálculos

## 🔧 Personalización

Puedes modificar los datos en `script.js`:

```javascript
const productos = [
    { id: 1, nombre: "Tu Producto", precio: 100, categoria: "categoría", stock: 10 }
    // Agrega más productos...
];
```

## 📝 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- No requiere instalación de dependencias

## 👨‍💻 Autor

Proyecto desarrollado para CESUN - Desarrollo de Apps Móviles 1

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🌟 Características Destacadas

- ✅ 100% JavaScript Vanilla (sin frameworks)
- ✅ Programación funcional pura
- ✅ Código limpio y comentado
- ✅ Ejemplos prácticos y reales
- ✅ Interfaz moderna y atractiva
- ✅ Totalmente responsive

## 📞 Soporte

Para preguntas o sugerencias sobre el proyecto, por favor crea un issue en el repositorio.

---

**¡Disfruta explorando la programación funcional en JavaScript!** 🎉
