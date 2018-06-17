function solary(){
	var cash = $(".money__cash").text();
	$(".money__cash").text(cash- +$('.workersSolary').text());
}