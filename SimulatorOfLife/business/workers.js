$(".hireAgree").on("click",function(){
	var count = +$(".hireCount").val();
	var currentWorkers = +$(".workersCount").text();
	
	$(".workersCount").text(currentWorkers+count);

	$(".hireCount").val("");

	$(".workersSolary").text(2300* +$(".workersCount").text());
})

$(".fireAgree").on("click",function(){
	var count = +$(".fireCount").val();
	var currentWorkers = +$(".workersCount").text();
	
	if(count<=currentWorkers){
		$(".workersCount").text(currentWorkers-count);
	}

	$(".fireCount").val("");

	$(".workersSolary").text(2300* +$(".workersCount").text());
})