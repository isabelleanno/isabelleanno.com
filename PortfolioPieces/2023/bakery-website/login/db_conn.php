<?php

//Isabelle Anno, 5/2/2023

//Defining variables to connect to database
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'login';

//connect to database with this variable
$dbc = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
//check for errors
if(!$dbc)
{
    die('Failed to connect to database.'.mysqli_connect_error());
}

