/////////////////////////////////////////////////////////
//Effort Val

setInterval(function(){ 					
	var rangeVal = $('.rangeInput').val()
	$(".rangePercent").html(rangeVal); // Устанавливает значение % в effort
	
}, 10);


////////////////////////////////////////////////////////////////
//// Создание нового проекта


$(".proejctAccept").on('click',function(){

	var takeName = $('#nameProject').val();
	var typePr = $('.typeProject').val()


	if(takeName != ""){

			$('.historyTableProjects').append('<tr class="projectTr project_'+takeName+'"><td class="nameProjectTd">'+ $('#nameProject').val() + "<span class='effortProject' title='effort'> ("+ $(".rangeInput").val() +")</span>" +'</td><td>'+ typePr  +'</td><td class="famousProject">'+ '-' +'</td><td>'+ 'come soon' +'</td></tr>')
		$('#nameProject').val("")


	//////
	///Добавление в маркетинг
			
		$('.marketingSelectProject').append('<option>'+ takeName +'</option>')
	}


	///////
	// Кол-во проектов ++


	$('.projectCount').text(+$('.projectCount').text()+1)

	
});