(function($){

	$(function(){
	
		$('#edit-submitted-email-newsletter-selection-27').attr('checked', true);
		$('#edit-submitted-email-newsletter-selection').css('display','none');


		$('#block-block-10 .content #menu-mb').click(function(e){

			e.preventDefault();
			$('#menus').toggleClass('open');
			$('#block-block-10').toggleClass('open');

		});


		$('#services').parent().find('>ul.menu a').click(function(e){

			e.preventDefault();
			$('#menus').toggleClass('open');
			$('#block-block-10').toggleClass('open');

		});

		$('#footer2 .content li.expanded > a').click(function(e){

			e.preventDefault();
			console.log('clicked');
			$(this).toggleClass('open');
			$(this).parent().find('> ul').slideToggle('slow');

		});

		$('#main-menu li:not(.expanded) a').click(function()
		{	
			if($(window).width() <1080)
			{	
	          var target = this.hash;
	          var $target = $(target);
	          $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-240
	          }, 150, 'swing', function () {
	             window.location.hash = target;
	          });
	      }
		});
		
			$(window).on('load', function(){
    
			$('#main-menu ul.menu li.expanded > a').click(function(event)
			{	
				if($(window).width() <1080)
				{	

				event.preventDefault();
				console.log('clicked menu item');
				$(this).parent().find(' > ul.menu').prepend('<li class=\"menu-back\"><a href=\"#\" >< Back</a></li>');
				$(this).parent().find(' > ul.menu  ').addClass('open');
				var m = $(this).parent().find('> ul.menu').height();
				console.log(m);
 	 		    $('#main-menu').animate({height:100+'%'},500);
 	 			}

	 			 
			});

			$(document).on('click','.menu-back',function(event)
			{	 

				if($(window).width() <1080)
				{	

				event.preventDefault();
				console.log('clicked');

				$(this).parent().removeClass('open');
				$(this).parent().parent().removeClass('open');
			
				$(this).closest('li.expanded').parent().height('100%');
				var m=$(this).closest('li.expanded').parent().height();

				console.log(m);
				$('#main-menu').height(m);
				var h=$('#main-menu').height();
				

				$(this).remove();

				}
			});

		
		});


	});

}(jQuery));