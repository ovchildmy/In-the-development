$(document).on("click",".release", function(){
	if($(".curPrTable tr").length>=6){
		$(".curPrTable tr")[1].remove();
	}
})