// workers achivements

function createAchivementBlock(text){
	var achivementBlock = document.createElement("div");
	achivementBlock.className = "achivementBlock";
	achivementBlock.innerHTML = text;

	document.body.appendChild(achivementBlock)

	setTimeout(function(){
		$(".achivementBlock").remove()
	},3000)
}

$('.hireAgree').on("click",function() {
	if(+$(".workersCount").text()==1){
			createAchivementBlock("You hire your first worker!");
	}else if(+$(".workersCount").text()==1000){
			createAchivementBlock("You hire your thousandth worker!");
	}else if(+$(".workersCount").text()==10000){
			createAchivementBlock("You hire your ten-thousandth worker!");
	}else if(+$(".workersCount").text()==100000){
			createAchivementBlock("You hire your hundred-thousandth worker!");
	}else if(+$(".workersCount").text()==1000000){
			createAchivementBlock("You have the million workers!");
	}
})


// pr achivements

$(document).on("click",".release", function(){
	if(countPr==1){
			createAchivementBlock("Your first pr. was released!");
	}else if(countPr==10){
			createAchivementBlock("Your tenth pr. was released!");
	}else if(countPr==50){
			createAchivementBlock("Your fiftieth pr. was released!");
	}else if(countPr==100){
			createAchivementBlock("You have the one hundred pr.`s!");
	}
	// console.log()
})