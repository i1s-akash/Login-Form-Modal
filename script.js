$(document).ready(function(){
	$("button").click(function(){
		$(".wrapper").addClass("on");
	});

	$(".cross_mark").click(function(){
		$(".wrapper").removeClass("on");
	});

	var rect = $("button")[0].getBoundingClientRect();
// To get distance from this button to screen edge, 271 alert(rect.top); 668 alert(rect.left);

	$(".pop_up").css({
		top: rect.top,
		left: rect.left
	});
//.wrapper.on .pop_up, we did set top & left here too but it's all about priority.
});
