jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            $('nav.navbar').addClass('sticky-nav');
            // if ($(this).scrollTop() >= 0) { // 50
            //     $('nav.navbar').addClass('sticky-nav');
            // }
            // else {
            //     $('nav.navbar').removeClass('sticky-nav');
            // }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());


}); // JQuery end


// --------------------------------------------------------------------
// Google Map
// --------------------------------------------------------------------
function initMap() {
	if ($('#googleMap').length > 0) {

		//set your google maps parameters
		var $latitude  = 40.427994, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
			$longitude = -3.667810,
			$map_zoom  = 18;
		/* ZOOM SETTING */

		//google map custom marker icon
		var $marker_url = 'img/google-map-marker.png';

		//we define here the style of the map
		var style = [];
		/*var style = [{
			"stylers" : [{
				"hue" : "#000"
			}, {
				"saturation" : 100
			}, {
				"gamma" : 1.15
			}, {
				"lightness" : 5
			}]
		}];*/

		//set google map options
		var map_options = {
			center            : new google.maps.LatLng($latitude, $longitude),
			zoom              : $map_zoom,
			panControl        : false,
			zoomControl       : false,
			mapTypeControl    : false,
			streetViewControl : false,
			mapTypeId         : google.maps.MapTypeId.ROADMAP,
			scrollwheel       : false,
			styles            : style,
		}
		//initialize the map
		var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
		//add a custom marker to the map
		var marker = new google.maps.Marker({
			position : new google.maps.LatLng($latitude, $longitude),
			map      : map,
			visible  : true
			//icon     : $marker_url
		});
	}
}
	
(function($, viewport){
    $(document).ready(function() {
	

		// --------------------------------------------------------------------
		// Dates panel
		// --------------------------------------------------------------------
		
		/*var scrollHandler = function () {
            if ($(this).scrollTop() >= $('#cover').height()/8) {
                $('#subsection-dates').fadeIn('slow');
            }
            else {
                $('#subsection-dates').fadeOut('slow');
            }
        };
		
		var resizeHandler = function() {
				//console.log('Current breakpoint: ', viewport.current());
				if(viewport.is('<=md')) {
					//$('#subsection-dates').fadeOut('slow');
					$('#subsection-dates').removeClass('floating-dates');
					$('#subsection-dates').removeClass('popover');
					$(window).off("scroll", scrollHandler);
				}else{
					$('#subsection-dates').addClass('floating-dates');
					$('#subsection-dates').addClass('popover');
					scrollHandler();
					$(window).scroll(scrollHandler);
				}
			};
		
		resizeHandler();

        $(window).resize(
			viewport.changed(resizeHandler)
		);*/
		
    });
})(jQuery, ResponsiveBootstrapToolkit);