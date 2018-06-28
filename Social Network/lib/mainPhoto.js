$('.mp-left').on("mouseover", function(){
	$(".mp-mainPhoto_popup").animate({
		opacity: 1,
		bottom: "100"
	}, 100);

	console.log(123)
})

$('.mp-left').on("mouseout", function(){
	$(".mp-mainPhoto_popup").animate({
		opacity: .0,
		bottom:"0"
	},100);
})