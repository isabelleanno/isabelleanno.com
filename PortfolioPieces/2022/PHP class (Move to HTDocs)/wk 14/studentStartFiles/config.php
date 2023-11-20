<?php
/* Database credentials. Make sure to include your password */
/* This is a more standard approach to establishing a connection */
/* There are those who choose to use the PDO or Object Oriented approach, but this is fine */

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '111917');
define('DB_NAME', 'myCompany');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>
