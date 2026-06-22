const Game = require('../models/gameModel');
const fs = require('fs');
const path = require('path');

// --- FUNCIÓN NATIVA PARA GUARDAR IMÁGENES BASE64 ---
function guardarImagenBase64(base64String) {
    try {
        // Separamos la cabecera (data:image/png;base64) del contenido real
        const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        
        if (!matches || matches.length !== 3) {
            return null; // No es un base64 válido
        }

        const extension = matches[1].split('/')[1]; // Extraemos si es png, jpeg, etc.
        const buffer = Buffer.from(matches[2], 'base64'); // Convertimos el texto a binario nativo
        
        // Generamos un nombre único para que no se sobreescriban
        const fileName = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + extension;
        
        // Ruta absoluta apuntando a tu carpeta public/img
        // Como este archivo está en la carpeta 'controllers', subimos un nivel con '..'
        const filePath = path.join(__dirname, '../public/img', fileName);

        // Guardamos el archivo físicamente en el disco duro
        fs.writeFileSync(filePath, buffer);
        
        // Retornamos la ruta relativa para la base de datos
        return `/img/${fileName}`;
    } catch (error) {
        console.error("Error al procesar la imagen nativa:", error);
        return null;
    }
}

exports.getAll = async (req, res) => {
    try {
        const juegos = await Game.getAll();
        res.json(juegos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        let rutaImagen = '/img/default.png'; // Imagen por defecto

        // Si el frontend nos envió el texto Base64 de la imagen, lo guardamos
        if (req.body.imagen_base64) {
            const guardada = guardarImagenBase64(req.body.imagen_base64);
            if (guardada) rutaImagen = guardada;
        }

        const gameData = {
            titulo: req.body.titulo,
            consola: req.body.consola,
            tipo: req.body.tipo,
            stock: Number(req.body.stock),
            precio_arriendo_usado: Number(req.body.precio_arriendo_usado),
            precio_venta_excelente: Number(req.body.precio_venta_excelente),
            genero: rutaImagen // Guardamos la ruta final
        };

        const id = await Game.create(gameData);
        res.json({ success: true, id });
    } catch (error) {
        console.error("❌ ERROR AL CREAR:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        let rutaImagen = req.body.imagen_actual; // Por defecto conservamos la que ya tenía

        // Si el frontend subió una imagen NUEVA en formato Base64, la sobreescribimos
        if (req.body.imagen_base64) {
            const guardada = guardarImagenBase64(req.body.imagen_base64);
            if (guardada) rutaImagen = guardada;
        }

        const gameData = {
            titulo: req.body.titulo,
            consola: req.body.consola,
            tipo: req.body.tipo,
            stock: Number(req.body.stock),
            precio_arriendo_usado: Number(req.body.precio_arriendo_usado),
            precio_venta_excelente: Number(req.body.precio_venta_excelente),
            genero: rutaImagen
        };

        await Game.update(req.params.id, gameData);
        res.json({ success: true });
    } catch (error) {
        console.error("❌ ERROR AL ACTUALIZAR:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await Game.delete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};