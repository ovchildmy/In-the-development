/////////////////////////////////////
///Title


for(var i=0; i<$(".startText").length;i++){
	if($(".startText").eq(i).data("startpage") == "0"){
		$(".startText").eq(i).show();
	}
}

$(".startExit").on("click", function(){
	$(".start").hide();
})

//////////////////////////////////////
/// Title date func

$('.startNextBut').on('click', function(){
	var startText = $(".startText");
	var currentStartText;
	var nextStartText;
	var startTextLength = startText.length;

	for(i=0;i<startText.length;i++){
		if(startText.eq(i).css("display") == "block"){
				currentStartText = startText.eq(i);
				nextStartText = startText.eq(i+1);
		}
	}
			console.log(nextStartText)

	for(i=0;i<startText.length;i++){
		if(currentStartText.data("startpage") == i){
			if(i == 3) {
				$('.start').hide();
			};

			currentStartText.hide();
			nextStartText.show();
			
		}


	};

})

function hideAllMenu(){
	$(".projectMenu").hide();
	$('.workerMenu').hide();
	$('.historyMenu').hide();
	$('.marketingMenu').hide();
	$('.financeMenu').hide();
}

$(".closeMenu").on('click',function(){
	hideAllMenu();
})

//////////////////////////////////////
///Day func


$(".financeLine").attr("points", "0,200 ");

var x = 0;

function dayFunction(){
	var day;
	var month = 0;
	var year = 0;

	setInterval(function(){
		var currentWidth = $(".dayStatus").css('width');
		var currentWidthNumber = parseInt(currentWidth);
		var currentDay = $(".currentDay").html();
		day = currentDay;
		var newWidth = currentWidthNumber + 1;
		$(".dayStatus").css('width', newWidth);

		if($(".dayStatus").css('width') == "1300px"){
			financeLine();
			$(".dayStatus").css('width', '0px');
			$(".currentDay").html(+currentDay+1)

			if(currentDay == "30"){
				$(".currentDay").html("1");
				month = month + 1;
			}
		}
		if(month > 12){
			month = 1;
			year += 1;
		}
		$(".currentDay").attr('title', year+' year, '+ month+' month, '+ day+' day')
	},12)
}

dayFunction();

//////////////////////////////////////////////////////
//Открытие Menu после клика на соответсвующий блок

$(".blockLink").on('click', function(){
	for(i = 0; i < $('.blockLink').length; i++){
		if($(".blockMenu").eq(i).data("menu") == $(this).data("menu")){
			hideAllMenu();
			$(".blockMenu").eq(i).show();
		}
	}
})

