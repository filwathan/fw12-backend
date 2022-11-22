CREATE DATABASE pengen_nonton;

create table users(
	id_users INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	fullname VARCHAR(255),
	lastname VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	phone VARCHAR(255),
	id_group_user INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table group_users(
	id_group_user INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name_group_user VARCHAR(255),

  is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table movies(
	id_movie INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	title_movie VARCHAR(255),
	release_date TIMESTAMP,
	direcred_by VARCHAR(255),
	duration TIME,
	synopsis TEXT,
  price INT,
  date_start TIMESTAMP,
  date_end TIMESTAMP,
  image VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table movies_genres(
	id_movies_genre INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	id_movie INT,
	id_genre INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table genres(
	id_genre INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	genre_name VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table movies_casts(
	id_movies_cast INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	id_movie INT,
	id_cast INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table casts(
	id_cast INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	cast_name VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table movies_premieres(
	id_movie_premiere INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_movie INT,
  id_premiere INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);


create table premieres(
	id_premiere INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	premiere_name VARCHAR(255),
  image_premiere VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table locations(
	id_location INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	location_name VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);


create table premieres_locations(
	id_premiere_location INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_premiere INT,
  id_location INT,
  location_adress VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table showtimes(
	id_showtime INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	showtime_name TIME,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table movies_showtimes(
	id_movies_showtime INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	id_movie INT,
	id_showtime INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

CREATE TABLE seats(
  id_seat INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  number_seat VARCHAR(255),
  id_seat_status INT,

  is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

CREATE TABLE seats_status(
  id_seat_status INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  status_seat VARCHAR(255),

  is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table orders(
  id_order INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  date_and_time TIMESTAMP,
	id_user INT,
	id_movie INT,
	id_movies_showtime INT,
  id_seat INT,
  id_order_status INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table orders_status(
  id_order_status INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_status_name VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table orders_history(
  id_order_history INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  date_and_time TIMESTAMP,
	id_user INT,
	id_movie INT,
	id_movies_showtime INT,
  id_seat INT,
  id_order_status_history INT,

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);

create table orders_status_history(
  id_order_status_history INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_status_history_name VARCHAR(255),

	is_delete INT DEFAULT (0),
	delete_by VARCHAR(255),
	delete_date TIMESTAMP,
	insert_by VARCHAR(255),
	insert_date TIMESTAMP DEFAULT NOW(),
	update_by VARCHAR(255),
	update_date TIMESTAMP
);


--insert INTO

INSERT INTO group_users(
	id_group_user,
	name_group_user,

  is_delete,
  delete_by,
	delete_date,
	insert_by,
	insert_date,
	update_by,
	update_date
) VALUES(
    default, 'administrator', 0, default, null, null, default, null, null
);

INSERT INTO users(
	id_users,
	fullname,
	lastname,
	email,
	password,
	phone,
	id_group_user,

	is_delete,
	delete_by,
	delete_date,
	insert_by,
	insert_date,
	update_by,
	update_date
) VALUES(
    DEFAULT, 'super admin', 'admin', 'superadmin@mail.com', 'super', NULL, 1, DEFAULT, nuLL, null, null, default, null, null
);

INSERT INTO movies(
  id_movie,
  title_movie,
  release_date,
  direcred_by,
  duration,
  synopsis,
  price,
  date_start,
  date_end,
  image,

  is_delete,
  delete_by,
  delete_date,
  insert_by,
  insert_date,
  update_by,
  update_date
) VALUES(
    DEFAULT, 'Spider-Man: Homecoming', '2017-6-28', 'Jon Watss', '02:13:00',
    'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ',
    10, '2020-05-07', '2020-07-07', null,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO movies_genres(
	id_movies_genre ,
	id_movie ,
	id_genre ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 1, 3,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO genres(
	id_genre ,
	genre_name ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 'Sci-Fi',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO movies_casts(
	id_movies_cast ,
	id_movie,
	id_cast,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 1, 3,
    DEFAULT, null, null, 1, DEFAULT, null, null
);
INSERT INTO casts(
	id_cast ,
	cast_name ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 'Robert Downey',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO movies_premieres(
	id_movie_premiere ,
	id_movie ,
  id_premiere ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO premieres(
	id_premiere ,
	premiere_name ,
  image_premiere ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 'CineOne21', null,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO locations(
	id_location ,
	location_name ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 'Jakarta',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO premieres_locations(
	id_premiere_location ,
  id_premiere ,
  id_location ,
  location_adress ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 1, 1, 'Mall of Indonesia',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO showtimes(
	id_showtime ,
	showtime_name ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, '10:00:00',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO  movies_showtimes(
	id_movies_showtime ,
	id_movie ,
	id_showtime ,

	is_delete ,
	delete_by ,
	delete_date ,
	insert_by ,
	insert_date ,
	update_by ,
	update_date
) VALUES(
    DEFAULT, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO seats(
  id_seat ,
  number_seat ,
  id_seat_status ,

  is_delete ,
  delete_by ,
  delete_date ,
  insert_by ,
  insert_date ,
  update_by ,
  update_date
) VALUES(
    DEFAULT, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO seats_status(
  id_seat_status ,
  status_seat ,

  is_delete ,
  delete_by,
  delete_date ,
  insert_by ,
  insert_date ,
  update_by ,
  update_date
) VALUES(
    DEFAULT, 'booked',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO orders(
  id_order ,
  date_and_time ,
  id_user ,
  id_movie ,
  id_movies_showtime ,
  id_seat ,
  id_order_status ,

  is_delete ,
  delete_by ,
  delete_date ,
  insert_by ,
  insert_date ,
  update_by ,
  update_date
) VALUES(
    DEFAULT, '2022-11-22', 1, 1, 1, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO orders_status(
  id_order_status ,
  order_status_name ,

  is_delete ,
  delete_by ,
  delete_date ,
  insert_by ,
  insert_date ,
  update_by ,
  update_date
) VALUES(
    DEFAULT,'Not Paid',
    DEFAULT, null, null, 1, DEFAULT, null, null
);
