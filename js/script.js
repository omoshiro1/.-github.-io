$(function () {
	$(".wrap-hidden").slice(0, 4).show();
	
	$("#loadMore").on('click',function (e) {
		
		e.preventdefault();
		$("wrap-hidden:hidden").slice(0, 4).slideDown();
		if ($("wrap-hidden:hidden").length ==0) {
		    $("#load").fadeOut('slow');
	
	}

	$('html,body').animate({
	scrollTop: $(this).offset().top
	}, 1500);

   });

});
