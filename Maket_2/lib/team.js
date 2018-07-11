$(".team-person").on("mouseover", function () {
	$(this).children(".team-currentPerson").show();
	$(this).children(".team-currentPerson").css({"background":"linear-gradient(rgba(233,75,26,0.6),rgba(233,75,26,0.6))"});
})

$(".team-person").on("mouseout", function () {
	$(this).children(".team-currentPerson").hide();
	$(this).children(".team-currentPerson").css({"background":"none"});
})