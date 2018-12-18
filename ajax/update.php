<?php

include_once('connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{ 
    $inname= $_POST["name"];
    $insirname= $_POST["sirname"];
    $indob= $_POST["dob"];
    $inemail= $_POST["email"];
    $inpass= $_POST["spass"];
    try
    {  
        $db = new Connection();
        $con = $db->openConnection();
        $querry = "insert into account(name,sirname,email,dob,password) values(?,?,?,?,?)";
        $stmt= $con->prepare($querry);
        $stmt->execute(array($inname, $insirname,$inemail,$indob,$inpass));
        echo "success";
    }
    
    catch (PDOException $e)
    {
        echo "There is some problem in connection: " . $e->getMessage();
    }
}
?>
