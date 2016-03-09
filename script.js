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
	
    $(function(){
   　// header aをクリックした場合に処理
    $('header a').click(function() {
    // スクロールの速度
     var speed = 400; // ミリ秒
    // header aをクリックすると、href要素を取得する（例えば、#languagesなど）
     var href= $(this).attr('href');
    // #languagesが上からどのくらいの距離にあるかを数値で表示
    var position = $(href).offset().top;
    //$('要素名').animate({動かすプロパティ:目的地店の数値},{duration:速度,easing:アニメーションの動き})
    // ブラウザの上端をを＃languagesの上からの距離に移動する
    $('body,html').animate({scrollTop:position}, speed);
    // clickイベントを実行した後にリンク先に移動してしまうことを防ぐ
    return false;
    });
  });
  
    $('.languages-box').hover(
    	function(){
    	$(this).find('.text-contents').addClass('text-active');
    },
    	function(){
    	$(this).find('.text-contents').removeClass('text-active');
  });
  
    
    $('.column-box img').hover(function(){
      $(this).css('zoom','1.5');
    },function(){

  });
  
  
  
  
});


