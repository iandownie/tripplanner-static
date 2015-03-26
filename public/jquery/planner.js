function refreshMap() {
	
	for(var key in hotels_markers) {
    	hotels_markers[key].setMap(null);
	}
	//console.log(hotels_markers);
	
	for(var key in rests_markers) {
    	rests_markers[key].setMap(null);
	}

	for(var key in things_markers) {
    	things_markers[key].setMap(null);
	}

	console.log(hotels_markers[$("#hotel-iten > .itinerary-item > .title").text()].position);
	hotels_markers[$("#hotel-iten > .itinerary-item > .title").text()].setMap(map_global);

}

$(document).ready(function() {


	// Hotel Operations
	$('#option-hotel').siblings('button').on('click', function(){

		var $hotelname=$('#option-hotel').val();
		$('#hotel-iten').children().remove();
		$('#hotel-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $hotelname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
	
		refreshMap();
		//var h = $("#hotel-iten > .itinerary-item > .title").text();
		//hotels_markers[h].setMap(map_global);
	})

	// Restaurant Operations

	$('#option-restaurant').siblings('button').on('click', function(){
		var $restaurantname=$('#option-restaurant').val();
	$('#restaurant-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $restaurantname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
		refreshMap();
		});


	// things to do Operations

	$('#option-thing').siblings('button').on('click', function(){
		var $thingsname=$('#option-thing').val();
	$('#things-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $thingsname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
		refreshMap();
		});



	$('.list-group').on('click', '.btn-danger', function(){

		$(this).parent().remove();

	});


	// $('#option-hotel').siblings('button').on('click', function() {
	// 	console.log(all_hotels);
	// }

});

