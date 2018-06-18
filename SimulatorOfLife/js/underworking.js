$(".moneyBlock-other").on("click", function() {
	$('.moneyMenu > div').hide();
	$(".uderworking__types").show();
	$(".uderworking__types div").show();
})

$(".uderworking__types div").on("click", function(){
	if($(".actionsCount").text()>0){
		var cash = $(".money__cash").text()
		var curProfit = $(this).data("profit");
		var day = $(".actionsCount").text();
		var energy = $(this).data("energy");
		var health = $(this).data("health");
		var healthWidth = parseInt($(".healthRowStatus").css("width"))/8-health + "%";
		var energyWidth = parseInt($(".energyRowStatus").css("width"))/8-energy + "%";

		console.log(energy);
		console.log(health);
		
		$(".healthRowStatus").css("width", healthWidth);
		$(".energyRowStatus").css("width", energyWidth);
		$(".money__cash").text(+cash + curProfit);

		$(".actionsCount").text(day-1);
	}
})