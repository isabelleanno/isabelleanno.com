<?php
//Isabelle Anno, 5/2/2023
// This script performs an INSERT query to add a record to the orders table.
session_start(); ?>

<?php include "loginheader.php"; ?>
<!--Main Content Start -->
<div class="my-3">
<h1 class="text-center mb-3 aesthetnova " >Create an Order </h1>
 <?php 
// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	require('orderDBConn.php'); // Connect to the db.
	$errors = []; // Initialize an error array.
	
	// Check for A CUSTOMER NAME:
	if (empty($_POST['customer_name'])) 
	{
		$errors[] = 'You forgot to enter the customer\'s name.';
	} else {
		$td = mysqli_real_escape_string($dbc, trim($_POST['customer_name']));
	}
	
		// Check for an order  description:
	if (empty($_POST['order_description'])) 
	{
		$errors[] = 'You forgot to enter the order description.';
	} else {
		$od = mysqli_real_escape_string($dbc, trim($_POST['order_description']));
	}
	
	// Check for a due date:
	if (empty($_POST['due_date'])) 
	{
		$errors[] = 'You forgot to enter when your order should be done.';
	} else 
	{
		$dd = mysqli_real_escape_string($dbc, trim($_POST['due_date']));
	}
	
	if (empty($errors)) 
		
	{ // If everything's OK.
		// Register the order in the database...
		
		// Make the query:
		$q = "INSERT INTO currentorders (customer_name,order_description,due_date) VALUES ('$td','$od', '$dd')";
		$r = @mysqli_query($dbc, $q); // Run the query.
		if ($r) 
			
		{ // If it ran OK.
			// Print a message:
			echo '
		<h4 class="text-center my-5"> ✅ You successfully created a new order!</h4>
		<p class="text-center my-5"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="viewCurrent.php">🔍View current orders</a> <a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="createOrder.php">📝 Create another order</a></p>
		</div>
		</div>';
		} else 
		
		{ // If it did not run OK.
			// Public message:
			echo '<h1>System Error</h1>
			<p class="error">Your order could not be added due to a system error. We apologize for any inconvenience.</p>';
			
			// Debugging message:
			echo '<p>' . mysqli_error($dbc) . '<br><br>Query: ' . $q . '</p>';
		} 
		
		// End of if ($r) IF.
		
		mysqli_close($dbc); // Close the database connection.
		
		// Include the footer and quit the script:
		include('includes/footer.html');
		exit();
	} else 
		
	{ 
	// Report the errors.
	echo '<div id="container">
		<div class="errorwrapper">';
		echo '<h3 class="page_header text-danger text-center">❌Unable to create order</h3>
		<p class=" text-center text-danger error">The following error(s) occurred:<br>';
		foreach ($errors as $msg) 
		{ 
		
		// Print each error.
			echo " - $msg<br>\n";
		}
		echo '</p><p class="text-center m-0">Please try again.</p> </div> </div>';
	} 
	
	// End of if (empty($errors)) IF.
	mysqli_close($dbc); // Close the database connection.
} 

// End of the main Submit conditional.
?>


<div class="col-12 d-flex justify-content-center">
<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 flex-column">
<form action="createOrder.php" method="post">
	<p class="text-center ">Customer Name: <input type="text" name="customer_name" class="form-control form-border" placeholder="Customer Name" value="<?php if (isset($_POST['customer_name'])) echo $_POST['customer_name']; ?>"></p>
	<p class="text-center">	Order Description: <textarea
	class="form-control form-border"
	name="order_description"
	placeholder="Description"
	rows="3"
	value="<?php if (isset($_POST['order_description'])) echo $_POST['order_description']; ?>"
	></textarea></p>
	<p class="text-center ">Due Date: <input type="date" name="due_date" size="15" class="form-control form-border" placeholder="Due Date" value="<?php if (isset($_POST['due_date'])) echo $_POST['due_date']; ?>"></p>
	<p class="text-center "><input class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" type="submit" name="submit" value="Create Order"></p>
</form>
</div>
</div>
</div>
<!-- Main Content End -->
<?php include "loginfooter.php"; 