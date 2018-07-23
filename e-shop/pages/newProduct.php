<?php  

	include("db.php");


	$name = $_POST["name"];
	$price = $_POST["price"];
	$type = $_POST["type"];
	$currency = $_POST["currency"];
	$description = $_POST["description"];
	// $avatar = $_POST["avatar"];
	// $photo1 = $_POST["photo1"];
	// $photo2 = $_POST["photo2"];
	// $photo3 = $_POST["photo3"];
	// $photo4 = $_POST["photo4"];
	// $photo5 = $_POST["photo5"];
	// $photo6 = $_POST["photo6"];
	$code = generateRandomString();

	for ($i=1; $i < 7; $i++) { 
		$photo.$i = $_POST["photo".$i.""];
		// echo $photo.$i."<br>";
	}
		echo $photo1."<br>";
	// var_dump($photo);

	// $file = $_FILES["file"];
	// $tmp_dir = $file["tmp_name"];
	// $dir = "../files/";
	// $file_name = $file["name"];
	// $new_dir = $dir.$file_name;


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
		// move_uploaded_file($tmp_dir, $new_dir);
		mysql_query("INSERT INTO products(code, name, price, type, currency, description, avatar, photo1, photo2, photo3, photo4, photo5, photo6) VALUES('$code','$name','$price', '$type', '$currency', '$description', '$avatar', '$photo1', '$photo2', '$photo3', '$photo4', '$photo5', '$photo6')");

		header("Location: ../index.php");
		exit;
	}

		// echo $photo1;
		// echo "<br>";
		// echo $photo2;
		// echo "<br>";
		// echo $photo3;
		// echo "<br>";


















?>