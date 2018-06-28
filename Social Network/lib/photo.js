$(".photoItem").on("click",	function () {
	var src = $(this).children("img").attr("src");
	$(".photoItemPopupWrap").show();
	$(".photoItemPopup").prepend("<img src="+src+">");
})

$(".photoExit").on("click",function(){
	$(".photoItemPopup").html("");	
	$(".photoItemPopupWrap").hide();
})

$(".photoItem").on("mouseover", function(){
	$(this).children($(".hoverPhoto")).show();
})

$(".photoItem").on("mouseout", function(){
	$(".hoverPhoto").hide();
})