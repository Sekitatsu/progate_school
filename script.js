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
    // header aをクリックすると、href適用
     var href= $(this).attr("href");
     // 移動先を取得(offsetはdocument（左上）から、jQueryオブジェクトで指定した要素の相対位置（上）を取得)
    // これはhrefのオブジェクトが頭にくることを示している？
    var position = $(href).offset().top;
    // スムーススクロール $('要素名').animate({動かすプロパティ:目的地店の数値},{duration:速度,easing:アニメーションの動き})
    // ブラウザの上端を（href付き）header aに合わせる（scrollTopの位置をpositionへ）
    $('body,html').animate({scrollTop:position}, speed);
    // clickイベントを実行した後にリンク先に移動してしまうことを防ぐ
    return false;
    });
  });
});


