<?php

include_once('connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{ 
    $usr = $_POST["username"];
    $pass = $_POST["password"];
    try
    {
        $db = new Connection();
        $con = $db->openConnection();
        $Query = $con->prepare("SELECT * FROM account WHERE email = ?");
        $Query->execute(array($usr));
        if($Query->rowCount()!=0)
        {
            $r = $Query->fetch(PDO::FETCH_ASSOC);
            if($r['password'] == $pass)
                echo json_encode($r);
            else
                echo"fail";
        }
    
    }
    catch (PDOException $e)
    {
        echo "There is some problem in connection: " . $e->getMessage();
    }
}


?>