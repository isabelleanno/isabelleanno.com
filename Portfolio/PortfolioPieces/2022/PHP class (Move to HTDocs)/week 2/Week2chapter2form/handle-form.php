<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form feedback</title>
</head>
<body>
    <?php #Script 2.2- handle_form.php
    
    //create a shorthand for the form data

if (!empty($_POST['name']) && !empty ($_POST['comments']) && !empty ($_POST['email'])){
        echo "<p>Thank you, <strong>{$_POST['name']}</strong>, for the following comments: </p>
        <pre>{$_POST['comments']}</pre>
        <p>We will reply to you at <em>{$_POST['email']}</em>.</p>\n";
} else {
    echo'Please go back and fill in every field of the form.';
}
    
    ?>
</body>
</html>