var day=1;
var month=1;
var year=1;


$(".nextDay").on("click",function(){
	var title = $(".nextDay").attr("title");

	if(day==30){
		day=1
		month+=1;
		solary();
	}else{
		day++;
	}

	if(month==13){
		month=1;
		year++;
	}

	$(".nextDay").attr("title", day+" day, "+month+" month, "+year+" year");
})