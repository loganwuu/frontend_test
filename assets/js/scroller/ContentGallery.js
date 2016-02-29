$(document).ready(function(){

	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	

	$(window).resize(function() {
		centerBox()
	});

	//Video Lightbox
	$('.lightbox').click(function(e){
	
		centerBox() // call center box function
	
		speaker =  $(this).parent().attr("class") // get current speaker that was clicked on
		video = $('#' + speaker).find('.VideoContent').html()
				
		$('.backdrop, #' + speaker).animate({'opacity':'.7'}, 300, 'linear');
		$('.VideoBox, .VideoContent').animate({'opacity':'1.00'}, 300, 'linear');
		$('.backdrop, .VideoContent, #' + speaker).css('display', 'block');
	});
	
	//Photo Lightbox
	$('.contentGalleryList li').click(function() {
	
		var photoGalName = $(this).find('div.PhotosImage').children('img').attr('class');
		
		
		$('.slideshow li').each(function() {
			$(this).css("display","none").removeClass('currentPhoto') //RESET all PHOTOS
		});
		
		$('.backdrop, #' + photoGalName).animate({'opacity':'.7'}, 300, 'linear');
		$('.PhotoBox, .PhotosSlideShow').animate({'opacity':'1.00'}, 300, 'linear');
		$('.backdrop, .PhotosSlideShow, #' + photoGalName).css('display', 'block');
		
		
		$('#' + photoGalName).find('ul.slideshow').find('li').eq(0).css('display','block').addClass('currentPhoto')
		
		var imgHeight = $('#' + photoGalName).find('ul.slideshow').find('li').eq(0).find('img').outerHeight(); // height of image
		var imgWidth = $('#' + photoGalName).find('ul.slideshow').find('li').eq(0).find('img').outerWidth()
		$('.PhotoBox').css("height",imgHeight + 20); // set photobox based on height of image.
		$('.PhotoBox').css("width",imgWidth); // set photobox based on height of image.
		
		centerBox() // call center box function
		
		var numPhotos = $('#' + photoGalName).find('ul.slideshow li').size(); // Total # of images
		
		
		$('#' + photoGalName).find('.photoStatus p').html(1 + ' of ' + numPhotos) // displays current # out of Total # images
	});
	
	var inClick = false;
	
	//next slide for photos
	$('.next').click(function() {

		// check if animation is finished
		if (inClick) {
			return false;
		}
		
		inClick = true;
	
		var photoGalName = $(this).parent().attr('id')
		var numPhotos = $('#' + photoGalName).find('ul.slideshow li').size(); // Total # of images

		var photoIndex = $('#' + photoGalName).find('ul.slideshow li.currentPhoto').index();
		var nextIndex = photoIndex + 1;
		
		if ((nextIndex + 1) == (numPhotos + 1)){
			var nextIndex = 0;
		}
				
		//$('#' + photoGalName).find('ul.slideshow li').eq(photoIndex).css("display","none").removeClass('currentPhoto') // hide current photo
		//$('#' + photoGalName).find('ul.slideshow li').eq(nextIndex).css('display','block').addClass('currentPhoto') //show next photo
					
					
		var liCur = $('#' + photoGalName).find('ul.slideshow li').eq(photoIndex);
		var liNext = $('#' + photoGalName).find('ul.slideshow li').eq(nextIndex);

		//liNext.fadeIn("slow",function(){
		//	$(this)..css("display","block").addClass('currentPhoto')
		//});	
		
		liCur.fadeOut("fast",function(){
			$(this).css("display","none").removeClass('currentPhoto')
			//$(this).parent().children().css("display","none").removeClass('currentPhoto')
			
			liNext.fadeIn("fast",function(){
				$(this).css("display","block").addClass('currentPhoto')
				//$(this).siblings().css("display","none").removeClass('currentPhoto')
				
				$('#' + photoGalName).find('.photoStatus p').html((nextIndex + 1) + ' of ' + numPhotos) // update photo text
				
				var imgHeight = $('#' + photoGalName).find('ul.slideshow').find('li').eq(nextIndex).find('img').outerHeight() // PhotoBox	
				var imgWidth = $('#' + photoGalName).find('ul.slideshow').find('li').eq(nextIndex).find('img').outerWidth()
				$('.PhotoBox').css("height",imgHeight + 20) // set photobox based on height of image.
				$('.PhotoBox').css("width",imgWidth) // set photobox based on height of image.
				
				centerBox() // call center box function
					
				inClick = false;	
			});	
		});
		
		
		
		

	});
	
	//prev slide for photos
	$('.back').click(function() {
	
		// check if animation is finished
		if (inClick) {
			return false;
		}
		
		inClick = true;
	
		var photoGalName = $(this).parent().attr('id')
		var numPhotos = $('#' + photoGalName).find('ul.slideshow li').size(); // Total # of images

		var photoIndex = $('#' + photoGalName).find('ul.slideshow li.currentPhoto').index();
		var PrevIndex = photoIndex - 1;
		
		
		if ((photoIndex - 1) == -1){
			var liCur = $('#' + photoGalName).find('ul.slideshow li').eq(photoIndex);
			var liPrev = $('#' + photoGalName).find('ul.slideshow li').eq(numPhotos - 1);
			
			var PrevIndex = numPhotos - 1;
		}
		else {
			var liCur = $('#' + photoGalName).find('ul.slideshow li').eq(photoIndex);
			var liPrev = $('#' + photoGalName).find('ul.slideshow li').eq(PrevIndex);
		}
		
		

		
		liCur.fadeOut("fast",function(){
			//$(this).css("display","none").removeClass('currentPhoto')
			$(this).parent().children().css("display","none").removeClass('currentPhoto')
			
			liPrev.fadeIn("fast",function(){
				$(this).css("display","block").addClass('currentPhoto')
				$(this).siblings().css("display","none").removeClass('currentPhoto')
				
				$('#' + photoGalName).find('.photoStatus p').html((PrevIndex + 1) + ' of ' + numPhotos) // update photo text
				
				var imgHeight = $('#' + photoGalName).find('ul.slideshow').find('li').eq(PrevIndex).find('img').outerHeight() // PhotoBox	
				var imgWidth = $('#' + photoGalName).find('ul.slideshow').find('li').eq(PrevIndex).find('img').outerWidth()
				$('.PhotoBox').css("height",imgHeight + 20) // set photobox based on height of image.
				$('.PhotoBox').css("width",imgWidth) // set photobox based on height of image.
			
				centerBox() // call center box function
				
				inClick = false;	
			
			});	
		});	
		
	});
		
	
	$('.close').click(function(){
		close_box();
	});

	$('.backdrop').click(function(){
		close_box();
	});


	function close_box() // close lightbox
	{
		$('.backdrop, .VideoBox, .PhotoBox').animate({'opacity':'0'}, 300, 'linear', function(){
			$('.backdrop, .VideoBox, .PhotoBox').css('display', 'none');
		});
		
		$('#' + speaker).find('.VideoContent').remove();
		$('#' + speaker).append('<div class="VideoContent">' + video + '</div>');
				
		$('body').css('overflow-y','auto')
		$('body').css('overflow-x','auto')

	}

	function centerBox() 
	{
		// set box left and top position based on broswer dims
		
		$('.VideoBox').css ({
			left: ($(window).width() - $('.VideoBox').outerWidth())/2,
			top: ($(window).height() - $('.VideoBox').outerHeight())/2
		});
		
		$('.PhotoBox').css ({
			left: ($(window).width() - $('.PhotoBox').outerWidth())/2,
			top: ($(window).height() - $('.PhotoBox').outerHeight())/2
		});

	}
	

	// NAV
	$('ul#contentGalleryNav li').mouseenter(function() {
		//$(this).find('a').attr("href");
		$(this).removeClass('cGNav_NonActive').addClass('cGNav_Hover')
	});	
	
	$('ul#contentGalleryNav li').mouseleave(function() {
		$(this).addClass('cGNav_NonActive').removeClass('cGNav_Hover')
	});

	// On click change css to pressed. Clear other lis
	$('ul#contentGalleryNav li').mousedown(function() {
		$(this).siblings().removeClass().addClass('cGNav_NonActive')
		$(this).removeClass().addClass('cGNav_Selected')

		var tab = $(this).find('a').attr('href')
		
		if (tab == '#Videos') {
			$("html,body").animate({ scrollTop: 450 }, "slow");
		}
		else if (tab == '#Slides') {
			$("html,body").animate({ scrollTop: 2010 }, "slow");
		}
		else if (tab == '#Photos') {
			$("html,body").animate({ scrollTop: 3250 }, "slow");
		}
		

	})

	$('ul#contentGalleryNav li').mouseup(function(){
		$(this).siblings().removeClass().addClass('cGNav_NonActive')
		$(this).removeClass().addClass('cGNav_NonActive')	
	});
	
});






