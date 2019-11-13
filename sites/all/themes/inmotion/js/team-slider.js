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
		$(".view-team-description .views-row").click(stop);
		max = rows().length;

		var $first = rows().eq(0).clone();
		container().append($first);

		$('.view-team-description a.close').click(function(e){

			e.preventDefault();
			console.log('clicked');
			$('#block-views-team-description-block-1').removeClass('open');
			$('.view-our-team').removeClass('close');
		});

		$('.view-our-team .views-row').click(function(){

			$('#block-views-team-description-block-1').addClass('open');
			$('.view-our-team').addClass('close');
			var i=$(this).index();
			clickIndicator(i);
		});

	
		setTimeout(layout, 50);
		$(window).resize(layout);
		
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
		$(".view-team-description").append($ul);
	}

	function start()
	{
		timer = setInterval(timerNext, 8000);
	}

	function container()
	{
		return $(".view-team-description .view-content");
	}
	function rows()
	{
		return container().find(".views-row");
	}
	function indicators()
	{
		return $(".view-team-description .indicators li");
	}

	function layout()
	{
		var numRows = rows().length;
		var containerWidth = numRows * rowWidth();
		var width = 1/numRows*100
		container().width(containerWidth+"%");
		rows().width(width+"%");
	}

	function moveContainer()
	{
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},1500);
		setActiveIndicator(active);
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
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},0);
		setActiveIndicator(active);
		//moveContainer();
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

	function clickIndicator(i)
	{
		
		setActiveIndicator(i);
		gotoIndex(i);
		if($(window).width()<1080)
		{
			$("html, body").animate({ scrollTop: 0 }, 0);
			return false;

		}
		else
		{
			$("html, body").animate({ scrollTop: 200 }, 0);
			return false;
		}
		
		stop();
	}

	function setActiveIndicator(i)
	{
		if (i >= max)
		{
			i = 0;
		}
	}

	function stop()
	{
		clearInterval(timer);
	}

	function timerNext()
	{
		next();
		layout();
	}



}(jQuery));
