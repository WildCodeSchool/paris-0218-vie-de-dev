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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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

-- Dump completed on 2018-04-24 12:24:32
