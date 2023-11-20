<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Isabelle Anno, 1/28/2022-->

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend+Deca&amp;display=swap"
      rel="stylesheet"
    />
    <title>Form Feedback</title>
    <style>
      body {
        font-family: "lexend deca", sans-serif;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <?php 


    //defined variables based off activityForm_kmi.php
    $name = $_REQUEST['formName'];
    $age = $_REQUEST['formAge'];
    $movie = $_REQUEST['formMovie'];

    //data validation

    //name
    if (!empty($_REQUEST['formName'])) {
        $name = $_REQUEST['formName'];
    } else {
        $name = NULL;
        echo ('<p class="error">
    You didn\'t enter a name. Please submit your name!'); } 
    
    //age 
    if
    (!empty($_REQUEST['formAge'])) { $age = $_REQUEST['formAge']; } else { $age
    = NULL; echo ('
    <p class="error">
      You didn\'t enter an age. Please submit your age!'); } 
      
    //movie 
      if
      (!empty($_REQUEST['formMovie'])) { $movie = $_REQUEST['formMovie']; } else
      { $movie = NULL; echo ('
    </p>

    <p class="error">
      You didn\'t enter a movie. Please submit a favorite movie!'); } 
      
      //if all fields contian data, print one message- if not , print a different message. 
      
      if($name && $age && $movie !== NULL) { echo("
    </p>

    <p>
      Thank you <strong>$name</strong>, for sharing this information! We
      appreciate your feedback!
    </p>
    ");} else {echo('
    <p class="error">You didn\'t enter data, please enter all the fields!</p>
    ');} ?>
  </body>
</html>
