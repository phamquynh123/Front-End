$(function(){
	$(".plus").click(function(){
		$(this).parent().next().next().toggle(2000);
		// $(this).css("display","none");
		$(this).siblings().css("display", "block");
	});
	$(".minus").click(function(){
		$(this).parent().next().next().hide('3000');
		$(this).css("display","none");
		$(this).siblings().css("display", "block");
	});
});