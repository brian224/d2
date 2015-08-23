$(window).load(function(){
	var $vedioList    = $('.vedio-list'),
		$btnClose     = $('.btn-close'),
		$btnSort      = $('.btn-sort'),
		$lightboxWrap = $('.lightbox-Wrap'),
		_url          = window.location.href,
		_id           = _url.split('#')[1];

	if (_id !== undefined) {
		var $target = $('.vedio-link[data-id="' + _id + '"]');

		lightBoxOn(_id, $target.next().find('.vedio-title').text(), $target.next().find('.author').text());
	}

	$vedioList.find('.vedio-link').each(function(){
		var $this   = $(this),
			$img    = $this.find('img'),
			_title  = $this.next().find('.vedio-title').text(),
			_author = $this.next().find('.author').text();

		$img.attr('src', 'http://i.ytimg.com/vi/' + $this.data('id') + '/0.jpg');
		$img.attr('alt', $this.next().find('.vedio-title').text());

		$this.on('click', function(){
			lightBoxOn($this.data('id'), _title, _author);
			window.location.href = _url.split('#')[0] + '#' + $this.data('id');
		});
	});

	$btnSort.on('click', function(){
		if (!$(this).hasClass('is-curr')) {
			$(this).addClass('is-curr');
			$(this).siblings().removeClass('is-curr');
		}
	});

	$btnClose.on('click', function(){
		$lightboxWrap.removeClass('is-show');
		window.history.pushState({}, '', _url.split('#')[0]);
	});

	$lightboxWrap.off('click').on('click', function(e){
		e.stopPropagation();
		if (!$(e.target).is('.lightbox, .lightbox *')) {
			$lightboxWrap.removeClass('is-show');
			window.history.pushState({}, '', _url.split('#')[0]);
		}
	});

	function lightBoxOn(id, title, author) {
		var _oldID = $('.vedio-frame').attr('src').split('http://www.youtube.com/embed/')[1];

		if (_oldID !== id) {
			$lightboxWrap.find('.vedio-title').text(title);
			$lightboxWrap.find('.author').text(author);
			$('.vedio-frame').attr('src', 'http://www.youtube.com/embed/' + id);
		}
		$lightboxWrap.addClass('is-show');
	}
});