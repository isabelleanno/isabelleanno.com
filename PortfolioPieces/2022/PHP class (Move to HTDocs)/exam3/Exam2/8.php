<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->

<!--Isabelle Anno, 4/13/2022-->
<article class="main-content col-xs-8">
<h1>Guessing Game</h1>
<p>Your job is to choose what number I'm thinking of. It's between 1 and 5.</p>

<form action="guess.php" method="POST"> 
	<input type="submit" class="number" name="guess" value='1'> 
	<input type="submit" class="number" name="guess" value='2'> 
	<input type="submit" class="number" name="guess" value='3'> 
	<input type="submit" class="number" name="guess" value='4'> 
	<input type="submit" class="number" name="guess" value='5'> 
</form>




</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>