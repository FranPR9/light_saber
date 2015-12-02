

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
    var lightsaberzindex=-1;
    var lightsaberAudioOn=1;
    var lightsaberAudioSrc="audio/sthswng1.WAV";
    var audio = new Audio(lightsaberAudioSrc);
    console.log(audio);
     var lightsaber =  document.createElement("IMG");
     lightsaber.style.zIndex=lightsaberzindex;
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
		    	if(lightsaberAudioOn==1)
				audio.play();
		    }
		    if (lastcurrentx < currentMousePos.x)
		    {
				rotation += rotationSpeed;
				if(rotation>130)rotation=130;
				menos.x = 10;
				menos.y = 80;
			}
		}
		if (rotation > 0) 
		{
			if (rotationSpeed > 10)
		    {
		    	if(lightsaberAudioOn==1)
				audio.play();
		    }
		    if (lastcurrentx > currentMousePos.x) 
		    {
				rotation -= rotationSpeed;
				if(rotation<0)rotation=0;
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


    function LightSaber_setSrc(src)
    {
		lightsaber.setAttribute("src",src);
    }
    function LightSaber_setBlue(src)
    {
		lightsaber.setAttribute("src","img/bluesaber.png");
    }
    function LightSaber_setGreen(src)
    {
		lightsaber.setAttribute("src","img/greensaber.png");
    }
    function LightSaber_setPurple(src)
    {
		lightsaber.setAttribute("src",src);
    }
    function LightSaber_setzIndex(z)
    {
    	lightsaber.style.zIndex=z;
    }
     function LightSaber_setAudio(on)
    {
    	if(on==true)
    		lightsaberAudioOn=1;
    	else
    		lightsaberAudioOn=0;

    }
    function LightSaber_setAudioSRC(src)
    {
    	audio.setAttribute("src",src);
    }




