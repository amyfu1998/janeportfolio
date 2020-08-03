$(function() {
	// (Optional) Active an item if it has the class "is-active"	
	$(".timeline > .history.active").children(".h-content").slideDown();
	
	$(".timeline > .history").mouseenter(function() {
		var hid = $(this).attr("id").substr(1); 
		// Cancel the siblings
		$(this).siblings(".history").removeClass("active").children(".h-content").slideUp();
		// Toggle the item
		$(this).toggleClass("active").children(".h-content").slideToggle("ease-out");
		$("#rrimg").attr("src","./img/h"+ hid+".png");
	});
	
	


});
