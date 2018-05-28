$(".needBlock").on("click", function(){
		hideAllMenu();
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