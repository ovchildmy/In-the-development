function hideBusiness() {
	$(".businessHeader").hide();
	$(".businessMiddle").hide();
	$(".businessFooter").hide();
}

function showBusiness() {
	$(".businessHeader").show();
	$(".businessMiddle").show();
	$(".businessFooter").show();
}

$(".productsList").on("click",function(){
	hideBusiness();
	$(".productListMenu").show();
	
})

$(".projectsList").on("click",function(){
	hideBusiness();
	$(".projectListMenu").show();
	
})