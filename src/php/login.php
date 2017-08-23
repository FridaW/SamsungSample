<?php

$connect = mysqli_connect("localhost", "root", "root", "Sumsung");

$result = mysqli_query($connect, "select username,password from Users;");


$Postdata=file_get_contents("php://input");
$Pdata=json_decode($Postdata);


while ($row = mysqli_fetch_array($result)) {
    
    if($row[0]==$Pdata->username&&$row[1]==$Pdata->password){
        
        session_start();
        $_SESSION['username']=$row[0];
		$_SESSION['password']=$row[1];
        echo $row[0];
    }
}
echo "NOuser";
mysql_close($connect); 
?>