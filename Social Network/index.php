<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style/uikit-rtl.css">
	<link rel="stylesheet" type="text/css" href="style/uikit.css">
	<link rel="stylesheet" type="text/css" href="style/core.css">
	<link rel="stylesheet" type="text/css" href="style/myPage.css">
	<link rel="stylesheet" type="text/css" href="style/photo.css">
	<title></title>
</head>
<body>

	<div class="header">
		<span><a href="?pages=myPage">My page</a></span>
		<span>Chats</span>
		<span>Friends</span>
		<span><a href="?pages=photo">Photo</a></span>
		<div class="headerFavicon"></div>
	</div>


	<?php 
		if($_GET["pages"]==""){
			include("pages/myPage.php");
		}

		if($_GET["pages"]=="myPage"){
			include("pages/myPage.php");
		}
		
		if($_GET["pages"]=="photo"){
			include("pages/photo.php");
		}
	 ?>












	

	<script type="text/javascript" src="lib/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="lib/uikit.js"></script>
	<script type="text/javascript" src="lib/uikit-icons	.js"></script>
	<script type="text/javascript" src="lib/core.js"></script>
	<script type="text/javascript" src="lib/mainPhoto.js"></script>
	<script type="text/javascript" src="lib/photo.js"></script>
</body>
</html>