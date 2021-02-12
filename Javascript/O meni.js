$( document ).ready(function() {
    var elem=$('#osnova, #os, #sr, #cilj, #visum'),
    elemoffset = 500,
    documentelem=$(document);

    documentelem.on('scroll', function(){
    	if(documentelem.scrollTop()>elemoffset && 
    		elem.hasClass('show')) elem.removeClass('show');
    });
});