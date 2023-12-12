$(document).ready(function()
{
    $(".window.draggable").draggable({ 
    	cancel: '.window-body',
    	containment: 'body',
    	scroll: false
    });
    
    $(".window.resizable").resizable({
    	handles: 'n, e, s, w, ne, se, sw, nw',
    	containment: 'body',
    	minHeight: 80,
    	minWidth: 138,
    	maxHeight: $(window).height(),
    	maxWidth: $(window).width()
    });
});