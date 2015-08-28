$(document).ready(function(){
	var $videoList    = $('.video-list'),
		$videoLink    = $('.video-link'),
		$btnClose     = $('.btn-close'),
		$btnSort      = $('.btn-sort'),
		$lightboxWrap = $('.lightbox-Wrap'),
		$winners      = $('.link.winners'),
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
						window.location.hash = ' ';
					}
				});
			}
		};
	}

	$winners.on('click' , function(e) {
		var $this      = $(this),
			$scrollTop = $(window).scrollTop();
		
		e.preventDefault();

		$.fancybox.open({
			closeBtn   : false,
			type       : 'iframe',
			padding    : 7,
			width      : 796,
			href       : $this.attr('href'),
			afterClose : function() {
				$('html , body').scrollTop($scrollTop);
			}
		});
	});

	$videoLink.on('click' , function(e) {
		var $this = $(this);
		var $scrollTop = $(window).scrollTop();
		
		e.preventDefault();
		window.location.hash = $this.data('id');

		$.fancybox.open({
			closeBtn   : false,
			type       : 'iframe',
			padding    : 7,
			width      : 820,
			href       : $this.attr('href'),
			afterClose : function() {
				window.location.hash = ' ';
				$('html , body').scrollTop($scrollTop);
			}
		});
	});

	$btnSort.on('click', function(){
		if (!$(this).hasClass('is-curr')) {
			$(this).addClass('is-curr');
			$(this).siblings().removeClass('is-curr');
		}
	});

	if ($('body').hasClass('index')) {
	}

	if ($('body').hasClass('join') || $('body').hasClass('mobile')) {
		$('#join-form').validate({
			messages: {
				name: "請輸入作者姓名",
				phoneNumber: {
					required  : "請輸入聯絡電話",
					minlength : "聯絡電話格是錯誤",
					maxlength : "聯絡電話格是錯誤"
				},
				theme: {
					required  : "請輸入影片主題名稱",
					maxlength : "主題超過20字"
				},
				videoUrl: {
					required : "請貼上Youtube影片連結",
					url      : "請輸入正確的網址格式"
				},
				concept: {
					required  : "請輸入創意概念說明",
					maxlength : "創意概念超過200字"
				}
			}
		});
	}

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