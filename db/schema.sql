CREATE DATABASE burg_db;

USE burg_db;

CREATE TABLE burg
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
