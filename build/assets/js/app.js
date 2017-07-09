$(document).on('ready', function(){

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
		toggleActive(closeBtn, $('.header'), $('.main__info-top'));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcclxuXHJcblx0Ly/QodC60YDQuNC/0YLRiyDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINC60L7RgtC+0YDRi9C1INGB0LrRgNGL0LLQsNGO0YLRgdGPINC40LvQuCDQv9C+0Y/QstC70Y/RjtGC0YHRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGNsb3NlQnRuID0gJCgnLmNsb3NlX19saW5rJyksXHJcblx0XHRcdFx0bW51QnRuID0gJCgnLm1udV9fZm9yLW1vYmlsZScpLFxyXG5cdFx0XHRcdGNsb3NlTW51ID0gJCgnLmNsb3NlX19idG4nKSxcclxuXHRcdFx0XHRibG9nTW51ID0gJCgnLnNlYXJjaF9fbW51LWxpbmsnKSxcclxuXHRcdFx0XHR1c2VyID0gJCgnLmFjY291bnRfX3VzZXItbGluaycpLFxyXG5cdFx0XHRcdHVzZXJNbnUgPSB1c2VyLmNsb3Nlc3QoJy5pbmZvX190b3AtaXRlbScpO1xyXG5cclxuXHRcdGNsb3NlTW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQkKCcubW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRtbnVCdG4uZmFkZUluKCk7XHJcblx0XHR9KTtcclxuXHRcdG1udUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdCQoJy5tbnUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCR0aGlzLmZhZGVPdXQoMTAwKTtcclxuXHRcdH0pXHJcblx0XHR0b2dnbGVBY3RpdmUodXNlciwgdXNlck1udSk7XHJcblx0XHR0b2dnbGVBY3RpdmUoYmxvZ01udSwgJCgnLmJsb2dfX21haW4tcmlnaHQnKSwgYmxvZ01udSk7XHJcblx0XHR0b2dnbGVBY3RpdmUoY2xvc2VCdG4sICQoJy5oZWFkZXInKSwgJCgnLm1haW5fX2luZm8tdG9wJykpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShlbGVtLCBibG9jaywgYmxvY2syKXtcclxuXHRcdFx0ZWxlbS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoYmxvY2spe1xyXG5cdFx0XHRcdFx0YmxvY2sudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihibG9jazIpe1xyXG5cdFx0XHRcdFx0YmxvY2syLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSgpKTtcclxuXHJcblx0Ly/RgtCw0LHRi1xyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHRhYkVsZW0gPSAkKCcuc2VhcmNoX19mb3JtLWxpbmsnKSxcclxuXHRcdFx0XHRtb250aEVsZW0gPSAkKCcuc2VhcmNoX19pbm5lci1saW5rJyk7XHJcblxyXG5cdFx0bW9udGhFbGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0aXRlbSA9ICR0aGlzLmNsb3Nlc3QoJy5zZWFyY2hfX2lubmVyLWl0ZW0nKTtcclxuXHJcblx0XHRcdGl0ZW0udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdC5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRhYkVsZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRpdGVtID0gJHRoaXMuY2xvc2VzdCgnLnNlYXJjaF9fZm9ybS1pdGVtJyk7XHJcblxyXG5cdFx0XHRpZighaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG5cdFx0XHRcdGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0LnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcdFx0XHJcblx0fSgpKTtcclxuXHJcblx0Ly/Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0LvQsNC50LTQtdGA0LBcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzY2hlZHVsZSA9ICQoJy5zY2hlZHVsZV9fbGlzdCcpO1xyXG5cdFx0dmFyIHNjcmVlblcgPSBzY3JlZW4ud2lkdGg7XHJcblxyXG5cdFx0aWYoc2NyZWVuVyA+IDc2OCl7XHJcblx0XHRcdHNjaGVkdWxlLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9ZWxzZSBpZihzY3JlZW5XIDw9IDc2OCAmJiBzY3JlZW5XID4gNDcwKXtcclxuXHRcdFx0c2NoZWR1bGUuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogMyxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9ZWxzZSBpZiAoc2NyZWVuVyA8PSA0NzApe1xyXG5cdFx0XHRzY2hlZHVsZS5zbGljayh7XHJcblx0XHRcdCAgc2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgZG90czogdHJ1ZSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmKHNjcmVlblcgPD0gNjA3KXtcclxuXHRcdFx0JCgnLnRyYWluaW5nc19fbGlzdCcpLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIHByZXZBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHQgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctcmlnaHQnKSxcclxuXHRcdFx0ICBhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0ICBhdXRvcGxheVNwZWVkOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0oKSk7XHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgc2NyZWVuVyA9IHNjcmVlbi53aWR0aDtcclxuXHRcdGlmKHNjcmVlblcgPD0gNDgwKXtcclxuXHRcdFx0dmFyIHNob3BMaXN0ID0gJCgnLnNob3BfX2xpc3QnKSxcclxuXHRcdFx0XHRcdGZhY3RzID0gJCgnLm1hcF9fbGlzdCcpO1xyXG5cclxuXHRcdFx0YWRkU2xpZGVyKGZhY3RzKTtcdFx0XHJcblx0XHRcdGFkZFNsaWRlcihzaG9wTGlzdCk7XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBhZGRTbGlkZXIoaXRlbSl7XHJcblx0XHRcdGl0ZW0uc2xpY2soe1xyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdFx0ICBzcGVlZDogNTAwLFxyXG5cdFx0XHQgIGZhZGU6IHRydWUsXHJcblx0XHRcdCAgY3NzRWFzZTogJ2xpbmVhcidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSgpKTtcclxufSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
