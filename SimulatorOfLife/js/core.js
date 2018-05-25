function hideAllMenu(){
	$(".healthMenu").hide();
	$(".respectMenu").hide();
	$(".moneyMenu").hide();
	$(".energyMenu").hide();
	$(".foodMenu").hide();
}

function openCloseFunc(){ 													//Закрывает гл меню и открывает игру
	$(".mainMenu").hide();
	$(".header").show();
	$(".needsBlocks").show();
	$(".saveBlock").css({"display":"inline-block"});
}

$(".startGameText").on("click", function(){   										// Старт новой игры
	$(".startGame").hide();
	$(".continueGame").hide();
	$(".LoadGame").hide();
	$(".linkToMeBlock").hide();
	$(".startGameMenu").show();
})

$(".startGameMenu > span").on('click',function(){
	openCloseFunc();
})

