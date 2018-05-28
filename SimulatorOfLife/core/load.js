$(".LoadGameText").on("click",function(){										// Load menu
	$(".startGame").hide();
	$(".continueGame").hide();
	$(".LoadGame").hide();
	$(".linkToMeBlock").hide();
	$(".loadMenu").show();
})

// Загрузка определённого сохранения


$('.continueGameText').on('click', function(){									// Загрузка прежней (последней) игры
	var money = localStorage.getItem("lastGameMoney");
	var food = localStorage.getItem("lastGameFood");
	var health = localStorage.getItem("lastGameHealth");
	var respect = localStorage.getItem("lastGameRespect");
	var energy = localStorage.getItem("lastGameEnergy");
	var job = localStorage.getItem("jobStatus");

	$(".money__cash").text(money);
	$(".foodRowStatus").css({"width": food});
	$(".healthRowStatus").css({"width": health});
	$(".resRowStatus").css({"width": respect});
	$(".energyRowStatus").css({"width": energy});


	openCloseFunc();
})		