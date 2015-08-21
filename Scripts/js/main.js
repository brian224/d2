$(window).load(function(){
	var $vedioList = $('.vedio-list');

	$vedioList.find('.vedio-link').each(function(){
		var $this = $(this),
			$img  = $this.find('img');

		$img.attr('src', 'http://i.ytimg.com/vi/' + $this.data('id') + '/0.jpg');
		$img.attr('alt', $this.next().find('.vedio-title').text());
	});
});