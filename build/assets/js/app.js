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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcclxuXHQvL9Ch0LrRgNC40L/RgtGLINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0LrQvtGC0L7RgNGL0LUg0YHQutGA0YvQstCw0Y7RgtGB0Y8g0LjQu9C4INC/0L7Rj9Cy0LvRj9GO0YLRgdGPINC/0YDQuCDQutC70LjQutC1XHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgY2xvc2VCdG4gPSAkKCcuY2xvc2VfX2xpbmsnKSxcclxuXHRcdFx0XHRtbnVCdG4gPSAkKCcubW51X19mb3ItbW9iaWxlJyksXHJcblx0XHRcdFx0Y2xvc2VNbnUgPSAkKCcuY2xvc2VfX2J0bicpLFxyXG5cdFx0XHRcdGJsb2dNbnUgPSAkKCcuc2VhcmNoX19tbnUtbGluaycpLFxyXG5cdFx0XHRcdHVzZXIgPSAkKCcuYWNjb3VudF9fdXNlci1saW5rJyksXHJcblx0XHRcdFx0dXNlck1udSA9IHVzZXIuY2xvc2VzdCgnLmluZm9fX3RvcC1pdGVtJyk7XHJcblxyXG5cdFx0Y2xvc2VNbnUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdCQoJy5tbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdG1udUJ0bi5mYWRlSW4oKTtcclxuXHRcdH0pO1xyXG5cdFx0bW51QnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0JCgnLm1udScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JHRoaXMuZmFkZU91dCgxMDApO1xyXG5cdFx0fSlcclxuXHRcdHRvZ2dsZUFjdGl2ZSh1c2VyLCB1c2VyTW51KTtcclxuXHRcdHRvZ2dsZUFjdGl2ZShibG9nTW51LCAkKCcuYmxvZ19fbWFpbi1yaWdodCcpLCBibG9nTW51KTtcclxuXHRcdHRvZ2dsZUFjdGl2ZShjbG9zZUJ0biwgJCgnLmhlYWRlcicpKTtcclxuXHJcblx0XHRmdW5jdGlvbiB0b2dnbGVBY3RpdmUoZWxlbSwgYmxvY2ssIGJsb2NrMil7XHJcblx0XHRcdGVsZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZihibG9jayl7XHJcblx0XHRcdFx0XHRibG9jay50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGJsb2NrMil7XHJcblx0XHRcdFx0XHRibG9jazIudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KCkpO1xyXG5cclxuXHQvL9GC0LDQsdGLXHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgdGFiRWxlbSA9ICQoJy5zZWFyY2hfX2Zvcm0tbGluaycpLFxyXG5cdFx0XHRcdG1vbnRoRWxlbSA9ICQoJy5zZWFyY2hfX2lubmVyLWxpbmsnKTtcclxuXHJcblx0XHRtb250aEVsZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRpdGVtID0gJHRoaXMuY2xvc2VzdCgnLnNlYXJjaF9faW5uZXItaXRlbScpO1xyXG5cclxuXHRcdFx0aXRlbS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0LnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGFiRWxlbS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdGl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcuc2VhcmNoX19mb3JtLWl0ZW0nKTtcclxuXHJcblx0XHRcdGlmKCFpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcblx0XHRcdFx0aXRlbS5hZGRDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0XHQuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0oKSk7XHJcblxyXG5cdC8v0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC70LDQudC00LXRgNCwXHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgc2NoZWR1bGUgPSAkKCcuc2NoZWR1bGVfX2xpc3QnKTtcclxuXHRcdHZhciBzY3JlZW5XID0gc2NyZWVuLndpZHRoO1xyXG5cclxuXHRcdGlmKHNjcmVlblcgPiA3Njgpe1xyXG5cdFx0XHRzY2hlZHVsZS5zbGljayh7XHJcblx0XHRcdCAgc2xpZGVzVG9TaG93OiA0LFxyXG5cdFx0XHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHQgIHByZXZBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHQgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctcmlnaHQnKSxcclxuXHRcdFx0ICBhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0ICBhdXRvcGxheVNwZWVkOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fWVsc2UgaWYoc2NyZWVuVyA8PSA3NjggJiYgc2NyZWVuVyA+IDQ3MCl7XHJcblx0XHRcdHNjaGVkdWxlLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIHByZXZBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHQgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctcmlnaHQnKSxcclxuXHRcdFx0ICBhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0ICBhdXRvcGxheVNwZWVkOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fWVsc2UgaWYgKHNjcmVlblcgPD0gNDcwKXtcclxuXHRcdFx0c2NoZWR1bGUuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZihzY3JlZW5XIDw9IDYwNyl7XHJcblx0XHRcdCQoJy50cmFpbmluZ3NfX2xpc3QnKS5zbGljayh7XHJcblx0XHRcdCAgc2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgZG90czogdHJ1ZSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KCkpO1xyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHNjcmVlblcgPSBzY3JlZW4ud2lkdGg7XHJcblx0XHRpZihzY3JlZW5XIDw9IDQ4MCl7XHJcblx0XHRcdHZhciBzaG9wTGlzdCA9ICQoJy5zaG9wX19saXN0JyksXHJcblx0XHRcdFx0XHRmYWN0cyA9ICQoJy5tYXBfX2xpc3QnKTtcclxuXHJcblx0XHRcdGFkZFNsaWRlcihmYWN0cyk7XHJcblx0XHRcdGFkZFNsaWRlcihzaG9wTGlzdCk7XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBhZGRTbGlkZXIoaXRlbSl7XHJcblx0XHRcdGl0ZW0uc2xpY2soe1xyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdFx0ICBzcGVlZDogNTAwLFxyXG5cdFx0XHQgIGZhZGU6IHRydWUsXHJcblx0XHRcdCAgY3NzRWFzZTogJ2xpbmVhcidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSgpKTtcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
