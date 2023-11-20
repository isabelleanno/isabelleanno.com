<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Isabelle Anno, 2/5/2022-->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--Google fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap"
      rel="stylesheet"
    />
            <?php 
        $earth = $_POST['earth']; //This is the weight in lb input from the earth to moon section
        $units = $_POST['units']; /*This is to select lb or kg. It is for display purposes only. 
        Since the formula above is a ratio, the units don't really matter- the formula is the same. For more information about how this works, 
        visit http://learningaboutelectronics.com/Articles/Weight-on-the-moon-conversion-calculator.php#:~:text=Being%20that%20it%20takes%20the%20weight%20of%20an,2.%20This%20calculates%20the%20mass%20of%20the%20object. */
        $moon = round(($earth / 9.81)*1.622); //This is the formula that converts weight on earth to weight on the moon- I rounded off decimal places.
        $r = $_POST['red']; //This is the "red" part of the RGB color.
        $g = $_POST['green']; //This is the "green" part of the RGB color.
        $b = $_POST['blue']; //This is the "blue" part of the RGB color.
        $backgroundcolor = "rgb($r, $g, $b)"; //After getting $r, $g, and $b, I put them in this variable to change the randomcolor class in the CSS.
    ?>

    <title>Week 3 lab</title>
    <!--CSS-->
    <style>
      * {
        font-family: "Montserrat", sans-serif;
      }
      .content {
        display: flex;
        justify-content: center;
      }
      fieldset {
        align-items: center;
        width: 60%;
        color: black;
        border: 1px solid black;
        box-shadow: 8px 8px 14px 6px #fee7ff;
        border-radius: 5px;
        margin-bottom: 1vh;
      }

      h2 {
        margin: 0;
      }
      .h2 {
        color: #e284e6;
      }
      ul {
        list-style-type: circle;
      }
      hr {
        width: 90%;
      }
      .part1 {
        margin: 1.7rem 0 1.7rem 0;
      }
      .formFormatter {
        display: flex;
        justify-content: space-evenly;
      }
      .form-cards {
        margin-top: 2vh;
        border: 1px solid black;
        border-radius: 5px;
        padding: 2vh;
        width: 40%;
        text-align: center;
      }

        .random-color {
        border: 1px solid black;
        height: 10vh;
        background-color: <?=$backgroundcolor?> 

    }
    .error{
        color: red;
    }

    </style>
  </head>
  <body>

    <div class="content">
      <fieldset>
        <legend><h1>Week 3 lab 🧪</h1></legend>
        <h2 class="h2">Part 1:</h2>

        <ul>
          <li>
            <p class="part1">
              There are two types of scripting languages: client-side and
              server-side. We need a server to view PHP code because unlike
              Javascript, PHP is a server-side scripting language. Because PHP
              is a server-side language, it can be more secure than client-side
              languages which are more out in the open and can possibly be seen
              by users.
            </p>
          </li>
          <hr />
          <li>
            <p class="part1">
              GET and POST are two types of http requests. Http requests are how
              the client and the server talk to each other. Usually, we only use
              GET to retrieve information that's not sensitive or confidential.
              GET requests are sent through the URL of a webpage. They can be
              bookmarked, and have length restrictions. On the other hand, POST
              is more secure and the data gets transferred behind the scenes.
              For example, setting or changing a password should always be used
              with POST, while retrieving weather information from an API can be
              used with GET.
            </p>
          </li>
        </ul>
        <h2 class="h2">Part 2:</h2>
        <div class="formFormatter">
          <div class="form-cards">
            <h2 id="randomcolor">Color Generator🎨</h2>
            <?php //Data validation for the color generator. Data must be positive numeric numbers that are less than or equal to 255. Strings and negative numbers are not allowed.
             if (($r <= 255 && $g <=255 && $b <= 255) && (is_numeric($r) && is_numeric($g) && is_numeric($b)) && ($r >= 0 && $g >=0 && b >= 0) ){
                echo "Your color in RGB is: red: $r, green $g, blue $b. It is displayed below! <br> <div class=\"random-color\"></div>";}
              else {
                echo "<p class=\"error\">You entered in a value outside of the parameters. Please go back and type in three numbers between 0 to 255. </p>";
              }
            ?>

          </div>
          <div class="form-cards">
            <h2>Weight on the moon 🌙</h2>
           <?php //Data validation for weight on the moon. Data must be a positive numeric number. Strings and negative numbers are not allowed.
           if ((is_numeric($earth)) && ($earth >= 0)){
               echo "You entered $earth lb. That would weigh $moon $units on the moon!" ;}
              else {
                 echo "<p class=\"error\">You entered a value that we can't work with. Please go back and try again. Enter a positive numeric value. </p>";
              }
         
            ?>
          </div>
        </div>
      </fieldset>
    </div>
  </body>
</html>
