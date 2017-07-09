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
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCl7XHJcblx0Ly8gY29tbW9uIGVsZW1lbnRzXG5cclxuXHQvLyBQcmV2ZW50ICMgYmVoYXZpb3JcclxuXHQkKCdbaHJlZj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8vIFNtb3RoIHNjcm9sbFxyXG5cdCQoJ2FbaHJlZl49XCIjc2VjdGlvblwiXScpLmNsaWNrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChlbCkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBTRVQgQUNUSVZFIENMQVNTIElOIEhFQURFUlxyXG4gIC8vICogY291bGQgYmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uIGFuZCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAvLyB1c2VyIC5hY3RpdmUgZm9yIGxpIGluc3RlYWRcclxuICAkKCcubW51X19saXN0IGxpJykuZWFjaChmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBpZiAoJCh2YWwpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCkpIHtcclxuICAgICAgJCh2YWwpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodmFsKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cdC8v0KHQutGA0LjQv9GC0Ysg0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiDQutC+0YLQvtGA0YvQtSDRgdC60YDRi9Cy0LDRjtGC0YHRjyDQuNC70Lgg0L/QvtGP0LLQu9GP0Y7RgtGB0Y8g0L/RgNC4INC60LvQuNC60LVcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBjbG9zZUJ0biA9ICQoJy5jbG9zZV9fbGluaycpLFxyXG5cdFx0XHRcdG1udUJ0biA9ICQoJy5tbnVfX2Zvci1tb2JpbGUnKSxcclxuXHRcdFx0XHRjbG9zZU1udSA9ICQoJy5jbG9zZV9fYnRuJyksXHJcblx0XHRcdFx0YmxvZ01udSA9ICQoJy5zZWFyY2hfX21udS1saW5rJyksXHJcblx0XHRcdFx0dXNlciA9ICQoJy5hY2NvdW50X191c2VyLWxpbmsnKSxcclxuXHRcdFx0XHR1c2VyTW51ID0gdXNlci5jbG9zZXN0KCcuaW5mb19fdG9wLWl0ZW0nKTtcclxuXHJcblx0XHRjbG9zZU1udS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0JCgnLm1udScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0bW51QnRuLmZhZGVJbigpO1xyXG5cdFx0fSk7XHJcblx0XHRtbnVCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHQkKCcubW51JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkdGhpcy5mYWRlT3V0KDEwMCk7XHJcblx0XHR9KVxyXG5cdFx0dG9nZ2xlQWN0aXZlKHVzZXIsIHVzZXJNbnUpO1xyXG5cdFx0dG9nZ2xlQWN0aXZlKGJsb2dNbnUsICQoJy5ibG9nX19tYWluLXJpZ2h0JyksIGJsb2dNbnUpO1xyXG5cdFx0dG9nZ2xlQWN0aXZlKGNsb3NlQnRuLCAkKCcuaGVhZGVyJykpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShlbGVtLCBibG9jaywgYmxvY2syKXtcclxuXHRcdFx0ZWxlbS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKGJsb2NrKXtcclxuXHRcdFx0XHRcdGJsb2NrLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoYmxvY2syKXtcclxuXHRcdFx0XHRcdGJsb2NrMi50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0oKSk7XHJcblxyXG5cdC8v0YLQsNCx0YtcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciB0YWJFbGVtID0gJCgnLnNlYXJjaF9fZm9ybS1saW5rJyksXHJcblx0XHRcdFx0bW9udGhFbGVtID0gJCgnLnNlYXJjaF9faW5uZXItbGluaycpO1xyXG5cclxuXHRcdG1vbnRoRWxlbS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdGl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcuc2VhcmNoX19pbm5lci1pdGVtJyk7XHJcblxyXG5cdFx0XHRpdGVtLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0YWJFbGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0aXRlbSA9ICR0aGlzLmNsb3Nlc3QoJy5zZWFyY2hfX2Zvcm0taXRlbScpO1xyXG5cclxuXHRcdFx0aWYoIWl0ZW0uaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcclxuXHRcdFx0XHRpdGVtLmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSgpKTtcclxuXHJcblx0Ly/Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0LvQsNC50LTQtdGA0LBcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzY2hlZHVsZSA9ICQoJy5zY2hlZHVsZV9fbGlzdCcpO1xyXG5cdFx0dmFyIHNjcmVlblcgPSBzY3JlZW4ud2lkdGg7XHJcblxyXG5cdFx0aWYoc2NyZWVuVyA+IDc2OCl7XHJcblx0XHRcdHNjaGVkdWxlLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9ZWxzZSBpZihzY3JlZW5XIDw9IDc2OCAmJiBzY3JlZW5XID4gNDcwKXtcclxuXHRcdFx0c2NoZWR1bGUuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogMyxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9ZWxzZSBpZiAoc2NyZWVuVyA8PSA0NzApe1xyXG5cdFx0XHRzY2hlZHVsZS5zbGljayh7XHJcblx0XHRcdCAgc2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgZG90czogdHJ1ZSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmKHNjcmVlblcgPD0gNjA3KXtcclxuXHRcdFx0JCgnLnRyYWluaW5nc19fbGlzdCcpLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIHByZXZBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHQgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctcmlnaHQnKSxcclxuXHRcdFx0ICBhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0ICBhdXRvcGxheVNwZWVkOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0oKSk7XHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgc2NyZWVuVyA9IHNjcmVlbi53aWR0aDtcclxuXHRcdGlmKHNjcmVlblcgPD0gNDgwKXtcclxuXHRcdFx0dmFyIHNob3BMaXN0ID0gJCgnLnNob3BfX2xpc3QnKSxcclxuXHRcdFx0XHRcdGZhY3RzID0gJCgnLm1hcF9fbGlzdCcpO1xyXG5cclxuXHRcdFx0YWRkU2xpZGVyKGZhY3RzKTtcclxuXHRcdFx0YWRkU2xpZGVyKHNob3BMaXN0KTtcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIGFkZFNsaWRlcihpdGVtKXtcclxuXHRcdFx0aXRlbS5zbGljayh7XHJcblx0XHRcdCAgZG90czogdHJ1ZSxcclxuXHRcdFx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHQgIGluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHQgIHNwZWVkOiA1MDAsXHJcblx0XHRcdCAgZmFkZTogdHJ1ZSxcclxuXHRcdFx0ICBjc3NFYXNlOiAnbGluZWFyJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KCkpO1xyXG59KVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
