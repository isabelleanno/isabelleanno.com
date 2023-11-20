<?php 
//Isabelle Anno, 3/22/2022

//Defining variables to connect to database
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '111917';
$db_name = "salesdata_ia";

//connect to database with this variable
$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
//check for errors
if(!$link)
{
    die('Failed to connect to database.'.mysqli_connect_error());
}

$sql = 'SELECT * FROM sales';
//mysqli_query takes 2 parameters: the connection and the actual query (in this case the actual query is in $sql and the
//connection is in $link)

$query = mysqli_query($link, $sql);
//If query is not true, (is false) throw an error.
if(!$query)
{
    die("SQL error: ".mysqli_error($link));
}
?>
<html>
<head>
	<title>Displaying MySQL Data in a beautiful HTML Table</title>
	<style type="text/css">
		body 
		{
			font-size: 15px;
			color: #343d44;
			font-family: "segoe-ui", "open-sans", tahoma, arial;
			padding: 0;
			margin: 0;
		}
		table 
		{
			margin: auto;
			font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
			font-size: 12px;
		}

		h1
		{
			margin: 25px auto 0;
			text-align: center;
			text-transform: uppercase;
			font-size: 17px;
		}

		table td 
		{
			transition: all .5s;
		}
		
		/* Table */
		.data-table 
		{
			border-collapse: collapse;
			font-size: 14px;
			min-width: 537px;
		}

		.data-table th, 
		.data-table td 
		{
			border: 1px solid #e1edff;
			padding: 7px 17px;
		}
		.data-table caption 
		{
			margin: 7px;
		}

		/* Table Header */
		.data-table thead th 
		{
			background-color: #508abb;
			color: #FFFFFF;
			border-color: #6ea1cc !important;
			text-transform: uppercase;
		}

		/* Table Body */
		.data-table tbody td 
		{
			color: #353535;
		}
		.data-table tbody td:first-child,
		.data-table tbody td:nth-child(4),
		.data-table tbody td:last-child 
		{
			text-align: right;
		}

		.data-table tbody tr:nth-child(odd) td
		{
			background-color: #f4fbff;
		}
		.data-table tbody tr:hover td 
		{
			background-color: #ffffa2;
			border-color: #ffff0f;
		}

		/* Table Footer */
		.data-table tfoot th 
		{
			background-color: #e5f5ff;
			text-align: right;
		}
		.data-table tfoot th:first-child 
		{
			text-align: left;
		}
		.data-table tbody td:empty
		{
			background-color: #fcc;
		}
	</style>
</head>
<body>
	<h1>Week 8 Guided Activity</h1>
	<table class="data-table">
		<caption class="title">Sales Data of Electronic Division</caption>
		<thead>
			<tr>
				<th>CUST_ID</th>
				<th>CUSTOMER</th>
				<th>ITEM</th>
				<th>DATE</th>
				<th>AMOUNT</th>
			</tr>
		</thead>
		<tbody>
		<?php
        //define a variable starting at 1 to increment each time, and total to display at the end. Used in the while loop.
		$CUST_ID = 1;
		$total 	= 0;
		while ($row = mysqli_fetch_array($query)) 
        //mysql_fetch_array turns the multiple queries into one array, for display purposes. 
        //We are defining that array in a variable called "row".
		{
            /*To be honest, this chunk of code is a bit confusing to me. 
            I know its general purpose is to display the information in <td> tags, but I'm confused about
            the next line here. You're defining a variable called amount but I don't know what the 
             == 0 ? '' : number_format($row['amount']) part means. Maybe you can explain this in the comments after you grade this?
             Or you can always message me / email me. Thank you! */
			$amount  = $row['amount'] == 0 ? '' : number_format($row['amount']);

            //Display the customer id, the name, item, date and amount on the table.
			echo '<tr>
					<td>'.$CUST_ID.'</td>
					<td>'.$row['name'].'</td>
					<td>'.$row['item'].'</td>
					<td>'. date('F d, Y', strtotime($row['date'])) . '</td> 
					<td>'.$amount.'</td>
				</tr>';

                //calculate the total and increment the customer ID by 1.
			$total += $row['amount']; 
			$CUST_ID++; 
		}?>
		</tbody>
		<tfoot>
			<tr>
				<th colspan="4">TOTAL</th>
				<th><?=number_format($total)?></th>
			</tr>
		</tfoot>
	</table>
</body>
</html>