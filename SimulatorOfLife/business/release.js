$(document).on("click",".release", function(){

	var prnum = $(this).data("prnum");
	var parent = $(this).parent();
	var readiness = $(".progressRowStatus").css("width");
	readiness = parseInt(readiness);
	readiness = readiness/600;
	readiness.toFixed(1);
	// console.log(readiness);

	list.push({"name":parent.children(".nameProgress").text(),"variant":parent.data('variant'),"marketing":"none","copies":"0","readiness":readiness,"type":parent.data('type')});

	$(".curPrTable").append("<tr><td title="+parent.data('type')+">"+parent.children(".nameProgress").text()+"</td><td>"+ 0 +"</td><td>"+ - +"</td></tr>")
	
	if(typePr == "product"){
		$(".productListMenu table").append("<tr><td>"+list[list.length-1].name+"</td><td>"+list[list.length-1].variant+"</td><td>"+list[list.length-1].type+"</td><td>"+list[list.length-1].readiness+"</td><td>"+list[list.length-1].copies+"</td><td>"+list[list.length-1].marketing+"</td></tr>");		
	}else if(typePr == undefined){
		$(".productListMenu table").append("<tr><td>"+list[list.length-1].name+"</td><td>"+list[list.length-1].variant+"</td><td>"+list[list.length-1].type+"</td><td>"+list[list.length-1].readiness+"</td><td>"+list[list.length-1].copies+"</td><td>"+list[list.length-1].marketing+"</td></tr>");		
	}else{
		$(".projectListMenu table").append("<tr><td>"+list[list.length-1].name+"</td><td>"+list[list.length-1].variant+"</td><td>"+list[list.length-1].type+"</td><td>"+list[list.length-1].readiness+"</td><td>"+list[list.length-1].copies+"</td><td>"+list[list.length-1].marketing+"</td></tr>");		
	}

	parent.remove();
})