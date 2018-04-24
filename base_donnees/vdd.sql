CREATE DATABASE VDD;
USE VDD;
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64),
  email VARCHAR(254),
  password VARCHAR(254),
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