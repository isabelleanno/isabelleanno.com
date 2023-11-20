<!--Isabelle Anno 4/29/2022 -->
<?php 
    //standard connection to the database
    $mysqli = new mysqli ("localhost", "root", "111917", "myforum");
    if($mysqli -> connect_errno)
    {
        echo "Failed to connect to MYSQL: (".$mysqli->connect_errno.")".$mysqli->connect_error;

        if(isset($_GET['message'])){
            $user = $mysqli ->real_escape_string($_GET['user']);
            $message = $mysqli-> real_escape_string ($_GET['message']);
            $date = date('Y-m-d H:i:s');

            $sql = "INSERT INTO posts(userId, message, dateOfPost) VALUES ('$user', '$message', '$date')";
            $mysqli -> query($sql);
        }
    }
    ?>
    <!--Standard Forum -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Messaging Board</title>
</head>
<body>
    <h2>My first forum</h2>
    <?php
    $sql = "SELECT * FROM posts";
    $result = $mysqli -> query($sql);

    while ($row = $result -> fetch_assoc())
    {
        echo $row['userId'].', '.$row['dateOfPost'].'<br>';
        echo $row['message'].'<br>';
        echo '-----------------------------<br>';
    }
    ?>
    <form method="get" action="index.php">
        <p>User:
            <label for="user"></label>
            <input name="user" id="user" type="text">
            <br>
        </p>
        <p>Message: 
            <br>
            <label for="message"></label>
            <textarea name="message" id="message" cols="45" rows="5"></textarea>
        </p>
        <p>
            <input type="submit" name="submit" id="submit" value="post message" >
        </p>
    </form>
</body>
</html>