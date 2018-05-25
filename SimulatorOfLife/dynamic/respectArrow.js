$(".respectArrowBack").click(function(){											 //Действия стрелки в меню уважения
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

	if(goodDeedsBlock.css("display") == "none" && $(".goodDeedsMenu").css("display") == "none"){
		console.log(123)
	}
})
