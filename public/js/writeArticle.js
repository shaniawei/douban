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
	$(document).on("click",function(){
		var box2html=$(".box2").css("display");
		if (box2html="block") {
			$(".box2").css("display","none");
			// e.preventDefault();
		}
	});
	$("#uploadpic").on("click",function(e){
		var upload=$(".upload").css("display");
		if (upload=="none") {
			$(".upload").css("display","block");
		}
		e.preventDefault();
	});
	$("#cha").on("click",function(){
		var upload=$(".upload").css("display");
		if (upload=="block") {
			$(".upload").css("display","none");
		}
	});
	$("#cancelup").on("click",function(){
		var upload=$(".upload").css("display");
		if (upload=="block") {
			$(".upload").css("display","none");
		}
	});
	$("#cha").on("mousemove",function(){
		$("#cha").attr("src","/images/wimage/20170310175400.png");
	});
	$("#cha").on("mouseout",function(){
		$("#cha").attr("src","/images/wimage/20170310175400.jpg");
	});
});