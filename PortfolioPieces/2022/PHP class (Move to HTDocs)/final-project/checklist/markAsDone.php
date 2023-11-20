<?php 
// This page is for moving a task record from currentTasks table to completedTasks table.
// This page is accessed through currentTasks.php.
$page_title = 'Complete a Task';
include('includes/header.html');
echo '<div id="container"> <div class="wrapper"><h1 class="text-center page-heading">Complete a Task</h1>';
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
	if ($_POST['sure'] == 'Yes') { // Move the record.

		// Gather information about the task, put it in an array
        $td = "SELECT (task_description) FROM currenttasks WHERE task_id=$id";
	    $r = @mysqli_query($dbc, $td);
		$row = mysqli_fetch_array($r, MYSQLI_NUM);
        //Make the insert query- insert the data into the completedtasks table
		$q1 = "INSERT INTO completedtasks VALUES ('$id', '$row[0]',NOW())";
		$r1 = @mysqli_query($dbc, $q1);
        //Delete the data from the currenttasks table
        $q2 = "DELETE FROM currenttasks WHERE task_id=$id LIMIT 1";
		$r2 = @mysqli_query($dbc, $q2);
		if (mysqli_affected_rows($dbc) == 1) { // If the queries ran OK.
            // Print a message:
			echo '<h4 class="text-center">This task has been marked as completed.<br> Great job keeping up with your work!</h4> <br> <p class="text-center my-5"><a class="button btn btn-success" href="currentTasks.php">Back to tasks</a></p>';
		} else { // If the query did not run OK.
			echo '<p class="text-danger error">This task could not be marked as completed due to a system error.</p>'; // Public message.
			echo '<p>' . mysqli_error($dbc) . '<br>Query: ' . $q2 . '</p>'; // Debugging message.
		}
	} else { // No confirmation of deletion.
		echo '<h4 class="text-center">This task has <b class="text-danger">NOT</b> been marked as completed.</h4> <br> <p class="text-center my-5"><a class="button btn btn-success" href="currentTasks.php">Back to tasks</a></p>';
	}
} else { // Show the form.
	// Retrieve the task's information:
	$td = "SELECT (task_description) FROM currenttasks WHERE task_id=$id";
	$r = @mysqli_query($dbc, $td);
	if (mysqli_num_rows($r) == 1) { // Valid task ID, show the form.
		// Get the task's information:
		$row = mysqli_fetch_array($r, MYSQLI_NUM);
		// Display the record being moved:
		echo "<h2 class='text-center'>Name: $row[0]</h2>
		<br>
		<h4 class='text-center'>Do you want to mark this task as completed?</h4>
		<br>";
		
		// Create the form:
		echo '<form action="markAsDone.php" method="post">
	<p class="text-center"><input type="radio" name="sure" value="Yes"> Yes</p>
	<p class="text-center"> <input type="radio" name="sure" value="No" checked="checked"> No</p>
	<br>
	<p class="text-center my-5"><input class="button btn btn-success" type="submit" name="submit" value="Submit"></p>
	<input type="hidden" name="id" value="' . $id . '">
	</form>';
	} else { // Not a valid task ID.
			echo '<h3 class=" text-center error">This page has been accessed in error.</h3> <br> 	<p class="text-center my-5"><a class="button btn btn-success text-center" href="currentTasks.php">Go back</a></p> ';
	}
} // End of the main submission conditional.
mysqli_close($dbc);
include('includes/footer.html');
?>