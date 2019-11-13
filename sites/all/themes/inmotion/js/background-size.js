(function($){    
    $(function(){
    	var max1= $('.view-home-slider .views-row').length;

    
      $('#block-block-5').click(function(){

           window.location.href='/contact-us';
      });
        if($('.block-imageblock').length > 0)
        {
          $('#header-image').css('display','none');
        }

        if($('#block-menu-menu-client-resources-menu').length > 0)
        {
          $('#header-image').css('display','none');
        }

        if($('#header-image').length > 0)
        {
          $('#content #page-title').css('display','none');
        }
         if($(window).width() > 1080 )
          {
            if($('.block-imageblock').length <= 0 && $('#block-views-home-slider-block').length <= 0 && $('#block-menu-menu-client-resources-menu').length <= 0 && $('#header-image').length <= 0)
            {
              $("#header").css({'position':'relative','height':164,'background':'black'});
              $('#content #page-title').css('display','block');
            }
          }
       
        $(window).resize(function(){

          if($(window).width() > 1080 )
          {
             if($('.block-imageblock').length <= 0 && $('#block-views-home-slider-block').length <= 0 && $('#block-menu-menu-client-resources-menu').length <= 0 && $('#header-image').length <= 0)
            {
              $("#header").css({'position':'relative','height':164,'background':'black'});
              $('#content #page-title').css('display','block');
            }
          }
       
        });

        
  

     	  var max1=$('.view-home-slider .views-row').length;
     	for(var i=1; i<=max1; i++)
        {
          var imgSrc = $('.view-home-slider .views-row-'+i+' img').attr('src');
            var current1 = $('.view-home-slider  .views-row-'+i+'');
            $('.view-home-slider .views-row-'+i+' img').remove();
            $(current1).html('<div class="backbg"></div>');
            $('.view-home-slider .views-row-'+i+' .backbg').css('background-image', 'url(' + imgSrc + ')');  
	 	    }
        var max= $('.view-home-services-block .views-row').length;

      
        for(var i=1; i<=max; i++)
        {	     
  	    	var imgSrc1 = $('.view-home-services-block .views-row-'+i+' .views-field-field-image-service img').attr('src');
  	    	var current2 = $('.view-home-services-block .views-row-'+i+' .views-field-field-image-service');
    			$('.view-home-services-block .views-row-'+i+' .views-field-field-image-service img').remove();
    			$(current2).html('<div class="backbg"></div>');
  		    $('.view-home-services-block .views-row-'+i+' .views-field-field-image-service .backbg').css('background-image', 'url(' + imgSrc1 + ')');		
       }
        var max2= $('.view-facility-slider .views-row').length;

       $(".view-what-your-symptoms .views-row").each(function (index) {

            $(this).find('.field-content a').wrapInner("<span class=\"inner\"></span>")
        })
        for(var i=1; i<=max2; i++)
        {	     
	    	var imgSrc1 = $('.view-facility-slider .views-row-'+i+' .views-field-field-image-facility img').attr('src');
	    	var current2 = $('.view-facility-slider .views-row-'+i+' .views-field-field-image-facility');
  			$('.view-facility-slider .views-row-'+i+' .views-field-field-image-facility img').remove();
  			$(current2).html('<div class="backbg"></div>');
		    $('.view-facility-slider .views-row-'+i+' .views-field-field-image-facility .backbg').css('background-image', 'url(' + imgSrc1 + ')');		
       }

          var imgSrc1 = $('.block-imageblock img').attr('src');
          var current2 = $('.block-imageblock .block-image');
          $('.block-imageblock img').remove();
          $(current2).html('<div class="backbg"></div>');
          $('.block-imageblock .block-image .backbg').css('background-image', 'url(' + imgSrc1 + ')');	

          var imgSrc1 = $('#header-image img').attr('src');
          var current2 = $('#header-image');
          $('#header-image img').remove();
          $(current2).append('<div class="backbg"></div>');
          $('#header-image .backbg').css('background-image', 'url(' + imgSrc1 + ')');  
    });
})(jQuery);