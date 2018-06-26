<?php 
	include('db.php');

	$userMail = $_POST["userMail"];
	$subject = $_POST["subject"];
	$ask = $_POST["ask"];

	mysql_query("INSERT INTO mail(userMail, subject, message) VALUES('$userMail','$subject','$ask')");




	mail("ovchildmy@gamil.com", "Landing_1 message - ".$subject, $ask, "From".$userMail);


	header("Location: ..\index.php");
	exit;
 ?>