
<?php
// Isabelle Anno, 3/31/2022
$page_title = 'View Guests';
include('includes/header.html');
echo'<div class="content">';
echo '<h1>Registered Guests</h1>';
require('../mysqli_connect.php');

// $display defines the number of rows to display per page:
$display = 30;
// Determine how many pages we need.
if (isset($_GET['p']) && is_numeric($_GET['p'])) { // Use this if it's already been determined.
	$pages = $_GET['p'];
} else { // If we still need to determine.
 	// Count the number of records by just counting the number of guestID's there are:
	$recordCount = "SELECT COUNT(guestID) FROM guests";
	$r = @mysqli_query($dbc, $recordCount);
	$row = @mysqli_fetch_array($r, MYSQLI_NUM);
	$records = $row[0];
	// Calculate the number of pages there needs to be with 7 record per display
	if ($records > $display) { // if there are more rows in the database than the $display var, it'll be more than 1 page.
		$pages = ceil ($records/$display); //divide number of total records by $display, round up.
	} else { //only one page if there are only 7 records.
		$pages = 1;
	}
} 
// Determine where to start returning results from the database
if (isset($_GET['s']) && is_numeric($_GET['s'])) {
	$start = $_GET['s'];
} else {
	$start = 0;
}
//order by first name ascending
$q = "SELECT lastName, firstName, email, comments FROM guests ORDER BY firstName ASC LIMIT $start, $display";
$r = @mysqli_query($dbc, $q); 

// Table header:
echo '<table width="60%">
<thead>
<tr>

	<th align="left"><strong><a href="viewguests.php?sort=fn">First Name</a></strong></th>
	<th align="left"><strong><a href="viewguests.php?sort=ln">Last Name</a></strong></th>
	<th align="left"><strong><a href="viewguests.php?sort=rd">email</a></strong></th>
	<th align="left"><strong><a href="viewguests.php?sort=rd">comments</a></strong></th>
</tr>
</thead>
<tbody>
';
// Fetch and print everything
$bg = '#eeeeee';
while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
	$bg = ($bg=='#eeeeee' ? '#ffffff' : '#eeeeee');
		echo '<tr bgcolor="' . $bg . '">
		<td align="left">' . $row['firstName'] . '</td>
		<td align="left">' . $row['lastName'] . '</td>
		<td align="left">' . $row['email'] . '</td>
		<td align="left">' . $row['comments'] . '</td>
	</tr>
	';
} 
echo '</tbody></table>';
mysqli_free_result($r);
mysqli_close($dbc);
// Make "previous" and "next" pages when needed, and make numbered pages.
if ($pages > 1) {
	echo '<br><p>';
	$current_page = ($start/$display) + 1;
	// Make a previous button as needed
	if ($current_page != 1) {
		echo '<a href="viewguests.php?s=' . ($start - $display) . '&p=' . $pages .  '">Previous</a> ';
	}
	// Make all the numbered pages:
	for ($i = 1; $i <= $pages; $i++) {
		if ($i != $current_page) {
			echo '<a href="viewguests.php?s=' . (($display * ($i - 1))) . '&p=' . $pages . '">' . $i . '</a> ';
		} else {
			echo $i . ' ';
		}
	} 
	// Make a next button as needed
	if ($current_page != $pages) {
		echo '<a href="viewguests.php?s=' . ($start + $display) . '&p=' . $pages .'">Next</a>';
	}
	echo '</p>';
	echo'</div>';
} 

include('includes/footer.html');
?>