-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: my-so-que-nao
-- ------------------------------------------------------
-- Server version	8.0.26

DROP DATABASE IF EXISTS `my-so-que-nao`;
CREATE DATABASE `my-so-que-nao`;
USE `my-so-que-nao`;



--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
INSERT INTO `usuarios` VALUES (1,'Usuário 1','usuario1@teste.com','$2b$10$x0z3ccQutuJBM7pu7q/LR.AMwSGDB38JiONDSbdrpKWv6d8HRPOsC','perfil_1.jpg','2022-05-09 13:22:41',NULL,NULL),(2,'Usuário 2','usuario2@teste.com','$2b$10$fZM0l4wbBPbJWEf0HttKg.Hz4tRu6L3V0dMjcxks//2xrkO8A8URu','perfil_2.jpg','2022-05-09 13:22:41',NULL,NULL),(3,'Usuário 3','usuario3@teste.com','$2b$10$0qm.XvO4y3CMZtVN1XIBI.c5dMU8KPtI8DGWgb3fZiNLPw87/Xc/C','perfil_3.jpg','2022-05-09 13:22:41',NULL,NULL),(4,'Usuário 4','usuario4@teste.com','$2b$10$VineA4LRQs.JYbiNUwK1eO1qOxkQhWFLdEdtbj5dzYQp1daGc1/1O','perfil_4.jpg','2022-05-09 13:22:41',NULL,NULL),(5,'Usuário 5','usuario5@teste.com','$2b$10$8W/QNQ50noZLSyrejbIqH.VZ4bhyZP/0ecTxnnY/6g.ZW0o6a2utO','perfil_5.jpg','2022-05-09 13:22:41',NULL,NULL),(6,'Usuário 6','usuario6@teste.com','$2b$10$kRAkSAmkAasv3tS/5vlgmehRww4CqtDfU.PPSDZI/WaZtINSaQPfm','perfil_6.jpg','2022-05-09 13:22:41',NULL,NULL),(7,'Usuário 7','usuario7@teste.com','$2b$10$8eKBxU/bcfa6fGabH7uzpeEz1mmrY7te7LIhwgtJwPW7Coez0N5d2','perfil_7.jpg','2022-05-09 13:22:41',NULL,NULL),(8,'Usuário 8','usuario8@teste.com','$2b$10$ln34P.EWp74Mj54b/NNq2emxu23oHJkBiur45VWVO3uekG95xihc2','perfil_8.jpg','2022-05-09 13:22:41',NULL,NULL),(9,'Usuário 9','usuario9@teste.com','$2b$10$wUF8eBwHBshoZLofh8UDjOkt2eBlwxCnIWgOENTLm/LlM04Xmd5Pe','perfil_9.jpg','2022-05-09 13:22:42',NULL,NULL),(10,'Usuário 10','usuario10@teste.com','$2b$10$SuD7cHQBMclBZlyJdK01LeBNVL7VR9TSiGlVoggn7nkRdMaU1Fg5G','perfil_10.jpg','2022-05-09 13:22:42',NULL,NULL),(11,'Usuário 11','usuario11@teste.com','$2b$10$EQjln1eatxRecygf9psiD.eEWJx4vt6vVH6Xhz1ft1h7Z.PYYEXzK','perfil_11.jpg','2022-05-09 13:22:42',NULL,NULL),(12,'Usuário 12','usuario12@teste.com','$2b$10$m/Bijp/ll5NU/VLShafNxO17ktQWhqIUnQ4BkMgxxNjeNJtwysVGa','perfil_12.jpg','2022-05-09 13:22:42',NULL,NULL),(13,'Usuário 13','usuario13@teste.com','$2b$10$55j43O1h2RKGSHuUTuqtc.CEcmZWrkUwNw9oBzz/4J7kI5P9RUh1G','perfil_13.jpg','2022-05-09 13:22:42',NULL,NULL),(14,'Usuário 14','usuario14@teste.com','$2b$10$LVuUcu.lBSh27InTi1BC2up1iqOeozaUqsNY6eCliWB.GqnR133xu','perfil_14.jpg','2022-05-09 13:22:42',NULL,NULL),(15,'Usuário 15','usuario15@teste.com','$2b$10$/udUyWrhh.tYmNQhEap./u.zZk7Pu.RfJXmT/WAol85cJmHpk7422','perfil_15.jpg','2022-05-09 13:22:42',NULL,NULL),(16,'Usuário 16','usuario16@teste.com','$2b$10$1BditgfDEkB9hLpSqX/Q0OsvReqMQnIofeGAdAIWfykv9W3vdizQe','perfil_16.jpg','2022-05-09 13:22:42',NULL,NULL),(17,'Usuário 17','usuario17@teste.com','$2b$10$6Md56XNO3ggc8a9Au7LKZuYiVHLGBSgiYjXkP8tXhZlAkui0Fdtmu','perfil_17.jpg','2022-05-09 13:22:42',NULL,NULL),(18,'Usuário 18','usuario18@teste.com','$2b$10$hihNVs3e6QgLY9atG/8c5OaP5RJdvpTX8CAUu3FC6RLvZhDRyWcvO','perfil_18.jpg','2022-05-09 13:22:42',NULL,NULL),(19,'Usuário 19','usuario19@teste.com','$2b$10$vx3w1io2ynbYcrAVlaLnXeXAUFftDIMmpVe/iyszGF5j/kitIRXV2','perfil_19.jpg','2022-05-09 13:22:42',NULL,NULL),(20,'Usuário 20','usuario20@teste.com','$2b$10$H5K2gsEvIDPiiLFsesrCt.xfXgnDpHu2AFAk8NMygXL7mIe1pQQSG','perfil_20.jpg','2022-05-09 13:22:42',NULL,NULL),(21,'Teste 99','teste99@teste.com','$2b$10$uVTZDjsE05rs0i2g0oPxyuwyPF6.CnCR6kFxU4S/AyWTZsuaxMiee',NULL,'2022-05-25 13:20:56','2022-05-25 13:20:56',NULL),(22,'Teste 100','teste100@teste.com','$2b$10$neS9OcUJ1lOPUDEq/1KSV.2BQb748zhlcVa7TlWLt8miY96RL0K2y',NULL,'2022-05-25 13:52:12','2022-05-25 13:52:12',NULL),(23,'Teste 101','teste101@teste.com','$2b$10$jDyxsl5DY9koXSEZA/DvK.lkiH.Q2inw29L9mCXtb.3R1bEIZGXK.',NULL,'2022-05-25 13:52:23','2022-05-25 13:52:23',NULL),(24,'Teste 1000','teste1000@teste.com','$2b$10$pIYQbA.LKC8Y7jn1LoHbse0dO8lAocrirB9m40.bkJjYBuf53tyEi',NULL,'2022-05-25 16:21:26','2022-05-25 16:21:26',NULL),(25,'Mateus','mateus@teste.com','$2b$10$DLf6HKDkZb7zrAnSV7WbBOBCtkwCX8QuAhkRGR8KNGXr9tmIzv.cC','0.32644234595675314-heart.png','2022-06-15 13:39:08','2022-06-15 13:39:08',NULL),(26,'Sérgio','teste2222@teste.com','$2b$10$vUYorrUFU/qYYKuB3OUg3.CHM1aPAAqHJVwXnh3fdtjPDeap0T/fO',NULL,'2022-06-15 13:42:55','2022-06-15 13:42:55',NULL),(27,'Dardis','teste1231@teste.com','$2b$10$I.flTRGzaCewmfboXXCV.OuS6pSh8ZsHi3t.0WlFSoYsoncl1KN1W','0.8248282257127477-heart.jpg','2022-06-15 14:06:13','2022-06-15 14:06:13',NULL),(28,'Abenoçado','gloria@deus.com','$2b$10$4SAAbEBawH8tXo81brP4V.9H0Jmiws3vrnZ.l9n1hplSsVEG69SJS',NULL,'2022-06-15 14:20:11','2022-06-15 14:20:11',NULL),(29,'Moraes','moraes@teste.com','$2b$10$w0Fz9ogGnlLlxDGd2M3Taefq2ebhAev8OW59vz9AyXlV18SsGYzJq','0.26023545366059464-bahia.jpg','2022-06-20 12:14:59','2022-06-20 12:14:59',NULL),(30,'Mariana','mariana@teste.com','$2b$10$hFVh8WeeKUWQYBcqXvs8tuqG9ShA4gnnuKBWAwm6z2kGc584OXgNi','0.0622579915230832-baby-01.jpg','2022-06-20 13:32:48','2022-06-20 13:32:48',NULL),(31,'André','andre@teste.com','$2b$10$x5Q73ZMnNBwvLMu43AWBzuIonJT0en9hlIRY9Ft2N02MXfDb7l.gq','0.056778707711844456-3.png','2022-06-20 13:51:23','2022-06-20 13:51:23',NULL),(32,'Augusto','augusto@teste.com','$2b$10$3O7l4vPxTJbPYly0UBa9ZuNaFMK/NMSkely9mb4.ZRQjkPVTmx5pq','0.7519224317715538-baby-01.jpg','2022-06-27 19:20:33','2022-06-27 19:20:33',NULL),(33,'Queen Elizabeth','teste3445@teste.com','$2b$10$EujD1RccvZDDqp8AmH7jH.WeVWjX.Qs.eAW0QiYqawE6gaITgCcl6','0.647175359888404-baby-01.jpg','2022-09-13 11:59:48','2022-09-13 11:59:48',NULL),(34,'Nome do Usuário','teste99999@teste.com','$2b$10$2bk1urWRI9dFUd6pkr5YhOd87WP1g04NCH1e4/cfcz2jq.0Xk8dxC','0.4614845046072815-almofada.jpg','2022-09-13 12:14:22','2022-09-13 12:14:22',NULL);
UNLOCK TABLES;

