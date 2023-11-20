<?php

// In PHP code, it reads the uploaded CSV file and parses the data. 
// It opens the input file in reading mode 
// and gets the column data using fgetcsv(). 
// The loop processes until it reaches the end of the CSV file. 
// For each iteration. it gets the array of column data of a single record. 
// It prepares the INSERT query using the data and executes it to load the 
// data into the database.

$dbc = mysqli_connect("localhost", "root", "111917", "CSV_test");

if (isset($_POST["import"])) {
    
    $fileName = $_FILES["file"]["tmp_name"];
    
    if ($_FILES["file"]["size"] > 0) {
        
        $file = fopen($fileName, "r");
		
		// Use the fgetscv() function to read the database data from the CSV file
		// Use IGNORE to prevent duplicate entries
        
        while (($column = fgetcsv($file, 10000, ",")) !== FALSE) {
            $sqlInsert = "INSERT IGNORE into users 
			(userId,userName,password,firstName,lastName)
                   values ('" . $column[0] . "','" . $column[1] . "','" . $column[2] .
				   "','" . $column[3] . "','" . $column[4] . "')";
            $result = mysqli_query($dbc, $sqlInsert);
            
            if (! empty($result)) {
                $type = "success";
                $message = "CSV Data Imported into the Database";
            } else {
                $type = "error";
                $message = "Problem in Importing CSV Data";
            }
        }
    }
}
?>
<!DOCTYPE html>
<html>
<head>

<!-- jQuery validation for checking the uploaded file type is done by using regex. 
It checks if the uploaded file is with the .csv extension. If so, it will allow further 
default action to submit the file binaries to the PHP. Otherwise, 
it stops form submit and displays the error to the browser.-->

<script src="js/jquery-3.2.1.min.js"></script>


<link rel = "stylesheet" href = "css/styles.css">


<script src = "js/script.js"></script>
</head>

<body>
    <h2>Import CSV file into Mysql using PHP</h2>
    
    <div id="response" class="<?php if(!empty($type)) { echo $type . " 
	display-block"; } ?>"><?php if(!empty($message)) { echo $message; } 
	?></div>
    <div class="outer-scontainer">
        <div class="row">

		<!--This HTML code is used to show a form with the CSV file import option.
		After submitting the file, PHP code parses the CSV data 
		and prepares INSERT query to load the data into the database. 
		After importing the data into the database the added rows are listed
		in the browser. When the user uploads the CSV source, 
		the file type is restricted by specifying .csv using 
		the accept attribute.-->
		
            <form class="form-horizontal" action="" method="post"
                name="frmCSVImport" id="frmCSVImport" enctype="multipart/form-data">
                <div class="input-row">
                    <label class="col-md-4 control-label">Choose CSV
                        File</label> <input type="file" name="file"
                        id="file" accept=".csv">
                    <button type="submit" id="submit" name="import"
                        class="btn-submit">Import</button>
                    <br />

                </div>

            </form>

        </div>
		
		<!--After the import process, data from the CSV file is 
		displayed in a table.-->
		
               <?php
            $sqlSelect = "SELECT * FROM users";
            $result = mysqli_query($dbc, $sqlSelect);
            
            if (mysqli_num_rows($result) > 0) {
                ?>
            <table id='userTable'>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>

                </tr>
            </thead>
<?php
                
                while ($row = mysqli_fetch_array($result)) {
                    ?>
                    
                <tbody>
                <tr>
                    <td><?php  echo $row['userId']; ?></td>
                    <td><?php  echo $row['userName']; ?></td>
                    <td><?php  echo $row['firstName']; ?></td>
                    <td><?php  echo $row['lastName']; ?></td>
                </tr>
                    <?php
                }
                ?>
                </tbody>
        </table>
        <?php } ?>
    </div>

</body>

</html>