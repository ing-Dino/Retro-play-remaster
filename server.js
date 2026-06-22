const express = require('express');
const session = require('express-session');
const path = require('path');
const gameController = require('./controllers/gameController');
const authController = require('./controllers/authController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'retroplay_secret_key_2026',
    resave: false,
    saveUninitialized: false
}));

function checkAuth(req, res, next) {
    if (req.session.usuario) {
        return next();
    }
    res.redirect('/login');
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/admin', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

app.get('/api/juegos', gameController.getAll);
app.post('/api/juegos', checkAuth, gameController.create);
app.put('/api/juegos/:id', checkAuth, gameController.update);
app.delete('/api/juegos/:id', checkAuth, gameController.delete);

app.post('/api/login', authController.login);
app.get('/api/logout', authController.logout);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor RetroPlay corriendo en http://localhost:${PORT}`);
});