(function() {

  $(function() {
    $('.tooltip-examples a, .tooltip-paragraph-examples a').tooltip({
      animation: false
    });
    $('.top-sign-in').on("click", function(e) {
      $('.login-box').fadeIn("fast");
      return false;
    });
    $('.login-box-close').on("click", function(e) {
      $(this).closest(".login-box").fadeOut("fast");
      return false;
    });
    prettyPrint();
    $(".slider-browser-center").animate({
      bottom: $(".slider-browser-center").data('position-bottom')
    }, "fast", function() {
      return $(".slider-browser-left").animate({
        bottom: $(".slider-browser-left").data('position-bottom')
      }, "fast", function() {
        return $(".slider-browser-right").animate({
          bottom: $(".slider-browser-right").data('position-bottom')
        }, "fast");
      });
    });
    $('.carousel').carousel({
      interval: false
    });
    return $('a[data-toggle="testimonial"]').on("click", function(e) {
      $(this).closest('.testimonials-users').find('a[data-toggle="testimonial"]').removeClass("active");
      $(this).addClass("active");
      $('.testimonials-speech').removeClass('active');
      $('.testimonials-speech' + $(this).attr('href')).addClass('active');
      return false;
    });
  });
  $("body").on("touchstart.dropdown", ".dropdown-menu", function(e) {
    return e.stopPropagation();
  });
  return $(document).on("click", ".dropdown-menu a", function() {
    return document.location = $(this).attr("href");
  });
}).call(this);


$(document).ready(function() {
	var selectTimer =  setInterval(setupPopovers, 2000);
	$('[rel=popover]').popover();
	$('.bs-docs-sidebar').scrollspy({
		offset:100
	});
	
  });
   
  
 function setupPopovers(){
 if($("#HotelRoomRequired").val() === "-1" && $('[rel=popover]').length > 0){
         $('[rel=popover]').popover();
         window.clearInterval(selectTimer);
		 $("#HotelRoomRequired").change(setupPopovers);
       }
 }
 
// Marquee Image Rotator
      // $(function(){
      //    var item=[],swap,obj,html,i=0,len,update,t,myHTML;
		         
         // First variable is the image to the item
         // Second is the link, leave it blank if there is no link;
         // Third is the class
         // Forth is the title
      //    item[0]=['http://www.regsvc.com/registration/ClientConfig/Polycom/E2/assets/images/polycom_graphics/marquee_images/francois_pienaar_trophy_marquee_3_text.jpg','http://www.regsvc.com/registration/ClientConfig/Polycom/E2/assets/images/polycom_graphics/marquee_images/francois_pienaar_trophy_marquee_3.jpg','lightbox[gallery]','<h3>FRANCOIS PIENAAR - THE COURAGE TO LEAD</h3><p> An inspirational leader who captained his country to Rugby World Cup Victory in 1995, one of the few men on earth who can claim to have united South Africa behind a common cause. Having been named Newsmaker of the Year, he is his countrys most celebrated icon after Nelson Mandela.</p><p>Join us on a journey of leadership, perseverance and remarkable human spirit with one of the great modern captains of our time. </p>','thumbnail with-content'];
      //    item[1]=['http://www.regsvc.com/registration/ClientConfig/Polycom/E2/assets/images/polycom_graphics/marquee_images/marquee4_text.jpg','http://www.regsvc.com/registration/ClientConfig/Polycom/E2/assets/images/polycom_graphics/marquee_images/marquee4.jpg','lightbox[gallery]','<h3>Join us in Vancouver, B.C., February 10-13, 2014</h3><p> Top Three Reasons to join us in beautiful Vancouver, British Columbia, on Canada’s West Coast! <ol><li> Because we heard you!  Following the 2013 event and the great ratings you gave Vancouver we are returning to the “Best City in the Americas” as stated by Conde Nast Traveler Magazine</li><li> Vancouver’s stunning Convention Centre is the only centre to be voted as the World’s Best Convention Centre - not once but twice!  </li><li> Vancouver is known as “The most accessible city in the world” for travelers</li></ol> </p>','thumbnail with-content'];
      //    len=(item.length);
      //    swap=function(){
      //       if(i>=len) {i=0;}
      //       obj=item[i];
      //       html='';
      //          if(obj[1]) {html+='<a href="'+obj[1]+'" data-rel="'+obj[2]+ '" title="'+obj[3]+'" class="'+obj[4]+'">';}
      //          html+=' <span title=""><img src="'+obj[0]+'" /></span>';
      //          if(obj[1]) {html+='</a>';}      
      //       i++;
      //       return(html);
      //    };
      //    update=function(id){$('#'+id).html(swap());};
      //    update('dataBox');
      //    t=setInterval(function(){update('dataBox');},5000);
      // });

