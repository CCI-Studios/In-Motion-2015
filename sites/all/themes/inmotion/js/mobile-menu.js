(function($){

	$(function(){

		$('#block-block-10 .content #menu-mb').click(function(){

			console.log('clicked');
			$('#menus').toggleClass('open');

		});

		$('#footer2 .content li.expanded > a').click(function(e){

			e.preventDefault();
			console.log('clicked');
			$(this).toggleClass('open');
			$(this).parent().find('> ul').slideToggle('slow');

		});


			$(window).on('load', function(){
				    
     
			$('#main-menu ul.menu li.expanded > a').click(function(event)
			{	
				if($(window).width() <1030)
				{	

				event.preventDefault();
				console.log('clicked menu item');
				$(this).parent().find(' > ul.menu').prepend('<li class=\"menu-back\"><a href=\"#\" >< Back</a></li>');
				$(this).parent().find(' > ul.menu  ').addClass('open');
				var m = $(this).parent().find('> ul.menu').height();
				console.log(m);
 	 		    $('#main-menu').animate({height:m},500);
 	 			}

			});

			$(document).on('click','.menu-back',function(event)
			{	 

				if($(window).width() <1030)
				{	

				event.preventDefault();
				console.log('clicked');

				$(this).parent().removeClass('open');
				$(this).parent().parent().removeClass('open');
			
					var m=$(this).closest('li.expanded').parent().height();
				

				console.log(m);
				$('#main-menu').height(m);

				$(this).remove();

				}
			});

		
		});


	});

}(jQuery));