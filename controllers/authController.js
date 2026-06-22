const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByUsername(username);
        if (user && user.password === password) {
            req.session.usuario = user.username;
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: 'Usuario o contraseña incorrectos.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error en el servidor.' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};