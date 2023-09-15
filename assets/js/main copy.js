// Search bar show or hide funciton
$(document).ready(function(){
    $("#navbarSearch").on('shown.bs.collapse', function () {
        $("#search").focus();
    });
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoWidth:false,
        autoplay:false,
		nav:false,
		dots:true,
        margin:10,
		responsive:{
			0:{
				items:1,
				merge:true
			},
			600:{
				items:1,
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
		dots:true,
        margin:10,
		responsive:{
			0:{
				items:1,
				merge:true
			},
			600:{
				items:1,
				merge:true
			}
		}
    });
});
