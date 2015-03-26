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

	if($("#hotel-iten > .itinerary-item > .title").text()) {
		console.log("test");
		hotels_markers[$("#hotel-iten > .itinerary-item > .title").text()].setMap(map_global);
	} 

	for (var i = 0; i < $("#restaurant-iten > .itinerary-item > .title").length; i++) {
		var k = $("#restaurant-iten > .itinerary-item > .title")[i].innerText;
		rests_markers[k].setMap(map_global);
	};

	for (var i = 0; i < $("#things-iten > .itinerary-item > .title").length; i++) {
		var k = $("#things-iten > .itinerary-item > .title")[i].innerText;
		things_markers[k].setMap(map_global);
	};

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
		if ($("#restaurant-iten > .itinerary-item > .title").length < 3) {

		for (var i = 0; i < $("#restaurant-iten > .itinerary-item > .title").length; i++) {
			var k = $("#restaurant-iten > .itinerary-item > .title")[i].innerText;
			if (k === $restaurantname) return;
		};//for

			$('#restaurant-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' +
	 			$restaurantname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
			refreshMap();
		}
		
		
		});


	// things to do Operations

	$('#option-thing').siblings('button').on('click', function(){
		var $thingsname=$('#option-thing').val();
		for (var i = 0; i < $("#things-iten > .itinerary-item > .title").length; i++) {
		  var k = $("#things-iten > .itinerary-item > .title")[i].innerText;
			if (k === $thingsname) return;
	};

	$('#things-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $thingsname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
	refreshMap();
		});



	$('.list-group').on('click', '.btn-danger', function(){

		$(this).parent().remove();
		refreshMap();
	});


	// $('#option-hotel').siblings('button').on('click', function() {
	// 	console.log(all_hotels);
	// }

});

