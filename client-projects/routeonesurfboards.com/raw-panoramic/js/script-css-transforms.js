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
    		changePosition(delta);
            //globalID = requestAnimationFrame(repeatOften);
    	}
    	if(deltaY > 0) {
    		changePosition(delta);
            //cancelAnimationFrame(globalID);
    	}

        //-7100 only works at current monitor size. need to calc posX cutoff for creating new img
        if(posX < -7110) {
            var $imgAfter = $('img');
            $imgAfter.attr('src','images/panoramic-demo-reel.jpg').attr('id','image-after');
            $container.append($imgAfter);
            $('#image-before').remove();
        }
        if(posX >= 0) {
            var $imgBefore = $('img');
            $imgBefore.attr('src','images/panoramic-demo-reel.jpg').attr('id','image-before');
            $container.prepend($imgBefore);
            $('#image-after').remove();
        
        }

	});
    //globalID = requestAnimationFrame(repeatOften);
});

function changePosition(d) {
    posX = $pano.position().left;
    var newPosX = posX + (d*120);
    $pano.animate({left: newPosX + "px"}, 1000/60, 'swing');
    console.log("posX: " + posX);
    console.log("newPosX: " + newPosX);
}



/*function repeatOften() {
  //$('<div class="repeat" />').appendTo("body");
  globalID = requestAnimationFrame(repeatOften);
}*/