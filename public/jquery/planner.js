	//Establishing day tracking:
var hotels_markers = {}, rests_markers = {}, things_markers = {};
var all_markers=[hotels_markers, rests_markers, things_markers];

var all=[all_hotels, all_restaurants, all_things_to_do]
all.forEach(function(el){
	el.forEach(function(ement){
	ement.days=[];
	})
});

function setActive (array, name){
	var day = $('#day-title').children()[0].innerText.substr(4);
	for (var i = 0; i < array.length; i++) {
		if (array[i].name === name) array[i].days.push(day);
	};
	refreshMap();
}
	// Refresh button:

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
		
		setActive(all_hotels, $hotelname );
		
		
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
		
		setActive(all_restaurants, $restaurantname );
		
		}//IF
		});


	// things to do Operations

	$('#option-thing').siblings('button').on('click', function(){
		var $thingsname=$('#option-thing').val();
		for (var i = 0; i < $("#things-iten > .itinerary-item > .title").length; i++) {
		  var k = $("#things-iten > .itinerary-item > .title")[i].innerText;
			if (k === $thingsname) return;
	};

	$('#things-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' + $thingsname + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
	setActive(all_things_to_do, $thingsname );
	
		});

	// delete button for itenerary list
	$('.list-group').on('click', '.btn-danger', function(){
		
		var day = $('#day-title').children()[0].innerText.substr(4);
		var name = $(this).siblings()[0].innerText;

		all.forEach(function(el){
			el.forEach(function(ement){
			if (ement.name === name && ement.days.indexOf(day)>=0) {
				ement.days.splice(ement.days.indexOf(day), 1);
			}
			})
		});

		$(this).parent().remove();
		refreshMap();
	});

	// add day buttons

	// $('.day-buttons').children('button').last().on('click', function(){
	// 	var n=$(this).siblings().length+1;
	// 	console.log("n: "+n,"this: "+this);
	// 	$(this).before('<button class=\"btn btn-circle day-btn current-day\">'+n+'</button>');
	// 	});

	// switching days
	$('.day-buttons').on('click','.day-btn', function(){
		if($(this).text()==='+'){
			var n=$(this).siblings().length+1;
			$(this).before('<button class=\"btn btn-circle day-btn\">'+n+'</button>');
		}
		else{

			$(this).addClass("current-day");
			$(this).siblings().removeClass("current-day");

			var dayN=$(this).text();
			$('#day-title').children('span').text("Day "+dayN)
			$('.list-group').children().remove();
			
					
			for(var i=0; i<all_hotels.length; i++) {
				if (all_hotels[i].days.indexOf(dayN) >= 0) {
					$('#hotel-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' 
						+ all_hotels[i].name + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
				}
			}

			for(var i=0; i<all_restaurants.length; i++) {
				if (all_restaurants[i].days.indexOf(dayN) >= 0) {
					$('#restaurant-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' 
						+ all_restaurants[i].name + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
				}
			}

			for(var i=0; i<all_things_to_do.length; i++) {
				if (all_things_to_do[i].days.indexOf(dayN) >= 0) {
					$('#things-iten').append('<div class=\"itinerary-item\" ><span class=\"title\">' 
						+ all_things_to_do[i].name + '</span><button class=\"btn btn-xs btn-danger remove btn-circle\">x</button></div>');
				}
			}

			refreshMap();// for review later
		}


		da
	// 		$('.list-group').children('span').forEach(function(el){

	// 			for(var j = 0; j<el.length; j++) {
	// 				console.log(el[j].innerText);
	// 			}
	// 			// for(var i=0; i<actives.length; i++){
	// 			// 	if($(this).text()  ===actives[i]){
	// 			// 		$(this).show()
	// 			// 	}
	// 			// }
	// 		})
	// 	}
	// });


	// $('#option-hotel').siblings('button').on('click', function() {
	// 	console.log(all_hotels);
	// }
});
});

