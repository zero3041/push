<?php

use controller\DashboardController;

include 'model/database/DBConnect.php';
include 'model/Dashboard/DashboardDb.php';
include 'controller/DashboardController.php';

$userController = new DashboardController();

$data = $userController->getAllDevice();

echo json_encode($data);