-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: VDD
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `VDD`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `VDD` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `VDD`;

--
-- Table structure for table `badVotes`
--

DROP TABLE IF EXISTS `badVotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `badVotes` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `postId` (`postId`),
  CONSTRAINT `badVotes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `badVotes_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `badVotes`
--

LOCK TABLES `badVotes` WRITE;
/*!40000 ALTER TABLE `badVotes` DISABLE KEYS */;
INSERT INTO `badVotes` VALUES (4,1),(5,3),(3,4),(5,4),(3,5),(4,5),(6,5);
/*!40000 ALTER TABLE `badVotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `content` text,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  KEY `userId` (`userId`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,2,'Pas mal celle là !','2018-04-24 13:27:38'),(2,3,1,'Il y en a d\'autre dans le genre? haha !','2018-04-24 13:27:57');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `content` text,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,1,'Que fait un dev quand il va aux toilettes?  Il git push...','2018-04-24 13:18:02'),(2,2,'Que fait un développeur s\'il veut se marier ? Une fille en C ...','2018-04-24 13:18:22'),(3,5,'Tu sais que tu es un développeur quand ça te gène pas d\'avoir un String dans l\'Array...','2018-04-24 13:18:39'),(4,3,'Combien de développeurs faut-il pour remplacer une ampoule grillée? Aucun, c\'est un problème Hardware...','2018-04-24 13:18:54'),(5,6,'Il y a deux sortes de gens : ceux qui comprennent la notion de récursivité et ceux qui ne comprennent pas qu’il y a deux sortes de gens : ceux qui comprennent la notion de récursivité et ceux qui ne comprennent pas qu’il y a deux sortes de gens : ceux qui comprennent la notion de récursivité et ceux qui ne comprennent pas qu’il y a deux sortes de gens...','2018-04-24 13:19:10'),(6,4,'A quoi sert Internet Explorer ? A télécharger Google Chrome...','2018-04-24 13:19:24');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saltyVotes`
--

DROP TABLE IF EXISTS `saltyVotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saltyVotes` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `postId` (`postId`),
  CONSTRAINT `saltyVotes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `saltyVotes_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saltyVotes`
--

LOCK TABLES `saltyVotes` WRITE;
/*!40000 ALTER TABLE `saltyVotes` DISABLE KEYS */;
INSERT INTO `saltyVotes` VALUES (1,2),(6,2),(1,3),(2,3),(4,3),(5,3);
/*!40000 ALTER TABLE `saltyVotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `password` varchar(254) DEFAULT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Mikael Verdu','mikael.verdu@gmail.com','azerty94','2018-04-24 12:38:58'),(2,'Bogdan Ceu','bogdanceu@yahoo.com','yolostyle93','2018-04-24 12:56:13'),(3,'gloomiz','gloomiz@gmail.com','gggg56','2018-04-24 12:56:13'),(4,'Pierre Poretti','pierreporetti@gmail.com','fhdsh22','2018-04-24 12:56:13'),(5,'Alexis Theyssier','alety@gmail.com','alal94','2018-04-24 12:56:13'),(6,'Carlos Facchin','carlossss@gmail.com','carl64','2018-04-24 12:56:15');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yesVotes`
--

DROP TABLE IF EXISTS `yesVotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yesVotes` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `postId` (`postId`),
  CONSTRAINT `yesVotes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `yesVotes_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yesVotes`
--

LOCK TABLES `yesVotes` WRITE;
/*!40000 ALTER TABLE `yesVotes` DISABLE KEYS */;
INSERT INTO `yesVotes` VALUES (1,1),(3,1),(5,1),(6,1),(2,2),(3,2),(4,2),(5,2),(6,3),(1,4),(3,4),(6,4),(1,5),(2,5),(5,5),(1,6),(2,6),(3,6),(4,6),(5,6),(6,6);
/*!40000 ALTER TABLE `yesVotes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-24 16:15:02
