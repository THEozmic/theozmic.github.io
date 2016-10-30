$(".m-icon, #rst-cls").click(function(){
	$("#sdbar").fadeToggle();
});
$("#srlfrm").click(function() {
    $("html, body").animate({ scrollTop: $("#srlto").offset().top }, 1000);
});
$("#srlup").click(function() {
    $("html, body").animate({ scrollTop: $("#tp").offset().top }, 1000);
});

$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#srlup').fadeIn();
		} else {
			$('#srlup').fadeOut();
		}
	});

$("#hr-me").click(function() {
   location.href = "hire-oz/";
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});