$(document).ready(function(){

	//To top smooth scroll

	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	


	// resize detection. keeps box centered
	$(window).resize(function() {
		centerBox()
	});
	
	//next back hoverovers
	$(".back img, .next img").mouseover(function() {  
		var src = $(this).attr("src").replace("Active.png", "Hover.png");  
		$(this).attr("src", src); 
	}) 
	.mouseout(function() { 
		var src = $(this).attr("src").replace("Hover.png", "Active.png"); 
		$(this).attr("src", src); 
	}); 
	
	
	$('.lightbox').click(function(e){
	
		centerBox() // call center box function
				
	
		// checks index to see if it should hide next/back buttons
		var CurIndex = $(this).parent().index(); //find current index that was clicked on
		var FirstIndex = 0 // defines first index of li
		var ulId = $(this).parent().parent().attr('id') //find id for ul based on what "a" was clicked
		var lastIndex = $('ul#' + ulId + ' li:last').index() // find last index based on id found in var ulId
		var prevLIClass = $(this).parent().prev().attr('class');
		var nextLIClass = $(this).parent().next().attr('class');
		

		if (CurIndex == FirstIndex) {
			nextbackCheck(e,CurIndex,FirstIndex, 'back');
		}
		else if (CurIndex == lastIndex && nextLIClass != 'RaymondVelez') {
			nextbackCheck(e,CurIndex,lastIndex, 'next');
		}
				
		else if (nextLIClass == 'hiddenSpeaker' && prevLIClass == 'hiddenSpeaker')
		{
			nextbackCheck(e,CurIndex,lastIndex, 'single');
		}
		
		else if (nextLIClass == 'hiddenSpeaker' && prevLIClass == 'hiddenSpeaker')
		{
			nextbackCheck(e,CurIndex,lastIndex, 'single');
		}
		
		else if (nextLIClass == 'hiddenSpeaker')
		{
			nextbackCheck(e,CurIndex,lastIndex, 'two');
		}
		
		else {
			nextbackCheck(e,CurIndex,lastIndex, 'Neither');
		}
							
		//
		
		
		/*
		//Hide scroll
		$('body').css('overflow-y','hidden')
		$('body').css('overflow-x','hidden')
		*/ 
		
		var speaker =  $(this).parent().attr("class") // get current speaker that was clicked on

		$('.backdrop, #' + speaker).animate({'opacity':'.7'}, 300, 'linear');
		$('.box, .speakercontent').animate({'opacity':'1.00'}, 300, 'linear');
		$('.backdrop, .speakercontent, #' + speaker).css('display', 'block');
	});
	
	$('.next').click(function(e){
		var currentSpeaker = $(this).parent().attr("id") // get current speaker current on
		var speakerNavCurnext = $('ul#speaker li.' + currentSpeaker).next().attr("class")// find li class with the same class found above then next one on list
		var CurIndex = $('ul#speaker li.' + currentSpeaker).next().index() //find current index
		var nextIndexExists = $('ul#speaker li:last').index() //find index of last list item
		var speakerNextNavCurnext = $('ul#speaker li.' + currentSpeaker).next().next().attr("class")//

		
		if (speakerNextNavCurnext == 'hiddenSpeaker') {
			nextbackCheck(e,CurIndex,nextIndexExists, 'two');
		}
		else if (speakerNextNavCurnext == 'RaymondVelez') {
			nextbackCheck(e,CurIndex,nextIndexExists, 'showall');
		}
		
		else if (currentSpeaker == 'LaurelCastiglione') {
			nextbackCheck(e,2,2, 'next');
		}
		
		else {
			nextbackCheck(e,CurIndex,nextIndexExists, 'next'); // call nextbackbutton check
		}
						
		//hide current speaker shown
		$('.box').animate({'opacity':'0'}, 100, 'linear', function(){
			$('#' + currentSpeaker).css('display', 'none');
		});
							
		//show the next speaker
		$('#' + speakerNavCurnext).animate({'opacity':'.1'}, 300, 'linear');
		$('.box, .speakercontent').animate({'opacity':'1.00'}, 300, 'linear');
		$('.speakercontent, #' + speakerNavCurnext).css('display', 'block');


		
	});


	$('.back').click(function(e){
		var currentSpeaker = $(this).parent().attr("id") // get current speaker current on
		var speakerNavCurPrev = $('ul#speaker li.' + currentSpeaker).prev().attr("class")// find li class with the same class found above then next one on list
		var CurIndex = $('ul#speaker li.' + currentSpeaker).prev().index() //find current index
		var PrevIndexExists = 0 // defines first index of li
							
		nextbackCheck(e,CurIndex,PrevIndexExists, 'back'); // call nextbackbutton check
		
		//hide current speaker shown
		$('.box').animate({'opacity':'0'}, 100, 'linear', function(){
			$('#' + currentSpeaker).css('display', 'none');
			
		});
							
		//show the next speaker
		$('#' + speakerNavCurPrev).animate({'opacity':'.1'}, 300, 'linear');
		$('.box, .speakercontent').animate({'opacity':'1.00'}, 300, 'linear');
		$('.speakercontent, #' + speakerNavCurPrev).css('display', 'block');
	});

	 
	$('.close').click(function(){
		close_box();
	});

	$('.backdrop').click(function(){
		close_box();
	});

});


