<?php  
	header("Content-Type: text/html; charset=utf-8");
    mb_internal_encoding('UTF-8');
	include("db.php");


	$name = $_POST["name"];
	$price = $_POST["price"];
	$type = $_POST["type"];
	$currency = $_POST["currency"];
	$description = $_POST["description"];
	$avatar = $_POST["avatar"];
	$photo1 = $_POST["photo1"];
	$photo2 = $_POST["photo2"];
	$photo3 = $_POST["photo3"];
	$photo4 = $_POST["photo4"];
	$photo5 = $_POST["photo5"];
	$photo6 = $_POST["photo6"];
	$code = generateRandomString();

	// for ($i=1; $i < 7; $i++) { 
	// 	$photo.$i = $_POST["photo".$i.""];
	// 	 echo $photo.$i."<br>";
	// }

	$dirName = iconv("UTF-8","Windows-1251", "../products/".$name);

	mkdir($dirName, 0777, true);

	$file1 = $_FILES["photo1"];
	$file2 = $_FILES["photo2"];
	$file3 = $_FILES["photo3"];
	$file4 = $_FILES["photo4"];
	$file5 = $_FILES["photo5"];
	$file6 = $_FILES["photo6"];
	$dir = "../products/".$name."/";


	function generateRandomString($length = 20) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}


	if(!empty($name)){
		move_uploaded_file($_FILES["photo1"]["tmp_name"], $dir.$_FILES["photo1"]["name"]);
		move_uploaded_file($_FILES["photo2"]["tmp_name"], $dir.$_FILES["photo2"]["name"]);
		move_uploaded_file($_FILES["photo3"]["tmp_name"], $dir.$_FILES["photo3"]["name"]);
		move_uploaded_file($_FILES["photo4"]["tmp_name"], $dir.$_FILES["photo4"]["name"]);
		move_uploaded_file($_FILES["photo5"]["tmp_name"], $dir.$_FILES["photo5"]["name"]);
		move_uploaded_file($_FILES["photo6"]["tmp_name"], $dir.$_FILES["photo6"]["name"]);

		mysql_query("INSERT INTO products(code, name, price, type, currency, description, avatar, photo1, photo2, photo3, photo4, photo5, photo6) VALUES('$code','$name','$price', '$type', '$currency', '$description', '$avatar', '$photo1', '$photo2', '$photo3', '$photo4', '$photo5', '$photo6')");



		header("Location: ../index.php");
		exit;
	}
?>