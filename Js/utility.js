
$(document).ready(function() {
	scrollpage();
});

function scrollpage(){
	$('a[href="#works"]').click(function(){
		 alert ('ciao');
		$('html').animate({scrollTop:0},2000);
		return false;
	}); 

};