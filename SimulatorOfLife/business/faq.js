$(".ask").on("mouseover", function(){
	var question = $(this).data("question");
	$("."+question+"Answer").show();
})

$(".ask").on("mouseout", function(){
	var question = $(this).data("question");
	$("."+question+"Answer").hide();
})