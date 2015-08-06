(function($) {
	

	$(function()
	{	
     	$("#block-taxonomy-menu-block-1 .content  ul li a").each(function (index)
      {	 
           var val=$(this).text().replace(/\W+/g,'');
       		 $(this).attr("href","#"+val);        
    	});

      $("#block-taxonomy-menu-block-1 .content  ul li,#footer2 ul li").each(function (index)
      {  
          if($(this).find('ul').length > 0 )
          {
            $(this).addClass('expanded');
          }  

      });

       $(".view-services .view-content>.item-list>ul>li").each(function (index)
      {  
          
            $(this).addClass('expanded');

      });

     	var offset=$("#block-taxonomy-menu-block-1").offset();  
     	var topPadding = 15;
    	
		$(".view-services .views-field-name .field-content").each(function (index)	
	 	{	 
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("id",val); 	
		});

    $(".view-home-services-block .views-row a,#services-symptoms .views-row a,.menu-footer-menu ul li a").each(function (index) 
    {  
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","services#"+val);
        $(this).removeClass("active");            
        $(this).parents('.views-row').addClass(val);  
    });

    var url=window.location.hash;
    $("#services-block-inner .views-row a").each(function (index) 
    { 
      var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","#"+val);
      });

    $(".view-what-your-symptoms .views-row a,").each(function (index) 
    {  
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","/services#"+val);
    });

     $("#services").parent().find('ul li > a').each(function (index) 
    {  
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","/services#"+val);
    });
				var lastId,
      topMenu = $("#block-taxonomy-menu-block-1 .content ul"),
    
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { 
        return item; }
      });

      $('#services-block-inner .views-row a').click(function(){

        $('.views-field-name').removeClass('active');
        $(this).parents('.views-field-name').addClass('active');

      });

       $('#block-taxonomy-menu-block-1 a[href^="#"],#services-block-inner .views-row a').on('click',function (e) 
     {
          e.preventDefault();

          var target = this.hash;
          var $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top-260
          }, 150, 'swing', function () {
              window.location.hash = target;
          });
      });

  	  $(window).scroll(function (){

    
       var fromTop = $(this).scrollTop();
       
       var cur = scrollItems.map(function(){
         if ($(this).offset().top - 290< fromTop)
           return this;
         
       });
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
       lastId = id;
     if(menuItems.filter("[href=#"+id+"]").parents('li.expanded.pointer > ul').length< 1)
     {
        menuItems
        .removeClass("active");
        $('li.expanded').removeClass("pointer");
        $('#services-block-inner .views-row a').parents('.views-field-name').removeClass('active'); 

     }  
        menuItems.parents('li.expanded').find('>ul a')
        .removeClass("active");

        menuItems.filter("[href=#"+id+"]").parents('li.expanded').addClass("pointer").find('>a').addClass('active');

        menuItems.filter("[href=#"+id+"]").parents('li.expanded > a').addClass("pointer");
        
         
        url=$('#block-taxonomy-menu-block-1 .content li.pointer > a.active').attr('href');
        $('#services-block-inner .views-row a').filter('[href='+url+']').parents('.views-field-name').addClass('active'); 
        
        

        menuItems.filter("[href=#"+id+"]").parents('li.pointer > a').addClass("active");
        menuItems.filter("[href=#"+id+"]").addClass("active");

   }      

        var length = $('#sidebar').height() - $('#block-taxonomy-menu-block-1').height() + $('#sidebar').offset().top;   
        var scroll = $(this).scrollTop();
        var t=scroll-$('#content').offset().top;
        var height = $('#block-taxonomy-menu-block-1').height() + 'px';
        if (scroll+300 < $('#sidebar').offset().top) {


            $('#block-taxonomy-menu-block-1').css({
                'position': 'absolute',
                'top': '0'
            });
            $('#services-block-inner').css({
                'position': 'relative',
                'width':'100%',
                'top': 'auto',
                'padding-bottom': '0px'
            });

        } else if (scroll > length-260) {
            $('#block-taxonomy-menu-block-1').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'auto',
                'height':'auto'
            });

        }
         else {

            $('#block-taxonomy-menu-block-1').css({
                'position': 'fixed',
                'top': '260px',
                'height': height
            });
            $('#services-block-inner').css({
                'position': 'fixed',
                'width':'100%',
                'top': '0px',
                'padding-bottom': '70px'
            });

        }
    });
	});
}(jQuery));
