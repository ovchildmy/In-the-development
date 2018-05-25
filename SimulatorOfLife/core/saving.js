$(".saveBlock").on('click',function(){
	var money = +$(".money__cash").text();
	var foodRowStatus = $(".foodRowStatus").css("width");
	foodRowStatus = parseInt(foodRowStatus);
	var healthRowStatus = $(".healthRowStatus").css("width");
	healthRowStatus = parseInt(healthRowStatus);
	var resRowStatus = $(".resRowStatus").css("width");
	resRowStatus = parseInt(resRowStatus);
	var energyRowStatus = $(".energyRowStatus").css("width");
	energyRowStatus = parseInt(energyRowStatus);

	var money = +$(".money__cash").text();

	// console.log(foodRowStatus)

	$(".saveWarning").css({"display": "block"});
	setTimeout(function(){
		$(".saveWarning").css({"display": "none"});
	},1500)

	console.log(jobStatus)

	localStorage.setItem("jobStatus", jobStatus);
	localStorage.setItem("lastGameMoney", money);
	localStorage.setItem("lastGameFood", foodRowStatus);
	localStorage.setItem("lastGameHealth", healthRowStatus);
	localStorage.setItem("lastGameRespect", resRowStatus);
	localStorage.setItem("lastGameEnergy", energyRowStatus);

	
})