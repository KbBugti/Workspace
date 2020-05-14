<?php


ini_set("display_errors", 1);
  error_reporting(E_ALL);

//Check if GET key "page" is exists:

// if (isset($_GET["page"])){
//   $page = $_GET["page"];
// }
// else{
//   $page = "index";
// }


//Check if GET "page" is exists on line variant
$page = isset ($_GET["page"]) ? $_GET["page"] : "contact";  //echo $page;


// if(empty($page)){
// $page = "contact";
// }

//Using a variable inside a PHP string
// $name = "KB";
// $using_double_quotes = "Hello, my name is $name";
// // echo $using_double_quotes;
// $using_single_quotes = "Hello, my name is " . $name . " and voila !";
// echo $using_single_quotes;




// This is the PHP zone.
//This bit of code will execute before HTML.
//A server language will [always] executed before a static content.
?>


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Where hardest stuff is possible</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="How to use PHP to create a dynamic website">
  <meta name="keywords" content="php,dynamic site,cool,raoul">
  <meta name="author" content="Sorin Paun">

  <link rel="icon" href="img/favicon.png">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <ul class="menu">
        <li class="menu-item"><a href="?page=index">HOME</a></li>
        <li class="menu-item"><a href="?page=work">WORK</a></li>
        <li class="menu-item"><a href="?page=contact">CONTACT</a></li>
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">

  <!-- This is placeholder for the main conten --html/work.html.


<?php
  //Grab an external content methods
  //Include function
//  include("html/index.html"); 

 //Include once function
//  include_once("html/index.html"); 


 //Require function
//  require("html/index.html");

  //Require once function
  require_once("html/$page.html");

?>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>
