			$(document).scroll(function () {
			    var y = $(this).scrollTop();
			    if (y > 200) {
			        $('.button-is-not-default').fadeIn();
			    } else {
			        $('.button-is-not-default').fadeOut();			
			    }

			});


	    (function() {
	        var path = '//easy.myfonts.net/v2/js?sid=148510(font-family=Proxima+Nova+Regular)&sid=148545(font-family=Proxima+Nova+Thin)&sid=148547(font-family=Proxima+Nova+SemiBold)&sid=148550(font-family=Proxima+Nova+Light)&key=xkaS5gLe3x',
	            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
	            trial = document.createElement('script');
	        trial.type = 'text/javascript';
	        trial.async = true;
	        trial.src = protocol + path;
	        var head = document.getElementsByTagName("head")[0];
	        head.appendChild(trial);
	    })();


	    $(document).ready(function() {
				/*
				 *  Simple image gallery. Uses default settings
				 */

				$('.fancybox').fancybox({
					autoSize: true,
					scrolling: 'no',	
					padding: 0


				});

				/*
				 *  Different effects
				 */

				// Change title type, overlay closing speed
				$(".fancybox-effects-a").fancybox({
					helpers: {
						title : {
							type : 'outside'
						},
						overlay : {
							speedOut : 0
						}
					}
				});

			});