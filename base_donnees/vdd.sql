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