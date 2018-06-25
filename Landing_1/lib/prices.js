$(".pricesNav div").on("click",function(){
	$(".pricesNav div").removeClass("currentPrice");
	$(this).addClass("currentPrice");
})

$(".pricesNav div").first().click();

$(".pricesNav div").on("click",function(){
	var curPrices = $(".pricesNav div");




	$(".pricesNav div").each(function(index){
		// console.log($(".pricesNav div").eq(index))

			console.log(this)
			console.log($(".pricesNav div")[index])
		if($(".pricesNav div")[index]==$(this)){
		}
	})

	// console.log($(this).eq(1))
	// console.log($(".currentPrice"))


	// for(var i=0; i < $(".pricesNav div").length; i++){
	// 	if($(".pricesNav div").eq(i) == $(".currentPrice")){
	// 		console.log(i)
	// 	}
	// }


	// $(".serviceWrap").hide()
})

