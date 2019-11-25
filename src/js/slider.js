(() => {
	$(document).ready(function(){
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			items: 1,
			dots: true,
			pagination: true,
			// responsive:{
			// 	0:{
			// 		items:1
			// 	},
			// 	600:{
			// 		items:3
			// 	},
			// 	1000:{
			// 		items:5
			// 	}
			// }
		})
	  });
})();