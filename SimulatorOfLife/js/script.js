function hideAllMenu(){
	$(".healthMenu").hide();
	$(".respectMenu").hide();
	$(".moneyMenu").hide();
	$(".energyMenu").hide();
	$(".foodMenu").hide();
}


	$(".needBlock").on("click", function(){
		var needBlock = $(".needBlock");
		var divMenu = $(".divMenu");
		var thisBlockMenu = $(this).data("blockmenu");
		
		divMenu.hide()
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
			$(".goodDeedAgreeMenu").eq(i).show();
		}
	}

})

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




/*

//////////////////////////////////////
//////////////////////////////////////
//////////Функция меню еды////////////



	$(".buyFood").on("click", function(){ 									
		var currentWidth = $(".foodRowStatus").css("width"); 
		currentWidth = parseInt(currentWidth); 
		currentWidth = (currentWidth/8); 
		var buyFoodProductName = $(".buyFood").data("product"); 
		var foodAvailProductName = $(".foodAvail").data("product"); 
		var foodWidth = $(".foodAvail").children(".foodWidth").text(); 
		var foodWidthBlock = $(".foodWidth").data("product");
		foodWidth = parseInt(foodWidth); 

		var foodAvailproductAvail = $(".foodAvail").data("productavail"); 
		console.log($(".foodRowStatus").css("width")) 
		

		for(i = 0; i < $(".buyFood").length; i++){
			if($(".foodAvail").eq(i).data("product") == $(this).data("product")){
				console.log($(".foodAvail").eq(i))
				currentWidth += $(".foodAvail").eq(i).data("productavail");			//.children(".foodWidth").text();
				currentWidth += "%"
				$(".foodRowStatus").css({"width": currentWidth});	
		console.log(currentWidth); 
			}
		}

}); 

//console.log(currentWidth + ' - Длина StatusRow'); 


//////////////////////////////////////
//////////////////////////////////////
//////////Функция меню энергии////////


$(".energyPerform").on("click", function(){ 

		var currentWidth = $(".energyRowStatus").css("width"); 
		currentWidth = parseInt(currentWidth); 
		currentWidth = (currentWidth/8); 
		

		for(i = 0; i < $(".energyPerform").length; i++){
			if($(".productivityEnergy").eq(i).data("perform") == $(this).data("perform")){
				//console.log($(".productivityEnergy").eq(i))
				var productivityEnergy = $(".productivityEnergy").eq(i).children(".productivityEnergyValue").text()
				currentWidth += +productivityEnergy;	
			console.log(typeof(+productivityEnergy)); 
				currentWidth += "%"
				$(".energyRowStatus").css({"width": currentWidth});	
			}
		}

}); 

*/


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

