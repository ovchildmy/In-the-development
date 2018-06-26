$(".pricesNav div").on("click",function(){
	var curPrices = $(".pricesNav div");
	var index = $(this).index();
	var prices = $(".serviceWrap");

	$(".pricesNav div").removeClass("currentPrice");
	$(this).addClass("currentPrice");
	$(".serviceWrap").hide();
	$(".serviceWrap").eq(index).show();
})

$(".pricesNav div").first().click();