const Game = require('../models/gameModel');

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
        const id = await Game.create(req.body);
        res.json({ success: true, id });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await Game.update(req.params.id, req.body);
        res.json({ success: true });
    } catch (error) {
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