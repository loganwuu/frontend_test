function drawDashedLine(context, fromX, fromY, toX, toY, dashPattern) {
 
	context.beginPath();
 
	var dx = toX - fromX;
	var dy = toY - fromY;
	var angle = Math.atan2(dy, dx);
	var x = fromX;
	var y = fromY;
	context.moveTo(fromX, fromY);
	var idx = 0;
	var draw = true;
	while (!((dx < 0 ? x <= toX : x >= toX) && (dy < 0 ? y <= toY : y >= toY))) {
		var dashLength = dashPattern[idx++ % dashPattern.length];
		var nx = x + (Math.cos(angle) * dashLength);
		x = dx < 0 ? Math.max(toX, nx) : Math.min(toX, nx);
		var ny = y + (Math.sin(angle) * dashLength);
		y = dy < 0 ? Math.max(toY, ny) : Math.min(toY, ny);
		if (draw) {
			context.lineTo(x, y);
		} else {
			context.moveTo(x, y);
		}
		draw = !draw;
	}
 
	context.closePath();
	context.stroke();
};

function drawDashedLineOnCanvas(){
	//Content 2
	var leftDistance2 = $('#content2 .float-left').offset();
    var canvas = document.getElementById("CanvasContent2");
    var context = canvas.getContext("2d");
	
	$('#CanvasContent2').css('margin-left',(leftDistance2.left) - 15 +'px');
	
	var lingrad2 = context.createLinearGradient(0,300,0,400);
    lingrad2.addColorStop(0, '#fff');
    lingrad2.addColorStop(1, '#2e71b5');
	
    context.strokeStyle=lingrad2;
    context.lineCap = "round";
    context.lineWidth = 2;
    drawDashedLine(context, 0, 50, 225,750,[5,10]); // angled
	drawDashedLine(context, 0, 50, 50, 50,[5,10]); // right
	drawDashedLine(context, 0, 0, 0,50,[5,10]); // top
	drawDashedLine(context, 225, 750, 275, 750,[5,10]); // right
	drawDashedLine(context, 225, 750, 225, 800,[5,10]); // right
	
	//Content 3
	var leftDistance3 = $('#content3 .float-right').offset();
	var canvas = document.getElementById("CanvasContent3");
    var context = canvas.getContext("2d");
	var widthCanvas3 = $('#CanvasContent3').width();
	
	$('#CanvasContent3').css('margin-left',(leftDistance3.left) - (widthCanvas3) + 55 +'px');

	
		
	var lingrad2 = context.createLinearGradient(0,300,0,400);
    lingrad2.addColorStop(0, '#82c1ff');
    lingrad2.addColorStop(1, '#6cbc60');
	
    context.strokeStyle=lingrad2;
    context.lineCap = "round";
    context.lineWidth = 2;
    drawDashedLine(context, 350, 50,135,890,[5,10]); // angled
	drawDashedLine(context, 350, 50, 400, 50,[5,10]); // right
	drawDashedLine(context, 350, 0, 350,50,[5,10]); // top
	drawDashedLine(context, 135, 890, 185, 890,[5,10]); // right
	drawDashedLine(context, 135, 890, 135, 940,[5,10]); // right
	
};



