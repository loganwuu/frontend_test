$(document).ready(function(){

	$("ul.session li div.sessoinInfo div").each(function() {
		
		var currentID = $(this).attr("id");
			
		var textToShow = $("#" + currentID + " p").text().substring(0,100);
		var textToHide = $("#" + currentID + " p").text().substring(100);
		
		$("#" + currentID + " p").html(textToShow + ('<span class="excerpt">' + textToHide + '</span>'))
		$("#" + currentID + " p").append('<span class="appened">...</span>');
	});

	// Cursor over image
	$(".moreButton").mouseover(function() {  
		$(this).css("cursor", "pointer");  
	}); 
	
	
	$(".moreButton").mouseenter(function() {
	
		if($(this).attr("class") == 'moreButton') {
			$(this).removeClass("moreButton").addClass("moreButton_hover");
		}
		else {
			$(this).removeClass("moreButton_Callapse_active").addClass("moreButton_Callapse_hover");
		}
	});

	$(".moreButton").mouseleave(function() {
		if ($(this).attr("class") == 'moreButton_hover') {
			$(this).removeClass("moreButton_hover").addClass("moreButton");
		}
		else if ($(this).attr("class") == 'moreButton') {
			$(this).removeClass("moreButton_Callapse_active").removeClass("moreButton_hover");
		}
		else {
			$(this).removeClass("moreButton_Callapse_hover").addClass("moreButton_Callapse_active").removeClass("moreButton_hover");
		}
	});
	
	
	
	$(".moreButton").toggle(function(){
		var currentID = $(this).attr("id");
		currentID = currentID.slice(0,-1);
		$("#" + currentID + "2").text('READ LESS');
		$("#" + currentID + "2").removeClass("moreButton").addClass("moreButton_Callapse_active");
		$("#" + currentID).find("span").removeClass("excerpt").css("display","");
		$("#" + currentID).hide();
		$("#" + currentID).slideDown(500);
		$("#" + currentID + " p").children("span.appened").remove();
		
	}, function () {
		var currentID = $(this).attr("id");
		currentID = currentID.slice(0,-1);
		$("#" + currentID + "2").text('READ MORE');
		$("#" + currentID + "2").addClass("moreButton").removeClass("moreButton_Callapse_active").removeClass("moreButton_hover").removeClass("moreButton_Callapse_hover");
		$("#" + currentID).find("span").slideUp(500).addClass("excerpt");
		$("#" + currentID + " p").append('<span class="appened">...</span>');
	});



	$(function() {
	 
		$('.toTop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});	
	});
		

	
});