<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Bss</title>
</head>
<body>
<div class="container">
    <div id="sidebar" class="sidebar header-active">
        <div class="sidebar-header">
            <i style="color: #000000;" class="fa-solid fa-server"></i>
            Device Management
        </div>

        <ul class="sidebar-list">
            <li class="sidebar-list-item active">
                <i class="fa-solid fa-house-laptop"></i><a href="index.html">Dashboard</a>
            </li>
            <li class="sidebar-list-item ">
                <i class="fa-solid fa-clock-rotate-left"></i><a href="logs.html">Logs</a>
            </li>
            <li class="sidebar-list-item ">
                <i class="fa-solid fa-gear"></i><a href="">Settings</a>
            </li>
        </ul>
    </div>
    <div class="content">
        <div class="content-header">
            <div class="menu" id="menu" onclick="openMenu()">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div id="header" class="content-header_avt   header-avt-active ">
                <img src="images/avatar.png" alt="Avatar" class="avatar">
                <a href="#">Welcome John</a>
            </div>
        </div>
        <div class="main table-container">
            <div class="a">
                <div class="content-actions">
                    <table class="styled-table dashboard">
                        <thead>
                        <tr>
                            <th>Devices</th>
                            <th>MAC Address</th>
                            <th>IP</th>
                            <th>Created Date</th>
                            <th>Power Consumption(Kw/h)</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody id="tableBody">

                        </tbody>
                    </table>
                </div>
            </div>

            <div class="content-main">
                <div class="content-main-list">
                    <div class="content-main-chart">
                        <canvas class="chart" id="myPieChart" width="400" height="400"></canvas>
                    </div>
                    <div class="content-main-add">
                        <form id="formAdd" class="form-login" action="#">
                            <label id="nameWarning" class="form-label-warning none" for="">Ban chua dien name</label>
                            <div class="login-field">
                                <input type="text" id="name" placeholder="name">
                            </div>
                            <label id="ipWarning"  class="form-label-warning none">Ban chua dien IP</label>
                            <div class="login-field">
                                <input type="text" id="ip" placeholder="IP">
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-login" id="addDeviceBtn">ADD DEVICE</button>
                            </div>
                        </form>
                        <div class="content-main-edit">
                            <form class="form-login none" action="#">
                                <div class="login-field">
                                    <input type="text" id="name" placeholder="name">
                                </div>
                                <div class="login-field">
                                    <input type="text" id="mac" placeholder="MAC Address">
                                </div>
                                <div class="login-field">
                                    <input type="text" id="ip" placeholder="IP">
                                </div>
                                <div class="login-field">
                                    <input type="text" id="powerConsumption" placeholder="IP">
                                </div>
                                <div class="btn-group">
                                    <button class="btn btn-login" id="addDeviceBtn">SAVE</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../assets/javascript/main.js"></script>
<script src="../assets/javascript/dashboard.js"></script>
<script src="../assets/javascript/check-login.js"></script>

</body>
</html>
