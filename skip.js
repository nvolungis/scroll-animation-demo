(function($){
	$.fn.skip = function(options){
	 $(this).bind('click', function(){
	   var height = $('#spacer').height();
	   
  	 $(window).scrollTop(height);
	 });
	}
})(jQuery);