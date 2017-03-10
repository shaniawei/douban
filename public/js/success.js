$(document).ready(function(){
	$("#boxclick").on("click",function(e){
		var box2=$(".box2").css("display");
		if (box2=="none") {
			$(".box2").css("display","block");
			e.stopPropagation();
		}else if (box2=="block") {
			$(".box2").css("display","none");
			e.stopPropagation();
		}
	});
// 标准浏览器的事件模型：冒泡事件模型
// son->box->body->html->document
// IE浏览器的事件模型：捕获型事件模型 
// document->html->body->box->son
	$(document).on("click",function(){
		var box2html=$(".box2").css("display");
		if (box2html="block") {
			$(".box2").css("display","none");
			// e.preventDefault();
		}
	});
	// $("#logout").on("click",function(e){
	// 	window.location="../";
	// 	e.preventDefault();
	// 	return false;
	// });
});