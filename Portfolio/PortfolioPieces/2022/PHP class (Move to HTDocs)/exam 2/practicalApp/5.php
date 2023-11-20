<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->
<!--Isabelle Anno, 4/13/2022-->

<article class="main-content col-xs-8 text-align-center">
<div id="p-container">
	<h2>Our trip to Sonic Calculator</h2>
<p>I usually eat healthy foods, but the other day, my fiance and I had a cheat meal. We totally stuffed our faces with a bunch of junk food at Sonic. it was awesome! 
	Here's a table of everything we both ordered:
</p>
</div>

<?php  
//Define and display the table and calculate the subtotal
	$menu = ['🍔Hamburger' => 3.50,'🍟Large Fries' => 1.00,'🥪Chicken Sandwich' => 2.00, '🧃Apple Juice' => 0.75,'🥤Medium Cookies n\' Cream shake' => 1.75,];
	$quantity;
	$subtotal = 0;
	//Start the table
	echo "<table>";
	echo "<thead>";
	echo "<tr>";
	echo "<td><u>Item</u></td><td><u>Price</u></td><td><u>Total Quantity</u></td>";
	echo "</tr>";
	echo "</thead>";
	echo "<tbody>";
	//Start the foreach loop that goes through the array to display the table and calculate the subtotal
	foreach ($menu as $name => $price){
		if($name == '🍟Large Fries' || $name == '🍔Hamburger'){
			$quantity = 2;
		}else {
			$quantity = 1;
		}
		echo "<tr> <td>$name</td><td>$".number_format($price, 2)."</td><td>$quantity</td></tr>";
		$subtotal = $subtotal + ($price * $quantity);
	}
	//end the table
	echo "</tbody>";
		echo "</table>";
		?>

<div id="p-container">
	<hr />
<p>
	The tax rate in Ohio is 7.5%, and we also tipped 15%. 
</p>
</div>
<?php
//Calculate the total and display both the subtotal and total.
$subtotal = number_format($subtotal, 2);
$tax = $subtotal *(7.5/100);
$tip = $subtotal *(15/100);
$total = $subtotal + $tax + $tip;
$total = number_format($total, 2);
echo ('<p>This brings our subtotal to '.'$'. $subtotal.'. <br> <br>Our total including tax and tips is '.'$'. round($total,2).'.</p>');

	/*  
	
 
	***Humor is always welcome ~ but keep it appropriate ;) ***
	
	Step 1: Create a PHP program that computes the total cost of this meal (feel free to modify menu items):

		 *  soda ~ $.85 (refills are free)
		 *  sals tax rate ~ 7.5%
		 *  pre-tax tip ~ 16%  
	
	Step 2: Make sure the page is formatted beautifully
	
		 *  The finished page should include the following to receive full credit:
				*  Comments  / name, date, description
				*  Header
				*  Details about the menu items / show each item along with corresponding price
				*  Sub total of meal before tax and tip
				*  Total which includes meal cost, tax, and tip
				*  Incorporate CSS, this will make or break the interview process! ;)
				
	The image is a guide only, your submission will be amazing!
	*helpful code for total ~ echo "The cost of my meal, including tax and tip:  " . "$". round($total,2);
	
*/
?>




</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>