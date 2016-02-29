$(document).ready(function(){

	$("ul.speaker li div.speakerInfo div").each(function() {
		
		var currentID = $(this).attr("id");
			
		var textToShow = $("#" + currentID + " p").html().substring(0,0);
		var textToHide = $("#" + currentID + " p").html().substring(0);
		
		$("#" + currentID + " p").html(textToShow + ('<span class="excerpt">' + textToHide + '</span>'))
		$("#" + currentID + " p").append('<span class="appened"></span>');
	});

	// Cursor over image
	$(".moreButton2").mouseover(function() {  
		$(this).css("cursor", "pointer");  
	}); 
	
	
	$(".moreButton2").mouseenter(function() {
	
		if($(this).attr("class") == 'moreButton2') {
			$(this).removeClass("moreButton2").addClass("moreButton2_hover");
		}
		else {
			$(this).removeClass("moreButton2_Callapse_active").addClass("moreButton2_Callapse_hover");
		}
	});

	$(".moreButton2").mouseleave(function() {
		if ($(this).attr("class") == 'moreButton2_hover') {
			$(this).removeClass("moreButton2_hover").addClass("moreButton2");
		}
		else if ($(this).attr("class") == 'moreButton2') {
			$(this).removeClass("moreButton2_Callapse_active").removeClass("moreButton2_hover");
		}
		else {
			$(this).removeClass("moreButton2_Callapse_hover").addClass("moreButton2_Callapse_active").removeClass("moreButton2_hover");
		}
	});
	
	
	
	$(".moreButton2").toggle(function(){
		var currentID = $(this).attr("id");
		currentID = currentID.slice(0,-1);
		$("#" + currentID + "2").text('HIDE BIO');
		$("#" + currentID + "2").removeClass("moreButton2").addClass("moreButton2_Callapse_active");
		$("#" + currentID).find("span").removeClass("excerpt").css("display","");
		$("#" + currentID).hide();
		$("#" + currentID).slideDown(500);
		$("#" + currentID + " p").children("span.appened").remove();
		$("#" + currentID + " p").children("span.appened").remove();
		
	}, function () {
		var currentID = $(this).attr("id");
		currentID = currentID.slice(0,-1);
		$("#" + currentID + "2").text('SEE BIO');
		$("#" + currentID + "2").addClass("moreButton2").removeClass("moreButton2_Callapse_active").removeClass("moreButton2_hover").removeClass("moreButton2_Callapse_hover");
		$("#" + currentID).find("span").slideUp(500).addClass("excerpt");
		
	});



	$(function() {
	 
		$('.toTop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});	
	});
		

	
});