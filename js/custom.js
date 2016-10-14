var $ = jQuery.noConflict(),_ww,_wh;

var Blank ={	
	win_wid_hit : function(){
		_ww  = $(window).width();
		_wh  = $(window).height();
		$('.mht').css({"min-height":_wh});
		$('.ww').css({"width":_ww});
		if(_ww > 1024){
			$('.mht2').css({"min-height":_wh});
		}	
	},
	
	slider : function(){
		$('.slider').bxSlider({
			infiniteLoop:true,
			auto:true,
			pager:false,
			speed : 1000,
			mode: 'fade'
		});	
	},
	
	scroll_up: function(){
		 $('.scroll-down a').click(function(e){
			e.preventDefault();
			var href = $(this).attr("href");
			var $href = $(href).offset().top;
			$('html,body').animate({
				scrollTop: $href
			},600) 
		});
	}	
}	

$(document).ready(function(){
	Blank.win_wid_hit();
	Blank.slider();
	Blank.scroll_up();
});

$(window).load(function(){
	
});

$(window).resize(function(){
	Blank.win_wid_hit();
});