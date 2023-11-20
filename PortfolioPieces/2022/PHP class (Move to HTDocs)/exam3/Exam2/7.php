<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->

<!--Isabelle Anno, 4/13/2022-->
<article class="main-content col-xs-8">

	<h2>Squaring Numbers</h2>
<?php  

for ($i=1; $i <= 10; $i++){
	$square = $i * $i;
echo ("<p>$i squared is $square.</p>");

}

/*  


	***Humor is always welcome ~ but keep it appropriate ;) ***
	
	Step 1: Write a program to find the square of the first 10 numbers using a for loop
	
	Step 2: Make sure the page is formatted beautifully
	
		 *  The finished page should include the following to receive full credit:
				*  Comments  / name, date, description
				*  Header
				*  Print the number and answer to a web page
				*  Incorporate CSS, this will make or break the interview process! ;)
				

	
*/

?>
<p>Yay, math!</p>


</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>