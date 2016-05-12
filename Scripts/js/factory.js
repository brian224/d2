(function (window, document, jQuery, undefined) {
	'use strict';

	var Projects = {
		Factory : {
			$W         : $(window),
			$D         : $(document),
			$HB        : $('html , body'),
			$H         : $('html'),
			$B         : $('body'),
			$LMain     : $('.l-main'),
			_Device    : /Android|webOS|iPad|BlackBerry/i,
			_IOS       : /iPhone|iPad|iPod/i,
			_WWid      : $(window).width(),
			_LWainWid  : $('.l-main').width(),
			_UserAgent : null,
			_browsers  : null,
			_Dynamic   : null,
			_OS        : null,
			Slideshow  : {
				goRight : null,
				goLeft : null,
				Init : function(event, element){
					var _middle = (Projects.Factory._WWid / 2); // 決定往左或往右的中間點

					if (event.pageX > _middle) {
						Projects.Factory.Slideshow.Right(event, element);
					} else {
						Projects.Factory.Slideshow.Left(event, element);
					}
				},
				Right : function(event, element){
					var _eleWid = $(element).width();

					Projects.Factory.Slideshow.goRight = setInterval(function(){
						if ($(element).position().left > -(_eleWid - Projects.Factory._LWainWid)) {
							$(element).css('left', $(element).position().left - 5);
						} else {
							window.clearInterval(Projects.Factory.Slideshow.goRight);
							window.clearInterval(Projects.Factory.Slideshow.goLeft);
						}
					}, 50);
				},
				Left : function(event, element){
					Projects.Factory.Slideshow.goLeft = setInterval(function(){
						if ($(element).position().left < 0) {
							$(element).css('left', $(element).position().left + 5);
						} else {
							window.clearInterval(Projects.Factory.Slideshow.goRight);
							window.clearInterval(Projects.Factory.Slideshow.goLeft);
						}
					}, 50);
				}
			}
		}
	}

	if ( ! window.Projects ) {
		window.Projects = Projects;
	} else {
		window.Projects = $.extend( {} , window.Projects , Projects );
	}
}(window, document, $));