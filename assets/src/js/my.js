//PAGE ANIMATION

  $(document).ready(function() {    
    $("body").css("opacity", "1");
  });



$(document).ready(function(){
	$(".navbar-toggler").click(function(){
	  $(this).toggleClass("active");
	});
});



$(document).ready(function(){
	$(".navbar-toggler").click(function(){
	  $(".navbar-nav").toggleClass("active");
	});
});
  


$('.header-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
	rtl: true,
});



jQuery(function($)
{
    $(".navbar-toggler").click(function()
    {
        $(".navigation").toggleClass("open");
        $(".bg-overlay").toggleClass("open1");
    })

	if ( $('navigation').hasClass('open') ) {
		$(".header__content").css("background","aqua");
	}

	var bodyEl = document.body,
		//content = document.querySelector( '.header__wrap' ),
    content = document.querySelector( '.header__wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		if (openbtn) {
		    openbtn.addEventListener( 'click', toggleMenu );
	    }
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, '.show-menu' );
//      classie.remove( bodyEl, 'show' );
		}
		else {
			classie.add( bodyEl, '.show-menu' );
//      classie.add( bodyEl, 'show' );
		}
		isOpen = !isOpen;
	}

	/*
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".navigation"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
//			div.hide(); // скрываем его
      $('.navigation').removeClass('open');
      $('.bg-overlay').removeClass('open1');
		}
	});  
	*/

	init();  
});



//NUMBERS
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 10000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});



$(document).ready(function(){
	$(window).on("scroll",function(){
	  var wn = $(window).scrollTop();
	  var slider = $('#slider').height() - 90;
	   if(wn > slider){
		$(".header__content").css("background","white");
		$(".navbar__icon--light").css("visibility","hidden");
		$(".navbar__icon--dark").css("visibility","visible");
		$(".slider__items--light").css("visibility","hidden");
		$(".slider__items--dark").css("visibility","visible");
	   }

	   else{
		$(".header__content").css("background","transparent");
		$(".navbar__icon--light").css("visibility","visible");
		$(".navbar__icon--dark").css("visibility","hidden");
		$(".slider__items--light").css("visibility","visible");
		$(".slider__items--dark").css("visibility","hidden");
		
	   }

	});
});

