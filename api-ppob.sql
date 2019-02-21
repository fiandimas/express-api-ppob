-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2019 at 07:16 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.5.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api-ppob`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_level` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `password`, `id_level`, `createdAt`, `updatedAt`) VALUES
(2, 'Aome', 'aome', '6cfc1916a5ee15acc076a4980057c62c', 1, '2019-02-17 03:17:25', '2019-02-17 03:17:25');

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `id_usage` int(11) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `total_meter` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `id_usage`, `month`, `year`, `total_meter`, `status`, `createdAt`, `updatedAt`) VALUES
(3, 3, 3, 2019, 94, 'n', '2019-02-17 04:07:38', '2019-02-17 04:07:38'),
(4, 4, 4, 2019, 92, 'n', '2019-02-17 04:07:43', '2019-02-17 04:07:43'),
(5, 5, 5, 2019, 90, 'n', '2019-02-17 04:07:52', '2019-02-17 04:07:52'),
(6, 6, 1, 2019, 98, 'n', '2019-02-17 04:08:34', '2019-02-17 04:08:34'),
(7, 7, 2, 2019, 96, 'n', '2019-02-17 04:08:40', '2019-02-17 04:08:40'),
(8, 8, 3, 2019, 94, 'n', '2019-02-17 04:08:45', '2019-02-17 04:08:45'),
(9, 9, 4, 2019, 92, 'n', '2019-02-17 04:08:50', '2019-02-17 04:08:50'),
(10, 10, 5, 2019, 90, 'n', '2019-02-17 04:08:58', '2019-02-17 04:08:58');

-- --------------------------------------------------------

--
-- Table structure for table `costs`
--

CREATE TABLE `costs` (
  `id` int(11) NOT NULL,
  `power` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `costs`
--

INSERT INTO `costs` (`id`, `power`, `cost`, `createdAt`, `updatedAt`) VALUES
(1, 450, 900, '2019-02-17 03:07:07', '2019-02-17 06:16:16'),
(2, 900, 1800, '2019-02-17 05:09:07', '2019-02-17 07:17:40'),
(3, 1800, 3600, '2019-02-17 03:11:10', '2019-02-17 07:23:30');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `kwh_number` int(11) DEFAULT NULL,
  `id_cost` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `username`, `password`, `address`, `kwh_number`, `id_cost`, `createdAt`, `updatedAt`) VALUES
(1, 'Scarlet', 'scarlet', '54067a5b738923497a9354fd57c8421e', 'Kepanjen', 20020709, 2, '2019-02-17 03:41:12', '2019-02-17 03:41:12'),
(2, 'Alfian', 'alfian', '64fc0802fbae681ee55a9a4b87f0aec7', 'Kepanjen', 20020708, 1, '2019-02-17 03:41:22', '2019-02-17 03:41:22');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `name` varchar(12) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Manager', '2019-02-17 06:11:16', '2019-02-17 06:26:27'),
(2, 'Teller', '2019-02-17 03:36:16', '2019-02-18 05:17:43');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `id_bill` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `month` int(2) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `admin_cost` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `id_admin` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `id_bill`, `date`, `month`, `year`, `admin_cost`, `total`, `status`, `image`, `id_admin`, `createdAt`, `updatedAt`) VALUES
(1, 3, '2019-02-17 02:02:01', 3, 2019, 10000, 200000, 'y', '1550682411435-sae.jpg', 2, '2019-02-17 04:09:00', '2019-02-20 17:06:51'),
(2, 4, '1970-01-01 00:00:02', 4, 2019, 10000, 175600, 'p', '1550682408676-sae.jpg', 1, '2019-02-20 17:06:10', '2019-02-20 17:06:48');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20190217022730-create-level.js'),
('20190217023120-create-admin.js'),
('20190217023157-create-cost.js'),
('20190217033448-create-customer.js'),
('20190217034931-create-usage.js'),
('20190217035013-create-bill.js'),
('20190217042125-create-payment.js');

-- --------------------------------------------------------

--
-- Table structure for table `usages`
--

CREATE TABLE `usages` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) DEFAULT NULL,
  `month` int(2) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `start_meter` int(11) DEFAULT NULL,
  `finish_meter` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usages`
--

INSERT INTO `usages` (`id`, `id_customer`, `month`, `year`, `start_meter`, `finish_meter`, `createdAt`, `updatedAt`) VALUES
(3, 1, 3, 2019, 3, 97, '2019-02-17 04:07:37', '2019-02-17 04:07:37'),
(4, 1, 4, 2019, 4, 96, '2019-02-17 04:07:43', '2019-02-17 04:07:43'),
(5, 1, 5, 2019, 5, 95, '2019-02-17 04:07:52', '2019-02-17 04:07:52'),
(6, 2, 1, 2019, 1, 99, '2019-02-17 04:08:34', '2019-02-17 04:08:34'),
(7, 2, 2, 2019, 2, 98, '2019-02-17 04:08:40', '2019-02-17 04:08:40'),
(8, 2, 3, 2019, 3, 97, '2019-02-17 04:08:45', '2019-02-17 04:08:45'),
(9, 2, 4, 2019, 4, 96, '2019-02-17 04:08:50', '2019-02-17 04:08:50'),
(10, 2, 5, 2019, 5, 95, '2019-02-17 04:08:58', '2019-02-17 04:08:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `costs`
--
ALTER TABLE `costs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `usages`
--
ALTER TABLE `usages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `costs`
--
ALTER TABLE `costs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `usages`
--
ALTER TABLE `usages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
