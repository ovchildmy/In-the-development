for(var i=0; i<$(".startText").length;i++){
	if($(".startText").eq(i).data("startpage") == "0"){
		$(".startText").eq(i).show();
	}
}

$(".startExit").on("click", function(){
	$(".start").hide();
})

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


//////////////////////////////////////
///Day func

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
		$(".dayStatus").css('width', '0px');
		$(".currentDay").html(+currentDay+1)
		//console.log(currentDay)
		if(currentDay == "30"){
			$(".currentDay").html("1");
			month = month + 1;
		//console.log(month);
		}
	}
	if(month > 12){
		month = 1;
		year += 1;
	}
	$(".currentDay").attr('title', year+' year, '+ month+' month, '+ day+' day')
	},10)
}

dayFunction();

$(".finance").click(function(){
	$(".financeMenu").show()
})


function financeLine(){
	var moneyCount = parseInt($(".moneyCount").html());
	var x = 0;
	var y = moneyCount;
	var followChange = 1;
	var dayStatus = $(".dayStatus");


	setInterval(function(){
		if(moneyCount <= 100){
			followChange = 1;
		}else if(moneyCount <= 1000 && moneyCount>100){
			followChange = 1000; 
		}else if(moneyCount <=100000 && moneyCount>1000){
			followChange = 100000;
		}

		if(dayStatus.css('width') == "1px"){
			x += 50;
			y = y/followChange;
			console.log(y)

		}

			//console.log(typeof(dayStatus.css('width')))

	},20)

	$(".financeLine").attr("points", "")
}

financeLine();