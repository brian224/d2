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
					closeBtn   : false,
					type       : 'iframe',
					padding    : 7,
					width      : 820,
					href       : $videoLink.eq(i).attr('href'),
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
			closeBtn   : false,
			type       : 'iframe',
			padding    : 7,
			width      : 820,
			href       : $this.attr('href'),
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

	if (navigator.userAgent.search('MSIE 8') !== -1 || navigator.userAgent.search('MSIE 9') !== -1) {
		if ($('body').hasClass('join')) {
			var $inputbox = $('.inputbox, .textarea');

			$inputbox.each(function(){
				$(this).val($(this).attr('placeholder'));

				$(this).on('click', function(){
					if ($(this).val() === $(this).attr('placeholder')) {
						$(this).val('');
					}
				});

				$(this).on('focusout', function(){
					if ($(this).val() === '') {
						$(this).val($(this).attr('placeholder'));
					}
				});
			});
		}
	}
});