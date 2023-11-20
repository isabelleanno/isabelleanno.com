<!DOCTYPE html>
<html lang="en">
  <head>
      <!--Isabelle Anno, Tuesday, 2.22.2022 - or should I say, 2's day ;) - 
    Syntax errors lab- Spring 2022. -->
    <title>Syntax errors</title>
    <style>
      body {
        background-color: #008f00;
        color: #ffffff;
        font-size: medium;
        font-family: Georgia, Verdia, San-Serif;
        margin: 50px 0 0 35px;
      }
      h1 {
        font-size: 150%;
      }
      .box {
        width: 650px;
        padding: 20px;
        border: 5px double #ffffff;
        float: left;
      }
    </style>
       <?php 
       //Created string variable "student" to use in the h1
      $studentName = "student";
      ?>
  </head>
  <body>
    <div class="box">
        <?php 
        echo "<h1>"."Dear ". $studentName.","."</h1> \n" ;
        "<p>I hope that you are having a great semester so far.</p>\n";
        //info for students
        echo "<p>PHP is a fun language to learn. Here is some information about PHP that I bet you didn't know:</p> \n 
        <p>PHP was written as a set of CGI binaries in the C programming language by the Danish/Greenlandic
			programmer Rasmus Lerdorf in 1994, to replace a small set of Perl scripts he had been using to maintain
			his personal homepage.[4] Lerdorf initially created PHP to display his r&eacute;sum&eacute; and to collect
			certain data, such as how much traffic his page was receiving. Personal Home Page Tools was publicly released
			on 8 June 1995 after Lerdorf combined it with his own Form Interpreter to create PHP/FI (this release is
			considered PHP version 2).[5]</p>\n";
            echo "<p>Zeev Suraski and Andi Gutmans, two Israeli developers at the Technion IIT, rewrote the parser in 1997
			and formed the base of PHP 3, changing the language's name to the recursive initialism PHP: Hypertext
			Preprocessor. The development team officially released PHP/FI 2 in November 1997 after months of beta
			testing. Public testing of PHP 3 began and the official launch came in June 1998. Suraski and Gutmans
			then started a new rewrite of PHP's core, producing the Zend Engine in 1999.[6] They also founded Zend Technologies
			in Ramat Gan, Israel, which actively manages the development of PHP.</p>\n";
echo "		<p>In May 2000, PHP 4, powered by the Zend Engine 1.0, was released. The most recent update released by
			The PHP Group, is for the older PHP version 4 code branch which, as of May 2007, is up to version 4.4.7.
			PHP 4 will be supported by security updates until 8 August 2008[7].</p>\n";
echo "		<p>On July 13, 2004, PHP 5 was released powered by the new Zend Engine II. PHP 5 included new features such as:[8]</p>\n";
echo '		<p> * Improved support for object-oriented programming<br />
  			* The PHP Data Objects extension, which defines a lightweight and consistent interface for accessing databases<br />
  			* Performance enhancements<br />
  			* Better support for MySQL and MSSQL<br />
  			* Embedded support for SQLite<br />
 			* Integrated SOAP support<br />
  			* Data iterators<br />
  			* Error handling via exceptions</p>';
      //Updated what the latest php version is and when it was released
              echo  '<p>The latest stable version, PHP 8.1, was released on Nov 25, 2021. It included several improvements, such as enumerations -also called "enums"- readonly properties and array unpacking with string keys.</p>';
        ?>
    </div>
  </body>
</html>
