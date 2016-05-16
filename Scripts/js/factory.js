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
			Page       : function(){
				var _time = (parseFloat($('.type-list.approach>.list .price-title').css('animation-duration') , 10) * 1000);
				
				setTimeout(function(){
					$('.approach').removeClass('approach');
				}, _time);
			},
			Slideshow  : {
				goRight : null,
				goLeft : null,
				Init : function(event, element){
					var $newElement = $(element).find('.item-list'),
						_middle     = (Projects.Factory._WWid / 2), // 決定往左或往右的中間點
						_event      = event;

					if (_event.pageX > _middle) {
						Projects.Factory.Slideshow.Right(_event, $newElement);

						$(element).on('mousemove', function(e){
							if (e.pageX < _middle) {
								window.clearInterval(Projects.Factory.Slideshow.goRight);
								window.clearInterval(Projects.Factory.Slideshow.goLeft);
								Projects.Factory.Slideshow.Left(_event, $newElement);
							} else {
								window.clearInterval(Projects.Factory.Slideshow.goRight);
								window.clearInterval(Projects.Factory.Slideshow.goLeft);
								Projects.Factory.Slideshow.Right(_event, $newElement);
							}
						});
					} else {
						Projects.Factory.Slideshow.Left(_event, $newElement);

						$(element).on('mousemove', function(e){
							if (e.pageX > _middle) {
								window.clearInterval(Projects.Factory.Slideshow.goRight);
								window.clearInterval(Projects.Factory.Slideshow.goLeft);
								Projects.Factory.Slideshow.Right(_event, $newElement);
							} else {
								window.clearInterval(Projects.Factory.Slideshow.goRight);
								window.clearInterval(Projects.Factory.Slideshow.goLeft);
								Projects.Factory.Slideshow.Left(_event, $newElement);
							}
						});
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
					}, 25);
				},
				Left : function(event, element){
					Projects.Factory.Slideshow.goLeft = setInterval(function(){
						if ($(element).position().left < 0) {
							$(element).css('left', $(element).position().left + 5);
						} else {
							window.clearInterval(Projects.Factory.Slideshow.goRight);
							window.clearInterval(Projects.Factory.Slideshow.goLeft);
						}
					}, 25);
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