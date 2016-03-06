$(function(){
	$('.btn-top-white').css('border-radius','5px');
	$('.btn-top-white').click(function(){
		var $answer = $('.answer')
		if ($answer.hasClass('open')){
			$answer.removeClass('open');
			$answer.fadeOut();
			$(this).text('もっと詳しく');
		} else {
			$answer.addClass('open');
			$answer.fadeIn();
			$(this).text('閉じる');
		};
	});
});