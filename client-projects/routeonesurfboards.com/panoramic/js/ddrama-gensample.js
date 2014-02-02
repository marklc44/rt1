var panoIndex=0;
var panoDefaultImageName="panoramic-demo.jpg";
var $container = $('#panoramic');
function addSamplePano(options)
{
    var src=panoDefaultImageName;

    src=arguments[0];
    options=arguments[1];
    
    var panoId="pano"+panoIndex;
    document.write('<img id="'+panoId+'" src="'+ src+ '" alt="" />');
    //$container.find('canvas').html('<img id="'+panoId+'" src="'+ src+ '" alt="" />');
    jQuery(function(){jQuery("#"+panoId).ddpanorama(options);});
    ++panoIndex;
}

function setDefaultImagePano(img)
{
    panoDefaultImageName=img;
}

function resize(container) {
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerWidth,
    viewportheight = window.innerHeight
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
    viewportwidth = document.documentElement.clientWidth,
    viewportheight = document.documentElement.clientHeight
}

// older versions of IE

else {
    viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
    viewportheight = document.getElementsByTagName('body')[0].clientHeight
}
container.style.height = viewportheight+"px";
}