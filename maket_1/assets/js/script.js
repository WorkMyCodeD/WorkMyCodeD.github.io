// Element Menu
$("#menu").click(function() 
{
	if ($("#menu-drop").css("display") == "none") 
	{
		$("#menu-drop").slideDown("1");
	} else {
		$("#menu-drop").slideUp("1");
	}
});

// Link Reaction
$(function()
{
	$('a[href^="#"]').on('click', function(event) 
	{
		event.preventDefault();	    
		var sc = $(this).attr("href");
		if (sc.length > 1) 
		{
			var	dn = $(sc).offset().top;
			$('html, body').animate({scrollTop: dn}, 1000);
		}
	});
});

$(function() {
	$("#arrow-header").click(function() {
		
		if ($("#header-button").css("display") == "none") 
		{
			$("#header-button").slideDown("slow");
			$(this).removeClass('half_curcle');
		} else {
			$("#header-button").slideUp("slow");
			$(this).addClass('half_curcle');
		}
	});
});

$(function() {
	$("#navbar-search-button").click(function() {
		
		if ($("#navbar-search-form").css("display") == "none") 
		{
			$("#navbar-search-form").slideDown("1");
		} else {
			$("#navbar-search-form").slideUp("1");
		}
	});
});

$(function() {
	$(".icon-contact").click(function() {
		
		if ($(this).hasClass("full_curcle")) 
		{
			$(this).removeClass('full_curcle');
		} else {
			$(this).addClass('full_curcle');
		}
	});
});
