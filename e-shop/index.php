<?php session_start(); 
	if(isset($_GET["exit"])){
		session_destroy();
		header("Location: http://localhost/Freelance/In-the-development/e-shop/index.php");
		exit;
	}
		?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="style/uikit-rtl.css">
	<link rel="stylesheet" type="text/css" href="style/uikit.css">
	<link rel="stylesheet" type="text/css" href="style/core.css">
	<link rel="stylesheet" type="text/css" href="style/header.css">
	<link rel="stylesheet" type="text/css" href="style/navBar.css">
	<link rel="stylesheet" type="text/css" href="style/productsWrap.css">
	<meta charset="utf-8">
	<title>E-Shop</title>
</head>
<body>


	<div class="header">
		<div class="container">
			<div class="header-name"><a href="index.php">E-shop</a></div>
			<form class="header-search">
				<input class="uk-input uk-form-width-medium" type="text" name="" placeholder="Вы ищите..">
				<input class="uk-button uk-button-default" type="submit" name="" value="Искать">
			</form>
			<div class="header-ico">
				<div class="header-basket"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
				<ul>
					<li class="header-user header-list"><i class="header-user__ico fa fa-user-circle-o" aria-hidden="true"></i>
						<?php 
							if(!$_SESSION["user"]){
								echo '<ul><li><a href="pages/login.php">Войти</a></li><li><a href="pages/registration.php">Регистрация</a></li></ul>';

							} else if(isset($_SESSION["user"])){
								echo '<ul><li class="user">'.$_SESSION["user"].'</li><li><a href="pages/settings.php" class="header-settings">Настройки</a></li><li><a href="?exit">Выйти</a></li></ul>';									
							}
						?>

					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="navBar">

		<ul>
			<li><div class="navBar-arrow"> <div><img src="img/navBar__arrow-right.png"></div> </div>
				<ul>
					<div class="shopList">
						<div>
							<span>Электроника:</span>
							<ul>
								<li>Телефоны</li>
								<li>Компьютеры</li>
								<li>Консоли</li>
							</ul>
						</div>
						<div>
							<span>Мебель:</span>
							<ul>
								<li>Столы</li>
								<li>Стулья</li>
							</ul>
						</div>
					</div>
				</ul>
			</li>
		</ul>

	</div>



	<div class="productsWrap">
		<div class="product">
			<img src="img/ps4.jpg">
			<div class="productName">PS4</div>
			<div class="productDescription">Game console.</div>
		</div>

		<div class="product">
			<img src="img/x-box.jpg">
			<div class="productName">X-Box</div>
			<div class="productDescription">Game console.</div>
		</div>

		<div class="product">
			<img src="img/galaxy-s9.jpg">
			<div class="productName">Galaxy s9</div>
			<div class="productDescription">Smart phone</div>
		</div>

		<div class="product">
			<img src="img/ps4.jpg">
			<div class="productName">PS4</div>
			<div class="productDescription">Game console.</div>
		</div>

		<div class="product">
			<img src="img/x-box.jpg">
			<div class="productName">X-Box</div>
			<div class="productDescription">Game console.</div>
		</div>

		<div class="product">
			<img src="img/galaxy-s9.jpg">
			<div class="productName">Galaxy s9</div>
			<div class="productDescription">Smart phone</div>
		</div>

		<div class="product">
			<img src="img/ps4.jpg">
			<div class="productName">PS4</div>
			<div class="productDescription">Game console.</div>
		</div>

		<div class="product">
			<img src="img/x-box.jpg">
			<div class="productName">X-Box</div>
			<div class="productDescription">Game console.</div>
		</div>

		<div class="product">
			<img src="img/galaxy-s9.jpg">
			<div class="productName">Galaxy s9</div>
			<div class="productDescription">Smart phone</div>
		</div>
	</div>











	

	<script type="text/javascript" src="lib/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="lib/uikit.js"></script>
	<script type="text/javascript" src="lib/uikit-icons.js"></script>
	<script type="text/javascript" src="lib/core.js"></script>
</body>
</html>