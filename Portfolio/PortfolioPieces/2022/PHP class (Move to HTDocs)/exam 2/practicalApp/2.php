<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

		<?php Navigation();?>
			
			
	</aside><!--SIDEBAR-->


	<article class="main-content col-xs-8">
		


		<?php
		
		
		/*

		Step4: Demonstrate an example of using a constant
		
		*/
		 $number1 = 110;
		 $number2 = 220;
		 $sum = $number1 + $number2;
		 //I will NEVER outgrow my favorite childhood candies. They will always be my favorite!! :D
		 $favoriteCandies = ['Cotton Candy ' => '☁️','Lollipops '=>'🍭','Banana laffy taffies '=>' 🍌', 'Graeter\'s icecream ' => '🍨','Jelly beans ' =>'🍬','Bit o\' Honey '=>'🍯','Hershey\'s chocolate ' => '🍫'];
		 
		 echo ("<h2> My favorite candies are: </h2>");
		 echo ("<hr>");
		 foreach($favoriteCandies as $name => $emoji){

			 echo "<p>"."$name"."$emoji"."</p> <br />";

			}
			?>
	<hr>
		<?php
	
		const JOKE= "<p> Q: What do you call a rooster staring at a pile of lettuce?</p>";
		const PUNCHLINE = "<p>A:  A chicken sees a salad! 🥗🐓</p>";
		echo ("<h3>". JOKE."<br>". PUNCHLINE. "</h3>");

		?>	
	<hr>
		<?php

		echo ("<h4>Also, fun fact: The sum of ".$number1." and ".$number2." is " .$sum ."! Isn't that cool?"."</h4>");

 		?>		

	</article><!--MAIN CONTENT-->

		<?php include "includes/footer.php" ?>