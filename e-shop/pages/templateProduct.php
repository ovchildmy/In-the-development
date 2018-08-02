<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style/templateProduct.css">

	<title>%title%</title>
</head>
<body>
	<div class="productWrap">

		<!-- Левая часть шаблона -->
		<div class="product-left">

			<div class="product-imgWrap">
				<div class="product-img__avatar"></div>

				<div class="product-img__slider"></div>
			</div>


			<div class="product-price">%price%</div>

			<div class="product-buyButton">Купить</div>	
			<div class="product-basketButton">В корзину</div>	

		</div>


		<!-- Правая часть шаблона -->


		<div class="product-right">
			
			<div class="product-name">%name%</div>

			<div class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

			<div class="product-characteristic">Характеристики</div>

			<div class="product-rating">
				<div class="product-rating__stars">
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
				</div>
			</div>

			<div class="product-comments">

				<div class="product-comments__header">
					<div class="product-comments__name">Name</div>

					<div class="product-comment__page">1/204</div>
				
					<div class="product-comments__rating">
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
					</div>

				</div>

				<div class="product-comments__shortComment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore.</div>

				<div class="product-comments__comment">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>

				<div class="next-comment"><i class="fa fa-angle-right" aria-hidden="true"></i></div>

			</div>


		</div>


		<!-- Нижняя часть шаблона - footer -->


		<div class="product-footer">
			<form>
				<div class="footer-shortComment">
					Краткое мнение
					<input class="uk-input uk-form-width-large" type="text" name="">
				</div>

				<div class="footer-rating">
					Оценка

					<div class="footer-stars">
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
						<i class="fa fa-star" aria-hidden="true"></i>
					</div>
				</div>

				<div class="footer-fullComment">
					Комментарий
					<textarea class="uk-textarea uk-form-width-large" rows="2"></textarea>
				</div>

				<input type="submit" name="">

			</form>
		</div>

	</div>
</body>
</html>