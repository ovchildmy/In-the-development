$(".startDevelop").on("click", function(){
	if($(".namePr").val() != "" && $(".budgetBusiness").val() != ""){
		// $(".curPrTable").append("<tr><td>+"$(".namePr").val()"+</td><td>"+ 0 +"</td><td>"+ - +"</td></tr>")
		
		// $(".namePr").val("");
		// $(".budgetBusiness").val("");
	}else{
		console.log("Empty");
	}
})