<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">
<table >
      <thead>
        <tr>
          <th><h4>Name</h4></th>
          <th><h4>Monthly Salary</h4></th>
		  <th><h4>Yearly Salary</h4></th>
        </tr>
      </thead>
      <tbody>
<?php  

//My array with people and monthly salaries.
$people = ['James' => 5000,'Mary' => 5500, 'Matthew' => 6500, 'Zachary' => 7700, 'Jane' => 9800];

/*My annual salary calculation (takes the numeric values of "people" and multiplies them by 12,
 making a new array called yearlySalary from which I can refer to later.) */
  foreach($people as $value){
    $yearlySalary[] = $value *12;
    }

    $i=0; //array counter variable- so it displays a different value through each iteration of the loop.

//This is where the magic happens. :)
 foreach($people as $name => $salary){
      echo "<tr><td>$name</td><td>$salary</td><td>$yearlySalary[$i]</td></tr>\n";
      $i++;
  }

?>

  </tbody>
    </table>




</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>