$(".startDevelop").on("click", function(){
	if($(".namePr").val() != "" && $(".budgetBusiness").val() != ""){
		$(".namePr").val("");
		$(".budgetBusiness").val("")
	}else{
		console.log("Empty");
	}
})