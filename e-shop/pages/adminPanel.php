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
			<form enctype="multipart/form-data" action="newProduct.php" method="post">
				<div>Название <input class="uk-input" type="text" name="name"></div>
				<div>Цена <input class="uk-input" type="text" name="price"></div>
				<div>Директория 
					<select class="typeSelect uk-select uk-form-width-small" name="type">
						<option>Консоль</option>
					</select>
				</div>

				<div class="product-currency">Валюта 
					<select class="uk-select uk-form-width-small" name="currency">
						<option>руб</option>
						<option>$</option>
					</select>
				</div>

				<div class="productDescriprion">
					Описание
					<textarea class="uk-textarea" rows="3" placeholder="Textarea" name="description"></textarea>
				</div>

				<div class="avatarWrap" title="Главная картинка" uk-form-custom>
					Аватар
					<input accept=".png, .jpg, .jpeg" id="file" type="file" name="avatar">
		            <label for="file" class="avatar uk-button uk-button-default" type="button" tabindex="-1">Выбрать файл</label>
				</div>

				<div class="product-photosWrap">
					Фото(1) товара
					<input accept=".png, .jpg, .jpeg" class="photo1" id="photo1" type="file" name="photo1">
		            <label for="photo1" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<div class="product-photosWrap">
					Фото(2) товара
					<input accept=".png, .jpg, .jpeg" id="photo2" type="file" name="photo2">
		            <label for="photo2" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<div class="product-photosWrap">
					Фото(3) товара
					<input accept=".png, .jpg, .jpeg" id="photo3" type="file" name="photo3">
		            <label for="photo3" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<div class="product-photosWrap">
					Фото(4) товара
					<input accept=".png, .jpg, .jpeg" id="photo4" type="file" name="photo4">
		            <label for="photo4" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<div class="product-photosWrap">
					Фото(5) товара
					<input accept=".png, .jpg, .jpeg" id="photo5" type="file" name="photo5">
		            <label for="photo5" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<div class="product-photosWrap">
					Фото(6) товара
					<input accept=".png, .jpg, .jpeg" id="photo6" type="file" name="photo6">
		            <label for="photo6" class="product-photos uk-button uk-button-default" type="button" tabindex="-1">Выбрать файлы</label>
				</div>

				<input class="uk-button uk-button-default addProductSubmit" type="submit" name="">
			</form>
		</div>

		<div class="addNav">
			<div class="adminDir">
				<div class="addDir">
					<div>Создать директорию</div>
					<form>
						<div>
							Название <input class="uk-input" type="text" name="">
						</div>
						<div>
							Где:
							<select class="removeListSelect uk-select uk-form-width-small">
								<option>Электроника</option>	
							</select>
						</div>
						<input class="uk-button uk-button-default navSubmitDir" type="submit" name="">
					</form>
				</div>
				<div class="removeDir">
					<div>Удалить директорию</div>
					<form>
						<div>
							Название 
							<select class="removeDirSelect uk-select uk-form-width-small">
								<option>Консоль</option>	
							</select>
						</div>
						<div>
							Где:
							<select class="removeListSelect uk-select uk-form-width-small">
								<option>Электроника</option>	
							</select>
						</div>
						<input class="uk-button uk-button-default navSubmitDir" type="submit" name="">
					</form>
				</div>
			</div>

			<div class="adminList">
				<div class="addList">
					<div>Создать Список</div>
					<form>
						<div>
							Название <input class="uk-input" type="text" name="">
						</div>
						<input class="uk-button uk-button-default navSubmit" type="submit" name="">
					</form>
				</div>
				<div class="removeList">
					<div>Удалить Список</div>
					<form>
						<div>
							Название 
							<select class="removeListSelect uk-select uk-form-width-small">
								<option>Электроника</option>	
							</select>
						</div>
						<input class="uk-button uk-button-default navSubmit" type="submit" name="">
					</form>
				</div>
			</div>
		</div>
	
	</div>

</body>
</html>