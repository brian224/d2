$(document).ready(function(){
	var $videoList    = $('.video-list'),
		$videoLink    = $('.video-link'),
		$btnClose     = $('.btn-close'),
		$btnSort      = $('.btn-sort'),
		$lightboxWrap = $('.lightbox-Wrap'),
		_url          = window.location.href,
		_id           = window.location.hash;

	if ( _id !== '' ) {
		for ( var i = 0 ; i < $videoLink.length ; i ++ ) {
			if ( $videoLink.eq(i).data('id') === _id.split('#')[1] ) {
				$.fancybox.open({
					type : 'iframe',
					iframe : {
						preload : true
					},
					padding : 0,
					href : $videoLink.eq(i).attr('href'),
					autoSize : true,
					afterClose : function() {
						window.location.hash = '';
					}
				});
			}
		};
	}

	$videoLink.on('click' , function(e) {
		var $this = $(this);
		
		e.preventDefault();
		window.location.hash = $this.data('id');

		$.fancybox.open({
			type : 'iframe',
			iframe : {
				preload : true
			},
			padding : 0,
			href : $this.attr('href'),
			autoSize : true,
			afterClose : function() {
				window.location.hash = '';
			}
		});
	});

	$btnSort.on('click', function(){
		if (!$(this).hasClass('is-curr')) {
			$(this).addClass('is-curr');
			$(this).siblings().removeClass('is-curr');
		}
	});
});