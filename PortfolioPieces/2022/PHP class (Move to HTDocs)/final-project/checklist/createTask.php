<?php 
// This script performs an INSERT query to add a record to the currenttasks table.
$page_title = 'Add a Task';
include('includes/header.html');
echo '<div id="container">
		<div class="wrapper"><h1 class="text-center page-heading">Create a Task 📋</h1>';
// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	require('../mysqli_connect1.php'); // Connect to the db.
	$errors = []; // Initialize an error array.
	
	// Check for a task description:
	if (empty($_POST['task_description'])) 
	{
		$errors[] = 'You forgot to enter the task description.';
	} else {
		$td = mysqli_real_escape_string($dbc, trim($_POST['task_description']));
	}
	
	// Check for a due date:
	if (empty($_POST['due_date'])) 
	{
		$errors[] = 'You forgot to enter when your task should be done.';
	} else 
	{
		$dd = mysqli_real_escape_string($dbc, trim($_POST['due_date']));
	}
	
	if (empty($errors)) 
		
	{ // If everything's OK.
		// Register the task in the database...
		
		// Make the query:
		$q = "INSERT INTO currenttasks (task_description,due_date) VALUES ('$td', '$dd')";
		$r = @mysqli_query($dbc, $q); // Run the query.
		if ($r) 
			
		{ // If it ran OK.
			// Print a message:
			echo '
		<h1 class="page-heading text-center">Thank you!!</h1>
		<h4 class="text-center my-5">You successfully created a new task. Great job! Stay motivated! 💪</h4>
		<br>
		<p class="text-center my-5"><a class="button btn btn-success" href="currentTasks.php">View current tasks</a> <a class="btn btn-info" href="createTask.php">Make another task</a></p>
		</div>
		</div>';
		} else 
		
		{ // If it did not run OK.
			// Public message:
			echo '<h1>System Error</h1>
			<p class="error">Your task could not be added due to a system error. We apologize for any inconvenience.</p>';
			
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
		echo '<h1 class="page_header text-danger text-center">Error! ☹️</h1>
		<p class=" text-center error">The following error(s) occurred:<br>';
		foreach ($errors as $msg) 
		{ 
		
		// Print each error.
			echo " - $msg<br>\n";
		}
		echo '</p><p class="text-center">Please try again.</p><p><br></p> </div> </div>';
	} 
	
	// End of if (empty($errors)) IF.
	mysqli_close($dbc); // Close the database connection.
} 

// End of the main Submit conditional.
?>

<div class="table-alignment">
<form action="createTask.php" method="post">
	<p class="text-center my-5">Task Name: <input type="text" name="task_description" size="15" maxlength="20" value="<?php if (isset($_POST['task_description'])) echo $_POST['task_description']; ?>"></p>
	<p class="text-center my-5">Due Date: <input type="date" name="due_date" size="15" maxlength="40" value="<?php if (isset($_POST['due_date'])) echo $_POST['due_date']; ?>"></p>
	<p class="text-center my-5"><input class="button btn btn-success" type="submit" name="submit" value="Add Task"></p>
</form>
</div>
	</div>
	</div>
	
			
			<?php
			echo'<br><br> <div id="container">
		<div class="wrapper"> <h1 class="text-center">❤️ Motivational Quote ❤️</h1> <h3 class="text-center">';
			$rand = rand(1,10);
			if($rand === 1){
				echo "“The secret of getting ahead is getting started.” -Mark Twain";
			} else if($rand === 2){
				echo "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”  -Mary Kay Ash";
			}else if($rand === 3){
				echo "“It’s hard to beat a person who never gives up.”  -Babe Ruth";
			}else if($rand === 4){
				echo "“If people are doubting how far you can go, go so far that you cant hear them anymore.”  -Michele Ruiz";
			}else if($rand === 5){
				echo "“Everything you can imagine is real.” -Pablo Picasso";
			}else if($rand === 6){
				echo "“Do one thing every day that scares you.” -Eleanor Roosevelt";
			}else if($rand === 7){
				echo "“Whatever you are, be a good one.”  -Abraham Lincoln";
			}else if($rand === 8){
				echo "“Some people want it to happen, some wish it would happen, others make it happen.”  -Michael Jordan";
			}else if($rand === 9){
				echo "“The hard days are what make you stronger.”  -Aly Raisman";
			}else{
				echo "“Work hard in silence, let your success be the noise.”  -Frank Ocean";
			}
			echo'	</h3></div>
	</div>';
			?>
	
<?php include('includes/footer.html'); ?>