// When the document loads do everything inside here ...
$(document).ready(function(){


// hoverover, clears all but current mouse over
$(".confirmationBookHotelP2 a").mouseenter(function() {
	$(this).children().removeClass("confirmationBookHotelButton_Active").addClass("confirmationBookHotelButton_Hover");
});

$(".confirmationBookHotelP2 a").mouseleave(function() {
	$(this).children().removeClass("confirmationBookHotelButton_Hover").addClass("confirmationBookHotelButton_Active");
});

// On click change css to pressed. Clear other lis
$(".confirmationBookHotelP2 a").mousedown(function() {
	$(this).children().removeClass("confirmationBookHotelButton_Hover").addClass("confirmationBookHotelButton_Selected");
})

$(".confirmationBookHotelP2 a").mouseup(function(){
	$(this).children().removeClass("confirmationBookHotelButton_Selected").addClass("confirmationBookHotelButton_Active");
});



// hoverover, clears all but current mouse over
$(".confirmationJoinNetworkP2 a").mouseenter(function() {
	$(this).children().removeClass("confirmationJoinNetworkButton_Active").addClass("confirmationJoinNetworkButton_Hover");
});

$(".confirmationJoinNetworkP2 a").mouseleave(function() {
	$(this).children().removeClass("confirmationJoinNetworkButton_Hover").addClass("confirmationJoinNetworkButton_Active");
});

// On click change css to pressed. Clear other lis
$(".confirmationJoinNetworkP2 a").mousedown(function() {
	$(this).children().removeClass("confirmationJoinNetworkButton_Hover").addClass("confirmationJoinNetworkButton_Selected");
})

$(".confirmationJoinNetworkP2 a").mouseup(function(){
	$(this).children().removeClass("confirmationJoinNetworkButton_Selected").addClass("confirmationJoinNetworkButton_Active");
});



// hoverover, clears all but current mouse over
$(".confirmationBuildAgendaP2 a").mouseenter(function() {
	$(this).children().removeClass("confirmationBuildAgendaButton_Active").addClass("confirmationBuildAgendaButton_Hover");
});

$(".confirmationBuildAgendaP2 a").mouseleave(function() {
	$(this).children().removeClass("confirmationBuildAgendaButton_Hover").addClass("confirmationBuildAgendaButton_Active");
});

// On click change css to pressed. Clear other lis
$(".confirmationBuildAgendaP2 a").mousedown(function() {
	$(this).children().removeClass("confirmationBuildAgendaButton_Hover").addClass("confirmationBuildAgendaButton_Selected");
})

$(".confirmationBuildAgendaP2 a").mouseup(function(){
	$(this).children().removeClass("confirmationBuildAgendaButton_Selected").addClass("confirmationBuildAgendaButton_Active");
});




//To top smooth scroll
$(function() {
 
	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});



});

