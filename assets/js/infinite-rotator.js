// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 50;
			
			//interval between items (in milliseconds)
			var imageInterval = 7000;

			//interval between items (in milliseconds)
			var textInterval = 7000;

			//interval between items (in milliseconds)
			var textInterval2 = 7000;

			//interval between items (in milliseconds)
			var quoteInterval = 7000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 1000;
			
			//count number of images
			var numberOfImages = $('.rotating-image').length;

			//count number of paragraphs
			var numberOfQuotes = $('.rotating-text').length;

			//count number of paragraphs
			var numberOfQuotes2 = $('.rotating-text2').length;

			//count number of analyst quotes
			var numberOfAnalystQuotes = $('.rotating-quote').length;

			//set current image
			var currentImage = 0;

			//set current blockquote paragraph
			var currentPara = 0;

			//set current analyst quote paragraph
			var currentQuote = 0;

			//set current analyst quote paragraph
			var currentQuote2 = 0;

			//show first image
			$('.rotating-image').eq(currentImage).fadeIn(initialFadeIn);

			//show first blockquote paragraph
			$('.rotating-text').eq(currentImage).fadeIn(initialFadeIn);

			//show first blockquote paragraph
			$('.rotating-text2').eq(currentImage).fadeIn(initialFadeIn);

			//show first analyst blockquote paragraph
			$('.rotating-quote').eq(currentImage).fadeIn(initialFadeIn);

			//loop through the images		
			var infiniteLoop = setInterval(function(){
				$('.rotating-image').eq(currentImage).fadeOut(fadeTime);

				if(currentImage == numberOfImages -1){
					currentImage = 0;
				}else{
					currentImage++;
				}
				$('.rotating-image').eq(currentImage).fadeIn(fadeTime);

			}, imageInterval);

			//loop through the blockquote paragraphs		
			var infiniteLoop = setInterval(function(){
				$('.rotating-text').eq(currentPara).fadeOut(fadeTime);

				if(currentPara == numberOfQuotes -1){
					currentPara = 0;
				}else{
					currentPara++;
				}
				$('.rotating-text').eq(currentPara).fadeIn(fadeTime);

			}, textInterval);

			//loop through the blockquote paragraphs		
			var infiniteLoop = setInterval(function(){
				$('.rotating-text2').eq(currentQuote2).fadeOut(fadeTime);

				if(currentQuote2 == numberOfQuotes2 -1){
					currentQuote2 = 0;
				}else{
					currentQuote2++;
				}
				$('.rotating-text2').eq(currentQuote2).fadeIn(fadeTime);

			}, textInterval2);

			//loop through the analyst blockquote paragraphs		
			var infiniteLoop = setInterval(function(){
				$('.rotating-quote').eq(currentQuote).fadeOut(fadeTime);

				if(currentQuote == numberOfAnalystQuotes -1){
					currentQuote = 0;
				}else{
					currentQuote++;
				}
				$('.rotating-quote').eq(currentQuote).fadeIn(fadeTime);

			}, quoteInterval);
		}	
	};

	InfiniteRotator.init();
	
});