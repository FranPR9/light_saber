

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
    var lightsaber =  document.createElement("IMG");
     lightsaber.style.zIndex=lightsaberzindex;
     lightsaber.setAttribute("src","img/lightsaber.png");
     lightsaber.setAttribute("class","lightsaber");
     document.body.appendChild(lightsaber);	

     lightsaber.style.display="none";
     
      var magic = 0;
     document.onmousemove=function(event)
     {
	    lightsaber.style.display="block";
		var lastcurrentx = currentMousePos.x;
		var lastcurrenty = currentMousePos.y;
		currentMousePos.x = event.pageX;
		currentMousePos.y = event.pageY;

		var rotationSpeed = Math.floor(Math.abs(lastcurrentx - currentMousePos.x));

		    if (rotationSpeed > 10)
		    {
		    	if(lightsaberAudioOn==1)
				audio.play();
		    }
		if (rotation < 130) {
		    if (lastcurrentx < currentMousePos.x)
		    {
				rotation += rotationSpeed;
				if(rotation>130)rotation=130;
				menos.x = 90 - 7.5*magic;
	  console.log(magic)	
				menos.y = 100 -  2.5*magic;
			  if (magic<10){
				magic++;
}
			} else {
		      if (magic > 0){
			magic--;
}
		    } 
		  
		}
		if (rotation > 0) 
		{
		    if (lastcurrentx > currentMousePos.x) 
		    {
				rotation -= rotationSpeed;
				if(rotation<0)rotation=0;
				menos.x = 90;
				menos.y = 100;
			}
		}

			lightsaber.style.position="absolute";
			lightsaber.style.top=(currentMousePos.y - menos.y)+"px" ;
			lightsaber.style.left=(currentMousePos.x - menos.x)+"px";

			if ((cont % 7) == 0) {
			    lightsaber.style.webkitTransform="rotate(" + rotation + "deg)";
//			  lightsaber.style.webkitTransformOrigin= menos.x + "px" + menos.y + "px"; 
			}

    }


    function LightSaber_setSrc(src)
    {
		lightsaber.setAttribute("src",src);
    }
    function LightSaber_setBlue()
    {
		lightsaber.setAttribute("src","img/bluesaber.png");
    }
    function LightSaber_setGreen()
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




