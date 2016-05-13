(function (window, document, jQuery, undefined) {
	'use strict';

	Projects.Factory.$W.load(function(e){
		Projects.Factory.Page();

		$('.jq-slider').each(function(e){
			$(this).hover(function(e) {
				Projects.Factory.Slideshow.Init(e, this);
			}, function(){
				window.clearInterval(Projects.Factory.Slideshow.goRight);
				window.clearInterval(Projects.Factory.Slideshow.goLeft);
			});
		});
	});
	Projects.Factory.$D.ready(function(e){});
}(window, document, $));