// When the document loads do everything inside here ...
$(document).ready(function(){


$("#SessionNavContainer img") 
.mouseover(function() {  

    var src = $(this).attr("src").replace("Active.png", "Hover.png");  
    $(this).attr("src", src); 
}) 
.mouseout(function() { 
    var src = $(this).attr("src").replace("Hover.png", "Active.png"); 
    $(this).attr("src", src); 
}); 


// On click change css to pressed. Clear other lis
$("#SessionNavContainer a").mouseup(function() {
    var src = $(this).children().attr("src").replace("Selected.png", "Active.png"); 
    $(this).children().attr("src", src);
}).mousedown(function() {
    var src = $(this).children().attr("src").replace("Hover.png", "Selected.png"); 
    $(this).children().attr("src", src);
});




//To top smooth scroll
$(function() {
 
	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});




$(".SessionContent").hide();
//toggle the componenet with class msg_body
$(".SessionCallapseExpand").toggle(function() {
	$(this).parent().next(".SessionContent").slideDown(500);
	$(this).removeClass("SessionCallapseExpand").addClass("SessionCallapseCollapse")
	$(this).html("Hide session details")
}, function () {
	$(this).parent().next(".SessionContent").slideUp(500);
	$(this).removeClass("SessionCallapseCollapse").addClass("SessionCallapseExpand")
	$(this).html("See session details")
});



});




