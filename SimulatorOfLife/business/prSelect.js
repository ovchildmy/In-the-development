var typePr;

$('.projectSpanBusiness').on("click", function(){
	$('.productSpanBusiness').css({"border":"0px dashed black"});
	$('.projectSpanBusiness').css({"border":"1px dashed black"});
	$(".projectOption").show();
	$(".productOption").hide();
	typePr = "project";
})


$('.productSpanBusiness').on("click", function(){
	$('.projectSpanBusiness').css({"border":"0px dashed black"});
	$('.productSpanBusiness').css({"border":"1px dashed black"});
	$(".projectOption").hide();
	$(".productOption").show();
	typePr = "product";
})

$(".prMenu select").on("click",function(){
	if(+$(".workersCount").text()<10){
		$(".prMenu select option").hide();
		// console.log("less")

	}else if(+$(".workersCount").text()>=10){
		// console.log("more")

	}
})