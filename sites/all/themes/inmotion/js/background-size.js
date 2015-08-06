(function($){    
    $(function(){
    	var max1= $('.view-home-slider .views-row').length;

     	for(var i=1; i<=max1; i++)
        {
          var imgSrc = $('.view-home-slider img').attr('src');
            var current1 = $('.view-home-slider .views-row');
            $('.view-home-slider img,').remove();
            $(current1).html('<div class="backbg"></div>');
            $('.view-home-slider .backbg').css('background-image', 'url(' + imgSrc + ')');  
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
    });
})(jQuery);