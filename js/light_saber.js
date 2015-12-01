$(document).ready(function() {
    var currentMousePos = {
	x: -1,
	y: -1
    };
    var rotation = 0;
    var cont = 0;
    var menos = {
	x: 90,
	y: 100
    };
    var audio = new Audio('audio/sthswng1.WAV');
    $(".lightsaber").css("display", "none");
    $(document).mousemove(function(event) {
	//console.log("mousemove");
	$(".lightsaber").css("display", "block");
	var lastcurrentx = currentMousePos.x;
	var lastcurrenty = currentMousePos.y;
	currentMousePos.x = event.pageX;
	currentMousePos.y = event.pageY;

	var rotationSpeed = Math.floor(Math.abs(lastcurrentx - currentMousePos.x));

	if (rotation < 130) {
	    if (rotationSpeed > 10){
		audio.play();
	    }
	    if (lastcurrentx < currentMousePos.x) {
		//if(rotation>0){
		rotation += rotationSpeed;
		menos.x = 10;
		menos.y = 80;
		//}
	    }
	}
	if (rotation > 0) {
	    if (lastcurrentx > currentMousePos.x) {
		rotation -= rotationSpeed;
		menos.x = 90;
		menos.y = 100;
		//}
	    }
	}
	$(".lightsaber").css({
	    top: currentMousePos.y - menos.y,
	    left: currentMousePos.x - menos.x,
	    position: 'absolute'
	});
	if ((cont % 7) == 0) {
	    $(".lightsaber").css("-webkit-transform", "rotate(" + rotation + "deg)");
	    //cont=0;
	}
    });
});
