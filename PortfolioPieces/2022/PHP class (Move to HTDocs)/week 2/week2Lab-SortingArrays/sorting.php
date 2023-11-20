<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sorting arrays in PHP</title>
  </head>
  <body>
    <!--Isabelle Anno, Tuesday, 2/2/2022 (it's officially 2's day)-->
    <table border="0" cellspacing="3" cellpadding="3" align="center" >
      <thead>
        <tr>
          <th><h2>Rating</h2></th>
          <th><h2>Title</h2></th>
        </tr>
      </thead>
      <tbody>
        <?php
        //create the array
        $movies = [
            'A Patch of Blue' => 10, //watch it, it's a really good old movie!
            'Journey 2: The Mysterious Island' => 6,
            'Dr. Strange' => 9,
            'A Quiet Place' => 7,
            'Lilies of the Field' => 5,
            'Jumanji: Welcome to the Jungle' => 8,
            'Megamind' => 8,
        ];
        //Sort the array in original order:
        echo '<tr> <td colspan="2">
         <strong> In their original order:</strong> </td> </tr>';
        foreach($movies as $title => $rating){
            echo "<tr><td>$rating</td><td>$title</td></tr>\n";
        }
        //sort the array by title: 
        ksort($movies);
        echo '<tr><td colspan="2"><strong>Sorted by title:</strong></td></tr>';
        foreach($movies as $title => $rating){
          echo "<tr> <td>$rating</td><td>$title</td></tr>\n";
        }
        //sort the array by rating:
        arsort($movies);
        echo '<tr><td colspan="2"><strong>Sorted by rating:</strong></td></tr>';
        foreach($movies as $title => $rating){
          echo "<tr> <td>$rating</td><td>$title</td></tr>\n";
        }
        ?>
      </tbody>
    </table>
  </body>
</html>
