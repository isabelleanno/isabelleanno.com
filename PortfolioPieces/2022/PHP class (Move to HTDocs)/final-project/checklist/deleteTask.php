<?php 
// This page is for deleting a task record.
// This page is accessed through currentTasks.php.
$page_title = 'Delete a Task';
include('includes/header.html');
echo '<div id="container">
		<div class="wrapper"><h1 class="page-heading text-center">Delete a Task</h1>';

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
	if ($_POST['sure'] == 'Yes') { // Delete the record.
		// Make the query:
		$q = "DELETE FROM currenttasks WHERE task_id=$id LIMIT 1";
		$r = @mysqli_query($dbc, $q);
		if (mysqli_affected_rows($dbc) == 1) { // If it ran OK.
			// Print a message:
			echo '
		<h1 class="page-heading text-center">Success!</h1>
		<h4 class="text-center my-5">This task was successfully deleted. </h4>
		<br>
		<p class="text-center my-5"><a class="button btn btn-success" href="currentTasks.php">See your other tasks</a></p>
		</div>
		</div>';
		} else { // If the query did not run OK.
			echo '<p class="error">This task could not be deleted due to a system error.</p>'; // Public message.
			echo '<p>' . mysqli_error($dbc) . '<br>Query: ' . $q . '</p>'; // Debugging message.
		}
	} else { // No confirmation of deletion.
		echo '<h3 class="text-center">This task has <b class="text-danger">NOT</b> been deleted.</h3> <br> <p class="text-center my-5"><a class="button btn btn-success" href="currentTasks.php">Back to tasks</a></p>';
	}
} else { // Show the form.
	// Retrieve the task's information:
	$q = "SELECT (task_description) FROM currenttasks WHERE task_id=$id";
	$r = @mysqli_query($dbc, $q);
	if (mysqli_num_rows($r) == 1) { // Valid task ID, show the form.
		// Get the task's information:
		$row = mysqli_fetch_array($r, MYSQLI_NUM);
		// Display the record being deleted:
		echo "<h1 class='text-center'>Name: $row[0]</h1>
		<br>
		<h4 class='text-center'>If you delete a task, it will be <b>destroyed</b> and <b>WON'T</b> be checked as completed.</h4>
		<h4 class='text-center'>Proceed anyways?</h4>";
		// Create the form:
		echo '
		<form action="deleteTask.php" method="post">
<h3  class="text-center my-5"><input type="radio" name="sure" value="Yes"> Yes </h3>
<h3  class="text-center my-5"><input type="radio" name="sure" value="No" checked="checked"> No  </h3>
<p  class="text-center my-5"><input type="submit" name="submit" value="Submit" class="button btn btn-success"> </p>
	<input type="hidden" name="id" value="' . $id . '">
	</form>
	</div>
	</div>';
	} else { // Not a valid task ID.
			echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-5"><a class="button btn btn-success text-center" href="currentTasks.php">Go back</a></p> ';
	}
} // End of the main submission conditional.
mysqli_close($dbc);
include('includes/footer.html');
?>