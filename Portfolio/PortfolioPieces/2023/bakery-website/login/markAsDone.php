<?php 
// This page is for moving an order record from currentorders table to completedorders table.
// This page is accessed through viewCurrent.php.
include('loginheader.php');
echo '<h1 class="text-center aesthetnova my-4">Complete an Order</h1>';
// Check for a valid order ID, through GET or POST:
if ( (isset($_GET['id'])) && (is_numeric($_GET['id'])) ) { // From viewCurrent.php
	$id = $_GET['id'];
} elseif ( (isset($_POST['id'])) && (is_numeric($_POST['id'])) ) { // Form submission.
	$id = $_POST['id'];
} else { // No valid ID, kill the script.
	echo '<h3 class=" text-center error">This page has been accessed in error.</h3> 	<p class="text-center my-3"><a class="button btn btn-success text-center" href="viewCurrent.php">Go back</a></p> ';
	include('includes/footer.html');
	exit();
}
require('orderDBConn.php');
// Check if the form has been submitted:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if ($_POST['sure'] == 'Yes') { // Move the record.

		// Gather information about the order, put it in an array
        $td = "SELECT (order_description) FROM currentorders WHERE order_id=$id";
	    $r = @mysqli_query($dbc, $td);
		$row = mysqli_fetch_array($r, MYSQLI_NUM);
        //Make the insert query- insert the data into the completedorders table
		$q1 = "INSERT INTO completedorders VALUES ('$id', '$row[0]',NOW())";
		$r1 = @mysqli_query($dbc, $q1);
        //Delete the data from the currentorders table
        $q2 = "DELETE FROM currentorders WHERE order_id=$id LIMIT 1";
		$r2 = @mysqli_query($dbc, $q2);
		if (mysqli_affected_rows($dbc) == 1) { // If the queries ran OK.
            // Print a message:
			echo '<h4 class="text-center">This order has successfully been marked as completed.</h4> <p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="viewCurrent.php">Back to Orders</a></p>';
		} else { // If the query did not run OK.
			echo '<p class="text-danger error">This order could not be marked as completed due to a system error.</p>'; // Public message.
			echo '<p>' . mysqli_error($dbc) . '<br>Query: ' . $q2 . '</p>'; // Debugging message.
		}
	} else { // No confirmation of deletion.
		echo '<h4 class="text-center">This order has <b class="text-danger">NOT</b> been marked as completed.</h4>  <p class="text-center my-5"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="viewCurrent.php">Back to orders</a></p>';
	}
} else { // Show the form.
	// Retrieve the order's information:
	$td = "SELECT (order_description) FROM currentorders WHERE order_id=$id";
	$r = @mysqli_query($dbc, $td);
	if (mysqli_num_rows($r) == 1) { // Valid order ID, show the form.
		// Get the order's information:
		$row = mysqli_fetch_array($r, MYSQLI_NUM);
		// Display the record being moved:
		echo "<h2 class='text-center'>Description: $row[0]</h2>

		<h4 class='text-center my-3'>Do you want to mark this order as completed?</h4>
";
		
		// Create the form:
		echo '<form action="markAsDone.php" method="post">
	<p class="text-center"><input type="radio" name="sure" value="Yes"> Yes</p>
	<p class="text-center"> <input type="radio" name="sure" value="No" checked="checked"> No</p>

	<p class="text-center"><input class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" type="submit" name="submit" value="Submit"></p>
	<input type="hidden" name="id" value="' . $id . '">
	</form>';
	} else { // Not a valid order ID.
			echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center 3"><a class="button btn btn-success text-center" href="viewCurrent.php">Go back</a></p> ';
	}
} // End of the main submission conditional.
mysqli_close($dbc);
include('loginfooter.php');
?>