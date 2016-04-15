# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.11)
# Database: ex_php
# Generation Time: 2016-04-15 03:55:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table app_games
# ------------------------------------------------------------

DROP TABLE IF EXISTS `app_games`;

CREATE TABLE `app_games` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `developer` varchar(100) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `console` varchar(50) NOT NULL DEFAULT '',
  `launch_date` datetime NOT NULL,
  `rate` int(1) NOT NULL,
  `cover_url` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `app_games` WRITE;
/*!40000 ALTER TABLE `app_games` DISABLE KEYS */;

INSERT INTO `app_games` (`id`, `title`, `developer`, `description`, `console`, `launch_date`, `rate`, `cover_url`)
VALUES
    (1,'Crash Bandicoot','Naughty Dog','The games are mostly set on the fictitious Wumpa Islands, an archipelago situated to the south of Australia, although other locations are common. The main games in the series are largely platformers, but several are spin-offs in different genres. The protagonist of the series is ananthropomorphic Bandicoot named Crash, whose quiet life on the Wumpa Islands is often interrupted by the games\' main antagonist, Doctor Neo Cortex, who created Crash and now wants nothing less than his demise. In most games, Crash must defeat Cortex and foil any world domination plans he might have.','PlayStation','1996-09-09 00:00:00',5,'http://gamesdbase.com/Media/SYSTEM/Sony_Playstation/Box/big/Crash_Bandicoot-_Warped_-_1998_-_Sony_Computer_Entertainment.jpg'),
    (2,'Tomb Raider','Crystal Dynamics','Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix. Tomb Raider is the fourth title in theTomb Raider franchise, and was a reboot that emphasised the reconstructed origins of Lara Croft. Tomb Raider was released on 5 March 2013 for Microsoft Windows, PlayStation 3 and Xbox 360, and on 23 January 2014 for OS X, and is scheduled for a 2016 release for Linux.','XBox 360','2013-03-05 00:00:00',3,'https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg'),
    (3,'Dead Island','Techland','Dead Island features an apparent open world roaming, divided by relatively large areas, and played from a first-person perspective. Most of the gameplay is built around combat and completing quests. Dead Island is an action role-playing game and uses experience-based gameplay. The player earns XP by completing tasks and killing enemies. Upon leveling up, the player gains health and stamina, and can invest one skill point into a skill tree and level up one of their skills.','PlayStation 3','2011-09-06 00:00:00',2,'https://upload.wikimedia.org/wikipedia/en/4/43/Dead_island_PC_packshot.png');

/*!40000 ALTER TABLE `app_games` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;