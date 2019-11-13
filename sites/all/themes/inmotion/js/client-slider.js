(function($) {
	var active = 0;
	var min = 0;
	var max = 0;
	var timer;

	$(function()
	{
		init();	
		
	});

	function init()
	{
		
		$(".prev").click(clickPrevious);
		$(".next").click(clickNext);
		$("#block-menu-menu-client-resources-menu ul.menu li").first().find('>a').addClass("active");
		$("#block-menu-menu-client-resources-menu ul.menu li").click(clickThumbnail);

		$(".view-client-resources .views-row").click(stop);
		max = rows().length;

		var $first = rows().eq(0).clone();
		container().append($first);


		setTimeout(layout, 50);
		$(window).resize(layout);	
		
		if(window.location.href.indexOf("client-resources") > 0 && window.location.hash)
		{	
			var hash=window.location.hash.substr(1);
			console.log(window.location.hash);
			var index=$("#block-menu-menu-client-resources-menu ul.menu li > a").filter('[id='+hash+']').parent().index();
			console.log(index);
			gotoIndex(index);
			$('#client-resources').parent().find('ul.menu a').removeClass('active');
			$("#client-resources").parent().find('ul.menu li').click(clickThumbnail);
			
			container().stop(true, true);
		}
		else
		{	
			$('#client-resources').parent().find('ul.menu a').removeClass('active');
			addActive();
		}
		
		
	}
	function createIndicators()
	{
		var $ul = $("<ul class='indicators' />");
		rows().each(function(i){
			if (i < max)
			{
				var $li = $("<li>"+i+"</li>");
				$li.click(clickIndicator);
				$ul.append($li);
			}
		});
		$ul.find(":first-child").addClass("active");
		$(".view-banner-slider").append($ul);
	}

	function addActive()
	{
		$("#block-menu-menu-client-resources-menu ul.menu li:first-child > a").addClass("active");
		$(".view-client-resources .views-row-first").addClass("active");
	}

	function start()
	{
		timer = setInterval(timerNext, 8000);
	}

	function container()
	{
		return $(".view-client-resources .view-content");
	}


	function page_height()
	{	
		var rowHeight=$('.view-client-resources .views-row.active').height();
		$('.view-client-resources').css('height',rowHeight);
		//console.log(rowHeight)

	}

	function rows()
	{
		return container().find(".views-row");
	}
	function indicators()
	{
		return $("#block-menu-menu-client-resources-menu ul.menu li");
	}

	function layout()
	{
		var numRows = rows().length;
		var containerWidth = numRows * rowWidth();
		var width = 1/numRows*100
		container().width(containerWidth+"%");
		rows().width(width+"%");
		page_height();
	}

	function moveContainer()
	{
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},1500);
		setActiveIndicator(active);
		page_height();

	}
	function jumpToEnd()
	{
		var active = rows().length-rowsPerPage();
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function jumpToBeginning()
	{
		var active = min;
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function rowWidth()
	{
		return 100/rowsPerPage();
	}
	function rowsPerPage()
	{
		if (isMobile())
		{
			return 1;
		}
		else if (isTablet())
		{
			return 1;
		}
		
		return 1;
	}

	function isMobile()
	{
		return $(window).width() < 540;
	}
	
	function isTablet()
	{
		return $(window).width() < 1220;
	}

	function previous()
	{
		active--;
		if (active < min)
		{
			jumpToEnd();
			active = max-1;
		}
		moveContainer();
	}

	function next()
	{
		active++;
		if (active > max)
		{
			jumpToBeginning();
			active = min+1;
		}
		moveContainer();
	}

	function gotoIndex(i)
	{
		active = i;
		moveContainer();
	}

	function clickPrevious()
	{
		previous();
		stop();
		return false;
	}

	function clickNext()
	{
		next();
		stop();
		return false;
	}

	function indicators_body()
	{
		return $(".view-client-resources .views-row ");
	}

	function clickIndicator()
	{
		var i = $(this).index();
		setActiveIndicator(i);
		gotoIndex(i);
		stop();
	}

	function setActiveIndicator(i)
	{
		if (i >= max)
		{
			i = 0;
		}

		indicators().find('> a').removeClass("active").eq(i).addClass("active");
		indicators_body().removeClass("active").eq(i).addClass("active");
	}

	function stop()
	{
		clearInterval(timer);
	}

	function clickThumbnail(e)
	{	
		e.preventDefault();
		var i = $(this).index();
		$('#client-resources').parent().find('ul.menu a').removeClass('active');
		$('#block-menu-menu-client-resources-menu a').removeClass('active');
		$(this).find('>a').addClass('active');
		setActiveIndicator(i);
		gotoIndex(i);
		stop();
	}

	function timerNext()
	{
		next();
		layout();
	}



}(jQuery));
