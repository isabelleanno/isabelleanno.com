<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">
<h2>Slot Machine Game 🕹️</h2>
<br>
<form method="post" action="slots.php">
	<input type="submit" class="lever" value="Spin again!">
</form>


<?php  

	echo"<h1 class='slots'>";
	$randomNumbers = array();

for($i=1;$i<4;$i++){
$rn = rand(1, 4);
$randomNumbers[]=$rn;

if($rn === 1){
	echo("🍀");
}elseif($rn === 2){
	echo("💰");
}elseif($rn === 3){
	echo("🌈");
}else{
	echo("😊");
}

}
echo "</h1>";

if($randomNumbers[0] === $randomNumbers[1] && $randomNumbers[1] === $randomNumbers[2] ){
	echo("<div class='jackpot'><h1>JACKPOT!</h1><br><img src='jackpot.gif'></div>");
}

?>




</article>
	
<?php include "includes/footer.php" ?>