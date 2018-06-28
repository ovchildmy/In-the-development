<div class="mp-head">
	<div class="mp-mainPhoto">
		<div class="mp-mainPhoto_popup">
			<div><span>change</span></div>
			<div><span>watch</span></div>
		</div>
	</div>
	<div class="mp-right">
		<div class="mp-status">asdasdfafd</div>

		<div class="mp-photo">
			<div class="mp-photo_see">see</div>
			<div class="mp-photo_items"></div>
			<div class="mp-photo_add"><div>+</div></div>
		</div>
	</div>
</div>

<div class="mp-posts">
	<div class="mp-createPost">
		<form action="pages/createPost.php" method="post">
			<input class="mp-createPost_headLine" type="text" placeholder="headline" name="headline">
			<textarea placeholder="Message" name="text"></textarea>
			<input type="submit" name="">
		</form>
	</div>

	<?php 
		include("pages/publishPost.php");
	?>
</div>