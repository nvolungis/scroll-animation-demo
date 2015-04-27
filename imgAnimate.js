(function($){
	$.fn.stopmotion = function(opt,callback){
		var p = $.extend({
				'canvas':document.getElementById('canvas'),
				'images':[],
				'heightPerFrame':100,
				'spacer':$('#spacer'),
				'status':$('#status')
			},opt),
			currentSlide = 0,
    	win = {},
    	utils = {},
    	statusStyle = p.status[0].style,
    	canvasShowing,
    	context = p.canvas.getContext('2d'),
			$canvas = $(p.canvas),
			curImgSet,
			canvasOn = false,
			that = this;
					    
		this.drawCanvas = function(){
			if(!canvasOn) return;
			
		    win.w = p.canvas.width = window.innerWidth;
		    win.h = p.canvas.height = window.innerHeight;
		    win.ar = win.h/win.w; 
		    utils.setSpacer();
	    	utils.drawStuff();
		};
		
		this.animateCanvas = function(images){
			st = $(window).scrollTop();
			
			console.log('animate');

			if(Math.round((st)/p.heightPerFrame) !== currentSlide){
				currentSlide = Math.round((st)/p.heightPerFrame);
				utils.drawStuff(images);

				$(window).trigger('slidechange', {
				  index: currentSlide, 
				  percent: currentSlide/curImgSet.length * 100
				});
			}		
		};
		
		utils.setSpacer = function(){
			height = $(window).height()+(curImgSet.length-1)*p.heightPerFrame;
			p.spacer.css({'height':height});
		};
		
		utils.drawStuff = function(){
			var img = {},
				  dims = {};
			
			img.w = curImgSet[currentSlide].width;
			img.h = curImgSet[currentSlide].height;
			img.ar = img.h/img.w;
				
			if(img.ar < win.ar){
				dims.h = win.h;
				dims.w = win.h/img.ar;
				dims.left = parseInt((win.w - dims.w)/2);
				dims.top = 0;
			}else if(img.ar >= win.ar){
				dims.w = win.w;
				dims.h = win.w*img.ar;
				dims.left = 0;
				dims.top = parseInt((win.h - dims.h)/2);
			}
							
			context.drawImage(curImgSet[currentSlide],0,0,curImgSet[currentSlide].width,curImgSet[currentSlide].height,dims.left,dims.top,dims.w,dims.h);
		};
		
		utils.loadImages = function(sources, callback){
			var loaded = 0,
				images = [],
				imagesLen = sources.length,
				i,width;
			
			for(i=0; i<imagesLen; i++){	
				images[i] = new Image();
				images[i].src = sources[i];
				images[i].onload = function(){
					loaded++;
					width = ((loaded/imagesLen)*100)+'%';
					p.status.css({'width':width});
	
					if(loaded === imagesLen){
						canvasOn = true;

						p.status.addClass('hidden');
						
						$(this).delay(1000).queue(function(){
							statusStyle.width = '0px';
							p.status.removeClass('hidden');
							$(this).dequeue();
						});
						
						//show
						$canvas.removeClass('hidden');
					 	callback(images);
					 }
				};
			}
		};

   	
  	utils.loadImages(p.images,function(images){
  		curImgSet = images;
  		
  		$(window).bind('resize',function(){
  			that.drawCanvas();
  		});
  		
  		$(window).bind('scroll',function(){
  			that.animateCanvas();
  		});
  		
  		$(window).trigger('scroll');
  
  		that.drawCanvas(images);
  	});
	};
})(jQuery);

