// Search bar show or hide funciton
$(document).ready(function(){
    $("#search_form").on('shown.bs.collapse', function () {
        $("#search").focus();
    });
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoWidth:false,
        autoplay:false,
		nav:false,
		dots:false,
        margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1.2,
				merge:true
			}
		}
    });
    
});
	
$(document).ready(function(){
    $(".upc-project-carousel").owlCarousel({
        autoWidth:false,
        autoplay:false,
		nav:false,
		dots:false,
        margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1.2,
				merge:true
			}
		}
    });
    
});
