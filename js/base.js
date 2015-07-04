  $(function(){
    $('#menu').slicknav();
    $('.bxslider').bxSlider();

    console.log(parseInt($('body').css("width")));

	$(window).resize(function () {
		if( parseInt($('body').css("width")) < 910){
			$('body').css('padding-top', parseInt($('.slicknav_menu').css("height")));
		}

		else {
			$('body').css('padding-top', 0);
		}
	});

	$(window).load(function () {
		if( parseInt($('body').css("width")) <= 910){
			$('body').css('padding-top', parseInt($('.slicknav_menu').css("height")));
		}
	});

  });