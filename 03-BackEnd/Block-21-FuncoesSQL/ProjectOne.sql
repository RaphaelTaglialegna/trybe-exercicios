CREATE DATABASE IF NOT EXISTS SpotifyClone;
USE SpotifyClone;

CREATE TABLE plans(
    id INT PRIMARY KEY AUTO_INCREMENT,
	plan_title VARCHAR(100) NOT NULL,
    price DECIMAL(4, 2) NOT NULL
) engine = InnoDB;

INSERT INTO plans(id, plan_title, price) VALUES(1, 'gratuito',0),
(2, 'familiar',7.99), (3, 'universitário',5.99), (4, 'pessoal',6.99);


CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT ,
	NAME VARCHAR(100) NOT NULL,
    age INTEGER,
    plan_id INT NOT NULL,
    data_sign DATE,
	FOREIGN KEY (plan_id) REFERENCES plans(id)
) engine = InnoDB;

INSERT INTO user(id, name, age, plan_id, data_sign) 
VALUES
(1, 'Thati', 23, 1, '2019-10-20'), (2, 'Cintia', 35, 2, '2017-12-30'), (3, 'Bill', 20, 3, '2019-06-05'), (4, 'Roger', 45, 4, '2020-05-13'),
(5, 'Norman', 58, 4, '2017-02-17'), (6, 'Patrick', 33, 2, '2017-01-06'), (7, 'Vivian', 26, 3, '2018-01-05'), (8, 'Carol', 19, 3, '2018-02-14'), (9, 'Angelina', 42, 2, '2018-04-29'), (10, 'Paul', 46, 2, '2017-01-17');


CREATE TABLE artist(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL
    ) engine = InnoDB;
    
INSERT INTO artist(id, name) VALUES(1, 'Walter Phoenix'),
(2, 'Peter Strong'), (3, 'Lance Day'), (4, 'Freedie Shannon'),(5, 'Tyler Isle'),(6, 'Fog') ;


    CREATE TABLE album(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        artist_id INT NOT NULL,
        date_release INT,
        FOREIGN KEY (artist_id) REFERENCES artist(id)
    ) engine = InnoDB;
 
INSERT INTO album(id, title, artist_id, date_release) 
VALUES
(1, 'Envious', 1, 1990), (2, 'Exuberant', 1, 1993), (3, 'Hallowed Steam', 2, 1995), (4, 'Incandescent', 3, 1998), (5, 'Temporary Culture', 4, 2001), (6, 'Library of liberty', 4, 2003), (7, 'Chained Down', 5, 2007), (8, 'Cabinet of fools', 5, 2012), (9, 'No guarantees', 5, 2015), (10, 'Apparatus', 6, 2015);
    
    CREATE TABLE songs(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        album_id INT NOT NULL,
        time_duration INT,
        FOREIGN KEY (album_id) REFERENCES album(id)
    ) engine = InnoDB;
    
INSERT INTO songs(id, title, album_id, time_duration) VALUES
(1, "Soul For Us", 1, 200),
(2, "Reflections Of Magic", 1,163),
(3, "Dance With Her Own", 1, 116),

(4, "Troubles Of My Inner Fire", 2, 203),
(5, "Time Fireworks", 2, 152),    

(6, "Magic Circus", 3, 105),
(7, "Honey, So Do I",  3, 207),    
(8, "Sweetie, Let's Go Wild", 3, 139),    
(9, "She Knows", 3, 244),

(10, "Fantasy For Me", 4, 100),
(11, "Celebration Of More", 4, 146),
(12, "Rock His Everything", 4, 223),
(13, "Home Forever", 4, 231),
(14, "Diamond Power", 4, 241),
(15, "Let's Be Silly", 4, 132),

(16, "Thang Of Thunder", 5, 240),
(17, "Words Of Her Life", 5, 185),
(18, "Without My Streets", 5, 176),

(19, "Need Of The Evening", 6, 190),
(20, "History Of My Roses", 6, 222),
(21, "Without My Love", 6, 111),
(22, "Walking And Game", 6, 123),
(23, "Young And Father", 6, 197),

