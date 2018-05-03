DROP DATABASE IF EXISTS VDD;
CREATE DATABASE VDD;
CREATE USER IF NOT EXISTS 'server'@'localhost';
GRANT ALL PRIVILEGES ON VDD.* To 'server'@'localhost' IDENTIFIED BY 'vddISDope';
USE VDD;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL UNIQUE,
  email VARCHAR(254) NOT NULL UNIQUE,
  password VARCHAR(254) NOT NULL,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE post (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  content TEXT,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (userId)
    REFERENCES user(id)
) ENGINE=INNODB;

CREATE TABLE yesVotes (
  userId INT NOT NULL,
  postId INT NOT NULL,
  PRIMARY KEY (userId,postId),
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (postId) REFERENCES post(id)
) ENGINE=INNODB;

CREATE TABLE saltyVotes (
  userId INT NOT NULL,
  postId INT NOT NULL,
  PRIMARY KEY (userId,postId),
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (postId) REFERENCES post(id)
) ENGINE=INNODB;

CREATE TABLE badVotes (
  userId INT NOT NULL,
  postId INT NOT NULL,
  PRIMARY KEY (userId,postId),
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (postId) REFERENCES post(id)
) ENGINE=INNODB;

CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT,
  postId INT NOT NULL,
  userId INT NOT NULL,
  content TEXT,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (postId) REFERENCES post(id),
  FOREIGN KEY (userId) REFERENCES user(id)
) ENGINE=INNODB;

/*.......AJOUTER DES USERS POUR TEST.........*/

INSERT INTO user (name, email, password)
  VALUES ("Mikael Verdu", "mikael.verdu@gmail.com","azerty94");

INSERT INTO user (name, email, password)
  VALUES ("Bogdan Ceu", "bogdanceu@yahoo.com","yolostyle93");

INSERT INTO user (name, email, password)
  VALUES ("gloomiz", "gloomiz@.com","gggg56");

INSERT INTO user (name, email, password)
  VALUES ("Pierre Poretti", "pierreporetti@gmail.com","fhdsh22");

INSERT INTO user (name, email, password)
  VALUES ("Alexis Theyssier", "alety@gmail.com","alal94");

INSERT INTO user (name, email, password)
  VALUES ("Carlos Facchin", "carlossss@gmail.com","carl64");

/*........Modifier email d'un user.....*/

UPDATE user SET email="gloomiz@gmail.com" WHERE id=3;

/*.......AJOUTER DES POSTS POUR TEST.....*/

INSERT INTO post (userId, content)
  VALUES ("1","Que fait un dev quand il va aux toilettes?  Il git push...");

INSERT INTO post (userId, content)
  VALUES ("2","Que fait un développeur s'il veut se marier ? Une fille en C ...");

INSERT INTO post (userId, content)
  VALUES ("5","Tu sais que tu es un développeur quand ça te gène pas d'avoir un String dans l'Array...");

INSERT INTO post (userId, content)
  VALUES ("3","Combien de développeurs faut-il pour remplacer une ampoule grillée? Aucun, c'est un problème Hardware...");

INSERT INTO post (userId, content)
  VALUES ("6","Il y a deux sortes de gens : ceux qui comprennent la notion de récursivité et ceux qui ne comprennent pas qu’il y a deux sortes de gens : ceux qui comprennent la notion de récursivité et ceux qui ne comprennent pas qu’il y a deux sortes de gens : ceux qui comprennent la notion de récursivité et ceux qui ne comprennent pas qu’il y a deux sortes de gens...");

INSERT INTO post (userId, content)
  VALUES ("6","A quoi sert Internet Explorer ? A télécharger Google Chrome...");

/*.....AJOUTER DE COMMENTAIRE POUR TEST........*/

INSERT INTO comment (userId, postId, content)
  VALUES ("2", "1","Pas mal celle là !");

INSERT INTO comment (userId, postId, content)
  VALUES ("1", "3","Il y en a d'autre dans le genre? haha !");

/*......AJOUTER DE YESVOTES POUR TEST......*/

INSERT INTO yesVotes (userId, postId)
  VALUES ("1","1");

INSERT INTO yesVotes (userId, postId)
  VALUES ("3","1");

INSERT INTO yesVotes (userId, postId)
  VALUES ("5","1");

INSERT INTO yesVotes (userId, postId)
  VALUES ("6","1");

INSERT INTO yesVotes (userId, postId)
  VALUES ("3","2");

INSERT INTO yesVotes (userId, postId)
  VALUES ("2","2");

INSERT INTO yesVotes (userId, postId)
  VALUES ("5","2");

INSERT INTO yesVotes (userId, postId)
  VALUES ("4","2");

INSERT INTO yesVotes (userId, postId)
  VALUES ("6","3");

INSERT INTO yesVotes (userId, postId)
  VALUES ("6","4");

INSERT INTO yesVotes (userId, postId)
  VALUES ("3","4");

INSERT INTO yesVotes (userId, postId)
  VALUES ("1","4");

INSERT INTO yesVotes (userId, postId)
  VALUES ("5","5");

INSERT INTO yesVotes (userId, postId)
  VALUES ("2","5");

INSERT INTO yesVotes (userId, postId)
  VALUES ("1","5");

INSERT INTO yesVotes (userId, postId)
  VALUES ("1","6");

INSERT INTO yesVotes (userId, postId)
  VALUES ("2","6");

INSERT INTO yesVotes (userId, postId)
  VALUES ("3","6");

INSERT INTO yesVotes (userId, postId)
  VALUES ("4","6");

INSERT INTO yesVotes (userId, postId)
  VALUES ("5","6");

INSERT INTO yesVotes (userId, postId)
  VALUES ("6","6");

/*........AJOUTER DES SALTYVOTES POUR TEST.......*/

INSERT INTO saltyVotes (userId, postId)
  VALUES ("1","2");

INSERT INTO saltyVotes (userId, postId)
  VALUES ("6","2");

INSERT INTO saltyVotes (userId, postId)
  VALUES ("1","3");

INSERT INTO saltyVotes (userId, postId)
  VALUES ("2","3");

INSERT INTO saltyVotes (userId, postId)
  VALUES ("5","3");

INSERT INTO saltyVotes (userId, postId)
  VALUES ("4","3");

/*......AJOUTER DES BADVOTES POUR TEST.....*/

INSERT INTO badVotes (userId, postId)
  VALUES ("4","1");

INSERT INTO badVotes (userId, postId)
  VALUES ("5","3");

INSERT INTO badVotes (userId, postId)
  VALUES ("3","4");

INSERT INTO badVotes (userId, postId)
  VALUES ("5","4");

INSERT INTO badVotes (userId, postId)
  VALUES ("4","5");

INSERT INTO badVotes (userId, postId)
  VALUES ("3","5");

INSERT INTO badVotes (userId, postId)
  VALUES ("6","5");




