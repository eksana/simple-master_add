$(document).ready(function(){
	$('.fa-bars').click(function(){
		//$('.home-nav-sm').css('display','block');
		$('.home-nav-sm').slideToggle();

	});
	/*---------------end document ready-----------*/

//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	$("a.scroll1").click(function() {
		$.scrollTo($(".div1"), 800, {
			offset: -90
		});
	});
	$("a.scroll2").click(function() {
		$.scrollTo($(".div2"), 800, {
			offset: -90
		});
	});
	$("a.scroll3").click(function() {
		$.scrollTo($(".div3"), 800, {
			offset: -90
		});

		$("a.scroll4").click(function() {
		$.scrollTo($(".div4"), 800, {
			offset: -90
		});
	});
		$("a.scroll5").click(function() {
		$.scrollTo($(".div5"), 800, {
			offset: -90
		});
	});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//owl testimonial
	$(document).ready(function() {
		$("#owl-demo1").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      loop : true,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      //items : 1 ,
      //itemsDesktop : false
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//topUp
	
	$(document).ready(function() {
var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    	/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    	if ($(this).scrollTop() > top_show) $('#top').fadeIn();
    	else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    	/* Плавная прокрутка наверх */
    	$('body, html').animate({
    		scrollTop: 0
    	}, delay);
    });
});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".button").click(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#open_form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				//$.fancybox.close();
				$('#open_form').close();
			}, 1000);
		});
		return false;
	});	

});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 6000 
      

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});

//mixitUp

$(document).ready(function() {
	$('#Container').mixItUp();
});

$(document).ready(function() {
	$('.filter').click(function(){
		$('.filter').removeClass('filter-active');
		$(this).addClass('filter-active');

	});
//form fadeIn Out
	$('.link-form').click(function(event){
		event.preventDefault();
		$('.form_header').fadeIn();

	});
	$('.fa-times').click(function(){
		$('.form_header').fadeOut();
	});
$('#open_form').validate();


  });  

//animation on scroll
/*$(window).scroll(function(){
	$('.action_animate .animated').each(function(){
		var imgPos=$(this).offset().top;
		var topOfwindow=$(window).scrollTop();
		if(imgPos < topOfwindow + 200){
			//$(this).addClass("fadeOut",'fadeInLeft');
		$(this).animated ('fadeInLeft', 'fadeOutLeft');
	}


});*/

//});

$(window).load(function(){
	
		$('.action_animate ').animated("fadeInLeft");
	});


//});

////});