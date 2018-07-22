<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="../style/uikit-rtl.css">
	<link rel="stylesheet" type="text/css" href="../style/uikit.css">
	<link rel="stylesheet" type="text/css" href="../style/adminPanel.css">
	<title>Admin Panel</title>
	<meta charset="utf-8">
</head>
<body>

	<div class="admin__header">
		<a href="../index.php"><div class="admin__header-name">E-shop</div></a>
	</div>

	<div class="addBody">
	
		<div class="addProduct">
			<div class="addProduct-headline">Добавить проект</div>
			<form>
				<div>Название <input class="uk-input " type="text" name=""></div>
				<div>Цена <input class="uk-input" type="text" name=""></div>
				<div>Тип 
					<select class="typeSelect uk-select uk-form-width-small">
						<option>Консоль</option>
					</select>
				</div>

				<div class="product-currency">Валюта 
					<select class="uk-select uk-form-width-small">
						<option>руб</option>
						<option>$</option>
					</select>
				</div>

				<div class="productDescriprion">
					Описание
					<textarea class="uk-textarea" rows="3" placeholder="Textarea"></textarea>
				</div>

				<div title="Главная картинка" uk-form-custom>
					Аватар
					<input accept=".png, .jpg, .jpeg" id="file" type="file">
		            <label for="file" class="avatar uk-button uk-button-default" type="button" tabindex="-1">Выбрать файл</label>
				</div>

				<div class="product-photosWrap">
					Фото товара
					<input accept=".png, .jpg, .jpeg" id="photos" type="file">
		            <label for="photos" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<input class="uk-button uk-button-default" type="submit" name="">
			</form>
		</div>

		<div class="addNav">
			<div class="adminDir">
				<div class="addDir"></div>
				<div class="removeDir"></div>
			</div>

			<div class="adminList">
				<div class="addList"></div>
				<div class="removeList"></div>
			</div>
		</div>
	
	</div>

</body>
</html>