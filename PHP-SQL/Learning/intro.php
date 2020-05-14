<?php




// ---------- VARIBALES-------------


$num = 4;
$str = "String";
$bol = "TRUE";
$arr = [1, 2, 3, 4];
$void = null;



/* --------------Arrays------------- */
$arr = [1,2,3,"String", false,null]; // Like in Javascript
$arr2 = array(1,2,3,"String", false,null);

// echo $arr[3]; //Show the 3rd index

// print $arr[3];  //idem

// print_r($arr);

// show($arr);

// array_push($arr, "bob");
// array_pop($arr); var_dump($arr);
// array_shift($arr); print_r($arr);


array_push($arr, "bob"); show($arr);
array_pop($arr); show($arr);
array_shift($arr); show($arr);



//Pushing something at the end
$arr[] = "Something at the end....."; 
// show($arr);
$arr[2] = 33; 
// show($arr);

// Multidimensional array
$website_data = [
  "global-title" => "This is my first php website",
  "keywords" => "php,dev,bob",
  "author"      => "KB",

    "pages"       =>  [

    "home" => [
     "title" => "Welcome to my humble abode",
     "menu" => "Home"
    ],
   "work" => [
    "title" => "To do some PHP work",
    "menu"  => "php"
   ],
  "contact" => [
    "title" => "This is a contact section",
    "menu"  => "Contact"
  ]
   ]
];




show($website_data["pages"]["work"]["title"]);
$pages = $website_data["pages"];show($pages);
show($website_data["global-title"]);
// show($pages["pages"]["work"]["tittle"]);

/* --------------FUNCTIONS------------- */
function show($arr){
  echo "<pre>";
  print_r($arr);
  echo "</pre>";
}



//Return area in m2
function calculate_surface($width = 0, $length = 0){
  //This will be shown directly when you the function
  // echo $width * $length;
  // show($width * $length);

 
  // This will return the result but not echoing
  return $width * $length;

}
$calc = calculate_surface(10, 5); show($calc);


// Function uses a local "scope"

//We have to use a spacil  1 keyword in order to use a global scope
function site($key = "", $page_key = "", $title = ""){
  global $website_data;


  if (! empty($pages)){
    //If condition is empty then it shows false
    $page_str = (!empty ($title != "")) ? "title" : "menu";
    return $website_data["pages"][$page_key][$page_str];
  }
 return $website_data[$key];
}
show(site("author"));
show(site("work", "contact", true));




/* --------------LOOPS------------- */

$n = 10;

// Show numbers from 1 to 10. same as JV
for($i = 1; $i <= $n; $i++){
  show($i);
}


// The best for array is to use forEach() Loop
// A foreach could return only values or the pair key value


foreach($website_data as $val){
  show($key);
  show($val);
  }
  
  
  //.... or the pair key value
  foreach($website_data as $key => $val){
    show($key);
    show($val);
    }

$n = 10;

// if ($n > 5;){
//   show("True");
// }

    if ($n > 5 && $n > 10){
      show("True");
    }
    if ($n > 5 || $n > 10){
      show("False");
    }

    else
    {
      show("False");
    }




//     $hour = 9;
//     if()
//         if ($hour < 7){
//       show("Good Morning");
//     }
//     // elseif
//     else{
// show("Not sure what message i can give you...");
//     }