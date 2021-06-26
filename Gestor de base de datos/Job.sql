create database peliculas;

use peliculas;

create table pelicula (

	id int(11) primary key auto_increment not null,
	Pelicula varchar(40) not null,
	Director varchar(25) not null,
	Anio varchar(4) not null,
	Protagonistas varchar(60) not null,
	Genero varchar (30) not null);

explain pelicula;

create table anio(
id int(11) primary key auto_increment not null,
Anio int(4));

explain anio;
