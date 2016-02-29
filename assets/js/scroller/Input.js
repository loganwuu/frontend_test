$(document).ready(function(){



	// ROLL OVER EFFECT DURING REG (SUBMIT BUTTONS)
	$('input[type="text"]').addClass("idleField");  
	$('input[type="text"]').focus(function() {  
		$(this).removeClass("idleField").addClass("focusField");  
		if (this.value == this.defaultValue){  
			this.value = '';  
		}  
		if(this.value != this.defaultValue){  
			this.select();  
		}  
	});  
	$('input[type="text"]').blur(function() {  
		$(this).removeClass("focusField").addClass("idleField");  
		if ($.trim(this.value == '')){  
			this.value = (this.defaultValue ? this.defaultValue : '');  
		}  
	});  

	// ADDs section border to devide personal info
	$('.PersonalDivider table tbody table tbody tr').eq(9).after("<tr><td colspan=2><H3 style=" + '"padding-top: 10px;"' + ">Company Info</H3><DIV id=sectionBorder></DIV></td></tr>")
	
	
	// Wraps role dropdown to match up with personal info
	//$('.roleDropdownWrapper table td').eq(1).css("width","281px").css("text-align","right");
	
	//Remove Error text cell
	$('.errorText').parent().parent().remove();
	
	// Add section border on summary page.
	$('.summary').parent().parent().after("<tr><td colspan=2><DIV id=sectionBorderSummary></DIV></td></tr>");
	
	// REMOVE BREAKS FROM THE TOP OF EACH HEADER SECTION
	$('.summary').parent().find('br').remove();
	

	
	// REMOVE MIDDLE SUMMARY COLLUMN
	$('span.summary').parent().parent().siblings().nextAll().children('td:nth-child(2)').remove();
	
	// Add class to first column
	$('span.summary').parent().parent().siblings().nextAll().children('td:first-child').addClass('summaryAlignment');
	
	// Left align QQ
	$("span.summary:contains('Gala Transportation')").parent().parent().siblings().nextAll().children().addClass('summaryQQAlignment').removeClass('summaryAlignment');
	
	//$("#tblQualQuestions3975").children().children().nextAll().children().addClass('regPadding');
	//$("#tblQualQuestions3975").children().children('tr:last').remove();
	
	//$('span.summary').parent().parent().siblings().children('td:first-child').addClass('summaryAlignment');
	//$('tr.sessionSummary').children('td:first-child').addClass('hide');


});

