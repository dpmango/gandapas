// UTILITIES
// set dalay on scroll event
(function($) {
  var uniqueCntr = 0;
  $.fn.scrolled = function (waitTime, fn) {
    if (typeof waitTime === "function") {
        fn = waitTime;
        waitTime = 50;
    }
    var tag = "scrollTimer" + uniqueCntr++;
    this.scroll(function () {
        var self = $(this);
        var timer = self.data(tag);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            self.removeData(tag);
            fn.call(self[0]);
        }, waitTime);
        self.data(tag, timer);
    });
  }
})(jQuery);


// set dalay on resize event
(function($) {
  var uniqueCntr = 0;
  $.fn.resized = function (waitTime, fn) {
    if (typeof waitTime === "function") {
        fn = waitTime;
        waitTime = 50;
    }
    var tag = "scrollTimer" + uniqueCntr++;
    this.resize(function () {
        var self = $(this);
        var timer = self.data(tag);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            self.removeData(tag);
            fn.call(self[0]);
        }, waitTime);
        self.data(tag, timer);
    });
  }
})(jQuery);

// READY FUNCTION

$(document).on('ready', function(){
	// common elements
  const _window = $(window);
  const _document = $(document);

  function isRetinaDisplay() {
    if (window.matchMedia) {
        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
        return (mq && mq.matches || (window.devicePixelRatio > 1));
    }
  }
  // isRetinaDisplay()

  var mobileDevice = isMobile();
  // detect mobile devices
  function isMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true
    } else {
      return false
    }
  }

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
		toggleActive(closeBtn, $('.header'), $('.bg__pic'));

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

			// addSlider(facts);
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


  // HOMEPAGE MOBILE SLDIERS

  // MAP SLIDER
  var _mapSlickMobile = $('.map__list');
  var mapSlickMobileOptions = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 480,
        settings: "unslick"
      }
    ]
  }
  if ( _window.width() < 480 ){
    _mapSlickMobile.slick(mapSlickMobileOptions);
  }


  _window.resized(300, function(e){
    if ( _window.width() > 480 ) {
      if (_mapSlickMobile.hasClass('slick-initialized')) {
        _mapSlickMobile.slick('unslick');
      }
      return
    }
    if (!_mapSlickMobile.hasClass('slick-initialized')) {
      return _mapSlickMobile.slick(mapSlickMobileOptions);
    }
  });

  // HOMEPAGE SHOP SLIDER
  var _videoCoursesSlickMobile = $('.js-slickVideoCourses');
  var _booksSlickMobile = $('.js-slickBooks');
  var _audioSlickMobile = $('.js-slickAudio');

  var homeShopSlickMobileOptions = {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    adaptiveHeight: false,
    responsive: [
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 768,
        settings: "unslick"
      },
    ]
  }

  _videoCoursesSlickMobile.slick(homeShopSlickMobileOptions);
  _booksSlickMobile.slick(homeShopSlickMobileOptions);
  _audioSlickMobile.slick(homeShopSlickMobileOptions);


  _window.resized(300, function(e){
    if ( _window.width() > 768 ) {
      if (_booksSlickMobile.hasClass('slick-initialized')) {
        _booksSlickMobile.slick('unslick');
      }
      if (_videoCoursesSlickMobile.hasClass('slick-initialized')) {
        _videoCoursesSlickMobile.slick('unslick');
      }
      if (_audioSlickMobile.hasClass('slick-initialized')) {
        _audioSlickMobile.slick('unslick');
      }
      return
    }
    if (!_videoCoursesSlickMobile.hasClass('slick-initialized')) {
      _videoCoursesSlickMobile.slick(homeShopSlickMobileOptions);
    }
    if (!_booksSlickMobile.hasClass('slick-initialized')) {
      _booksSlickMobile.slick(homeShopSlickMobileOptions);
    }
    if (!_audioSlickMobile.hasClass('slick-initialized')) {
      _audioSlickMobile.slick(homeShopSlickMobileOptions);
    }
  });




});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBVVElMSVRJRVNcclxuLy8gc2V0IGRhbGF5IG9uIHNjcm9sbCBldmVudFxyXG4oZnVuY3Rpb24oJCkge1xyXG4gIHZhciB1bmlxdWVDbnRyID0gMDtcclxuICAkLmZuLnNjcm9sbGVkID0gZnVuY3Rpb24gKHdhaXRUaW1lLCBmbikge1xyXG4gICAgaWYgKHR5cGVvZiB3YWl0VGltZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgZm4gPSB3YWl0VGltZTtcclxuICAgICAgICB3YWl0VGltZSA9IDUwO1xyXG4gICAgfVxyXG4gICAgdmFyIHRhZyA9IFwic2Nyb2xsVGltZXJcIiArIHVuaXF1ZUNudHIrKztcclxuICAgIHRoaXMuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gc2VsZi5kYXRhKHRhZyk7XHJcbiAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlRGF0YSh0YWcpO1xyXG4gICAgICAgICAgICBmbi5jYWxsKHNlbGZbMF0pO1xyXG4gICAgICAgIH0sIHdhaXRUaW1lKTtcclxuICAgICAgICBzZWxmLmRhdGEodGFnLCB0aW1lcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxuLy8gc2V0IGRhbGF5IG9uIHJlc2l6ZSBldmVudFxyXG4oZnVuY3Rpb24oJCkge1xyXG4gIHZhciB1bmlxdWVDbnRyID0gMDtcclxuICAkLmZuLnJlc2l6ZWQgPSBmdW5jdGlvbiAod2FpdFRpbWUsIGZuKSB7XHJcbiAgICBpZiAodHlwZW9mIHdhaXRUaW1lID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBmbiA9IHdhaXRUaW1lO1xyXG4gICAgICAgIHdhaXRUaW1lID0gNTA7XHJcbiAgICB9XHJcbiAgICB2YXIgdGFnID0gXCJzY3JvbGxUaW1lclwiICsgdW5pcXVlQ250cisrO1xyXG4gICAgdGhpcy5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgdGltZXIgPSBzZWxmLmRhdGEodGFnKTtcclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVEYXRhKHRhZyk7XHJcbiAgICAgICAgICAgIGZuLmNhbGwoc2VsZlswXSk7XHJcbiAgICAgICAgfSwgd2FpdFRpbWUpO1xyXG4gICAgICAgIHNlbGYuZGF0YSh0YWcsIHRpbWVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSkoalF1ZXJ5KTtcclxuXHJcbi8vIFJFQURZIEZVTkNUSU9OXHJcblxyXG4kKGRvY3VtZW50KS5vbigncmVhZHknLCBmdW5jdGlvbigpe1xyXG5cdC8vIGNvbW1vbiBlbGVtZW50c1xyXG4gIGNvbnN0IF93aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgY29uc3QgX2RvY3VtZW50ID0gJChkb2N1bWVudCk7XHJcblxyXG4gIGZ1bmN0aW9uIGlzUmV0aW5hRGlzcGxheSgpIHtcclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xyXG4gICAgICAgIHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMyksIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi42LzIpLCBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKSwgb25seSBzY3JlZW4gIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKSwgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS4zZHBweClcIik7XHJcbiAgICAgICAgcmV0dXJuIChtcSAmJiBtcS5tYXRjaGVzIHx8ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gaXNSZXRpbmFEaXNwbGF5KClcclxuXHJcbiAgdmFyIG1vYmlsZURldmljZSA9IGlzTW9iaWxlKCk7XHJcbiAgLy8gZGV0ZWN0IG1vYmlsZSBkZXZpY2VzXHJcbiAgZnVuY3Rpb24gaXNNb2JpbGUoKXtcclxuICAgIGlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG5cdC8vIFByZXZlbnQgIyBiZWhhdmlvclxyXG5cdCQoJ1tocmVmPVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gU21vdGggc2Nyb2xsXHJcblx0JCgnYVtocmVmXj1cIiNzZWN0aW9uXCJdJykuY2xpY2soIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdC8vIFNFVCBBQ1RJVkUgQ0xBU1MgSU4gSEVBREVSXHJcbiAgLy8gKiBjb3VsZCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24gYW5kIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gIC8vIHVzZXIgLmFjdGl2ZSBmb3IgbGkgaW5zdGVhZFxyXG4gICQoJy5tbnVfX2xpc3QgbGknKS5lYWNoKGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGlmICgkKHZhbCkuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKSkge1xyXG4gICAgICAkKHZhbCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh2YWwpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblx0Ly/QodC60YDQuNC/0YLRiyDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINC60L7RgtC+0YDRi9C1INGB0LrRgNGL0LLQsNGO0YLRgdGPINC40LvQuCDQv9C+0Y/QstC70Y/RjtGC0YHRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGNsb3NlQnRuID0gJCgnLmNsb3NlX19saW5rJyksXHJcblx0XHRcdFx0bW51QnRuID0gJCgnLm1udV9fZm9yLW1vYmlsZScpLFxyXG5cdFx0XHRcdGNsb3NlTW51ID0gJCgnLmNsb3NlX19idG4nKSxcclxuXHRcdFx0XHRibG9nTW51ID0gJCgnLnNlYXJjaF9fbW51LWxpbmsnKSxcclxuXHRcdFx0XHR1c2VyID0gJCgnLmFjY291bnRfX3VzZXItbGluaycpLFxyXG5cdFx0XHRcdHVzZXJNbnUgPSB1c2VyLmNsb3Nlc3QoJy5pbmZvX190b3AtaXRlbScpO1xyXG5cclxuXHRcdGNsb3NlTW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQkKCcubW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRtbnVCdG4uZmFkZUluKCk7XHJcblx0XHR9KTtcclxuXHRcdG1udUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdCQoJy5tbnUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCR0aGlzLmZhZGVPdXQoMTAwKTtcclxuXHRcdH0pXHJcblx0XHR0b2dnbGVBY3RpdmUodXNlciwgdXNlck1udSk7XHJcblx0XHR0b2dnbGVBY3RpdmUoYmxvZ01udSwgJCgnLmJsb2dfX21haW4tcmlnaHQnKSwgYmxvZ01udSk7XHJcblx0XHR0b2dnbGVBY3RpdmUoY2xvc2VCdG4sICQoJy5oZWFkZXInKSwgJCgnLmJnX19waWMnKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsZW0sIGJsb2NrLCBibG9jazIpe1xyXG5cdFx0XHRlbGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYoYmxvY2spe1xyXG5cdFx0XHRcdFx0YmxvY2sudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihibG9jazIpe1xyXG5cdFx0XHRcdFx0YmxvY2syLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSgpKTtcclxuXHJcblx0Ly/RgtCw0LHRi1xyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHRhYkVsZW0gPSAkKCcuc2VhcmNoX19mb3JtLWxpbmsnKSxcclxuXHRcdFx0XHRtb250aEVsZW0gPSAkKCcuc2VhcmNoX19pbm5lci1saW5rJyk7XHJcblxyXG5cdFx0bW9udGhFbGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0aXRlbSA9ICR0aGlzLmNsb3Nlc3QoJy5zZWFyY2hfX2lubmVyLWl0ZW0nKTtcclxuXHJcblx0XHRcdGl0ZW0udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdC5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRhYkVsZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRpdGVtID0gJHRoaXMuY2xvc2VzdCgnLnNlYXJjaF9fZm9ybS1pdGVtJyk7XHJcblxyXG5cdFx0XHRpZighaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG5cdFx0XHRcdGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0LnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KCkpO1xyXG5cclxuXHQvL9Cf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHNjaGVkdWxlID0gJCgnLnNjaGVkdWxlX19saXN0Jyk7XHJcblx0XHR2YXIgc2NyZWVuVyA9IHNjcmVlbi53aWR0aDtcclxuXHJcblx0XHRpZihzY3JlZW5XID4gNzY4KXtcclxuXHRcdFx0c2NoZWR1bGUuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNlIGlmKHNjcmVlblcgPD0gNzY4ICYmIHNjcmVlblcgPiA0NzApe1xyXG5cdFx0XHRzY2hlZHVsZS5zbGljayh7XHJcblx0XHRcdCAgc2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgZG90czogdHJ1ZSxcclxuXHRcdFx0ICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LWxlZnQnKSxcclxuXHRcdFx0ICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJfX2Fycm93LXJpZ2h0JyksXHJcblx0XHRcdCAgYXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdCAgYXV0b3BsYXlTcGVlZDogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNlIGlmIChzY3JlZW5XIDw9IDQ3MCl7XHJcblx0XHRcdHNjaGVkdWxlLnNsaWNrKHtcclxuXHRcdFx0ICBzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdCAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIHByZXZBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHQgIG5leHRBcnJvdzogJCgnLnNsaWRlcl9fYXJyb3ctcmlnaHQnKSxcclxuXHRcdFx0ICBhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0ICBhdXRvcGxheVNwZWVkOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYoc2NyZWVuVyA8PSA2MDcpe1xyXG5cdFx0XHQkKCcudHJhaW5pbmdzX19saXN0Jykuc2xpY2soe1xyXG5cdFx0XHQgIHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ICBhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHQgIGRvdHM6IHRydWUsXHJcblx0XHRcdCAgcHJldkFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1sZWZ0JyksXHJcblx0XHRcdCAgbmV4dEFycm93OiAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHQgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSgpKTtcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzY3JlZW5XID0gc2NyZWVuLndpZHRoO1xyXG5cdFx0aWYoc2NyZWVuVyA8PSA0ODApe1xyXG5cdFx0XHR2YXIgc2hvcExpc3QgPSAkKCcuc2hvcF9fbGlzdCcpLFxyXG5cdFx0XHRcdFx0ZmFjdHMgPSAkKCcubWFwX19saXN0Jyk7XHJcblxyXG5cdFx0XHQvLyBhZGRTbGlkZXIoZmFjdHMpO1xyXG5cdFx0XHRhZGRTbGlkZXIoc2hvcExpc3QpO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gYWRkU2xpZGVyKGl0ZW0pe1xyXG5cdFx0XHRpdGVtLnNsaWNrKHtcclxuXHRcdFx0ICBkb3RzOiB0cnVlLFxyXG5cdFx0XHQgIGFycm93czogZmFsc2UsXHJcblx0XHRcdCAgaW5maW5pdGU6IHRydWUsXHJcblx0XHRcdCAgc3BlZWQ6IDUwMCxcclxuXHRcdFx0ICBmYWRlOiB0cnVlLFxyXG5cdFx0XHQgIGNzc0Vhc2U6ICdsaW5lYXInXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0oKSk7XHJcblxyXG4gIHN0ckxlbmd0aCgnLnRyYWluaW5nX19pdGVtLXRpdGxlJyAsIDU1KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RyTGVuZ3RoKHN0ciwgbGVuZ3RoKXtcclxuICAgICAgJChzdHIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHZhciByZXZpZXdfZnVsbCA9IGpRdWVyeSh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICB2YXIgcmV2aWV3ID0gcmV2aWV3X2Z1bGw7XHJcbiAgICAgICAgICBpZiggcmV2aWV3Lmxlbmd0aCA+IGxlbmd0aCApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV2aWV3ID0gcmV2aWV3LnN1YnN0cmluZygwLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCByZXZpZXcgKyAnLi4uJyApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAoZnVuY3Rpb24oKXtcclxuICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDgwKSB7XHJcbiAgICAgICAgICAkKCcudHJhaW5pbmdzX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIC8vYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuICB9KCkpO1xyXG5cclxuXHJcbiAgLy8gSE9NRVBBR0UgTU9CSUxFIFNMRElFUlNcclxuXHJcbiAgLy8gTUFQIFNMSURFUlxyXG4gIHZhciBfbWFwU2xpY2tNb2JpbGUgPSAkKCcubWFwX19saXN0Jyk7XHJcbiAgdmFyIG1hcFNsaWNrTW9iaWxlT3B0aW9ucyA9IHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gIGlmICggX3dpbmRvdy53aWR0aCgpIDwgNDgwICl7XHJcbiAgICBfbWFwU2xpY2tNb2JpbGUuc2xpY2sobWFwU2xpY2tNb2JpbGVPcHRpb25zKTtcclxuICB9XHJcblxyXG5cclxuICBfd2luZG93LnJlc2l6ZWQoMzAwLCBmdW5jdGlvbihlKXtcclxuICAgIGlmICggX3dpbmRvdy53aWR0aCgpID4gNDgwICkge1xyXG4gICAgICBpZiAoX21hcFNsaWNrTW9iaWxlLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgX21hcFNsaWNrTW9iaWxlLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIV9tYXBTbGlja01vYmlsZS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICByZXR1cm4gX21hcFNsaWNrTW9iaWxlLnNsaWNrKG1hcFNsaWNrTW9iaWxlT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEhPTUVQQUdFIFNIT1AgU0xJREVSXHJcbiAgdmFyIF92aWRlb0NvdXJzZXNTbGlja01vYmlsZSA9ICQoJy5qcy1zbGlja1ZpZGVvQ291cnNlcycpO1xyXG4gIHZhciBfYm9va3NTbGlja01vYmlsZSA9ICQoJy5qcy1zbGlja0Jvb2tzJyk7XHJcbiAgdmFyIF9hdWRpb1NsaWNrTW9iaWxlID0gJCgnLmpzLXNsaWNrQXVkaW8nKTtcclxuXHJcbiAgdmFyIGhvbWVTaG9wU2xpY2tNb2JpbGVPcHRpb25zID0ge1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAvLyAgIHNldHRpbmdzOiB7XHJcbiAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIC8vICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9XHJcblxyXG4gIF92aWRlb0NvdXJzZXNTbGlja01vYmlsZS5zbGljayhob21lU2hvcFNsaWNrTW9iaWxlT3B0aW9ucyk7XHJcbiAgX2Jvb2tzU2xpY2tNb2JpbGUuc2xpY2soaG9tZVNob3BTbGlja01vYmlsZU9wdGlvbnMpO1xyXG4gIF9hdWRpb1NsaWNrTW9iaWxlLnNsaWNrKGhvbWVTaG9wU2xpY2tNb2JpbGVPcHRpb25zKTtcclxuXHJcblxyXG4gIF93aW5kb3cucmVzaXplZCgzMDAsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYgKCBfd2luZG93LndpZHRoKCkgPiA3NjggKSB7XHJcbiAgICAgIGlmIChfYm9va3NTbGlja01vYmlsZS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgIF9ib29rc1NsaWNrTW9iaWxlLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKF92aWRlb0NvdXJzZXNTbGlja01vYmlsZS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgIF92aWRlb0NvdXJzZXNTbGlja01vYmlsZS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChfYXVkaW9TbGlja01vYmlsZS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgIF9hdWRpb1NsaWNrTW9iaWxlLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIV92aWRlb0NvdXJzZXNTbGlja01vYmlsZS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICBfdmlkZW9Db3Vyc2VzU2xpY2tNb2JpbGUuc2xpY2soaG9tZVNob3BTbGlja01vYmlsZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFfYm9va3NTbGlja01vYmlsZS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICBfYm9va3NTbGlja01vYmlsZS5zbGljayhob21lU2hvcFNsaWNrTW9iaWxlT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIV9hdWRpb1NsaWNrTW9iaWxlLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgIF9hdWRpb1NsaWNrTW9iaWxlLnNsaWNrKGhvbWVTaG9wU2xpY2tNb2JpbGVPcHRpb25zKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
