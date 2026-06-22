Integrantes del grupo: Josue Calhueque, Juan Valenzuela, Christopher ibarra
Escribe tu nombre aquí: Hice el server.js, la conexión a la base de datos en config/db.js y todo el sistema de validación del login.
Escribe el nombre de tu compañero aquí: Armó el CRUD de los productos. Hizo los controladores y los modelos para listar, agregar, editar y eliminar.
Escribe el nombre de tu otro compañero aquí: Se encargó del frontend. Hizo el diseño con Bootstrap, las vistas HTML y el JavaScript para cargar la tabla dinámicamente con fetch.

Descripción del proyecto
RetroPlay es una plataforma web para una tienda de entretenimiento. El sistema resuelve el problema de mostrar un catálogo al público y a la vez tener un panel privado para que los dueños administren el stock y los precios de venta o arriendo.

Requisitos previos
Node.js instalado.
XAMPP o similar para usar MySQL.

Instalación paso a paso
Paso 1. Descargar la carpeta del proyecto.
Paso 2. Abrir la consola dentro de la carpeta y correr el comando npm install.
Paso 3. Levantar el servidor escribiendo node server.js.

Configuración de la base de datos
Nombre BD: retroplay
Usuario: root
Contraseña: (dejar vacío)
Hay que ir a phpMyAdmin e importar el archivo database.sql que viene suelto en la carpeta del proyecto.

Credenciales de prueba
Usuario: admin
Contraseña: admin123

Uso del sistema
La página principal carga en el navegador poniendo localhost:3000. Ahí se ve el catálogo.
Para entrar al panel, hay que hacer clic en Administración en la barra de arriba y poner las credenciales.
Dentro del panel admin se pueden agregar juegos nuevos, actualizar datos o borrarlos, y todo se refleja de inmediato en el catálogo público.

Estructura del proyecto
Carpeta config: Tiene el archivo para conectar la base de datos.
Carpeta controllers: Tiene la lógica para manejar los juegos y el login.
Carpeta models: Archivos con las consultas SQL a las tablas.
Carpeta views: Están las páginas HTML.
Carpeta public: Recursos que son públicos para la página web.
Archivo server.js: El archivo principal que levanta el puerto y contiene las rutas.# Retro-play-remaster
# Retro-play-remaster
