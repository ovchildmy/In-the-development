/////////////////////////////
/// Общая функция по направлению работника

function workerTransfer(needyCount){
	var workersCountText = $(".workerCount").text();
	var workerCount = parseInt(workersCountText);
	$(".workerCount").text(+workerCount+needyCount+"W");
	$(".currentState").text(+workerCount+needyCount);
}



//////////////////////////
//// Найм сотрудника

$('.hire').on("click",function(){
	workerTransfer(1)
});

/////////////////////////////
//// Увольнение сотрудника


$('.fire').on("click",function(){
	var workerCount = $(".workerCount").text();
	workerCount = parseInt(workerCount);
	if(workerCount>0){
		workerTransfer(-1);
	}
});


/////////////////////////////////////////
/// Зарплата



setInterval(function(){
	var workersCountText = $(".workerCount").text();
	var workerCount = parseInt(workersCountText);
	$('.salary').text(workerCount*150);
},100)


////////////////////////////////////////
//// Многочисленное направление работника

$('.buttonWork').on('click',function(){

	for(i = 0; i<$(".workInput").length;i++){
		if($(this).data('action') == $(".workInput").eq(i).data("action")){
			var currentValInput = $(".workInput").eq(i).val();
			if($(this).data('action') == "hire"){
				workerTransfer(+currentValInput)
			}else{
				if(+$(".currentState").text() - currentValInput >= 0){
					workerTransfer(-currentValInput)
				}
			}
		}
	}
})


////////////////////////
// Зп рабочим (в Core.js)


function salaryToWorkers(){
	if(+$('.moneyCountNumber').text() >= +$('.salary').text()){
		$('.moneyCountNumber').text(+$('.moneyCountNumber').text()-+$('.salary').text())
	}else if(+$('.moneyCountNumber').text() < +$('.salary').text()){
		$('.moneyCountNumber').text(+$('.moneyCountNumber').text()-$('.salary').text())
		setTimeout(function(){
			alert('Game Over');
			$(".startMenuWrap").show()
		},300)
	}
}