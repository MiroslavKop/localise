$(document).ready(function(){
	$('.navbar__humburger').click(function(){
		$(this).toggleClass('active');
	$('.navbar__menu').fadeToggle('500');
	});
});