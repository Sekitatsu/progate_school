$(function(){
	$('.shinki').css('border-radius','5px');
	$('.shinki').click(function(){
		var $answer = $('.answer')
		if ($answer.hasClass('open')){
			$answer.removeClass('open');
			$answer.slideUp();
			$(this).text('もっと詳しく');
		} else {
			$answer.addClass('open');
			$answer.slideDown();
			$(this).find('.shinki').slideDown();
			$(this).text('閉じる');
		};
	});
});