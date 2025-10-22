# 📝 Instrucciones para Subir a GitHub y Desplegar

## Paso 1: Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Configura tu repositorio:
   - **Repository name**: `programacion-funcional-js` (o el nombre que prefieras)
   - **Description**: "Proyecto de Programación Funcional en JavaScript - CESUN"
   - **Public**: Selecciona esta opción para que sea visible
   - **NO marques** "Initialize this repository with a README" (ya tenemos uno)
4. Haz clic en **"Create repository"**

## Paso 2: Conectar tu Repositorio Local con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Usa estos comandos en tu terminal:

```bash
# Navega a tu directorio del proyecto (si no estás ahí)
cd "c:/Users/aispu/Documents/CESUN/9no Cuatrimeste/Desarrollo de apps moviles 1/BACK END"

# Agrega el repositorio remoto (reemplaza TU_USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/programacion-funcional-js.git

# Renombra la rama principal a 'main' (si es necesario)
git branch -M main

# Sube tu código a GitHub
git push -u origin main
```

### Ejemplo con usuario real:
```bash
git remote add origin https://github.com/juanperez/programacion-funcional-js.git
git branch -M main
git push -u origin main
```

## Paso 3: Desplegar en GitHub Pages

### Opción A: Desde la Configuración del Repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, busca **"Pages"**
4. En **"Source"**, selecciona:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Haz clic en **"Save"**
6. Espera unos minutos y tu página estará disponible en:
   ```
   https://TU_USUARIO.github.io/programacion-funcional-js/
   ```

### Opción B: Usando GitHub Actions (Automático)

GitHub Pages se activará automáticamente si sigues la Opción A.

## Paso 4: Verificar que Funciona

1. Abre el link de GitHub Pages en tu navegador
2. Verifica que todos los botones funcionen correctamente
3. Prueba las diferentes funcionalidades

## 📋 Links que Debes Entregar

Una vez completados los pasos anteriores, tendrás dos links:

### 1. Link del Repositorio:
```
https://github.com/TU_USUARIO/programacion-funcional-js
```

### 2. Link de la Página Desplegada:
```
https://TU_USUARIO.github.io/programacion-funcional-js/
```

## 🔧 Comandos Útiles de Git

### Ver el estado de tus archivos:
```bash
git status
```

### Agregar cambios:
```bash
git add .
```

### Hacer commit:
```bash
git commit -m "Descripción de los cambios"
```

### Subir cambios a GitHub:
```bash
git push
```

### Ver el historial de commits:
```bash
git log --oneline
```

## ⚠️ Solución de Problemas Comunes

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/programacion-funcional-js.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### La página no se actualiza en GitHub Pages
- Espera 5-10 minutos después de hacer push
- Limpia el caché de tu navegador (Ctrl + Shift + R)
- Verifica que GitHub Pages esté activado en Settings

## 📱 Verificación Final

Antes de entregar, asegúrate de que:

- ✅ El repositorio es público
- ✅ Todos los archivos están en el repositorio
- ✅ GitHub Pages está activado
- ✅ La página se ve correctamente en el navegador
- ✅ Todas las funciones de JavaScript funcionan
- ✅ El diseño es responsive (se ve bien en móvil)

## 📄 Formato de Entrega

Crea un archivo de texto con el siguiente contenido:

```
PROYECTO: Programación Funcional en JavaScript
ALUMNO: [Tu Nombre]
MATERIA: Desarrollo de Apps Móviles 1
CESUN - 9no Cuatrimestre

LINKS DEL PROYECTO:

1. Repositorio de GitHub:
   https://github.com/TU_USUARIO/programacion-funcional-js

2. Página Desplegada (GitHub Pages):
   https://TU_USUARIO.github.io/programacion-funcional-js/

FUNCIONALIDADES IMPLEMENTADAS:
- filter() para filtrar productos por categoría y precio
- find() para buscar productos y usuarios específicos
- map() para transformar y mapear datos
- reduce() para cálculos agregados y estadísticas
- Composición de funciones funcionales

FECHA DE ENTREGA: [Fecha]
```

## 🎉 ¡Listo!

Tu proyecto está ahora en GitHub y desplegado en la web. Cualquier persona puede ver tu trabajo visitando el link de GitHub Pages.

---

**Nota**: Reemplaza `TU_USUARIO` con tu nombre de usuario real de GitHub en todos los comandos y links.
