<?php

namespace controller;

use model\Database\DBConnect;
use model\User\UserDb;
class UserController
{
    protected $userDb;
    public function __construct()
    {
        $db = new DBConnect();
        $this->userDb = new UserDb($db->connect());
    }
    public function getAllUser()
    {
        return $this->userDb->getAllUser();
    }


    public function checkUserExistence($username, $password)
    {
        return $this->userDb->checkUserExistence($username, $password);
    }
}