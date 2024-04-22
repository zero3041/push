<?php
namespace model\User;

class UserDb
{
    protected $connect;
    public function __construct($connect)
    {
        $this->connect = $connect;
    }

//    get all users

    public function getAllUser()
    {
        $stmt = $this->connect->prepare('SELECT * FROM user');
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function checkUserExistence($username, $password)
    {
        $stmt = $this->connect->prepare('SELECT * FROM user WHERE username = :username AND password = :password');
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        return $stmt->fetch();
    }
}