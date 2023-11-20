<?php 
//Isabelle Anno 5/3/2023
// This page is for deleting an order record.
include('loginheader.php');
?>
<!--Main Content Start-->
<div class="container">
<div class="row flex-mobile py-5">
<h1 class="text-center aesthetnova my-4">Edit an Order </h1>
<!--PHP start-->
<?php 
// Check for a valid order ID, through GET or POST:
if ( (isset($_GET['id'])) && (is_numeric($_GET['id'])) ) { // From viewCurrent.php
	$id = $_GET['id'];
} elseif ( (isset($_POST['id'])) && (is_numeric($_POST['id'])) ) { // Form submission.
	$id = $_POST['id'];
} else { // No valid ID, kill the script.
				echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3 text-center" href="viewCurrent.php">Go back</a></p> ';
	include('includes/footer.html');
	exit();
}
require('orderDBConn.php');
// Check if the form has been submitted:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$errors = [];
	// Check for a customer name:
	if (empty($_POST['customer_name'])) {
		$errors[] = 'You forgot to enter your customer\'s name.';
	} else {
		$td = mysqli_real_escape_string($dbc, trim($_POST['customer_name']));
	}
	// Check for a order description:
	if (empty($_POST['order_description'])) {
		$errors[] = 'You forgot to enter your order description.';
	} else {
		$od = mysqli_real_escape_string($dbc, trim($_POST['order_description']));
	}
	// Check for a due date:
	if (empty($_POST['due_date'])) {
		$errors[] = 'You forgot to enter a due date.';
	} else {
		$dd = mysqli_real_escape_string($dbc, trim($_POST['due_date']));
	}

	if (empty($errors)) { // If everything's OK.
			// Make the query:
			$q = "UPDATE currentorders SET customer_name='$td', order_description='$od', due_date='$dd' WHERE order_id=$id LIMIT 1";
			$r = @mysqli_query($dbc, $q);
			if (mysqli_affected_rows($dbc) == 1) { // If it ran OK.
				// Print a message:
				echo '<h3 class=" text-center text-success">**The order has been successfully edited.**</h3> 
				<p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="viewCurrent.php">View your orders</a></p> 
				<br>';
			} else { // If it did not run OK.
				echo '<h3 class="text-center text-danger error">**The order could not be edited.**</h3> <p class="text-center text-danger"> Make sure you\'ve modified at least one field before submitting.</p> <br>'; // Public message.
			}
		} else { // Report the errors.
				echo '<div id="container">
		<div class="errorwrapper">';
	echo '<h3 class="page_header text-danger text-center">❌Unable to edit order</h3>
		<p class=" text-center text-danger error">The following error(s) occurred:<br>';
		foreach ($errors as $msg) { // Print each error.
			echo " - $msg<br>\n";
		}
		echo '</p><p class="text-center m-0">Please try again.</p> </div> </div>';
	}	
	} // End of if (empty($errors)) IF.

// Always show the form...
// Retrieve torder's information:
$q = "SELECT customer_name,order_description, due_date FROM currentorders WHERE order_id=$id";
$r = @mysqli_query($dbc, $q);
if (mysqli_num_rows($r) == 1) { // Valid order ID, show the form.
	// Get the order's information:
	$row = mysqli_fetch_array($r, MYSQLI_NUM);
	// Create the form:
	echo '
<div class="col-12 d-flex justify-content-center">
<div class="col col-md-3 flex-column">
<form action="editOrder.php" method="post">
<h4 class="text-center my-3">You are currently editing a order named <b>"'.$row[0].'".</b></h4>
<br>
<p class="text-center ">Customer Name:  <input type="text" name="customer_name" class="form-control form-border" value="' . $row[0] . '"></p>
<p class="text-center my-3">Order Description: <input type="text" name="order_description" class="form-control form-border" size="500" value="' . $row[1] . '"></p>
<p class="text-center">Due Date: <input  type="date" name="due_date" size="15" class="form-control form-border"  value="' . $row[2] . '"></p>
<p class="text-center my-3"><input class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" type="submit" name="submit" value="Submit Changes"></p>
<input type="hidden" name="id" value="' . $id . '">
</form> </div>
</div>
</div>';
} else { // Not a valid order ID.
			echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-3"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3 text-center" href="viewCurrent.php">Go back</a></p> ';
}
mysqli_close($dbc);
?>
<!--PHP End-->
  </div>
</div>
<!--Main Content End-->
<?php include "loginfooter.php" ?>
