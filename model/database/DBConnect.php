<?php

namespace model\Database;

use PDO;
use PDOException;

class DBConnect
{
    protected $dsn;
    protected $username;
    protected $password;
    public function __construct()
    {
        $this->dsn = 'mysql:host=localhost;dbname=geek10';
        $this->username = 'butnv';
        $this->password = '123456';
    }

    public function connect()
    {
        try {
            return new PDO($this->dsn, $this->username, $this->password);
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }
}