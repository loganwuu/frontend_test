$(document).ready(function(){
	
	//$(".YammerLogo").hide();
	//$(".loadDelay h3").hide();
	//$(".loadDelay h2").hide();
	//$(".loadDelay #sectionBorder").hide();
	//$("#speakerSocial").hide();
	//$(".experience").hide();
	
	
	//setTimeout(function(){
	//	$(".YammerLogo").fadeIn("slow");
	//}, 1400  );
	
	//setTimeout(function(){
	//	$(".loadDelay h3").fadeIn("slow");
	//}, 3000  );
	
	//setTimeout(function(){
	//	$(".loadDelay #sectionBorder").fadeIn("slow");
	//}, 4000  );
	
	//setTimeout(function(){
	//	$(".loadDelay h2").fadeIn("slow");
	//}, 4200  );
	
	//setTimeout(function(){
	//	$(".experience").slideDown("slow");
	//}, 4500  );
	
	//setTimeout(function(){
	//	$("#speakerSocial").slideDown("slow");
	//}, 4500  );
	

	$('#earlyRegButton img').animate({
			top:  '65'
		}, /*duration*/360, /*ease*/'swing');
		
	//tell the browser what to do when hovering on the div:
	$('#earlyRegButton').hover(function() {
		//when mouse hover:
		$('#earlyRegButton img').animate({
			top:  '74'
		}, /*duration*/360, /*ease*/'swing');
	}, function() {
		//when mouse out, no hover:
		$('#earlyRegButton img').animate({
			top: '65px'
		}, /*duration*/360, /*ease*/'swing');
	});
	
	
	
});


 
 
