(function($){
	$.fn.textactions = function(options){
	  var $sections = $('.scrollable'),
	      $el = $(this),
	      sections_data = {},
	      active_stack = {},
	      _this = this;

	  $sections.each(function(i, section){
      var $section = $(section),
          start = parseInt($section.attr('data-start')),
          end = parseInt($section.attr('data-end')),
          id = $section.attr('id');
          
      sections_data[id] = {start:start, end:end};
    
	  });
	  
	  console.log(sections_data);

	  $(window).bind('slidechange', function(e, data){
  	  _this.check_active(data);
	  });
	  
	  this.check_active = function(data){
	    var section,
	        in_range;

      for(id in sections_data){
        in_range = data.percent >= sections_data[id].start && data.percent <= sections_data[id].end;
        
        if(in_range){
          if(active_stack[id]) continue;
          
          active_stack[id] = true;
          $('#'+id).addClass('active');
        }else{
          if(!active_stack[id]) continue;
           
          $('#'+id).removeClass('active');
          delete active_stack[id];          
        }
      }
	  };
	};	
})(jQuery);