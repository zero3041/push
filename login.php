<?php
use Controller\UserController;

include './model/database/DBConnect.php';
include './model/User/UserDb.php';
include './controller/UserController.php';

$userController = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'POST'){

    $username = $_POST['username'];
    $password = $_POST['password'];
    $user = $userController->checkUserExistence($username, $password);
    if ($user) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false,'message' => 'Username or password incorrect'));
    }
}