<?php 
//Isabelle Anno 5/3/2023
// This page is for deleting a order record.
include('loginheader.php');
?>
<!--Main Content Start-->
<div class="container">
<div class="row flex-mobile py-5">
<h1 class="text-center aesthetnova my-4">Delete an Order </h1>
<!--PHP start-->
<?php 

// This page is accessed through viewCurrent.php.

// Check for a valid order ID, through GET or POST:
if ( (isset($_GET['id'])) && (is_numeric($_GET['id'])) ) { // From viewCurrent.php
	$id = $_GET['id'];
} elseif ( (isset($_POST['id'])) && (is_numeric($_POST['id'])) ) { // Form submission.
	$id = $_POST['id'];
} else { // No valid ID, kill the script.
				echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3 text-center" href="viewCurrent.php">Go back</a></p> ';
	include('loginfooter.php');
	exit();
}
require('orderDBConn.php');
// Check if the form has been submitted:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if ($_POST['sure'] == 'Yes') { // Delete the record.
		// Make the query:
		$q = "DELETE FROM currentorders WHERE order_id=$id LIMIT 1";
		$r = @mysqli_query($dbc, $q);
		if (mysqli_affected_rows($dbc) == 1) { // If it ran OK.
// Print a message:
			echo '<h4 class="text-center">✅ This order has successfully been deleted.</h4> <p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="viewCurrent.php">Back to Orders</a></p>';
		} else { // If the query did not run OK.
			echo '<p class="error">This order could not be deleted due to a system error.</p>'; // Public message.
			echo '<p>' . mysqli_error($dbc) . '<br>Query: ' . $q . '</p>'; // Debugging message.
		}
	} else { // No confirmation of deletion.
		echo '<h3 class="text-center">This order has <b class="text-danger">NOT</b> been deleted.</h3> <p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="viewCurrent.php">Back to orders</a></p>';
	}
} else { // Show the form.
	// Retrieve the order's information:
	$q = "SELECT (order_description) FROM currentorders WHERE order_id=$id";
	$r = @mysqli_query($dbc, $q);
	if (mysqli_num_rows($r) == 1) { // Valid order ID, show the form.
		// Get the order's information:
		$row = mysqli_fetch_array($r, MYSQLI_NUM);
		// Display the record being deleted:
		echo "<h2 class='text-center'>Name: $row[0]</h2>

		<h4 class='text-center'>If you delete a order, it will be <b>destroyed</b> and <b>WON'T</b> be checked as completed.</h4>
		<h4 class='text-center'>Proceed anyways?</h4>";
		// Create the form:
		echo '
		<form action="deleteOrder.php" method="post">
<h3  class="text-center my-3"><input type="radio" name="sure" value="Yes"> Yes </h3>
<h3  class="text-center my-3"><input type="radio" name="sure" value="No" checked="checked"> No  </h3>
<p  class="text-center my-3"><input type="submit" name="submit" value="Submit" class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3"> </p>
	<input type="hidden" name="id" value="' . $id . '">
	</form>
	</div>
	</div>';
	} else { // Not a valid order ID.
			echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3 text-center" href="viewCurrent.php">Go back</a></p> ';
	}
} // End of the main submission conditional.
mysqli_close($dbc);
?>
<!--PHP End-->
  </div>
</div>
<!--Main Content End-->
<?php include "loginfooter.php" ?>
