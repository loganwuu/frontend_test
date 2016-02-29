$(document).ready(function () { 

     
	if ($('#right').length) { 
		$('div#sortButtons').prepend('<span class="h2span">Add Sessions</span>') // Adds "Add Sesisons" to #middle
		$('div#sortButtons').append('<div id="sectionBorderMiddle"></div>') // Adds sectionborde to #middle
		$('div#left p').html('<span class="h2span">Select Track</span>') //Adds "Select Track" to left
		$('div#filterSection').before('<div id="sectionBorderLeft"></div>') //Adds sectionbrorder to left
		$('#agendaTabstrip').prepend('<p class="columnWrapper"><span class="h2span">Edit Agenda</span></p>').find('br').remove();
		//ADD header to right
		//$('div#right #divAgenda').before('<div id="sectionBorderRight"></div>') //Adds sectionbrorder to right
		
		$('.columnWrapper').next().after('<p id="sectionBorderRight"></p>');

		
			
		$('#confirm .header').find('span').remove(); // Remove exsiting "Confirm" text
		$('#confirm .header').prepend('<span class="h2span" style="margin-left: 0;">Confirm Session Change</span>') // Add span to change session box
		
		$('#confirm .buttons .yes').empty();
		$('#confirm .buttons .no').empty();
		
		$('#right').find('br').remove();
		
		$('#lnkSignOut').empty().removeClass('krakenButton'); // remove signup text		
		$('#headerNav').append('<li id="SignButtonMove"></li>')
		$('#lnkSignOut').appendTo('#SignButtonMove')
		
		$('#organizer .k-i-arrow-s').append('test')
		
		
		
		
		
	}
	else {
		$('#middle').addClass("logOutWidth")
		$('#organizer span.k-header').addClass("logOutWidth")
		$('div#left p').html('<span class="h2span">Select Track</span>') //Adds "Select Track" to left
		$('div#filterSection').before('<div id="sectionBorderLeft"></div>') //Adds sectionbrorder to left
		$('div#sortButtons').prepend('<span class="h2span">Add Sessions</span>') // Adds "Add Sesisons" to #middle
		$('div#sortButtons').append('<div id="sectionBorderMiddleLogOut"></div>') // Adds sectionborde to #middle
		$('#right').prepend('<p class="columnWrapper"><span class="h2span">Edit Agenda</span></p>').find('br').remove(); //ADD header to right
		
	
		
		$('#lnkSignIn').empty().removeClass('krakenButton'); // remove signup text
		$('#headerNav').append('<li id="SignButtonMove"></li>')
		$('#lnkSignIn').appendTo('#SignButtonMove')
	}

	

			
	//$("#right").html($("#right").html().replace(/My Agenda/, '<span class="h2span">View/Edit Agenda</span>'));


	
	//$("#lnkSignIn").wrap("<li></li>")
	//$("#lnkSignIn").appendTo("#headerNavContainer");
});