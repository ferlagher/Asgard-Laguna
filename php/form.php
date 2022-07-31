<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From:".$name."<".$email.">\r\n";

$mailTo = "flagunahermida@gmail.com";

mail($mailTo, "Mensaje enviado desde la web", $message, $header) or die("Error!");

echo"Mensaje enviado";
?>