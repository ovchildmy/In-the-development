//////////////////////////////////////
//////////////////////////////////////
//////////Функция следующего хода/////


$(".nextDay").on("click", function(){

	var foodRowStatus = $(".foodRowStatus");
	var energyRowStatus = $(".energyRowStatus");
	var healthRowStatus = $(".healthRowStatus");


	foodRowStatus = parseInt(foodRowStatus.css("width"));
	foodRowStatus = (foodRowStatus / 8);
	foodRowStatus = foodRowStatus - 14;
	$(".foodRowStatus").css({"width":foodRowStatus + "%"})


	energyRowStatus = parseInt(energyRowStatus.css("width"));
	energyRowStatus = (energyRowStatus / 8);
	energyRowStatus = energyRowStatus - 30;
	$(".energyRowStatus").css({"width":energyRowStatus + "%"})


	healthRowStatus = parseInt(healthRowStatus.css("width"));
	healthRowStatus = (healthRowStatus / 8);
	healthRowStatus = healthRowStatus - 5;
	$(".healthRowStatus").css({"width":healthRowStatus + "%"});

	$(".actionsCount").html(4)


	jobFunc();
})