<?php 
	include("db.php");

	$headline = $_POST["headline"];
	$text = $_POST["text"];
	$time = date("d.m.o");

	mysql_query("INSERT INTO posts(time, headline, text) VALUES('$time','$headline','$text')");

	header("Location: ../index.php");
	exit;
 ?>