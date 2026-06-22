const db = require('../config/db');

const Game = {
    getAll: async () => {
        const [rows] = await db.execute('SELECT * FROM videojuegos');
        return rows;
    },
    create: async (gameData) => {
        const { titulo, consola, tipo, genero, stock, precio_arriendo_usado, precio_venta_excelente } = gameData;
        const [result] = await db.execute(
            'INSERT INTO videojuegos (titulo, consola, tipo, genero, stock, precio_arriendo_usado, precio_venta_excelente) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [titulo, consola, tipo, genero, stock, precio_arriendo_usado, precio_venta_excelente]
        );
        return result.insertId;
    },
    update: async (id, gameData) => {
        const { titulo, consola, tipo, genero, stock, precio_arriendo_usado, precio_venta_excelente } = gameData;
        await db.execute(
            'UPDATE videojuegos SET titulo=?, consola=?, tipo=?, genero=?, stock=?, precio_arriendo_usado=?, precio_venta_excelente=? WHERE id=?',
            [titulo, consola, tipo, genero, stock, precio_arriendo_usado, precio_venta_excelente, id]
        );
    },
    delete: async (id) => {
        await db.execute('DELETE FROM videojuegos WHERE id = ?', [id]);
    }
};

module.exports = Game;