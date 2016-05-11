(function (window, document, jQuery, undefined) {
	'use strict';

	var Projects = {
		Factory : {
			W         : $(window),
			D         : $(document),
			HB        : $('html , body'),
			H         : $('html'),
			B         : $('body'),
			LContent  : $('.l-content'),
			Device    : /Android|webOS|iPad|BlackBerry/i,
			IOS       : /iPhone|iPad|iPod/i,
			UserAgent : null,
			browsers  : null,
			Dynamic   : null,
			OS        : null
		}
	}

	if ( ! window.Projects ) {
		window.Projects = Projects;
	} else {
		window.Projects = $.extend( {} , window.Projects , Projects );
	}
}(window, document, $));