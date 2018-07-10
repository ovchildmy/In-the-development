$(".specialty-menu div").on("mouseover", function () {
	$(this).children(".specialty-menu_zoom").show();
	$(this).children(".specialty-menu_comment").show();
})

$(".specialty-menu div").on("mouseout", function () {
	$(this).children(".specialty-menu_zoom").hide();
	$(this).children(".specialty-menu_comment").hide();
})

