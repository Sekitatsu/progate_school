$(function(){
	//--- 「もっと詳しく」ボタンはここから ---
	$('.button-top-white').css('border-radius','5px');
	$('.button-top-white').click(function() {
		var $answer = $('.answer')
		if ($answer.hasClass('open')) {
			$answer.removeClass('open');
			$answer.fadeOut();
			$(this).text('もっと詳しく');
		} else {
			$answer.addClass('open');
			$answer.fadeIn();
			$(this).text('閉じる');
		};
	});
	
	//--- ヘッダーのスクロールナビはここから ---

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
 	
 	//--- 学習言語ホバー機能はここから ---
    $('.languages-box').hover(
    	function() {
    		$(this).find('.text-contents').fadeIn('text-active').css('transition','all 0.2s');
    },
    	function() {
    		$(this).find('.text-contents').fadeOut('text-active');
  });

    // --- コラム画像ホバー機能 ---
    $('.caption-defaultWrap').hover(
    	function() {
    		$(this).find('.inner-black').fadeIn();
    		$(this).css('background-size','120%').css('transition','all 0.2s');
    	},
    	function() {
    		$(this).find('.inner-black').fadeOut();
    		$(this).css('background-size','100%');
    	}
    );

	// modal部分はここから 
	$('.button-pricing').click(function(){
		var id=$(this).attr('value-option');
		var h2_text=$("#"+id).text();
		$('.modal-form').find('h2').text('【' + h2_text + '】に申し込む')
		$('#login-modal').fadeIn();
		$('.select_pulldown').val(id);
	});
	$('.close-modal').click(function(){
		$('#login-modal').fadeOut();
	});

	// 画像の絞り込みはここから

	$('.filter-item').click(function(){
		var filter=$(this).attr('id');
		$('.filter-item').removeClass('filter-item-active');
		$(this).addClass('filter-item-active');
	 	$('.column-box').hide();
	 	if(filter == 'column') {
	 	  $('.column').show();
		} else if(filter == 'tip') {
			$('.tip').show();
		} else {
			$('.column-box').show();
		}
	});

	// フォーム機能はここから

	$('.button-contact').click(function(){
		$('.error_text').text('');
		var flag = 0;
		if($('form input[name="email"]').val() == ''){
			$('form input[name="email"]').prev().text('入力してください');
		} else {
			flag += 1;
		}

		if($('form input[name="subject"]').val() == ''){
			$('form input[name="subject"]').prev().text('入力してください');
		} else {
			flag += 1;
		}

		if($('form textarea[name="message"]').val() == ''){
			$('form textarea[name="message"]').prev().text('入力してください');
		} else {
			flag += 1;
		}
	// }
		if (flag == 3) {
			$('.contact-form').html('<h4>お問い合わせありがとうございます</h4>');
		}
		return false;
		
	})
});








