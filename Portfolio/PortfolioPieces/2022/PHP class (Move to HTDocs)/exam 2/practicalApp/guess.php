<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->

<!--Isabelle Anno, 4/13/2022-->
<article class="main-content col-xs-8">

<?php 

// complete  the guess.php code; replace any occurrence of ??

$randomNumber= rand(1, 5);

$guess = $_POST['guess'];

		if ($guess != $randomNumber)
{
echo('<div id="guessingGame"> <h1 class="bigh1 m-0">'."$guess is <span id=incorrect>incorrect.</span></h1>
    <br> 
    <p>Unfortunately, you did not guess the number right. I was thinking of the number <b>".$randomNumber."</b>. You now have bad luck!
     Hurry, you must get it correct to lift the curse!🧙 </p>
     <h2>Do you want to play again?</h2>
     <br>
    ".'<div ><a class="guessingGameButtons" href="8.php">Yes please!</a>'.'<a class="guessingGameButtons" href="AreYouSure.php">No thanks!</a></div> </div><br>');
}

else if ($guess == $randomNumber)
{
	echo('<div id="guessingGame"> <h1 class="bigh1 m-0">'."$guess is <span id=correct>correct!</span></h1>
    <br> 
    <p>You got it right, how did you know what I was thinking?! Are you a mind-reader? 🔮 </p>
    <p>Here, have some good luck. 🍀 You will have a splended day today! </p>
    <h2>Do you want to play again?</h2>
    <br>
    ".'<div ><a class="guessingGameButtons" href="8.php">Yes please!</a>'.'<a class="guessingGameButtons" href="index.php">No thanks!</a></div></div> <br>');
}
else {
    echo("error");
}


/*	
		 *  The finished page should include the following to receive full credit:
				*  Comments  / name, date, description
				*  Incorporate CSS, this will make or break the interview process! ;)
				*  Make sure the html and php files contain the correct code to function like a guessing game
				*  Modify the code to make it unique
				

	
*/

?>



</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>