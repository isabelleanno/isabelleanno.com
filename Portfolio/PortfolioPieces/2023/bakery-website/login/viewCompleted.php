<?php 
/*Isabelle Anno, 5/11/2022 */
//retrieve all the records from the completedorders table.
 include "loginheader.php"; 
?>

<!--Main Content Start-->
<div class="container">
<div class="flex-mobile py-5">
<h1 class="text-center my-3 aesthetnova" >Your Completed Orders</h1>
<!--PHP start-->
<?php
require('orderDBConn.php');
// Number of records to show per page:
$display = 12;
// Compare $records with 0- if there are no records, don't display a table
CONST norecords = 0;
// Determine how many pages there are...
 	// Count the number of records:
	$q = "SELECT COUNT(order_id) FROM completedorders";
	$r = @mysqli_query($dbc, $q);
	$row = @mysqli_fetch_array($r, MYSQLI_NUM);
	$records = $row[0];
	// Calculate the number of pages...
	if ($records > $display) { // More than 1 page.
		$pages = ceil ($records/$display);
	} else {
		$pages = 1;
	}

//If there are no records, do not display the table.

if($records == norecords ){
echo '
        <h4 class="text-center">It seems you have no completed orders at the moment. Would you like to create one? </h4>
		<br>
		<p class="text-center"><a class="learn-more btn form-btn btn-outline-secondary form-border px-5 my-3" href="createOrder.php">Create an  Description</a></p>
	';
}else{
	if(isset($_GET['s']) && is_numeric($_GET['s'])) {
	$start = $_GET['s'];
} else {
	$start = 0;
}
//sort the display by order description first
$sort = (isset($_GET['sort'])) ? $_GET['sort'] : $order_by = 'order_description ASC';

$q = "SELECT * FROM completedorders ORDER BY order_description ASC ";
$r = @mysqli_query($dbc, $q); // Run the query.
// Table header:
echo '
<div class= "col-12 d-flex justify-content-center" >
<div class="col-xs-10 col-sm-10 col col-md-6 col-lg-6 col-xl-6"> <table class="table mt-4 table-bordered " >
<thead>
<tr class="text-center">
<th><strong>Order Description</a></strong></th>
<th><strong>Date Completed</a></strong></th>
</tr>
</thead>
<tbody>
';
// Fetch and print all the records....
$bg = '#ffffff';
while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
	$bg = ($bg=='#ffffff' ? '#f8f0f0' : '#ffffff');
		echo '<tr bgcolor="' . $bg . '">
		<td align="center">' . $row['order_description'] . '</td>
		<td align="center">' . $row['date_completed'] . '</td>
		
	</tr>
	';
} // End of WHILE loop.
echo '
</tbody></table>';
echo "<div class='text-center'>";
mysqli_free_result($r);
mysqli_close($dbc);
// Make the links to other pages, if necessary.
if ($pages > 1) {
	echo '<br><p>';
	$current_page = ($start/$display) + 1;
	// If it's not the first page, make a Previous button:
	if ($current_page != 1) {
		echo '<a href="viewCompleted.php?s=' . ($start - $display) . '&p=' . $pages . '&sort=' . $sort . '">Previous</a> ';
	}
	// Make all the numbered pages:
	for ($i = 1; $i <= $pages; $i++) {
		if ($i != $current_page) {
			echo '<a href="viewCompleted.php?s=' . (($display * ($i - 1))) . '&p=' . $pages . '&sort=' . $sort . '">' . $i . '</a> ';
		} else {
			echo $i . ' ';
		}
	} // End of FOR loop.
	// If it's not the last page, make a Next button:
	if ($current_page != $pages) {
		echo '<a href="viewCompleted.php?s=' . ($start + $display) . '&p=' . $pages . '&sort=' . $sort . '">Next</a>';
	}
	echo '</p>'; // Close the paragraph.
} // End of links section.
echo "</div>";
}
?>
<!--PHP End-->
  </div>
</div>
</div>
<!--Main Content End-->
</div>
    <?php include "loginfooter.php" ?>