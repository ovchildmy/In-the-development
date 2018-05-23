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
	$(".saveBlock").show();
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

	localStorage.setItem("lastGameMoney", money);
	localStorage.setItem("lastGameFood", foodRowStatus);
	localStorage.setItem("lastGameHealth", healthRowStatus);
	localStorage.setItem("lastGameRespect", resRowStatus);
	localStorage.setItem("lastGameEnergy", energyRowStatus);

	
})


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

	$(".money__cash").text(money);
	$(".foodRowStatus").css({"width": food});
	$(".healthRowStatus").css({"width": health});
	$(".resRowStatus").css({"width": respect});
	$(".energyRowStatus").css({"width": energy});

	openCloseFunc();
})												



	$(".needBlock").on("click", function(){
		$(".goodDeedsSecMenu").hide()
		var needBlock = $(".needBlock");
		var divMenu = $(".divMenu");
		var thisBlockMenu = $(this).data("blockmenu");
		
		divMenu.hide();
		for(var i = 0; i < divMenu.length; i++){
			if(divMenu.eq(i).data("blockmenu") == thisBlockMenu){
				divMenu.eq(i).show();
			}
		}

	//	console.log(thisBlockMenu)
	})


$(".cross").click(function(){
	hideAllMenu();
})

$(".fastFood").click(function(){
	$(".restaurant-food").hide();
	$(".cafe-food").hide();
	$(".fastFood-food").show();
})

$(".cafe").click(function(){
	$(".fastFood-food").hide();
	$(".restaurant-food").hide();
	$(".cafe-food").show();
})

$(".restaurant").click(function(){
	$(".fastFood-food").hide();
	$(".cafe-food").hide();
	$(".restaurant-food").show();
})


$(".goodDeedsBlock").click(function(){
	$(".goodDeedsBlock").hide();
	$(".badDeedsBlock").hide();
	$(".respectArrowBack").show();
	$(".goodDeedsMenu").show();
	$(".goodDeedsMenuWrap").show();
	$(".deedImg").hide();
})

$(".goodDeedAgree").click(function(){
	var thisGoodDeed = $(this).data("gooddeed");
	var goodDeedAgreeMenu = $(".goodDeedAgreeMenu");

	$(".goodDeedsMenu").hide()
	$(".goodDeedAgreeMenu").hide();

	for(i = 0; i < $(".goodDeedAgreeMenu").length; i++){
		if(goodDeedAgreeMenu.eq(i).data("gooddeed") == thisGoodDeed){
			goodDeedAgreeMenu.eq(i).show();
			
			if(thisGoodDeed == "3"){
			//$(this).createElement("<div class='goodDeedPopup'></div>");
			//$(".goodDeedPopup").createElement("<span>Are you sure you want to do this?</span>")

				//$(".goodDeedPopup").closest(".goodDeedAgreeMenu").unwrap();
				//console.log(111)
				//$(".goodDeedAgreeMenu").hide();
				$(".goodDeedPopup").wrap("<div class='goodDeedPopupWrap'></div>");
				$(".goodDeedPopup").show();
				$(".goodDeedPopupWrap").show();
				$(".cross").hide();
				$(".respectArrowBack").hide();
				$(".goodDeedsMenuWrap").hide();
				$('.respectMenu').hide();

			}

		}
	}



})

$(".goodDeedPopupNo").on('click', function(){
	// $(".goodDeedPopup").unwrap();
	//$(".goodDeedPopup").wrap("<div class='goodDeedAgreeMenu'></div>")
	$(".goodDeedPopup").hide();
	//$(".cross").show();
	//$(".respectArrowBack").show();

	var goodDeedsMenuWrap = $('.goodDeedsMenuWrap');
	var badDeedsMenuWrap = $('.badDeedsMenuWrap');
	var goodDeedsBlock = $('.goodDeedsBlock');
	var badDeedsBlock = $('.badDeedsBlock');

	$(".respectArrowBack").hide();
	$(".goodDeedsMenuWrap").hide();
	$(".badDeedsMenuWrap").hide();
	$(".deedImg").show();
	goodDeedsBlock.show();
	badDeedsBlock.show();
	$(".goodDeedAgreeMenu").hide()

})
				//$(".goodDeedPopup").closest(".goodDeedAgreeMenu").unwrap();
				//console.log(111)
				//$(".goodDeedPopup").wrap("<div class='goodDeedPopupWrap'></div>");

