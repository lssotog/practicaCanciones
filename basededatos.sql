CREATE TABLE canciones(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    duracion INT NOT NULL,
    album INT NOT NULL,
    banda INT NOT NULL,
    fecha_publicacion DATE NOT NULL
);
INSERT INTO canciones ( nombre, duracion, album,banda,fecha_publicacion)
VALUES ("Baracunatana", 231,1,1,"1996-05-15"),
("Florecita rockera", 301, 2,1,"1995-06-15"),
("365", 415, 3,2,"2014-01-01"),
("Guadalupe", 430, 3,2,"2014-01-01");

SELECT * FROM canciones;