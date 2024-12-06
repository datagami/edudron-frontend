$(document).ready(function(){
	$('.right-sidebar-toggle').on('click', function(){
		$(this).children('i.fa').toggleClass('fa-angle-left').toggleClass('fa-angle-right');
		$('.right-sidebar-mini').toggleClass('right-pd');
	})
})