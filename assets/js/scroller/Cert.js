$(document).ready(function(){


$("#certNavContainer img") 
.mouseover(function() {  

    var src = $(this).attr("src").replace("Active.png", "Hover.png");  
    $(this).attr("src", src); 
}) 
.mouseout(function() { 
    var src = $(this).attr("src").replace("Hover.png", "Active.png"); 
    $(this).attr("src", src); 
}); 


// On click change css to pressed. Clear other lis
$("#certNavContainer a").mouseup(function() {
    var src = $(this).children().attr("src").replace("Selected.png", "Active.png"); 
    $(this).children().attr("src", src);
}).mousedown(function() {
    var src = $(this).children().attr("src").replace("Hover.png", "Selected.png"); 
    $(this).children().attr("src", src);
});




$(function() {
 
	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});

	
});