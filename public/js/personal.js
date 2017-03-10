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
	$("#logout").on("click",function(e){
		window.location="../";
		e.preventDefault();
		return false;
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
	$(".sign").on("click",function(){
		var box3=$(".box3").css("display"),
		    sign=$(".sign").css("display");
		    if (box3=="none") {
		    	$(".box3").css("display","block");
		    	$(".sign").css("display","none");
		    }
	});
	$("#cancel").on("click",function(){
		var box3=$(".box3").css("display"),
		    sign=$(".sign").css("display");
		    if (box3=="block") {
		    	$(".box3").css("display","none");
		    	$(".sign").css("display","block");
		    }
	});
	$("#alter").on("click",function(){
		var signtext=$("input[name='signtext']").val();
		if (signtext.length>0) {
			$.ajax({
				method:"POST",
				url:"/signtext",
				data:{signtext:signtext},
				success:function(data){
					if (data.flag=="true") {
						$(".box3").css("display","none");
						$(".sign").css("display","block").text(signtext);
					}
				}
			});
		}
	});
});