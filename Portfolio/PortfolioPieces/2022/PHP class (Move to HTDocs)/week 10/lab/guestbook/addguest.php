<?php 
// Isabelle Anno, 3/31/2022
$page_title = 'Add a Guest';
include('includes/header.html');


if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	require('../mysqli_connect.php'); // Connect to the database
	$errors = []; // Initialize an error array.
	
	// Validate first name:
	if (empty($_POST['firstName'])) 
	{
		$errors[] = 'You forgot to enter your first name.';
	} else {
		$fn = mysqli_real_escape_string($dbc, trim($_POST['firstName']));
	}
	
	// Validate last name:
	if (empty($_POST['lastName'])) 
	{
		$errors[] = 'You forgot to enter your last name.';
	} else 
	{
		$ln = mysqli_real_escape_string($dbc, trim($_POST['lastName']));
	}
	// Check for an email address:
	if (empty($_POST['email'])) 
	{
		$errors[] = 'You forgot to enter your email address.';
	} else 
	{
		$email = mysqli_real_escape_string($dbc, trim($_POST['email']));
	}
// Check for a comment:
	if (empty($_POST['comments'])) 
	{
		$errors[] = 'You forgot to enter a comment.';
	} else 
	{
		$comments = mysqli_real_escape_string($dbc, trim($_POST['comments']));
	}
	
	if (empty($errors)) 
		
	{ //If there are no errors, add to database
		
		$q = "INSERT INTO guests (firstName, lastName, email, comments) VALUES ('$fn', '$ln', '$email','$comments' )";
		$r = @mysqli_query($dbc, $q);
		if ($r) 
			
		{ // If it ran without issues, print a confirmation message:
			echo '<div class="content"><h1>Thank you!</h1>
		<p>You are now registered. Great job!</p><p><br></p></div>';
		} else 
		
		{ // If there were errors, print this public message to the user
			echo '<div class="content"><h1>System Error</h1>
			<p class="error">You could not be registered due to a system error. We apologize for any inconvenience.</p></div>';
			
			// Debugging message for devs
			echo '<p>' . mysqli_error($dbc) . '<br><br>Query: ' . $q . '</p>';
		} 
		
		mysqli_close($dbc); // Close the database connection.
		
		include('includes/footer.html');
		exit();
	} else 
	{ 
	// Report found errors
		echo '<h1>Error!</h1>
		<p class="error">The following error(s) occurred:<br>';
		foreach ($errors as $msg) 
		{ 
			echo " - $msg<br>\n";
		}
		echo '</p><p>Please try again.</p><p><br></p>';
	} 
	mysqli_close($dbc); 
} 
?>
<div class="content">
	<div class="form">
<h1>Add a guest</h1>
<form action="addguest.php" method="post">
	<p>First Name:</p> <input type="text" name="firstName" value="<?php if (isset($_POST['firstName'])) echo $_POST['firstName']; ?>">
	<p>Last Name:</p> <input type="text" name="lastName" value="<?php if (isset($_POST['lastName'])) echo $_POST['lastName']; ?>">
	<p>Email Address:</p> <input type="email" name="email" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>" >
	<p>Comments:</p> <input type="text" name="comments" value="<?php if (isset($_POST['comments'])) echo $_POST['comments']; ?>" >
	<p><input type="submit" name="submit" value="Submit"></p>
</form>
</div>
</div>
<?php include('includes/footer.html'); ?>