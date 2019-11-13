(function($) {
	

	$.fn.slider=function(data){
	
	var active=0;
	var min=0;
	var max=0;

	var timer=0;
	var ele = this;
 	
	
	this.find('.views-row').css({'float':'left','text-align':'center'});
	this.find('.view-content').css({'position':'relative'});
	this.css({'overflow':'hidden'});
	console.log(ele);
	this.find(".prev").click(function(){clickPrevious(num)});
	this.find('.next').click(clickNext);
	this.click(stop);
	max = rows().length;
	var num =data.num;
	console.log(num);
	cloning(num);

	function cloning(num)
	{	

		for(i=0;i<num;i++)
		{
			var $i = rows().eq(i).clone();
			container().append($i);
		}
		
	}
	setTimeout(layout(), 500);
	$(window).resize(layout());
	start(); 

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

	function start()
	{	
		
		timer = setInterval(timerNext, 8000);
		console.log(timer);
	}

	function container()
	{	

		return ele.find(".view-content");
	}
	function rows()
	{	
	
		return container().find(".views-row");
	}
	function indicators()
	{
		return $(".view-nightingale-banner-slider .indicators li");
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
	function jumpToEnd(num)
	{
		var active = rows().length-rowsPerPage(num);
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
		console.log(active);
	}
	function jumpToBeginning()
	{
		var active = min;
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function rowWidth()
	{
		return 100/rowsPerPage(num);
	}
	function rowsPerPage(num)
	{
		if (isMobile())
		{
			return 1;
		}
		else if (isTablet())
		{
			return 1;
		}
		
		return num;
	}

	function isMobile()
	{
		return $(window).width() < 540;
	}
	
	function isTablet()
	{
		return $(window).width() < 1220;
	}

	function previous(num)
	{
		active--;
		if (active < min)
		{
			jumpToEnd(num);
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

	function clickPrevious(num)
	{
		previous(num);
		stop();
		return false;
	}

	function clickNext()
	{
		next();
		stop();
		return false;
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
		indicators().removeClass("active").eq(i).addClass("active");
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

	};

	$(function()
	{		
		$(".view-home-slider").slider({num: 1});
		$(".view-facility-slider").slider({num: 1});
		$(".view-testimonials-view").slider({num: 1});
		$('.view-facility-page .views-row a').swipebox();

	});
	

}(jQuery));
