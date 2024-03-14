-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2023 at 08:32 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db2`
--

-- --------------------------------------------------------

--
-- Table structure for table `incidents`
--

CREATE TABLE `incidents` (
  `beach` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `detail` varchar(256) NOT NULL,
  `reported_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `incidents`
--

INSERT INTO `incidents` (`beach`, `city`, `email`, `detail`, `reported_at`) VALUES
('sdf', 'Hamilton', 'stevehuinnz@gmail.com', '3dfdf', '2023-09-13 11:59:36'),
('beacch', 'Hamilton', 'stevehuinnz@gmail.com', '3dfdfrrrr', '2023-09-15 21:59:14'),
('hamilton', 'hamionton', 'stevehuinnz@gmail.com', 'W', '2023-11-06 20:55:03'),
('hamilton lake ', 'Hamilton', 'stevehuinnz@gmail.com', 'swing broken', '2023-11-08 12:41:16'),
('11', '11', '11@11', '11', '2023-11-08 12:48:53'),
('hamilton', 'hamiontlo', 'hamionton@hamion', 'this is a test ', '2023-11-10 20:33:20'),
('fairfiled ', 'Hamilton', 'stevehuinnz@gmail.com', 'swing broken agin', '2023-11-13 18:21:03'),
('rorotuna', 'Hamilton', 'stevehuinnz@gmail.com', '3', '2023-12-03 19:27:48'),
('goodone', 'haimilton', 'bertaucklandnz@gmail.com', 'swing broken', '2023-12-04 18:25:40');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
