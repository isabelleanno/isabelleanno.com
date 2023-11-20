
<?php 
/*Isabelle Anno, 5/11/2022 */
// retrieve all the records from the currenttasks table.
$page_title = 'View Tasks';
include('includes/header.html');
echo '<h1 class="text-center page-heading" >Your Tasks </h1>';
require('../mysqli_connect1.php');
// Number of records to show per page:
$display = 12;
// Compare $records with 0- if there are no records, don't display a table
CONST norecords = 0;
// Determine how many pages there are...
 	// Count the number of records:
	$q = "SELECT COUNT(task_id) FROM currenttasks";
	$r = @mysqli_query($dbc, $q);
	$row = @mysqli_fetch_array($r, MYSQLI_NUM);
	$records = $row[0];
	// Calculate the number of pages...
	if ($records > $display) { // More than 1 page.
		$pages = ceil ($records/$display);
	} else {
		$pages = 1;
	}
 // End of p IF.
//If there are no records, do not display the table.

if($records == norecords ){

echo '<div id="container">
		<div class="wrapper">
		<h1 class="page-heading text-center">No Tasks 🏖️</h1>
		<h4 class="text-center my-5">It seems you have no tasks right now. Would you like to create one?</h4>
		<br>
		<p class="text-center my-5"><a class="button btn btn-success" href="createTask.php">Create a task</a></p>
		</div>
		</div>';
}else{
	if(isset($_GET['s']) && is_numeric($_GET['s'])) {
	$start = $_GET['s'];
} else {
	$start = 0;
}
//sort the display by task description first
$sort = (isset($_GET['sort'])) ? $_GET['sort'] : $order_by = 'task_description ASC';

$q = "SELECT * FROM currenttasks ORDER BY task_description ASC ";
$r = @mysqli_query($dbc, $q); // Run the query.
// Table header:
echo "<div id='container'>
		<div class='tablewrapper'><div class='table-alignment'>";
echo '<table width="100%">
<thead>
<tr>
<th><strong>Task</a></strong></th>
<th><strong>Due Date</a></strong></th>
	<th><strong>Edit Task</strong></th>
		<th><strong>Mark as done</strong></th>
		<th><strong>Delete Task</strong></th>


</tr>
</thead>
<tbody>
';
// Fetch and print all the records....
$bg = '#eeeeee';
while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
	$bg = ($bg=='#eeeeee' ? '#ffffff' : '#eeeeee');
		echo '<tr bgcolor="' . $bg . '">
		<td align="center">' . $row['task_description'] . '</td>
		<td align="center">' . $row['due_date'] . '</td>
		<td class="edit" align="center"><a href="editTask.php?id=' . $row['task_id'] . '"><i class="fa-solid fa-file-pen"></i></a></td>
		<td class="done" align="center"><a href="markAsDone.php?id=' . $row['task_id'] . '"><i class="fa-solid fa-circle-check"></i></a></td>
		<td class="delete" align="center"><a href="deleteTask.php?id=' . $row['task_id'] . '"><i class="fa-solid fa-trash-can"></i></a></td>
	</tr>
	';
} // End of WHILE loop.
echo '</div> </div></tbody></table>';
echo "</div>";
echo "<div class='text-center'>";
mysqli_free_result($r);
mysqli_close($dbc);
// Make the links to other pages, if necessary.
if ($pages > 1) {
	echo '<br><p>';
	$current_page = ($start/$display) + 1;
	// If it's not the first page, make a Previous button:
	if ($current_page != 1) {
		echo '<a href="currentTasks.php?s=' . ($start - $display) . '&p=' . $pages . '&sort=' . $sort . '">Previous</a> ';
	}
	// Make all the numbered pages:
	for ($i = 1; $i <= $pages; $i++) {
		if ($i != $current_page) {
			echo '<a href="currentTasks.php?s=' . (($display * ($i - 1))) . '&p=' . $pages . '&sort=' . $sort . '">' . $i . '</a> ';
		} else {
			echo $i . ' ';
		}
	} // End of FOR loop.
	// If it's not the last page, make a Next button:
	if ($current_page != $pages) {
		echo '<a href="currentTasks.php?s=' . ($start + $display) . '&p=' . $pages . '&sort=' . $sort . '">Next</a>';
	}
	echo '</p>'; // Close the paragraph.
} // End of links section.
echo "</div>";
}
include('includes/footer.html');
?>