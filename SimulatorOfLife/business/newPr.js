$(".startDevelop").on("click", function(){
	var namePr = $(".namePr").val();



	if($(".namePr").val() != "" && $(".budgetBusiness").val() != ""){

		var length = $(".progressRow").length;
		var lastNum = length + 1;

		if($(".prMenu select").val() != ""){
			$(".progressBlock").append("<div data-type="+$('.prMenu select').val()+" data-prnum="+ lastNum +" class='space'><div class='nameProgress'>"+namePr+"</div><div class='progressRow'><div class='progressRowStatus'></div></div><div data-prnum="+ lastNum +"  class='release'>release</div></div>");
			$(".namePr").val("");
			$(".budgetBusiness").val("");
			$(".prMenu select").val("")
		}else{
			console.log("Option is Empty")
		}



	}else{console.log("Empty");}
	



})


$(document).on("click",".release", function(){

	var prnum = $(this).data("prnum");
	var parent = $(this).parent();
	var readiness = $(".progressRowStatus").css("width");
	readiness = parseInt(readiness);
	readiness = readiness/600;
	readiness.toFixed(1);
	console.log(readiness);

	list.push({"name":parent.children(".nameProgress").text(),"marketing":"none","readiness":readiness,"type":parent.data('type')});

	$(".curPrTable").append("<tr><td title="+parent.data('type')+">"+parent.children(".nameProgress").text()+"</td><td>"+ 0 +"</td><td>"+ - +"</td></tr>")


	console.log(list);

	parent.remove();
})