--
-- Table structure for table `amizades`
--

DROP TABLE IF EXISTS `amizades`;
CREATE TABLE `amizades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuarios_id1` int NOT NULL,
  `usuarios_id2` int NOT NULL,
  `aceita` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_id1` (`usuarios_id1`),
  KEY `usuarios_id2` (`usuarios_id2`),
  CONSTRAINT `amizades_ibfk_1` FOREIGN KEY (`usuarios_id1`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `amizades_ibfk_2` FOREIGN KEY (`usuarios_id2`) REFERENCES `usuarios` (`id`)
);

--
-- Dumping data for table `amizades`
--

LOCK TABLES `amizades` WRITE;
INSERT INTO `amizades` VALUES (1,1,2,1),(2,1,3,0),(3,1,4,1),(4,1,5,0),(5,1,6,1),(6,1,7,1),(7,1,8,0),(8,2,3,1),(9,2,4,1),(10,2,5,1),(11,2,6,1),(12,2,7,0),(13,2,8,1),(14,2,9,1),(15,3,4,1),(16,3,5,1),(17,3,6,0),(18,3,7,1),(19,3,8,0),(20,3,9,0),(21,3,10,0),(22,4,5,1),(23,4,6,1),(24,4,7,0),(25,4,8,0),(26,4,9,1),(27,4,10,1),(28,4,11,0),(29,5,6,0),(30,5,7,1),(31,5,8,1),(32,5,9,1),(33,5,10,1),(34,5,11,1),(35,5,12,1),(36,6,7,0),(37,6,8,0),(38,6,9,1),(39,6,10,0),(40,6,11,0),(41,6,12,1),(42,6,13,1),(43,7,8,1),(44,7,9,1),(45,7,10,0),(46,7,11,0),(47,7,12,0),(48,7,13,1),(49,7,14,1),(50,8,9,0),(51,8,10,0),(52,8,11,0),(53,8,12,0),(54,8,13,0),(55,8,14,0),(56,8,15,1),(57,9,10,0),(58,9,11,0),(59,9,12,1),(60,9,13,0),(61,9,14,1),(62,9,15,0),(63,9,16,1),(64,10,11,1),(65,10,12,1),(66,10,13,1),(67,10,14,1),(68,10,15,1),(69,10,16,0),(70,10,17,0),(71,11,12,0),(72,11,13,0),(73,11,14,0),(74,11,15,0),(75,11,16,1),(76,11,17,0),(77,11,18,0),(78,12,13,1),(79,12,14,1),(80,12,15,1),(81,12,16,1),(82,12,17,1),(83,12,18,1),(84,12,19,1),(85,13,14,1),(86,13,15,0),(87,13,16,0),(88,13,17,0),(89,13,18,1),(90,13,19,1),(91,13,20,0),(92,14,15,0),(93,14,16,0),(94,14,17,0),(95,14,18,1),(96,14,19,1),(97,14,20,1),(98,14,1,1),(99,15,16,0),(100,15,17,1),(101,15,18,1),(102,15,19,1),(103,15,20,1),(104,15,1,1),(105,15,2,0),(106,16,17,1),(107,16,18,1),(108,16,19,1),(109,16,20,1),(110,16,1,1),(111,16,2,1),(112,16,3,1),(113,17,18,1),(114,17,19,1),(115,17,20,0),(116,17,1,1),(117,17,2,0),(118,17,3,1),(119,17,4,0),(120,18,19,0),(121,18,20,1),(122,18,1,1),(123,18,2,0),(124,18,3,1),(125,18,4,0),(126,18,5,0),(127,19,20,1),(128,19,1,1),(129,19,2,0),(130,19,3,1),(131,19,4,1),(132,19,5,1),(133,19,6,1),(134,20,1,1),(135,20,2,0),(136,20,3,0),(137,20,4,1),(138,20,5,1),(139,20,6,0),(140,20,7,1);
UNLOCK TABLES;



--
-- Table structure for table `publicacoes`
--

DROP TABLE IF EXISTS `publicacoes`;
CREATE TABLE `publicacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texto` text,
  `imagem` varchar(45) DEFAULT NULL,
  `usuarios_id` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_id` (`usuarios_id`),
  CONSTRAINT `publicacoes_ibfk_1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
);

--
-- Dumping data for table `publicacoes`
--

LOCK TABLES `publicacoes` WRITE;
INSERT INTO `publicacoes` VALUES (1,'Um texto grandioso e aleatório 1','post_1.jpg',1,'2022-05-09 13:39:22',NULL),(2,'Um texto grandioso e aleatório 2','post_2.jpg',1,'2022-05-09 13:56:02',NULL),(3,'Um texto grandioso e aleatório 3','post_3.jpg',1,'2022-05-09 14:12:42',NULL),(4,'Um texto grandioso e aleatório 4','post_4.jpg',1,'2022-05-09 14:29:22',NULL),(5,'Um texto grandioso e aleatório 5','post_5.jpg',1,'2022-05-09 14:46:02',NULL),(6,'Um texto grandioso e aleatório 6','post_6.jpg',2,'2022-05-09 15:02:42',NULL),(7,'Um texto grandioso e aleatório 7','post_7.jpg',2,'2022-05-09 15:19:22',NULL),(8,'Um texto grandioso e aleatório 8','post_8.jpg',2,'2022-05-09 15:36:02',NULL),(9,'Um texto grandioso e aleatório 9','post_9.jpg',2,'2022-05-09 15:52:42',NULL),(10,'Um texto grandioso e aleatório 10','post_10.jpg',2,'2022-05-09 16:09:22',NULL),(11,'Um texto grandioso e aleatório 11','post_11.jpg',3,'2022-05-09 16:26:02',NULL),(12,'Um texto grandioso e aleatório 12','post_12.jpg',3,'2022-05-09 16:42:42',NULL),(13,'Um texto grandioso e aleatório 13','post_13.jpg',3,'2022-05-09 16:59:22',NULL),(14,'Um texto grandioso e aleatório 14','post_14.jpg',3,'2022-05-09 17:16:02',NULL),(15,'Um texto grandioso e aleatório 15','post_15.jpg',3,'2022-05-09 17:32:42',NULL),(16,'Um texto grandioso e aleatório 16','post_16.jpg',4,'2022-05-09 17:49:22',NULL),(17,'Um texto grandioso e aleatório 17','post_17.jpg',4,'2022-05-09 18:06:02',NULL),(18,'Um texto grandioso e aleatório 18','post_18.jpg',4,'2022-05-09 18:22:42',NULL),(19,'Um texto grandioso e aleatório 19','post_19.jpg',4,'2022-05-09 18:39:22',NULL),(20,'Um texto grandioso e aleatório 20','post_20.jpg',4,'2022-05-09 18:56:02',NULL),(21,'Um texto grandioso e aleatório 21','post_21.jpg',5,'2022-05-09 19:12:42',NULL),(22,'Um texto grandioso e aleatório 22','post_22.jpg',5,'2022-05-09 19:29:22',NULL),(23,'Um texto grandioso e aleatório 23','post_23.jpg',5,'2022-05-09 19:46:02',NULL),(24,'Um texto grandioso e aleatório 24','post_24.jpg',5,'2022-05-09 20:02:42',NULL),(25,'Um texto grandioso e aleatório 25','post_25.jpg',5,'2022-05-09 20:19:22',NULL),(26,'Um texto grandioso e aleatório 26','post_26.jpg',6,'2022-05-09 20:36:02',NULL),(27,'Um texto grandioso e aleatório 27','post_27.jpg',6,'2022-05-09 20:52:42',NULL),(28,'Um texto grandioso e aleatório 28','post_28.jpg',6,'2022-05-09 21:09:22',NULL),(29,'Um texto grandioso e aleatório 29','post_29.jpg',6,'2022-05-09 21:26:02',NULL),(30,'Um texto grandioso e aleatório 30','post_30.jpg',6,'2022-05-09 21:42:42',NULL),(31,'Um texto grandioso e aleatório 31','post_31.jpg',7,'2022-05-09 21:59:22',NULL),(32,'Um texto grandioso e aleatório 32','post_32.jpg',7,'2022-05-09 22:16:02',NULL),(33,'Um texto grandioso e aleatório 33','post_33.jpg',7,'2022-05-09 22:32:42',NULL),(34,'Um texto grandioso e aleatório 34','post_34.jpg',7,'2022-05-09 22:49:22',NULL),(35,'Um texto grandioso e aleatório 35','post_35.jpg',7,'2022-05-09 23:06:02',NULL),(36,'Um texto grandioso e aleatório 36','post_36.jpg',8,'2022-05-09 23:22:42',NULL),(37,'Um texto grandioso e aleatório 37','post_37.jpg',8,'2022-05-09 23:39:22',NULL),(38,'Um texto grandioso e aleatório 38','post_38.jpg',8,'2022-05-09 23:56:02',NULL),(39,'Um texto grandioso e aleatório 39','post_39.jpg',8,'2022-05-10 00:12:42',NULL),(40,'Um texto grandioso e aleatório 40','post_40.jpg',8,'2022-05-10 00:29:22',NULL),(41,'Um texto grandioso e aleatório 41','post_41.jpg',9,'2022-05-10 00:46:02',NULL),(42,'Um texto grandioso e aleatório 42','post_42.jpg',9,'2022-05-10 01:02:42',NULL),(43,'Um texto grandioso e aleatório 43','post_43.jpg',9,'2022-05-10 01:19:22',NULL),(44,'Um texto grandioso e aleatório 44','post_44.jpg',9,'2022-05-10 01:36:02',NULL),(45,'Um texto grandioso e aleatório 45','post_45.jpg',9,'2022-05-10 01:52:42',NULL),(46,'Um texto grandioso e aleatório 46','post_46.jpg',10,'2022-05-10 02:09:22',NULL),(47,'Um texto grandioso e aleatório 47','post_47.jpg',10,'2022-05-10 02:26:02',NULL),(48,'Um texto grandioso e aleatório 48','post_48.jpg',10,'2022-05-10 02:42:42',NULL),(49,'Um texto grandioso e aleatório 49','post_49.jpg',10,'2022-05-10 02:59:22',NULL),(50,'Um texto grandioso e aleatório 50','post_50.jpg',10,'2022-05-10 03:16:02',NULL);
UNLOCK TABLES;

--
-- Table structure for table `curtidas`
--

DROP TABLE IF EXISTS `curtidas`;
CREATE TABLE `curtidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuarios_id` int NOT NULL,
  `publicacoes_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_id` (`usuarios_id`),
  KEY `publicacoes_id` (`publicacoes_id`),
  CONSTRAINT `curtidas_ibfk_1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `curtidas_ibfk_2` FOREIGN KEY (`publicacoes_id`) REFERENCES `publicacoes` (`id`)
);

