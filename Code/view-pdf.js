/**
 * When browser supports inline pdfs
 * There is no need to append a large jquery plugin that displays them inline.
 * 
 * You can actually use an iframe (and style it appropriately)
 * or a link whenever inline PDF viewing is not supported
 * 
 * This function is fairly simple and it's only for demo purposes
 */
function appendPdf(id, url) {
    var $el = $('#'+id);
    // Check whether the browser supports displaying pdf files inline (ie. without downloading them)
    if (navigator && navigator.mimeTypes && navigator.mimeTypes['application/pdf']) {
        // You may add extra attributes (eg. to allow transparency) or style the iframe
        $el.html('<iframe src="'+url+'"></iframe>');
    } else {
        $el.html('<a href="'+url+'">Download file</a>');
    }
 }
