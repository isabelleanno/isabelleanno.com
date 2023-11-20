<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">
<h2>Database Connections</h2>


<?php

//Connect using PDO

//Define variables
$db= 'mysql:host=localhost;dbname=guestbook;';
$username= 'root';
$pw= '111917';

//Try to connect, if successful display success message
try
{
$connect= new PDO($db, $username, $pw);
echo("connected to guestbook successfully using PDO.");
}

//Display error message if connection failed
catch (PDOException $error){

	echo 'Connection failed" ' . $error->getMessage();
}

?>

<?php
//Connect using MySQLi object-oriented approach

//define variables
$server = "localhost";
$dbname = "guestbook";
$user = "root";
$password = "111917";

//try to connect
$connect = new mysqli ($server,$user,$password, $dbname);

//Say whether it failed or succeeded
if($connect -> connect_error) {
	die("connection failed. ".$connect -> connect_error);
}
else {
	echo("<br> <br> Connected to ".$dbname." successfully using object-oriented MySQLi!");
}
?>

<p>
	Both ways of connecting to databases are surprisingly easy. I think I prefer MySQLi, but probably just because
	I'm more used to using this approach in assignments. I like the PDO because you can combine the database name and the stream_socket_server(localhost)
	in one variable, but "try" and "catch" can be confusing- I'm more used to just an if/else statement, it's a lot simpler. 
</p>

<?php  

/*  
	1)  Create a php file that connects to a database using PDO (PHP Data Objects).
	2)  Provide a brief summary of your thoughts about this type of connection.
	3)  Create a php file that connects to a database using an Object-Oriented approach.
	4)  Provide a brief summary of your thoughts about this type of connection.
	
*/

?>
</article>


<?php include "includes/footer.php" ?>