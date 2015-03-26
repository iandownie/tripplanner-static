$(document).ready(function() {


	// Hotel Operations
	$('#option-hotel').siblings('button').on('click', function(){

		var $hotelname=$('#option-hotel').val();
		$('#hotel-iten').children().remove();
		$('#hotel-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $hotelname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
	
		var coords = [], name  = '';
		for(var i = 0; i < all_hotels.length; i++) {
			if(all_hotels[i].name === $hotelname) {
				coords = all_hotels[i].placem;
				name = all_hotels[i].name;
			}
		}

		coords.forEach(function(element) {
			
			drawLocation(map_global,element.location, {
          		icon: '/images/lodging_0star.png'
        		}, name);
		});


	})

	// Restaurant Operations

	$('#option-restaurant').siblings('button').on('click', function(){
		var $restaurantname=$('#option-restaurant').val();
	$('#restaurant-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $restaurantname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
		});


	// things to do Operations

	$('#option-thing').siblings('button').on('click', function(){
		var $thingsname=$('#option-thing').val();
	$('#things-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $thingsname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
		});



	$('.list-group').on('click', '.btn-danger', function(){

		$(this).parent().remove();

	});


	// $('#option-hotel').siblings('button').on('click', function() {
	// 	console.log(all_hotels);
	// }

});