function nextbackCheck(e, CurIndex, FirstLastIndex, identifier) // Checks if first or last item in list.. hide buttons respectivly
{
	//alert(CurIndex + ' ' + FirstLastIndex + ' ' + identifier);
	
	if (identifier == 'back' && CurIndex == FirstLastIndex) //if current index = last index, hide next button
	{
		//var src = $('.back img').attr("src").replace("Active.png", "Inactive.png"); 
		//$('.back img').attr("src", src); 
		
			
		$('.back').css('visibility', 'hidden');
		$('.next').css('visibility', 'visible');
	}
	else if (identifier == 'next' && CurIndex == FirstLastIndex) //if current index = 0, hide back button
	{
		//var src = $('.next img').attr("src").replace("Active.png", "Inactive.png"); 
		//$('.next img').attr("src", src); 
		
		$('.next').css('visibility', 'hidden');
		$('.back').css('visibility', 'visible');
	}
	
	else if (identifier == 'single')
	{
		//var src = $('.next img').attr("src").replace("Inactive.png", "Active.png"); 
		//$('.next img').attr("src", src); 
		
		//var src = $('.back img').attr("src").replace("Inactive.png", "Active.png"); 
		//$('.back img').attr("src", src);
		
		$('.back').css('visibility', 'hidden');
		$('.next').css('visibility', 'hidden');
	}

	else if (identifier == 'two')
	{
		//var src = $('.next img').attr("src").replace("Inactive.png", "Active.png"); 
		//$('.next img').attr("src", src); 
		
		//var src = $('.back img').attr("src").replace("Inactive.png", "Active.png"); 
		//$('.back img').attr("src", src);
		
		$('.back').css('visibility', 'visible');
		$('.next').css('visibility', 'hidden');
	}

	else 
	{
		//var src = $('.next img').attr("src").replace("Inactive.png", "Active.png"); 
		//$('.next img').attr("src", src); 
		
		//var src = $('.back img').attr("src").replace("Inactive.png", "Active.png"); 
		//$('.back img').attr("src", src);
		
		$('.back').css('visibility', 'visible');
		$('.next').css('visibility', 'visible');
	}
					
	
}

function close_box() // close lightbox
{
	$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
		$('.backdrop, .box').css('display', 'none');
	});
	
	$('body').css('overflow-y','auto')
	$('body').css('overflow-x','auto')

}

function centerBox() 
{
	// set box left and top position based on broswer dims
	
	$('.box').css ({
		left: ($(window).width() - $('.box').outerWidth())/2,
		top: ($(window).height() - $('.box').outerHeight())/2
	});

}