(24, "Finding My Traditions", 7, 179),
(25, "Walking And Man", 7, 229), 
(26, "Hard And Time", 7, 135),
(27, "Honey, I'm A Lone Wolf", 7, 150),

(28, "She Thinks I Won't Stay Tonight", 8, 166),
(29, "He Heard You're Bad For Me", 8, 154), 
(30, "He Hopes We Can't Stay", 8, 210),
(31, "I Know I Know", 8, 117),

(32, "He's Walking Away", 9, 159),
(33, "He's Trouble", 9, 138),
(34, "I Heard I Want To Bo Alone", 9, 120),
(35, "I Ride Alone", 9, 151),

(36, "Honey", 10, 79),
(37, "You Cheated On Me", 10, 95),
(38, "Wouldn't It Be Nice", 10, 213),  
(39, "Baby", 10, 136),
(40, "You Make Me Feel So..", 10, 83);

CREATE TABLE user_history(
	user_id INT NOT NULL,
	song_id INT NOT NULL,
    date_played DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (song_id) REFERENCES songs(id),
    CONSTRAINT PRIMARY KEY (user_id, song_id) 
) engine = InnoDB;

INSERT INTO user_history(user_id, song_id, date_played)
VALUES
  ('1', '36', "2020-02-28 10:45:55"), ('1', '25',"2020-05-02 05:30:35" ), ('1', '23',"2020-03-06 11:22:33"), ('1', '14', "2020-08-05 08:05:17"), ('1', '15', "2020-09-14 16:32:22"),  

  ('2', '34', "2020-01-02 07:40:33"), ('2', '24', "2020-05-16 06:16:22"), ('2', '21', "2020-10-09 12:27:48"), ('2', '39', "2020-09-21 13:14:46"),    

  ('3', '6', "2020-11-13 16:55:13"), ('3', '3', "2020-12-05 18:38:30"), ('3', '26',"2020-07-30 10:00:00"), 

  ('4', '2', "2021-08-15 17:10:10"), ('4', '35', "2021-07-10 15:20:30"), ('4', '27', "2021-01-09 01:44:33"),  

  ('5', '7', "2020-07-03 19:33:28"), ('5', '12', "2017-02-24 21:14:22"), ('5', '14', "2020-08-06 15:23:43"), ('5', '1', "2020-11-10 13:52:27"),   

  ('6', '38', "2019-02-07 20:33:48"), ('6', '29', "2017-01-24 00:31:17"), ('6', '30', "2017-10-12 12:35:20"), ('6', '22',"2018-05-29 14:56:41"),    

  ('7', '5', "2018-05-09 22:30:49"), ('7', '4', "2020-07-27 12:52:58"), ('7', '11', "2018-01-16 18:40:43"),  

  ('8', '39', "2018-03-21 16:56:40"), ('8', '40', "2020-10-18 13:38:05"), ('8', '32', "2019-05-25 08:14:03"), ('8', '33', "2021-08-15 21:37:09"), 
 
  ('9', '16', "2021-05-24 17:23:45"), ('9', '17', "2018-12-07 22:48:52"), ('9', '8', "2021-03-14 06:14:26"), ('9', '9', "2020-04-01 03:36:00"), 

  ('10', '20', "2017-02-06 08:21:34"), ('10', '21', "2017-12-04 05:33:43"), ('10', '12', "2017-07-27 05:24:49"), ('10', '13', "2017-12-25 01:03:57");

CREATE TABLE user_follow(
    user_id INT NOT NULL,
	artist_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (artist_id) REFERENCES artist(id),
    CONSTRAINT PRIMARY KEY (user_id, artist_id)
) engine = InnoDB;

INSERT INTO user_follow(user_id, artist_id)
VALUES
  ('1', '1'), ('1', '4'), ('1', '3'),

  ('2', '1'), ('2', '3'),

  ('3', '2'), ('3', '1'), 

  ('4', '4'),

  ('5', '5'), ('5', '6'),     
 
  ('6', '6'), ('6', '3'), ('6', '1'),

  ('7', '2'), ('7', '5'),

  ('8', '1'), ('8', '5'),

  ('9', '6'), ('9', '4'), ('9', '3'),

  ('10', '6'), ('10', '2');