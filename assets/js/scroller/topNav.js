$(document).ready(function () { 
     
    $('#headerNav li').hover(
        function () {
            //show its submenu
            $('ul', this).slideDown(300);
 
        }, 
        function () {
            //hide its submenu
            $('ul', this).slideUp(300);         
        }
    );
	

	$("ul.socialShare li img") 
	.mouseover(function() {  
		var src = $(this).attr("src").match(/[^\.]+/) + "_hover.png"; 
		$(this).attr("src", src); 
	}) 
	.mouseout(function() { 
		var src = $(this).attr("src").replace("_hover.png", ".png"); 
		$(this).attr("src", src); 
	}); 

	
     
});