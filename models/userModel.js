const db = require('../config/db');

const User = {
    findByUsername: async (username) => {
        const [rows] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
        return rows[0];
    }
};

module.exports = User;