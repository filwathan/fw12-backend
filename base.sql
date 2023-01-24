CREATE DATABASE pengen_nonton;

create table "users"(
	"idUser" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"firstName" VARCHAR(255),
	"lastName" VARCHAR(255),
	"email" VARCHAR(255),
	"password" VARCHAR(255),
	"phone" VARCHAR(255),
	"idGroupUser" INT,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "groupUsers"(
	"idGroupUser" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"nameGroupUser" VARCHAR(255),

  "isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "movies"(
	"idMovie" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"titleMovie" VARCHAR(255),
	"releaseDate" TIMESTAMP,
	"direcredBy" VARCHAR(255),
	"duration" TIME,
	"synopsis" TEXT,
  "price" INT,
  "dateStart" TIMESTAMP,
  "dateEnd" TIMESTAMP,
  "image" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "moviesGenres"(
	"idMoviesGenre" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"idMovie" INT,
	"idGenre" INT,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "genres"(
	"idGenre" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"genreName" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "moviesCasts"(
	"idMoviesCast" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"idMovie" INT,
	"idCast" INT,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "casts"(
	"idCast" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"castName" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "moviesPremieres"(
	"idMoviePremiere" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "idMovie" INT,
  "idPremiere" INT,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);


create table "premieres"(
	"idPremiere" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"premiereName" VARCHAR(255),
  "imagePremiere" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "locations"(
	"idLocation" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"locationName" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);


create table "premieresLocations"(
	"idPremiereLocation" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "idPremiere" INT,
  "idLocation" INT,
  "locationAdress" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "showtimes"(
	"idShowtime" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"showtimeName" TIME,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "moviesShowtimes"(
	"idMoviesShowtime" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	"idMovie" INT,
	"idShowtime" INT,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

CREATE TABLE "seats"(
  "idSeat" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "numberSeat" VARCHAR(255),
  "idSeatStatus" INT,

  "isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

-- CREATE TABLE "premieresLocationsSeats"(
--   "idPremiereLocationSeat" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--   "idPremiereLocation" INT,
--   "idSeat" INT,
--   "idSeatStatus" INT,

--   "isDelete" INT DEFAULT (0),
-- 	"deleteBy" VARCHAR(255),
-- 	"deleteDate" TIMESTAMP,
-- 	"insertBy" VARCHAR(255),
-- 	"insertDate" TIMESTAMP DEFAULT NOW(),
-- 	"updateBy" VARCHAR(255),
-- 	"updateDate" TIMESTAMP
-- );

CREATE TABLE "seatsStatus"(
  "idSeatStatus" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "statusSeat" VARCHAR(255),

  "isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);



create table "orders"(
  "idOrder" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "dateAndTime" TIMESTAMP,
	"idUser" INT,
	"idMovie" INT,
	"idMoviesShowtime" INT,
  "idSeat" INT,
  "idOrderStatus" INT,

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

create table "ordersStatus"(
  "idOrderStatus" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "orderStatusName" VARCHAR(255),

	"isDelete" INT DEFAULT (0),
	"deleteBy" VARCHAR(255),
	"deleteDate" TIMESTAMP,
	"insertBy" VARCHAR(255),
	"insertDate" TIMESTAMP DEFAULT NOW(),
	"updateBy" VARCHAR(255),
	"updateDate" TIMESTAMP
);

-- create table "ordersHistory"(
--   "idOrderHistory" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--   "dateAndTime" TIMESTAMP,
-- 	"idUser" INT,
-- 	"idMovie" INT,
-- 	"idMoviesShowtime" INT,
--   "idSeat" INT,
--   "idOrderStatusHistory" INT,

-- 	"isDelete" INT DEFAULT (0),
-- 	"deleteBy" VARCHAR(255),
-- 	"deleteDate" TIMESTAMP,
-- 	"insertBy" VARCHAR(255),
-- 	"insertDate" TIMESTAMP DEFAULT NOW(),
-- 	"updateBy" VARCHAR(255),
-- 	"updateDate" TIMESTAMP
-- );

-- create table "ordersStatusHistory"(
--   "idOrderStatusHistory" INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--   "orderStatusHistoryName" VARCHAR(255),

-- 	"isDelete" INT DEFAULT (0),
-- 	"deleteBy" VARCHAR(255),
-- 	"deleteDate" TIMESTAMP,
-- 	"insertBy" VARCHAR(255),
-- 	"insertDate" TIMESTAMP DEFAULT NOW(),
-- 	"updateBy" VARCHAR(255),
-- 	"updateDate" TIMESTAMP
-- );


--insert INTO

INSERT INTO "groupUsers"(
	"idGroupUser",
	"nameGroupUser",

  "isDelete",
  "deleteBy",
	"deleteDate",
	"insertBy",
	"insertDate",
	"updateBy",
	"updateDate"
) VALUES(
    default, 'administrator', 0, default, null, null, default, null, null
);

INSERT INTO "users"(
	"idUser",
	"firstName",
	"lastName",
	"email",
	"password",
	"phone",
	"idGroupUser",

	"isDelete",
	"deleteBy",
	"deleteDate",
	"insertBy",
	"insertDate",
	"updateBy",
	"updateDate"
) VALUES(
    DEFAULT, 'super admin', 'admin', 'superadmin@mail.com', 'super', NULL, 1, DEFAULT, nuLL, null, null, default, null, null
);

INSERT INTO "movies"(
  "idMovie",
  "titleMovie",
  "releaseDate",
  "direcredBy",
  "duration",
  "synopsis",
  "price",
  "dateStart",
  "dateEnd",
  "image",

  "isDelete",
  "deleteBy",
  "deleteDate",
  "insertBy",
  "insertDate",
  "updateBy",
  "updateDate"
) VALUES(
    DEFAULT, 'Spider-Man: Homecoming', '2017-6-28', 'Jon Watss', '02:13:00',
    'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ',
    10, '2020-05-07', '2020-07-07', null,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "moviesGenres"(
	"idMoviesGenre" ,
	"idMovie" ,
	"idGenre" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 1, 3,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "genres"(
	"idGenre" ,
	"genreName" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 'Sci-Fi',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "moviesCasts"(
	"idMoviesCast" ,
	"idMovie",
	"idCast",

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 1, 3,
    DEFAULT, null, null, 1, DEFAULT, null, null
);
INSERT INTO "casts"(
	"idCast" ,
	"castName" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 'Robert Downey',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "moviesPremieres"(
	"idMoviePremiere" ,
	"idMovie" ,
  "idPremiere" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "premieres"(
	"idPremiere" ,
	"premiereName" ,
  "imagePremiere" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 'CineOne21', null,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "locations"(
	"idLocation" ,
	"locationName" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 'Jakarta',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "premieresLocations"(
	"idPremiereLocation" ,
  "idPremiere" ,
  "idLocation" ,
  "locationAdress" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 1, 1, 'Mall of Indonesia',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "showtimes"(
	"idShowtime" ,
	"showtimeName" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, '10:00:00',
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO  "moviesShowtimes"(
	"idMoviesShowtime" ,
	"idMovie" ,
	"idShowtime" ,

	"isDelete" ,
	"deleteBy" ,
	"deleteDate" ,
	"insertBy" ,
	"insertDate" ,
	"updateBy" ,
	"updateDate"
) VALUES(
    DEFAULT, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);


INSERT INTO "seats"(
  "idSeat" ,
  "numberSeat" ,
  "idSeatStatus" ,

  "isDelete" ,
  "deleteBy" ,
  "deleteDate" ,
  "insertBy" ,
  "insertDate" ,
  "updateBy" ,
  "updateDate"
) VALUES(
    DEFAULT, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "seatsStatus"(
  "idSeatStatus" ,
  "statusSeat" ,

  "isDelete" ,
  "deleteBy",
  "deleteDate" ,
  "insertBy" ,
  "insertDate" ,
  "updateBy" ,
  "updateDate"
) VALUES(
    DEFAULT, 'booked',
    DEFAULT, null, null, 1, DEFAULT, null, null
);


INSERT INTO "orders"(
  "idOrder" ,
  "dateAndTime" ,
  "idUser" ,
  "idMovie" ,
  "idMoviesShowtime" ,
  "idSeat" ,
  "idOrderStatus" ,

  "isDelete" ,
  "deleteBy" ,
  "deleteDate" ,
  "insertBy" ,
  "insertDate" ,
  "updateBy" ,
  "updateDate"
) VALUES(
    DEFAULT, '2022-11-22', 1, 1, 1, 1, 1,
    DEFAULT, null, null, 1, DEFAULT, null, null
);

INSERT INTO "ordersStatus"(
  "idOrderStatus" ,
  "orderStatusName" ,

  "isDelete" ,
  "deleteBy" ,
  "deleteDate" ,
  "insertBy" ,
  "insertDate" ,
  "updateBy" ,
  "updateDate"
) VALUES(
    DEFAULT,'Not Paid',
    DEFAULT, null, null, 1, DEFAULT, null, null
);


