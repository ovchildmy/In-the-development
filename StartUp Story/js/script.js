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
			console.log()
})


function hideAllMenu(){
	$(".projectMenu").hide();
	$('.workerMenu').hide();
	$('.historyMenu').hide();
	$('.financeMenu').hide();
}

$(".closeMenu").on('click',function(){
	hideAllMenu();
})



		$(".financeLine").attr("points", "0,200 ");

//////////////////////////////////////
///Day func
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




//////////////////////////////////////
/////// Finance Line func

function financeLine(){
	var moneyCount = parseInt($(".moneyCountNumber").text());
	var y = moneyCount;
	var followChange = 1;

	if(moneyCount <= 100 && moneyCount>=0){
		followChange = 1;
		y = y/2;
		y = y/followChange;
		y = 200 - y;
	}else if(moneyCount <= 1000 && moneyCount>100){
		followChange = 10; 
		y = y/2;
		y = y/followChange;
		y = 150 - y;
	}else if(moneyCount <=100000 && moneyCount>1000){
		followChange = 1000;
		y = y/2;
		y = y/followChange;
		y = 100 - y;
	}else if(moneyCount <1000000 && moneyCount>100000){
		followChange = 10000;
		y = y/2;
		y = y/followChange;
		y = 50 - y;
	} //// Далее идёт проверка на отрицательное кол-во денег
	else if(moneyCount >= -100 && moneyCount<0){
		followChange = 1;
		y = y/2;
		y = y/followChange;
		y = 200 - y;
	}else if(moneyCount >= -1000 && moneyCount<-100){
		followChange = 10; 
		y = y/2;
		y = y/followChange;
		y = 250 - y;	
	}else if(moneyCount >=-100000 && moneyCount<-1000){
		followChange = 1000;
		y = y/2;
		y = y/followChange;
		y = 300 - y;
	}else if(moneyCount >-1000000 && moneyCount<-100000){
		followChange = 10000;
		y = y/2;
		y = y/followChange;
		y = 350 - y;
	}// Далее пойдёт проверка на максимальные значения
	else if(moneyCount >= 1000000){
		y=0;
	}else if(moneyCount <= -1000000){
		y=400;
	}

		var currentPoints = $(".financeLine").attr("points");
			x += 50;
			$(".financeLine").attr("points", currentPoints + x+","+y+" ");

	if($(".polylineBlock").css("width")<= "500px"){
		var marginLeft = $(".polylineBlock").css("margin-left");
		$(".polylineBlock").css("margin-left", marginLeft-50)
	}

}



$(".minus").click(function(){
	var money = $(".moneyCountNumber").text();
	$(".moneyCountNumber").text(+money - 90);
})

$(".plus").click(function(){
	var money = $(".moneyCountNumber").text();
	$(".moneyCountNumber").text(+money + 100000);
})

//////////////////////////////////////////////////////
//Открытие ..Menu после клика на соответсвующий блок

$(".blockLink").on('click', function(){
	for(i = 0; i < $('.blockLink').length; i++){
		if($(".blockMenu").eq(i).data("menu") == $(this).data("menu")){
			hideAllMenu();
			$(".blockMenu").eq(i).show();
		}
	}
})



/////////////////////////////////////////////////////////
//Effort Val

setInterval(function(){ 					
	var rangeVal = $('.rangeInput').val()
	$(".rangePercent").html(rangeVal); // Устанавливает значение % в effort
	
}, 10);
