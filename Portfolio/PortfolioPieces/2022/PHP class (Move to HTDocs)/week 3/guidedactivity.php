<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>week 3 guided activity</title>
  </head>
  <body>
    <!--Isabelle Anno 2/4/2022-->
      <?php 
      echo"<h1>Working with strings</h1>";
      //1
      echo "<h2>Activity #1</h2>";
      echo'<p>Tomorrow, I\'ll learn PHP global variables.</p>'."\n"; 
      echo'<p>Do you know what this command does? ~del c:\\*.*</p>'."\n";
      echo'<p>It\'s a shame we never seem to accomplish all of our daily tasks. Why do you suppose that is the case?</p>';
      
      //2
      echo "<h2>Activity #2</h2>";
      $PHPtutorial = "PHP tutorial";
      echo "<h3>$PHPtutorial</h3>";
      echo"PHP, an acronym for Hypertext Preprocessor,
      is a widely-used open source general-purpose scripting
      language. "."<a href=\"#\">Go to the $PHPtutorial</a>";

      //3
      echo "<h2>Activity #3</h2>";
      echo "abcdefghijklmnopqrstuvwxyz";

      //4
      echo "<h2>Activity #4</h2>";

      $quote = "If it’s important to you, you’ll find a way. If not, you’ll find an excuse.";
      $inspirational = explode(" ", $quote);

      for($i=0;$i <5;$i++) {
        echo "$inspirational[$i] ";
      } 
//I modified this activity- I could've used implode and array_slice and it would've worked,but using explode and a for loop also works.

      //5
      echo "<h2>Activity #5</h2>";

      $numericstring = '2,543.12';
      $nocommas = str_replace(',','',$numericstring);
      echo("$nocommas");

      //6
      echo "<h2>Activity #6</h2>";
       //Got from solutions- still need to fully comprehend nested loops. I can resubmit this assignment again when I come up with my own solution if you want.
    for ($i = 1; $i < 13; $i++)
        {
         
          for ($j = 1; $j < 13; $j++) 
            {
               if ($j == 1) 
                {
                  echo str_pad($i * $j, 2, " ", STR_PAD_LEFT);
                } 
               else 
               {
                   echo str_pad($i * $j, 4, " ", STR_PAD_LEFT);
                }
            }
                echo "<br>";
        }

//working with numbers activities
echo"<h1>Working with numbers</h1>";

       //1
        echo "<h2> Numbers Activity #1</h2>";

        $dates = array('2022-01-01', '2021-02-03', '2020-04-23', '2022-02-11');
        echo "latest date is: ".max($dates)."\n";
        echo "earliest date is: ".min($dates)."\n";

         //2
        echo "<h2> Numbers Activity #2</h2>";

          $x=160;
          $y=15;
          $mod = $x % $y;
        echo"X is $x and Y is $y. The modulus of these two numbers is $mod.";

         //3
        echo "<h2> Numbers Activity #3</h2>";
        $num = 213;
        if ($num % 2 == 0){
          echo "$num is an even number. ";
        } else {
          echo "$num is an odd number. ";
        }

        //4
        echo "<h2> Numbers Activity #4</h2>";

        /*I'm so sorry I couldn't think of how to do it, so I looked at your solution and I had a stroke trying to read your function- which is
        not your fault- it's mine. I barely survived algebra class. I'm not going to plagiarize you or pretend to know how to do that.
        I hope you understand. I did learn something from your solution though- I didn't know sin, cos, tan, pi and square root are functions
        in PHP. That's cool! I hope I don't need to use them too often on websites though- because if so i'll have a lot to get used to. */

        $NewYork = "reallyFarEast";
        $LosAngeles = "reallyFarWest";
        $MilesBetween =  1222.78; //googled
        echo "There are $MilesBetween miles between New York and Los Angeles.";

        //5
        echo "<h2> Numbers Activity #5</h2>";
    
        $total = 0;
        for($i=1; $i<=50; $i++)
        {
            $total +=$i;
        }
        echo "The sum of every number from 0 to 50 is $total";

        //6
        echo "<h2> Numbers Activity #6</h2>";



      ?>

        <form action="calendar.php" method="post">
    <?php 
    $months = [ 1 =>'January', 'February','March','April','May',"June","July","August","September","October","November","December"];
    $days = range(1, 31);
    $years = range(2017, 2027);

    echo '<select name="month">';
    foreach($months as $key => $value){
        echo "<option value= \"$key\">
        $value</option>\n";
    } echo'</select>';

   echo '<select name="day">';
    foreach($days as $value){
        echo "<option value= \"$value\">
        $value</option>\n";
    } echo'</select>';

   echo '<select name="year">';
    foreach($years as $value){
        echo "<option value= \"$value\">
        $value</option>\n";
    } echo'</select>';

    ?>
    </form>

  </body>
</html>
