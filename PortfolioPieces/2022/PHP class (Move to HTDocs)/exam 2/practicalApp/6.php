<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->

<!--Isabelle Anno, 4/13/2022-->
<article class="main-content col-xs-8">
<div id="p-container"><h2>Is 53 an even or an odd number?</h2>
<p>One of the biggest questions scientists have been puzzling over lately is whether 53 is an even or an odd number. 
	If we can't figure this one out, We'll never make it to Mars! Desperate and out of ideas, NASA called Stark State college,
	 asking if the students in Professor Kathy Ison's PHP class could make a program to solve this dilemma, so here goes nothing:</p></div>
<?php  
const EvenOrOdd = 53;
if (EvenOrOdd % 2 == 0){
	echo("<h1>53 IS AN EVEN NUMBER! ☄️</h1>");
} else {
	echo("<h1>53 IS AN ODD NUMBER! 👽</h1>");
}
?>





</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>