$(".badDeedsBlock").click(function(){
	$(".badDeedsBlock").hide();
	$(".deedImg").hide();
	$(".badDeedsMenuWrap").show();
	$(".goodDeedsBlock").hide();
	$(".respectArrowBack").show();
	$(".badDeedsMenu").show();
})


$(".respectArrowBack").click(function(){											 //Действия стрелки в меню уважения
	var goodDeedsMenuWrap = $('.goodDeedsMenuWrap');
	var badDeedsMenuWrap = $('.badDeedsMenuWrap');
	var goodDeedsBlock = $('.goodDeedsBlock');
	var badDeedsBlock = $('.badDeedsBlock');

	$(".respectArrowBack").hide();
	$(".goodDeedsMenuWrap").hide();
	$(".badDeedsMenuWrap").hide();
	$(".deedImg").show();
	goodDeedsBlock.show();
	badDeedsBlock.show();
	$(".goodDeedAgreeMenu").hide()

	if(goodDeedsBlock.css("display") == "none" && $(".goodDeedsMenu").css("display") == "none"){
		console.log(123)
	}
})


//////////////////////////////////////
//////////////////////////////////////
//////////Функция ВСЕХ меню///////////
//////////И действий за день//////////


$(".buy").on("click", function(){ 



											// АНАЛИЗ ОТКРЫТОГО МЕНЮ


		var parentOfBuy = $(this).parent().parent().parent().parent().parent();


		if(parentOfBuy.attr("class") == "foodMenu divMenu"){
			//console.log("Это ФудМеню, будем менять ФудРоуСтатус");
			var actionsCount = $(".actionsCount").text();
			var currentStatusMenu = $(".foodRowStatus");
			var currentWidth = $(".foodRowStatus").css("width"); 			
		} else if(parentOfBuy.attr("class") == "healthMenu divMenu"){
			//console.log("Это хелфМеню, будем менять хелфРоуСтатус");
			var currentStatusMenu = $(".healthRowStatus");
			var actionsCount = $(".actionsCount").text();
			var currentWidth = $(".healthRowStatus").css("width"); 
		} else if(parentOfBuy.attr("class") == "energyMenu divMenu"){
			//console.log("Это енерджиМеню, будем менять енерджиРоуСтатус");
			var currentStatusMenu = $(".energyRowStatus");
			var actionsCount = $(".actionsCount").text();
			var currentWidth = $(".energyRowStatus").css("width"); 
		}
		

		currentWidth = parseInt(currentWidth); 
		currentWidth = (currentWidth/8); 

		

			if($(".actionsCount").html() <= "0"){
				$(".actionsCount").html("0");
				console.log(0 + " действий")
				return false;
			}else if($(".actionsCount").html() >= "0"){
				console.log("больше 0 действий")
				if(parentOfBuy.attr("class") != "foodMenu divMenu"){
					$(".actionsCount").html(actionsCount - 1);
					console.log("Не ФудМеню")
					for(i = 0; i < $(".buy").length; i++){		
					if($(".productivity").eq(i).data("perform") == $(this).data("perform")){
					var productivity = $(".productivity").eq(i).children(".productivityValue").text()
					currentWidth += +productivity;	
					currentWidth += "%"
					currentStatusMenu.css({"width": currentWidth});
					}
				}
				} else{
					console.log("ФудМеню")
					for(i = 0; i < $(".buy").length; i++){		
					if($(".productivity").eq(i).data("perform") == $(this).data("perform")){
					var productivity = $(".productivity").eq(i).children(".productivityValue").text()
					currentWidth += +productivity;	
					currentWidth += "%"
					currentStatusMenu.css({"width": currentWidth});
					}
				}
				}
			}

		

		//	console.log(typeof($(".actionsCount").text()))
});


//////////////////////////////////////
//////////////////////////////////////
//////////Функция снятия денег////////


$(".buy").on("click", function(){

	if($(".actionsCount").html() != "0"){

		for(i = 0; i < $(".buy").length; i++){
				if($(".price").eq(i).data("perform") == $(this).data("perform")){

					var moneyCash = $(".money__cash").text();
					var price = parseInt($(".price").eq(i).text())

					moneyCash -= price;					
					$(".money__cash").html(moneyCash)

				}
		}
	} else{
		return false;
	}

});


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

})



//////////////////////////////////////
//////////////////////////////////////
//////////Функция действий за день////