--
-- Dumping data for table `curtidas`
--

LOCK TABLES `curtidas` WRITE;
INSERT INTO `curtidas` VALUES (1,6,35),(2,6,6),(3,6,29),(4,6,40),(5,6,43),(6,6,19),(7,6,30),(8,6,32),(9,6,17),(10,6,38),(11,6,20),(12,6,16),(13,6,29),(14,6,20),(15,6,19),(16,6,29),(17,6,18),(18,6,50),(19,6,33),(20,6,11),(21,7,25),(22,7,13),(23,7,42),(24,7,36),(25,7,12),(26,7,3),(27,7,33),(28,7,26),(29,7,12),(30,7,35),(31,7,50),(32,7,35),(33,7,27),(34,7,28),(35,7,38),(36,7,35),(37,7,17),(38,7,6),(39,7,46),(40,7,28),(41,8,44),(42,8,34),(43,8,41),(44,8,41),(45,8,14),(46,8,14),(47,8,40),(48,8,18),(49,8,13),(50,8,2),(51,8,27),(52,8,5),(53,8,36),(54,8,35),(55,8,39),(56,8,14),(57,8,17),(58,8,45),(59,8,34),(60,8,13),(61,9,4),(62,9,14),(63,9,47),(64,9,11),(65,9,9),(66,9,37),(67,9,29),(68,9,9),(69,9,10),(70,9,9),(71,9,47),(72,9,14),(73,9,24),(74,9,11),(75,9,33),(76,9,10),(77,9,50),(78,9,37),(79,9,11),(80,9,40),(81,10,37),(82,10,27),(83,10,31),(84,10,37),(85,10,28),(86,10,45),(87,10,42),(88,10,49),(89,10,32),(90,10,36),(91,10,45),(92,10,21),(93,10,15),(94,10,29),(95,10,2),(96,10,11),(97,10,34),(98,10,30),(99,10,13),(100,10,12),(101,11,14),(102,11,10),(103,11,22),(104,11,7),(105,11,18),(106,11,27),(107,11,23),(108,11,16),(109,11,10),(110,11,43),(111,11,20),(112,11,33),(113,11,5),(114,11,37),(115,11,13),(116,11,6),(117,11,39),(118,11,32),(119,11,28),(120,11,11),(121,12,42),(122,12,16),(123,12,16),(124,12,13),(125,12,40),(126,12,43),(127,12,38),(128,12,33),(129,12,30),(130,12,14),(131,12,24),(132,12,33),(133,12,21),(134,12,32),(135,12,47),(136,12,3),(137,12,39),(138,12,4),(139,12,30),(140,12,5),(141,13,10),(142,13,44),(143,13,2),(144,13,24),(145,13,17),(146,13,35),(147,13,43),(148,13,20),(149,13,11),(150,13,27),(151,13,30),(152,13,14),(153,13,43),(154,13,46),(155,13,48),(156,13,37),(157,13,3),(158,13,23),(159,13,6),(160,13,11),(161,14,2),(162,14,13),(163,14,8),(164,14,10),(165,14,41),(166,14,16),(167,14,45),(168,14,32),(169,14,29),(170,14,34),(171,14,32),(172,14,46),(173,14,13),(174,14,16),(175,14,19),(176,14,44),(177,14,32),(178,14,26),(179,14,41),(180,14,7),(181,15,50),(182,15,44),(183,15,19),(184,15,49),(185,15,29),(186,15,29),(187,15,5),(188,15,35),(189,15,48),(190,15,33),(191,15,47),(192,15,42),(193,15,21),(194,15,2),(195,15,41),(196,15,36),(197,15,28),(198,15,24),(199,15,28),(200,15,15);
UNLOCK TABLES;

