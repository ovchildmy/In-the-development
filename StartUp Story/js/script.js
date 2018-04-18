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

$(".projects").on('click', function(){
	$('.projectMenu').show();
})

function hideAllMenu(){
	$(".projectMenu").hide();
	$('.workerMenu').hide();
	$('.financeMenu').hide();
}

$(".closeMenu").on('click',function(){
	hideAllMenu();
})

$('.workers').on('click',function(){
	$('.workerMenu').show();
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

$(".finance").click(function(){
	$(".financeMenu").show()
})


//////////////////////////////////////
/////// Finance Line func

function financeLine(){
	var moneyCount = parseInt($(".moneyCountNumber").text());
	var y = moneyCount;
	var followChange = 1;

	if(moneyCount <= 100){
		followChange = 1;
		y = y/followChange;
		y = 200 - y;
	}else if(moneyCount <= 1000 && moneyCount>100){
		followChange = 1000; 
		y = y/followChange;
		y = 150 - y;
	}else if(moneyCount <=100000 && moneyCount>1000){
		followChange = 100000;
		y = y/followChange;
		y = 100 - y;
	}

		var currentPoints = $(".financeLine").attr("points");
			x += 50;
			console.log(y);
			$(".financeLine").attr("points", currentPoints + x+","+y+" ");

	if($(".polylineBlock").css("width")<= "500px"){
		var marginLeft = $(".polylineBlock").css("margin-left");
		$(".polylineBlock").css("margin-left", marginLeft-50)
	}

}



$(".minus").click(function(){
	var money = $(".moneyCountNumber").text();
	$(".moneyCountNumber").text(+money - 100);
})

$(".plus").click(function(){
	var money = $(".moneyCountNumber").text();
	$(".moneyCountNumber").text(+money + 100);
})


