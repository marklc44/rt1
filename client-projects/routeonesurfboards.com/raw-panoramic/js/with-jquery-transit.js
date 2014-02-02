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
    $img = $('#pano');
	var posX;
	$('#panorama-container').mousewheel(function(event, delta, deltaX, deltaY) {
		event.preventDefault();
		$container = $(event.target);
		
    	panoScroll(delta);

	});

});

function panoScroll(delta) {
    $img.transition({
        x: '+=' + delta*120
    },1000,'ease');
}


