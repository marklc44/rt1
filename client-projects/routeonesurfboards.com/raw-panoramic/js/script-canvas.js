//insert panoramic image in a frame the same size as the visible window
//maybe as a background property, maybe as item on a canvas
//image just repeats over and over
//but control max size of the viewing window so the object doesn't keep getting bigger
//as the image scrolls
//get scroll direction and intensity of mousewheel or swipe or click/drag
//var m = mousewheel event, m.detail, m.wheelDelta, m.wheelDeltaX, m.wheelDeltaY
//+ value = left, - value = right
//except Firefox uses DOMMouseScroll
//find touch equivalents
//control easing so image slows down before stopping - ease out

//firefox doesn't support mousewheel event. Use DOMMouseScroll




    //put all this back in doc.ready later
	/*var posX;
	$('#panorama-container').mousewheel(function(event, delta, deltaX, deltaY) {
		event.preventDefault();
		$container = $(event.target);
		$img = $('#panorama');

    	if(deltaY < 0) {
    		posX = $img.position().left;
    		var newPosX = posX + (delta*120);
    		$img.animate({left: newPosX + "px"}, 1000/60, 'swing');
    		console.log("posX: " + posX);
    		console.log("newPosX: " + newPosX);
            //globalID = requestAnimationFrame(repeatOften);
    	}
    	if(deltaY > 0) {
    		posX = $img.position().left;
    		var newPosX = posX + (delta*120);
    		$img.animate({left: newPosX + "px"}, 1000/60, 'swing');
    		console.log("posX: " + posX);
    		console.log("newPosX: " + newPosX);
            //cancelAnimationFrame(globalID);
    	}

        //-7100 only works at current monitor size. need to calc posX cutoff for creating new img
        if(posX < -7110) {
            //create a new image to the right
        }
        if(posX >= 0) {
            //create a new image to the left
        }

	});*/


    //set up canvas for drawing
    //drawing a large image on canvas leads to shitty quality
    //use the above script, but with css transforms instead of position

    var canvas = document.getElementById('pano-canvas');
    var ctx = canvas.getContext('2d');
    var canvasHeight = window.getComputedStyle(canvas, null).getPropertyValue('height');
    var canvasH = parseInt(canvasHeight, 10);

    var image = new Image();
    image.src = 'images/panoramic-demo-reel.jpg';
    var imgH = 1300; //height & width are not defined until the image object is drawn in the DOM
    var imgW = 8528; //so we have to explicitly provide them
    var imgRatio = canvasH / imgH;
    console.log(imgRatio);
    var imgWidth = imgW * imgRatio;

$(document).ready(function() {
    $(image).load(function() {
        //fyi, drawing image this large on canvas = shitty quality
        ctx.drawImage(image, 0, 0, imgWidth, canvasH);
    });
    globalID = requestAnimationFrame(repeatOften);
});

var globalID;

function repeatOften() {
  //$('<div class="repeat" />').appendTo("body");
  globalID = requestAnimationFrame(repeatOften);
}
function stripPx(stringVal) {

    return
}