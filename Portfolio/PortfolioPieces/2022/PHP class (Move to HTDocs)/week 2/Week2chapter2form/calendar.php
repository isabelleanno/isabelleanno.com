<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calendar</title>
</head>
<body>
    <form action="calendar.php" method="post">
    <?php 
    $months = [ 1 =>'January', 'February','March','April','May',"June","July","August","September","October","November","December"];
    $days = range(1, 31);
    $years = range(2017, 2027);

    echo '<select name="month">';
    foreach($months as $key => $value){
        echo "<option value= \"$key\">
        $value</option>\n";
    } echo'</select>';

   echo '<select name="day">';
    foreach($days as $value){
        echo "<option value= \"$value\">
        $value</option>\n";
    } echo'</select>';

   echo '<select name="year">';
    foreach($years as $value){
        echo "<option value= \"$value\">
        $value</option>\n";
    } echo'</select>';

    ?>
    </form>
</body>
</html>