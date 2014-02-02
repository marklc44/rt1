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


$(document).ready(function() {
    var globalID; //for requestAnimationFrame
	var posX;
	$('#panorama-container').mousewheel(function(event, delta, deltaX, deltaY) {
		event.preventDefault();
		$container = $(event.target);
		$pano = $('#panorama');

    	if(deltaY < 0) {
    		changeBgPosition(delta);
            //globalID = requestAnimationFrame(repeatOften);
    	}
    	if(deltaY > 0) {
    		changeBgPosition(delta);
            //cancelAnimationFrame(globalID);
    	}

	});

});

function changeBgPosition(d) {
    posX = parseInt($pano.css('background-position'));
    var newPosX = posX + (d*120);
    $pano.animate({
        //'background-position-x': newPosX + 'px'
    },
    step: function(now, fx) {
        fx.elem.id
    });
    //look into jquery animate step function
    console.log("posX: " + posX);
    console.log("newPosX: " + newPosX);
}



function repeatOften() {
  changeBgPosition(delta);
  globalID = requestAnimationFrame(repeatOften);
}