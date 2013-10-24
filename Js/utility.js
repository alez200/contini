
$(document).ready(function() {
	scrollpage();
	slideShow();
});

function scrollpage(){
	$('.page-menu a').click(function(){
		 var hrefVal=$(this).attr('href');
		 var position=$(hrefVal).position().top;
		 var altezza = $('.fixed-box').css('height'); 
		 var scroll =-1*altezza;
		 console.log(scroll);
		$('html,body').animate({scrollTop:scroll},500);
		return false;
	}); 
};


function slideShow(){
	var altezzaSlideShow=$('.quote').css('min-height');
	$('#quotes').css({
		"height":altezzaSlideShow,
		"overflow":"hidden"
	});
};

