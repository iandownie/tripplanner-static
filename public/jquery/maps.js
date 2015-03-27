var map_global = null, bounds = null;


      function drawLocation (map, location, opts, name) {
        console.log(name);
          if (typeof opts !== 'object') opts = {};
          opts.position = new google.maps.LatLng(location[0], location[1]);
          opts.map = map;
          hotels_markers[name] = new google.maps.Marker(opts);
        }

        function initializeHotels (location, name) {
         opts = {
              icon: '/images/lodging_0star.png'
            };
          opts.position = new google.maps.LatLng(location[0], location[1]);
          var marker = new google.maps.Marker(opts);
          bounds.extend(marker.position);
          hotels_markers[name] = marker;

        }

        function initializeRests (location, name) {
          opts = {
              icon: '/images/restaurant.png'
            };
          opts.position = new google.maps.LatLng(location[0], location[1]);
          var marker = new google.maps.Marker(opts);
          bounds.extend(marker.position);
          rests_markers[name] = marker;
        }

        function initializeThings (location, name) {
          opts = {
              icon: '/images/star-3.png'
            };
          opts.position = new google.maps.LatLng(location[0], location[1]);
          var marker = new google.maps.Marker(opts);
          bounds.extend(marker.position);
          things_markers[name] = marker;
        }

      function initialize_gmaps() {
        // initialize new google maps LatLng object
        var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
        // set the map options hash
        var mapOptions = {
          center: myLatlng,
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: styleArr
        };
        // get the maps div's HTML obj
        var map_canvas_obj = document.getElementById("map-canvas");
        // initialize a new Google Map with the options
        map_global = new google.maps.Map(map_canvas_obj, mapOptions);
        
        bounds = new google.maps.LatLngBounds();
        
        all_hotels.forEach( function (hotel) {
          hotel.place.forEach( function( element ) {
            initializeHotels(element.location, hotel.name);
          } );
        });

        all_restaurants.forEach( function (rest) {
          rest.place.forEach( function( element ) {
            initializeRests(element.location, rest.name);
          } );
        });

        all_things_to_do.forEach( function (th) {
          th.place.forEach( function( element ) {
            initializeThings(element.location, th.name);
          } );
        });

        map_global.fitBounds(bounds);

        // var hotelLocation = [40.705137, -74.007624];
        // var restaurantLocations = [
        //   [40.705137, -74.013940],
        //   [40.708475, -74.010846]
        // ];
        // var thingToDoLocations = [
        //   [40.716291, -73.995315],
        //   [40.707119, -74.003602]
        // ];
        
        
      }

      $(document).ready(function() {
        initialize_gmaps();
      });

      var styleArr = [
          {
            featureType: "water",
            stylers: [
              { hue: "#0008ff" },
              { invert_lightness: true },
              { visibility: "simplified" },
              { color: "#8080ff" },
              { saturation: 100 },
              { lightness: -60 }
            ]
          },{
            featureType: "road",
            stylers: [
              { visibility: "simplified" },
              { hue: "#086976" },
              { saturation: 56 }
            ]
          },{
            featureType: "poi",
            stylers: [
              { visibility: "off" }
            ]
          },{
            featureType: "administrative",
            stylers: [
              { visibility: "off" }
            ]
          },{
            featureType: "transit",
            stylers: [
              { visibility: "off" }
            ]
          },{
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              { visibility: "on" },
              { hue: "#ff4d00" },
              { lightness: 8 }
            ]
          },{
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
              { "visibility": "off" }
            ]
          },{
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [
              { "visibility": "simplified" },
              { "lightness": -100 }
            ]
          },{
            featureType: "poi.business",
            stylers: [
              { visibility: "on" }
            ]
          },{
            featureType: "transit.station",
            stylers: [
              { visibility: "off" }
            ]
          },{
            featureType: "landscape.natural",
            stylers: [
              { visibility: "off" }
            ]
          },{
            featureType: "poi.attraction",
            elementType: "labels",
            stylers: [
              { hue: "#ff1a00" },
              { saturation: 100 },
              { lightness: 34 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "poi.business",
            stylers: [
              { visibility: "simplified" },
              { hue: "#ff0008" },
              { saturation: 100 },
              { lightness: 39 }
            ]
          }
        ];
 