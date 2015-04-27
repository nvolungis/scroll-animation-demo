(function($){
	$(document).ready(function(){
    $('#canvas').stopmotion({
    	'images': ctp3,
    	'heightPerFrame': 20
    });
    
    $('#wrapper').textactions();
    $('#progressbar').progressbar();
    $('#skip').skip();
	});
})(jQuery);