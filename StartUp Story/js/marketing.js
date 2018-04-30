//////////////////////////////////
/// Price в маркетинге


setInterval(function(){
	if($('.marketingFamousProject').val() == 'Village'){
		$(".marketingPrice").text('1000$')
	}else if($('.marketingFamousProject').val() == 'City'){
		$(".marketingPrice").text('10000$')
	}else if($('.marketingFamousProject').val() == 'Country'){
		$(".marketingPrice").text('100000$')
	}else if($('.marketingFamousProject').val() == 'Continent'){
		$(".marketingPrice").text('1000000$')
	}else if($('.marketingFamousProject').val() == 'World'){
		$(".marketingPrice").text('30000000$')
	}

}, 100)


/////////////////////////////////
/// Маркетинг Accept

$(".marketingAccept").on('click',function(){
	projectVal = $('.marketingSelectProject').val()
				
	console.log($(".marketingPrice").text());
	var marketingPriceNumber = parseInt($(".marketingPrice").text())

	if(+$('.moneyCountNumber').text() >= marketingPriceNumber){


		for(i = 0; i< $('.projectTr').length; i++){
				// console.log($('.projectTr').eq(i).attr('class'))
			if($('.projectTr').eq(i).attr('class') == 'projectTr project_'+projectVal && $(".famousProject").parent().eq(i).attr('class') == $('.projectTr').eq(i).attr('class')){
				// $('.projectTr').eq()
				$(".famousProject").eq(i).text($(".marketingFamousProject").val())
			}
		}


		$('.moneyCountNumber').text(+$('.moneyCountNumber').text() - marketingPriceNumber)
	}

	// console.log($(".famousProject").parent().attr('class'))

})