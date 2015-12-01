

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
     var lightsaber =  document.createElement("IMG");
     lightsaber.setAttribute("src","img/lightsaber.png");
     lightsaber.setAttribute("class","lightsaber");
     document.body.appendChild(lightsaber);	

     lightsaber.style.display="none";
     

     document.onmousemove=function(event)
     {
    lightsaber.style.display="block";
	var lastcurrentx = currentMousePos.x;
	var lastcurrenty = currentMousePos.y;
	currentMousePos.x = event.pageX;
	currentMousePos.y = event.pageY;

	var rotationSpeed = Math.floor(Math.abs(lastcurrentx - currentMousePos.x));

	if (rotation < 130) {
	    if (rotationSpeed > 10)
	    {
			audio.play();
	    }
	    if (lastcurrentx < currentMousePos.x)
	    {
			rotation += rotationSpeed;
			menos.x = 10;
			menos.y = 80;
		}
	}
	if (rotation > 0) 
	{
	    if (lastcurrentx > currentMousePos.x) 
	    {
			rotation -= rotationSpeed;
			menos.x = 90;
			menos.y = 100;
		}
	}

		lightsaber.style.position="absolute";
		console.log("x:"+currentMousePos.x+" -"+menos.x+" y:"+currentMousePos.y+" -"+menos.x);
		lightsaber.style.top=(currentMousePos.y - menos.y)+"px" ;
		lightsaber.style.left=(currentMousePos.x - menos.x)+"px";

		if ((cont % 7) == 0) {
		    lightsaber.style.webkitTransform="rotate(" + rotation + "deg)";
		}

    }