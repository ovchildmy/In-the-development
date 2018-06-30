<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style/uikit-rtl.css">
	<link rel="stylesheet" type="text/css" href="style/uikit.css">
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="style/core.css">
	<link rel="stylesheet" type="text/css" href="style/myPage.css">
	<link rel="stylesheet" type="text/css" href="style/photo.css">
	<link rel="stylesheet" type="text/css" href="style/main.css">
	<script type="text/javascript" src="lib/uikit-icons.js"></script>
	<script type="text/javascript" src="lib/uikit.js"></script>
	<title>Social Network</title>
</head>
<body>

	<div class="header">
		<span><a href="?pages=myPage">My page</a></span>
		<span>Chats</span>
		<span>Friends</span>
		<span><a href="?pages=photo">Photo</a></span>
		<div >
			<i class="fa fa-cog header-icon" aria-hidden="true"></i>

			<!-- <div class="uk-dropdown">
				<div class="logOut"></div>
				<div class="settings"></div>
			</div> -->
		</div>
	</div>

	<a href="pages/main.php">Exit</a>

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



<!-- <div class="uk-button-dropdown" data-uk-dropdown data-uk-dropdown="{pos:'bottom-center'}" data-uk-dropdown="{delay: 1000}" aria-haspopup="true" aria-expanded="false">

    This is the element toggling the dropdown
    <div>ЫВцфаыв</div>

     This is the dropdown 
    <div class="uk-dropdown uk-nav-dropdown uk-dropdown-bottom">
    	<ul>
    		<li>asdf</li>
    		<li>asdsdf</li>
    	</ul>
    </div>

</div> -->



	

	<script type="text/javascript" src="lib/jquery-3.3.1.min.js"></script>

	<script type="text/javascript" src="lib/core.js"></script>
	<script type="text/javascript" src="lib/mainPhoto.js"></script>
	<script type="text/javascript" src="lib/photo.js"></script>
</body>
</html>