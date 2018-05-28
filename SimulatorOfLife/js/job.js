//var jobStatus = false;

$('.workGet').on("click", function(){
	localStorage.jobStatus = "true";
	console.log(localStorage.jobStatus)
})

$('.workQuit').on("click", function(){
	localStorage.jobStatus = "false";
	console.log(localStorage.jobStatus)
})

function jobFunc(){
	var money = +$('.money__cash').text();
	if(localStorage.jobStatus == "true"){
		$('.money__cash').text(money+60);
		console.log(123)
	}

}