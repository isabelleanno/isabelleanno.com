<?php

//Isabelle Anno, 3/31/2022

//Defining variables to connect to database
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '111917';
$db_name = "guestbook";

//connect to database with this variable
$dbc = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
//check for errors
if(!$dbc)
{
    die('Failed to connect to database.'.mysqli_connect_error());
}

$sql = 'SELECT * FROM guests';
//mysqli_query takes 2 parameters: the connection and the actual query (in this case the actual query is in $sql and the
//connection is in $dbc)

$query = mysqli_query($dbc, $sql);
//If query is not true, (is false) throw an error.
if(!$query)
{
    die("SQL error: ".mysqli_error($dbc));
}
?>
