<?php # calculator.php Isabelle Anno 2/15/2022
$page_title = 'Trip Cost Calculator';

function make_gallon_radio($value)
{
echo '<input type="radio" name="gallon_price" value="'.$value.'"';
if(isset($_POST['gallon_price']) && ($_POST['gallon_price'] == $value)) {
	echo 'checked = "checked"';
	echo "> $value ";
}
}

include('../includes-activity/includes/header.php');


// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
	// Minimal form validation:
	// Basically checks that three submitted variables are set and are all numeric types
	// If the validation passes, the calculations will be made; otherwise, the user will be asked to try again
	
	if (isset($_POST['distance'], $_POST['gallon_price'], $_POST['efficiency'], $_POST['speed']) &&
	 is_numeric($_POST['distance']) && is_numeric($_POST['gallon_price']) && is_numeric($_POST['efficiency']) && is_numeric($_POST['speed']) ) 
	 {
		
		// Calculate the results:
		// calculates the number of gallons of gasoline the trip will take, determined by dividing the distance by the fuel efficiency
		$gallons = $_POST['distance'] / $_POST['efficiency'];
		
		// calculates the cost of the fuel for the trip, determined by multiplying the number of gallons times the average price per gallon
		$dollars = $gallons * $_POST['gallon_price'];
		
		// calculates how long the trip will take, determined by dividing the distance by 65 (miles per hour)
		$hours = $_POST['distance'] / $_POST['speed'];
		
		// Print the results:
		// All of the values are printed, the cost and hours are formatted with the number_format() function_exists
		// Concatenate operator (.) allows the formatted numeric values to be appended to the printed message
		echo '<div class="page-header"><h1>Total Estimated Cost</h1></div>
		<p>The total cost of driving ' . $_POST['distance'] . ' miles, averaging ' . $_POST['efficiency'] . ' miles per gallon, and paying an average of $' . $_POST['gallon_price'] . ' per gallon, is $' . number_format($dollars, 2) . '. If you drive at an average of '  .$_POST['speed']. ' miles per hour, the trip will take approximately ' . number_format($hours, 2) . ' hours.</p>';
	}
	else 
	{ // Invalid submitted values.
		echo '<div class="page-header"><h1>Error!</h1></div>
		<p class="text-danger">Please enter a valid distance, price per gallon, and fuel efficiency.</p>';
	}
} // End of main submission IF.
// Leave the PHP section and create the HTML form:
?>

<div class="page-header"><h1>Trip Cost Calculator</h1></div>
<form action="calculator.php" method="post">
	<p>Average speed (in miles): <input type="number" name="speed"> </p>
	<p>Distance (in miles): <input type="number" name="distance"></p>
	<p>Average Price Per Gallon:
		<input type="radio" name="gallon_price" value="3.00" <?php if (isset($_POST['gallon-price']) && ($_POST['gallon-price'] == '3.00')) echo 'checked = "checked"' ?>> 3.00
		<input type="radio" name="gallon_price" value="3.50" <?php if (isset($_POST['gallon-price']) && ($_POST['gallon-price'] == '3.50')) echo 'checked = "checked"' ?>> 3.50
		<input type="radio" name="gallon_price" value="4.00" <?php if (isset($_POST['gallon-price']) && ($_POST['gallon-price'] == '4.00')) echo 'checked = "checked"' ?>> 4.00
	</p>
	<p>Fuel Efficiency: <select name="efficiency">
		<option value="10">Terrible</option>
		<option value="20">Decent</option>
		<option value="30">Very Good</option>
		<option value="50">Outstanding</option>
	</select></p>
	<p><input type="submit" name="submit" value="Calculate!"></p>
</form>

<?php include('../includes-activity/includes/footer.html'); ?>