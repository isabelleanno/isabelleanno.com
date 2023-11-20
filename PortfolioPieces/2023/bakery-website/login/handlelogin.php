
<?php
//Isabelle Anno, 5/2/2023
session_start(); 
include "db_conn.php";

if(isset($_POST['username']) && isset($_POST['password'])) {

    //Validates usernames and passwords for security purposes and to trim any spaces. 
function validate ($data) { 
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return($data);
    };
}
//Run validate function with username and password
$username = validate($_POST['username']);
$password = validate($_POST['password']);

//Throw error codes if username or passwords are empty

if(empty($username)) {
    header("Location: ../login.php?error=Username is required");
    exit();
} else if(empty($password)) {
    header("Location: ../login.php?error=Password is required");
    exit();
}
//Create SQL query for the username and password database.
$sql = "SELECT  * FROM users WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($dbc,$sql);

//If the results match a result in the database, logged in and create login session!
$row = mysqli_fetch_assoc($result);
if($row['username'] === $username && $row['password'] === $password){
    echo"Logged in!";
    $_SESSION ['username'] = $row['username'];
    $_SESSION ['name'] = $row['name'];
    $_SESSION ['id'] = $row['id'];
    header("Location: successfulLogin.php");
    exit();
}
//Else, display error message. 
else{
    header("Location: ../login.php?error=Incorrect Username or password");
    exit();
}
?>