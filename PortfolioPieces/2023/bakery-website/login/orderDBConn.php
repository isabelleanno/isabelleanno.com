<?php

//Isabelle Anno, 3/30/2022

//Defining variables to connect to database
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = "orders";

//connect to database with this variable
$dbc = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
//check for errors
if(!$dbc)
{
    die('Failed to connect to database.'.mysqli_connect_error());
}

$sql1 = 'SELECT * FROM currentorders';
$sql2 = 'SELECT * FROM completedorders';

//mysqli_query takes 2 parameters: the connection and the actual query (in this case the actual query is in $sql and the
//connection is in $dbc)

$query1 = mysqli_query($dbc, $sql1);
$query2 = mysqli_query($dbc, $sql2);
//If query is not true, (is false) throw an error.
if(!$query1)
{
    die("SQL error: Could not access currentorders ".mysqli_error($dbc));
} elseif(!$query2)
{
    die("SQL error: Could not access ".$table1 .mysqli_error($dbc));
} 

?>