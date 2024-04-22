<?php

namespace controller;

use model\Database\DBConnect;
use model\Dashboard\DashboardDb;

class DashboardController
{
    protected $dashboardDb;
    public function __construct()
    {
        $db = new DBConnect();
        $this->dashboardDb = new DashboardDb($db->connect());
    }
    public function getAllDevice()
    {
        return $this->dashboardDb->getAllDevice();
    }
}