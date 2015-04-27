(function($){
	$.fn.progressbar = function(options){
    var $el = $(this);
    
    $(window).bind('slidechange', function(e, data){
      $el.css({width:data.percent+'%'});
      
    });
	
	};
})(jQuery);