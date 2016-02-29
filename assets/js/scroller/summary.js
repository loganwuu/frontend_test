$(document).ready(function(){
	$('#session4Text').removeAttr('id');
	$('#session5Text').removeAttr('id');
	$('#session1Text').removeAttr('id');
	$('#session2Text').removeAttr('id');
	$('#session3Text').removeAttr('id');

	$('#RegcontentContainer table table tbody').eq(3).parent().parent().parent().css("display","none");

});