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
				// console.log(0 + " действий")
				return false;
			}else if($(".actionsCount").html() >= "0"){
				// console.log("больше 0 действий")
				if(parentOfBuy.attr("class") != "foodMenu"){
					$(".actionsCount").html(actionsCount - 1);
					// console.log("Не ФудМеню")
					for(i = 0; i < $(".buy").length; i++){		
						if($(".productivity").eq(i).data("perform") == $(this).data("perform")){
							var productivity = $(".productivity").eq(i).children(".productivityValue").text()
							currentWidth += +productivity;	
							currentWidth += "%"
							currentStatusMenu.css({"width": currentWidth});	
					}
				}
				} else{
					// console.log("ФудМеню")
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


/////////////////////////////////////////////////////////
/////// Эффекты от действия

$(".buy").on("click",function(){
	healthWidth = parseInt($(".healthRowStatus").css("width"))/8;

	respecthWidth = parseInt($(".resRowStatus").css("width"))/8;

	energyWidth = parseInt($(".energyRowStatus").css("width"))/8


	if($(".actionsCount").html() > "0"){
		console.log($(this).parent().children(".effect").data("health"))
		for(i = 0; i < $(".buy").length; i++){
				if($(".effect").eq(i).data("perform") == $(this).data("perform")){
					if($(".effect").eq(i).data("health")!=undefined){
						var dataH = Number($(".effect").eq(i).data("health"));
						var newWidthHealth = healthWidth + dataH;
						newWidthHealth += "%"; 
						$(".healthRowStatus").css("width", newWidthHealth);
						
					}

					if($(".effect").eq(i).data("respect")!=undefined){
						var dataH = Number($(".effect").eq(i).data("respect"));
						var newWidthHealth = respecthWidth + dataH;
						newWidthHealth += "%"; 
						$(".resRowStatus").css("width", newWidthHealth);
					}

					if($(".effect").eq(i).data("energy")!=undefined){
						console.log($(".effect").eq(i).data("energy"))
						var dataH = Number($(".effect").eq(i).data("energy"));
						var newWidthHealth = energyWidth + dataH;
						newWidthHealth += "%"; 
						$(".energyRowStatus").css("width", newWidthHealth);
					}
				}
		}
	}
})