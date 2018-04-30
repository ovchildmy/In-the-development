//////////////////////////////////////
/////// Finance Line func

function financeLine(){
	var moneyCount = parseInt($(".moneyCountNumber").text());
	var y = moneyCount;
	var followChange = 1;
	var financeLineWidthPx = $(".financeLine").css('width');
	var financeLineWidth = parseInt(financeLineWidthPx)


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




	$(".financeLine").css('width', +financeLineWidth+50)

}

setInterval(function(){
console.log($(".financeLine").css('width'))

},1000)

$(".minus").click(function(){
	var money = $(".moneyCountNumber").text();
	$(".moneyCountNumber").text(+money - 90);
})

$(".plus").click(function(){
	var money = $(".moneyCountNumber").text();
	$(".moneyCountNumber").text(+money + 100000);
})