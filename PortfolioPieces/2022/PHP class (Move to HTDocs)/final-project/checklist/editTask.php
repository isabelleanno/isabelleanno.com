<?php 
// This page is for editing a task record.
// This page is accessed through currentTasks.php.
$page_title = 'Edit a Task';
include('includes/header.html');
echo '<div id="container">
		<div class="wrapper"><h1 class="text-center page-heading">Edit a Task</h1>';
// Check for a valid task ID, through GET or POST:
if ( (isset($_GET['id'])) && (is_numeric($_GET['id'])) ) { // From currentTasks.php
	$id = $_GET['id'];
} elseif ( (isset($_POST['id'])) && (is_numeric($_POST['id'])) ) { // Form submission.
	$id = $_POST['id'];
} else { // No valid ID, kill the script.
				echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-5"><a class="button btn btn-success text-center" href="currentTasks.php">Go back</a></p> ';
	include('includes/footer.html');
	exit();
}
require('../mysqli_connect1.php');
// Check if the form has been submitted:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$errors = [];
	// Check for a task description:
	if (empty($_POST['task_description'])) {
		$errors[] = 'You forgot to enter your task description.';
	} else {
		$td = mysqli_real_escape_string($dbc, trim($_POST['task_description']));
	}
	// Check for a due date:
	if (empty($_POST['due_date'])) {
		$errors[] = 'You forgot to enter a due date.';
	} else {
		$dd = mysqli_real_escape_string($dbc, trim($_POST['due_date']));
	}

	if (empty($errors)) { // If everything's OK.
			// Make the query:
			$q = "UPDATE currenttasks SET task_description='$td', due_date='$dd' WHERE task_id=$id LIMIT 1";
			$r = @mysqli_query($dbc, $q);
			if (mysqli_affected_rows($dbc) == 1) { // If it ran OK.
				// Print a message:
				echo '<h3 class=" text-center text-success">**The task has been successfully edited.**</h3> 
				<p class="text-center my-5"><a class="button btn btn-success" href="currentTasks.php">View your tasks</a></p> 
				<br>';
			} else { // If it did not run OK.
				echo '<h3 class="text-center text-danger error">**The task could not be edited.**</h3> <p class="text-center text-danger"> Make sure you\'ve modified at least one field before submitting.</p> <br>'; // Public message.
			}
		} else { // Report the errors.
				echo '<div id="container">
		<div class="errorwrapper">';
		echo '<h1 class="page_header text-danger text-center">Error! ☹️</h1><br><p class="error text-center">The following error(s) occurred:<br>';
		foreach ($errors as $msg) { // Print each error.
			echo " - $msg<br>\n";
		}
		echo '</p><p class="text-center" >Please try again.</p> </div> </div>';
	}	
	} // End of if (empty($errors)) IF.

// Always show the form...
// Retrieve ttask's information:
$q = "SELECT task_description, due_date FROM currenttasks WHERE task_id=$id";
$r = @mysqli_query($dbc, $q);
if (mysqli_num_rows($r) == 1) { // Valid task ID, show the form.
	// Get the task's information:
	$row = mysqli_fetch_array($r, MYSQLI_NUM);
	// Create the form:
	echo '
	<form action="editTask.php" method="post">
<h4 class="text-center my-5">You are currently editing a task named <b>"'.$row[0].'".</b></h4>
<br>
<p class="text-center my-5">Task: <input type="text" name="task_description" size="15" maxlength="15" value="' . $row[0] . '"></p>
<p class="text-center my-5">Due Date: <input  type="date" name="due_date" size="15" maxlength="30" value="' . $row[1] . '"></p>
<p class="text-center my-5"><input class="button btn btn-success" type="submit" name="submit" value="Submit Changes"></p>
<input type="hidden" name="id" value="' . $id . '">
</form> </div> </div>';
} else { // Not a valid task ID.
			echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-5"><a class="button btn btn-success text-center" href="currentTasks.php">Go back</a></p> ';
}
mysqli_close($dbc);
include('includes/footer.html');
?>