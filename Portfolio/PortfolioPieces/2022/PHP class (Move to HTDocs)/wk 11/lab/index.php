<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Made by: Isabelle Anno, 4/6/2022 -->
    <!-- Required meta tags -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Daily Motivational Quote Lab</title>
    <!--Custom stylesheet-->
    <link rel="stylesheet" href="css/styles.css" />
    <!--Font Awesome-->
    <script
      src="https://kit.fontawesome.com/d0e89170d1.js"
      crossorigin="anonymous"
    ></script>
    <!--Google Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
      rel="stylesheet"
    />
    <!--Bootstrap CSS-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>

      <!--Document body start-->
      <div id="header" class="d-flex align-items-center justify-content-center">
        <h1 class="display-4">Motivational Quote Of The Day 💪</h1>
        <?php   $today = date("l");
         if ($today === "Monday"){
           echo'<h3 class="mt-3"> Today is Monday!</h3>';
          
         } else if($today == "Tuesday"){
           echo'<h3 class="mt-3"> Today is Tuesday!</h3>';
         
         }else if($today == "Wednesday"){
           echo'<h3 class="mt-3"> Today is Wednesday!</h3>';
            
         }else if($today == "Thursday"){
           echo'<h3 class="mt-3"> Today is Thursday!</h3>';
            
         }else if($today == "Friday"){
           echo'<h3 class="mt-3"> Today is Friday!</h3>';
          
         }else if($today == "Saturday"){
           echo'<h3 class="mt-3"> Today is Saturday!</h3>';
           
         }else {
           echo'<h3 class="mt-3"> Today is Sunday!</h3>';
           
         } 
        ?>
      </div>
      <div id="body" class="d-flex justify-content-center">
        <div class="col-6 img-display">
          <br />
          <?php 
      
         if ($today === "Monday"){         
             echo "<img src= 'images/Monday.jpg'>";
         } else if($today == "Tuesday"){         
             echo "<img src= 'images/Tuesday.jpg'>";
         }else if($today == "Wednesday"){      
             echo "<img src= 'images/Wednesday.jpg'>";
         }else if($today == "Thursday"){
            echo "<img src= 'images/Thursday.jpg'>";
         }else if($today == "Friday"){
             echo "<img src= 'images/Friday.jpg'>";
         }else if($today == "Saturday"){
             echo "<img src= 'images/Saturday.png'>";
         }else {
             echo "<img src= 'images/Sunday.jpg'>";
         } 
         ?>
          <hr />
          <h3 class="text-align-center">
            I hope you're having a great day today! 🌞
          </h3>
          <h5 class="text-align-center">If not, tomorrow will be better.🌈</h5>
        </div>

      <!--Document body end-->
    </div>
  </body>
</html>
