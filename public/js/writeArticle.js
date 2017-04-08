$(document).ready(function(){
	$("#boxclick").on("click",function(e){
		var box2=$(".box2").css("display");
		if (box2=="none") {
			$(".box2").css("display","block");
			e.stopPropagation();
		}else if (box2=="block") {
			$(".box2").css("display","none");
			e.stopPropagation();  //学会了冒泡机制以及如何阻止冒泡
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
	$("#cha").on("mouseover",function(){
		$("#cha").attr("src","/images/wimage/20170310175400.png");
	});
	$("#cha").on("mouseout",function(){
		$("#cha").attr("src","/images/wimage/20170310175400.jpg");
	});
	$("#report").on("click",function(){
		$(".articleForm").trigger("submit");
	});
	$("#cancel").on("click",function(){
		window.location="./success";
		return false;
	});

	$("tr").on("click",function(e){   //学会使用事件委托以及真正明白事件的对象
		var event=e.target,
		eventval=event.innerHTML,
		inputval=$("input[name='tags']").val();
		inputvalarr=inputval.split(";");
		inputvalarr.splice(inputvalarr.length-1,1);
		if(event.tagName=="A"){
		if (inputvalarr.length<5) {
		   $("input[name='tags']").val(inputval+eventval+";");
		   e.preventDefault();
		}else{
			alert("标签不宜过多哦~");
			e.preventDefault();
		}
	}
	});
});