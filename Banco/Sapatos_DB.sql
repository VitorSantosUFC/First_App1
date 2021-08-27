DROP DATABASE IF EXISTS first_app;
CREATE DATABASE first_app;
USE first_app;

CREATE TABLE sapatos
(sapato_id INT AUTO_INCREMENT,
marca VARCHAR(40),
tamanho INT,
cor VARCHAR(20),
PRIMARY KEY(sapato_id)
);

#INSERT INTO sapatos(marca, tamanho, cor) VALUES("Nike", 43, "Branca");