var jobStatus = false;

$('.workGet').on("click", function(){
	jobStatus = true;
	console.log(jobStatus)
})

$('.workQuit').on("click", function(){
	jobStatus = false;
	console.log(jobStatus)
})

function jobFunc(){
	var money = +$('.money__cash').text();
	if(jobStatus == true){	
		$('.money__cash').text(money+60);
	}
}