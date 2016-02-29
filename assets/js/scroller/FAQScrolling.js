// When the document loads do everything inside here ...
$(document).ready(function(){


// hoverover, clears all but current mouse over
$("li.tab").mouseenter(function() {
	$(this).removeClass("Hovernonactive").addClass("Hoveractive");
});

$("li.tab").mouseleave(function() {
	var index = $("li.tab").index($(".active"));
	$(this).addClass("Hovernonactive").removeClass("Hoveractive");
	$("li.tab").eq(index).removeClass("nonactive").addClass("active").removeClass("Hoveractive").removeClass("Hovernonactive");
});

// On click change css to pressed. Clear other lis
$("li.tab").mousedown(function() {
	var index = $("li.tab").index($(".FAQPress"));
	$(this).removeClass("Hovernonactive").removeClass("nonactive").addClass("FAQPress");
	$("li.tab").eq(index).removeClass("FAQPress");
})



$("li.tab").mouseup(function(){
      $(this).removeClass("FAQPress");
    }).mousedown(function(){
      $(this).addClass("FAQPress");
});


//To top smooth scroll
$(function() {
 
	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});



});

