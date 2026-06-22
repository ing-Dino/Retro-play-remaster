CREATE DATABASE IF NOT EXISTS retroplay;
USE retroplay;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS videojuegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    consola VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    precio_arriendo_usado INT NOT NULL,
    precio_venta_excelente INT NOT NULL
);

INSERT INTO usuarios (username, password) VALUES 
('admin', 'admin123'),
('profe', 'evaluacion2026');

INSERT INTO videojuegos (titulo, consola, tipo, genero, stock, precio_arriendo_usado, precio_venta_excelente) VALUES 
('Super Mario Bros 3', 'NES', 'Juego', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600', 5, 2000, 25000),
('Consola PlayStation 1', 'PS1', 'Consola', 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=600', 2, 5000, 45000);