$(".startDevelop").on("click", function(){
	var namePr = $(".namePr").val();



	if($(".namePr").val() != "" && $(".budgetBusiness").val() != ""){

		var length = $(".progressRow").length;
		var lastNum = length + 1;

		if($(".prMenu select").val() != ""){
			$(".progressBlock").append("<div data-variant="+typePr+" data-type="+$('.prMenu select').val()+" data-prnum="+ lastNum +" class='space'><div class='nameProgress'>"+namePr+"</div><div class='progressRow'><div class='progressRowStatus'></div></div><div data-prnum="+ lastNum +"  class='release'>release</div></div>");
			$(".namePr").val("");
			$(".budgetBusiness").val("");
			$(".prMenu select").val("")
		}else{
			console.log("Option is Empty")
		}



	}else{console.log("Empty");}
	



})





