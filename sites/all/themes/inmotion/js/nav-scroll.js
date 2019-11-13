(function($) {
  

  $(function()
  {   

     $("#services").parent().find('ul li > a').each(function (index) 
    {  
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","/services#"+val);
    });
    
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


    $(".view-services .views-field-name .field-content").each(function (index)  
    {  
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("id",val);   
    });

    $(".view-home-services-block .views-row a,#services-symptoms .views-row a,.menu-footer-menu ul li a").each(function (index) 
    {  
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","/services#"+val);
        $(this).removeClass("active");            
        $(this).parents('.views-row').addClass(val);  
    });

    $("#block-views-services-menu-inner-block .views-row a").each(function (index) 
    { 
        var val=$(this).text().replace(/\W+/g,'');
        $(this).attr("href","#"+val);
    });

   
  
    $(".view-what-your-symptoms .views-row a,").each(function (index) 
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


    
      if(window.location.href.indexOf("services") > 0)
      {     
          if(window.location.hash)
          { 
             var target = window.location.hash;
              console.log('clicked');
              var $target = $(target);

              $('html, body').stop().animate({
                'scrollTop': $target.offset().top-180
              }, 150);
           }  
      }


    

      $('#services').parent('li.expanded').find(' > ul.menu a').on('click',scrolling);
      

      function scrolling()
      {   
          var target = this.hash;
          
          var $target = $(target);
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top-180
          }, 150); 
      }
       
   if(window.location.href.indexOf("services") > 0)
    { 

        $('#block-taxonomy-menu-block-1 a[href^="#"],.views-row a,#scroll-top-button,#block-views-services-menu-inner-block a,.menu-footer-menu ul li a').on('click',scrolling);
      
     
      $(window).scroll(function ()
      { 

         var fromTop = $(this).scrollTop();
         var cur = scrollItems.map(function()
         {
            if ($(this).offset().top - 250< fromTop)
            return this;   
         });

        if($('#content').offset().top - 400< fromTop)
        {
          $("#block-taxonomy-menu-block-1").pin({

            containerSelector: "#content"
          });
        }
     

       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       if (lastId !== id) 
       {
            lastId = id;
            if(menuItems.filter("[href=#"+id+"]").parents('li.expanded.pointer > ul').length< 1)
            {
                menuItems
                .removeClass("active");
                $('li.expanded').removeClass("pointer");
                $('#services-block-inner .views-row a').parents('.views-field-name').removeClass('active'); 
            }  

            menuItems.parents('li.expanded').find('>ul a').removeClass("active");

            menuItems.filter("[href=#"+id+"]").parents('li.expanded').addClass("pointer").find('>a').addClass('active');

            menuItems.filter("[href=#"+id+"]").parents('li.expanded > a').addClass("pointer");


            url=$('#block-taxonomy-menu-block-1 .content li.pointer > a.active').attr('href');
            $('#services-block-inner .views-row a').filter('[href='+url+']').parents('.views-field-name').addClass('active'); 

            menuItems.filter("[href=#"+id+"]").parents('li.pointer > a').addClass("active");
            menuItems.filter("[href=#"+id+"]").addClass("active");
             var height = $('#block-taxonomy-menu-block-1').height() + 'px';
        }      

        var length = $('#sidebar').height() - $('#block-taxonomy-menu-block-1').height() + $('#sidebar').offset().top;   
        var scroll = $(this).scrollTop();
        var t=scroll-$('#content').offset().top;
        var d=scroll - $('#footer').offset().top;
      
         if (scroll+220 < $('#sidebar').offset().top || scroll > $('#footer2').offset().top-200)
         {  
            if(window.location.href.indexOf("services") > 0)
            {
              $('#header').css({
                  'position': 'absolute'
              });
              $('#header').css('background','rgba(0,0,0,0.6)');   
            }   
          } 

         else if(scroll < length) {

           if(window.location.href.indexOf("services") > 0)
            {
              $('#header').css({
                  'position': 'fixed',
                  'top':0
              });
              $('#header').css('background','rgba(0,0,0,1)');  
            }    
        }
    
    });
}
    
    if(window.location.href.indexOf('services') > 0 )
    {  
        
       $('#content').append('<div id="scroll-top-button"><a href="#" class="button">Scroll To Top</a></p></div>');
      $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('#scroll-top-button').fadeIn();
      } else {
        $('#scroll-top-button').fadeOut();
      }
  });
  
  //Click event to scroll to top
  $('#scroll-top-button').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
        
    }

   
  
  });
}(jQuery));
