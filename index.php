<?php

use Controller\DashboardController;

include './model/database/DBConnect.php';
include './model/Dashboard/DashboardDb.php';
include './controller/DashboardController.php';

$userController = new DashboardController();

var_dump($userController->getAllDevice());


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Bss</title>
</head>
<body>
<div class="login">
    <h1>SOIOT SYSTEM</h1>
    <form class="form-login">
        <div class="login-field">
            <input type="text" id="username" placeholder="Username">
        </div>
        <div class="login-field">
            <input type="password" id="password" placeholder="Password">
        </div>
    </form>
    <div class="btn-group">
        <button class="btn btn-login" onclick="login()">LOGIN</button>
        <a href="">or create new account</a>
    </div>
</div>
<script src="./assets/javascript/main.js"></script>
</body>
</html>
