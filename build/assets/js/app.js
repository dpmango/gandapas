$(document).on('ready', function(){
	// common elements

	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Smoth scroll
	$('a[href^="#section"]').click( function() {
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

	// SET ACTIVE CLASS IN HEADER
  // * could be removed in production and server side rendering
  // user .active for li instead
  $('.mnu__list li').each(function (i, val) {
    if ($(val).find('a').attr('href') == window.location.pathname.split('/').pop()) {
      $(val).addClass('active');
    } else {
      $(val).removeClass('active');
    }
  });

	//Скрипты для элементов которые скрываются или появляются при клике
	(function(){
		var closeBtn = $('.close__link'),
				mnuBtn = $('.mnu__for-mobile'),
				closeMnu = $('.close__btn'),
				blogMnu = $('.search__mnu-link'),
				user = $('.account__user-link'),
				userMnu = user.closest('.info__top-item');

		closeMnu.on('click', function(e){
			e.preventDefault();

			$('.mnu').removeClass('active');
			mnuBtn.fadeIn();
		});
		mnuBtn.on('click', function(e){
			e.preventDefault();

			var $this = $(this);

			$('.mnu').addClass('active');
			$this.fadeOut(100);
		})
		toggleActive(user, userMnu);
		toggleActive(blogMnu, $('.blog__main-right'), blogMnu);
		toggleActive(closeBtn, $('.header'));

		function toggleActive(elem, block, block2){
			elem.on('click', function(e){
				e.preventDefault();

				if(block){
					block.toggleClass('active');
				}
				if(block2){
					block2.toggleClass('active');
				}
			})
		}
	}());

	//табы
	(function(){
		var tabElem = $('.search__form-link'),
				monthElem = $('.search__inner-link');

		monthElem.on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					item = $this.closest('.search__inner-item');

			item.toggleClass('active')
			.siblings().removeClass('active');
		});

		tabElem.on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					item = $this.closest('.search__form-item');

			if(!item.hasClass('active')){
				item.addClass('active')
				.siblings().removeClass('active');
			}else{
				item.removeClass('active');
			}
		})
	}());

	//Подключение слайдера
	(function(){
		var schedule = $('.schedule__list');
		var screenW = screen.width;

		if(screenW > 768){
			schedule.slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  prevArrow: $('.slider__arrow-left'),
			  nextArrow: $('.slider__arrow-right'),
			  autoplay: true,
			  autoplaySpeed: 2000
			});
		}else if(screenW <= 768 && screenW > 470){
			schedule.slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  arrows: false,
			  dots: true,
			  prevArrow: $('.slider__arrow-left'),
			  nextArrow: $('.slider__arrow-right'),
			  autoplay: true,
			  autoplaySpeed: 2000
			});
		}else if (screenW <= 470){
			schedule.slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  dots: true,
			  prevArrow: $('.slider__arrow-left'),
			  nextArrow: $('.slider__arrow-right'),
			  autoplay: true,
			  autoplaySpeed: 2000
			});
		}
		if(screenW <= 607){
			$('.trainings__list').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  dots: true,
			  prevArrow: $('.slider__arrow-left'),
			  nextArrow: $('.slider__arrow-right'),
			  autoplay: true,
			  autoplaySpeed: 2000
			});
		}
	}());
	(function(){
		var screenW = screen.width;
		if(screenW <= 480){
			var shopList = $('.shop__list'),
					facts = $('.map__list');

			addSlider(facts);
			addSlider(shopList);
		}
		function addSlider(item){
			item.slick({
			  dots: true,
			  arrows: false,
			  infinite: true,
			  speed: 500,
			  fade: true,
			  cssEase: 'linear'
			});
		}
	}());


    strLength('.training__item-title' , 55);

    function strLength(str, length){
        $(str).each(function(){
            var review_full = jQuery(this).html();
            var review = review_full;
            if( review.length > length )
            {
                review = review.substring(0, length);
                jQuery(this).text( review + '...' );
            }

        });
    }


    (function(){
        if(window.innerWidth <= 480) {
            $('.trainings__list').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                //autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
            });
		}

    }());





});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCl7XHJcblx0Ly8gY29tbW9uIGVsZW1lbnRzXHJcblxyXG5cdC8vIFByZXZlbnQgIyBiZWhhdmlvclxyXG5cdCQoJ1tocmVmPVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gU21vdGggc2Nyb2xsXHJcblx0JCgnYVtocmVmXj1cIiNzZWN0aW9uXCJdJykuY2xpY2soIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdC8vIFNFVCBBQ1RJVkUgQ0xBU1MgSU4gSEVBREVSXHJcbiAgLy8gKiBjb3VsZCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24gYW5kIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gIC8vIHVzZXIgLmFjdGl2ZSBmb3IgbGkgaW5zdGVhZFxyXG4gICQoJy5tbnVfX2xpc3QgbGknKS5lYWNoKGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGlmICgkKHZhbCkuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKSkge1xyXG4gICAgICAkKHZhbCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh2YWwpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblx0Ly/QodC60YDQuNC/0YLRiyDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINC60L7RgtC+0YDRi9C1INGB0LrRgNGL0LLQsNGO0YLRgdGPINC40LvQuCDQv9C+0Y/QstC70Y/RjtGC0YHRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGNsb3NlQnRuID0gJCgnLmNsb3NlX19saW5rJyksXHJcblx0XHRcdFx0bW51QnRuID0gJCgnLm1udV9fZm9yLW1vYmlsZScpLFxyXG5cdFx0XHRcdGNsb3NlTW51ID0gJCgnLmNsb3NlX19idG4nKSxcclxuXHRcdFx0XHRibG9nTW51ID0gJCgnLnNlYXJjaF9fbW51LWxpbmsnKSxcclxuXHRcdFx0XHR1c2VyID0gJCgnLmFjY291bnRfX3VzZXItbGluaycpLFxyXG5cdFx0XHRcdHVzZXJNbnUgPSB1c2VyLmNsb3Nlc3QoJy5pbmZvX190b3AtaXRlbScpO1xyXG5cclxuXHRcdGNsb3NlTW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQkKCcubW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRtbnVCdG4uZmFkZUluKCk7XHJcblx0XHR9KTtcclxuXHRcdG1udUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdCQoJy5tbnUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCR0aGlzLmZhZGVPdXQoMTAwKTtcclxuXHRcdH0pXHJcblx0XHR0b2dnbGVBY3RpdmUodXNlciwgdXNlck1udSk7XHJcblx0XHR0b2dnbGVBY3RpdmUoYmxvZ01udSwgJCgnLmJsb2dfX21haW4tcmlnaHQnKSwgYmxvZ01udSk7XHJcblx0XHR0b2dnbGVBY3RpdmUoY2xvc2VCdG4sICQoJy5oZWFkZXInKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsZW0sIGJsb2NrLCBibG9jazIpe1xyXG5cdFx0XHRlbGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYoYmxvY2spe1xyXG5cdFx0XHRcdFx0YmxvY2sudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihibG9jazIpe1xyXG5cdFx0XHRcdFx0YmxvY2syLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSgpKTtcclxuXHJcblx0Ly/RgtCw0LHRi1xyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHRhYkVsZW0gPSAkKCcuc2VhcmNoX19mb3JtLWxpbmsnKSxcclxuXHRcdFx0XHRtb250aEVsZW0gPSAkKCcuc2VhcmNoX19pbm5lci1saW5rJyk7XHJcblxyXG5cdFx0bW9udGhFbGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0aXRlbSA9ICR0aGlzLmNsb3Nlc3QoJy5zZWFyY2hfX2lubmVyLWl0ZW0nKTtcclxuXHJcblx0XHRcdGl0ZW0udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdC5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRhYkVsZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRpdGVtID0gJHRoaXMuY2xvc2VzdCgnLnNlYXJjaF9fZm9ybS1pdGVtJyk7XHJcblxyXG5cdFx0XHRpZighaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG5cdFx0XHRcdGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0LnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KCkpO1xyXG5cclxuXHQvL9Cf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHNjaGVkdWxlID0gJCgnLnNjaGVkdWxlX19saXN0Jyk7XHJcblx0XHR2YXIgc2NyZWVuVyA9IHNjcmVlbi53aWR0aDtcclxuXHJcblx0XHRpZihzY3JlZW5XID4gNzY4KXtcclxuXHRcdFx0c2NoZWR1bGUuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNlIGlmKHNjcmVlblcgPD0gNzY4ICYmIHNjcmVlblcgPiA0NzApe1xyXG5cdFx0XHRzY2hlZHVsZS5zbGljayh7XHJcblx0XHRcdCAgc2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgZG90czogdHJ1ZSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNlIGlmIChzY3JlZW5XIDw9IDQ3MCl7XHJcblx0XHRcdHNjaGVkdWxlLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIHByZXZBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHQgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctcmlnaHQnKSxcclxuXHRcdFx0ICBhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0ICBhdXRvcGxheVNwZWVkOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYoc2NyZWVuVyA8PSA2MDcpe1xyXG5cdFx0XHQkKCcudHJhaW5pbmdzX19saXN0Jykuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSgpKTtcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzY3JlZW5XID0gc2NyZWVuLndpZHRoO1xyXG5cdFx0aWYoc2NyZWVuVyA8PSA0ODApe1xyXG5cdFx0XHR2YXIgc2hvcExpc3QgPSAkKCcuc2hvcF9fbGlzdCcpLFxyXG5cdFx0XHRcdFx0ZmFjdHMgPSAkKCcubWFwX19saXN0Jyk7XHJcblxyXG5cdFx0XHRhZGRTbGlkZXIoZmFjdHMpO1xyXG5cdFx0XHRhZGRTbGlkZXIoc2hvcExpc3QpO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gYWRkU2xpZGVyKGl0ZW0pe1xyXG5cdFx0XHRpdGVtLnNsaWNrKHtcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgaW5maW5pdGU6IHRydWUsXHJcblx0XHRcdCAgc3BlZWQ6IDUwMCxcclxuXHRcdFx0ICBmYWRlOiB0cnVlLFxyXG5cdFx0XHQgIGNzc0Vhc2U6ICdsaW5lYXInXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0oKSk7XHJcblxyXG5cclxuICAgIHN0ckxlbmd0aCgnLnRyYWluaW5nX19pdGVtLXRpdGxlJyAsIDU1KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdHJMZW5ndGgoc3RyLCBsZW5ndGgpe1xyXG4gICAgICAgICQoc3RyKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciByZXZpZXdfZnVsbCA9IGpRdWVyeSh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICAgIHZhciByZXZpZXcgPSByZXZpZXdfZnVsbDtcclxuICAgICAgICAgICAgaWYoIHJldmlldy5sZW5ndGggPiBsZW5ndGggKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXZpZXcgPSByZXZpZXcuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dCggcmV2aWV3ICsgJy4uLicgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDgwKSB7XHJcbiAgICAgICAgICAgICQoJy50cmFpbmluZ3NfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvL2F1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cdFx0fVxyXG5cclxuICAgIH0oKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
