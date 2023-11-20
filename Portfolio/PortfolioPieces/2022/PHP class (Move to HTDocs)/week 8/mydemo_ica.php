<?php

$link = mysqli_connect("localhost", "root", "111917"); //hey! Quit peeping at my password!!

//check connection
if ($link===false){
    die("ERROR: COULD NOT CONNECT.".mysqli_connect_error());
}

//print host info if successful
echo ("Connect successfully. Host info:".mysqli_get_host_info($link));
//create database
$sql = "create database myDemo_ica";
if(mysqli_query($link, $sql)){
    echo ("Database dreated successfully.");
} else {
    echo("Error creating database. :(".mysqli_error($link));
}
//close connection
mysqli_close($link);
?>
