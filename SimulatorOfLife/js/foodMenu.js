$(".fastFood").click(function(){
	$(".restaurant-food").hide();
	$(".cafe-food").hide();
	$(".fastFood-food").show();
})

$(".cafe").click(function(){
	$(".fastFood-food").hide();
	$(".restaurant-food").hide();
	$(".cafe-food").show();
})

$(".restaurant").click(function(){
	$(".fastFood-food").hide();
	$(".cafe-food").hide();
	$(".restaurant-food").show();
})