<?php 
	include('db.php');

	$query = mysql_query("SELECT * FROM posts ORDER BY id DESC");

	while($translate = mysql_fetch_array($query, MYSQL_ASSOC)){
		echo '<div class="mp-post"><div class="mp-post_headline"><div class="mp-post_date">'.$translate["time"].'</div>'.$translate["headline"].'</div><div class="mp-post_text">'.$translate["text"].'</div></div>';
	}
	
 ?>