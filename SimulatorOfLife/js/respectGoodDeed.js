$(".goodDeedsBlock").click(function(){
	$(".goodDeedsBlock").hide();
	$(".badDeedsBlock").hide();
	$(".respectArrowBack").show();
	$(".goodDeedsMenu").show();
	$(".goodDeedsMenuWrap").show();
	$(".deedImg").hide();
})

$(".goodDeedAgree").click(function(){
	var thisGoodDeed = $(this).data("gooddeed");
	var goodDeedAgreeMenu = $(".goodDeedAgreeMenu");

	$(".goodDeedsMenu").hide()
	$(".goodDeedAgreeMenu").hide();

	for(i = 0; i < $(".goodDeedAgreeMenu").length; i++){
		if(goodDeedAgreeMenu.eq(i).data("gooddeed") == thisGoodDeed){
			goodDeedAgreeMenu.eq(i).show();
			
			if(thisGoodDeed == "3"){
			//$(this).createElement("<div class='goodDeedPopup'></div>");
			//$(".goodDeedPopup").createElement("<span>Are you sure you want to do this?</span>")

				//$(".goodDeedPopup").closest(".goodDeedAgreeMenu").unwrap();
				//console.log(111)
				//$(".goodDeedAgreeMenu").hide();
				$(".goodDeedPopup").wrap("<div class='goodDeedPopupWrap'></div>");
				$(".goodDeedPopup").show();
				$(".goodDeedPopupWrap").show();
				$(".cross").hide();
				$(".respectArrowBack").hide();
				$(".goodDeedsMenuWrap").hide();
				$('.respectMenu').hide();
			}
		}
	}
})


///////////////////////////
//// Popup own clinic 'NO'



$(".goodDeedPopupNo").on('click', function(){
	// $(".goodDeedPopup").unwrap();
	//$(".goodDeedPopup").wrap("<div class='goodDeedAgreeMenu'></div>")
	$(".goodDeedPopup").hide();
	//$(".cross").show();
	//$(".respectArrowBack").show();

	var goodDeedsMenuWrap = $('.goodDeedsMenuWrap');
	var badDeedsMenuWrap = $('.badDeedsMenuWrap');
	var goodDeedsBlock = $('.goodDeedsBlock');
	var badDeedsBlock = $('.badDeedsBlock');

	$(".respectArrowBack").hide();
	$(".goodDeedsMenuWrap").hide();
	$(".badDeedsMenuWrap").hide();
	$(".deedImg").show();
	goodDeedsBlock.show();
	badDeedsBlock.show();
	$(".goodDeedAgreeMenu").hide()

})
