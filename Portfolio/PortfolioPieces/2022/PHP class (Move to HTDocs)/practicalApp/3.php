<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">

<?php  
//I'm 20 now, so my loop adds 1 to my age until it's 30 (so it runs 10 times) and displays each number in part of a paragraph
echo ("<h3> 📅 My age chart from now until 10 years later. </h3>");
	echo "<p>";
	for ($i=20; $i <= 30; $i++){
		echo (" $i ");
	}
	echo "</p>";
echo ("<hr>");
	   print ('<p> 🗨️👩 Good morning, how are you?</p>');
	   print ('<p>🗨️😐I\'m fine </p>');
?>

</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>