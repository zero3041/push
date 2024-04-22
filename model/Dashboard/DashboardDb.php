<?php

namespace model\Dashboard;
use PDO;

include 'model/Dashboard/Dashboard.php';

class DashboardDb
{
    protected $connect;
    public function __construct($connect)
    {
        $this->connect = $connect;
    }

    public function getAllDevice()
    {
        $smtp = $this->connect->prepare('SELECT * FROM dashboard');
        $smtp->execute();
        $result = $smtp->fetchAll(PDO::FETCH_ASSOC);

        $devices = [];
        foreach ($result as $row) {
            $device = [
//                'id' => $row['id'],
                'device' => $row['device'],
                'macAddress' => $row['mac'],
                'ip' => $row['ip'],
                'createdDate' => $row['create_date'],
                'powerConsumption' => $row['power']
            ];
            $devices[] = $device;
        }
        return json_encode($devices);
    }
}