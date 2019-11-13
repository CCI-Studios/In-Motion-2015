(function($)

	{
	$(function()
	{
		$("#block-webform-client-block-26 .form-submit,#block-webform-client-block-24 .form-submit").click(validation_contact);
		var url=window.location.href
		if(url.indexOf('submitted') > -1)
		{
			$('#block-block-11,#block-block-12').addClass('overlay');
		}

		$(document).mouseup(function (e)
		{	
			var container =$('#block-block-11,#block-block-12');
			if (!container.is(e.target)
	        && container.has(e.target).length === 0) 
		    {
		        container.fadeOut();
		    }
		});

		function validation_contact()
		{
			var email = $("#block-webform-client-block-26 .webform-component--email input,#block-webform-client-block-24 .webform-component--email input").val();
	  
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var valid = emailReg.test(email);
		

		if(!valid)
		 {	
		 	 $('.webform-component--email input').focus();
		 	 var div="<div id=\"error\"><p>Please fill email field correctly</p></div>"
			 $('#error').remove();
			 $('#block-webform-client-block-26,#block-webform-client-block-24').append(div);
			 return false;
		 }
		 else
		 {
		 	console.log('true');
			return true;
		 }
	
		}
	});

	})(jQuery);

