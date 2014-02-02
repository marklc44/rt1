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

var globalID;

function repeatOften() {
  $('<div class="repeat" />').appendTo("body");
  globalID = requestAnimationFrame(repeatOften);
}

$(document).ready(function() {

	var posX;
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

	});




});


