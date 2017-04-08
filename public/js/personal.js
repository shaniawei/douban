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
			$.ajax({
				method:"POST",
				url:"/signtext",
				data:{signtext:signtext},
				success:function(data){
					if (data.flag=="true") {
						$(".box3").css("display","none");
						$(".sign").css("display","block").text(signtext||"(添加签名档)");
					}
				}
			});

	});


  $(".headPicUpload").on('click',function(e){
  	  $("input[name='headPic']").trigger('click');
  	  e.preventDefault();
  })

  $("input[name='headPic']").on('change',function(){
  	  $(".headPicForm").ajaxSubmit({    //jQuery插件的ajaxSubmit函数，可以帮助我们以ajax的形式发送文件数据
          method:"POST",
          url:"/headPic",
          success:function(data){
          	if(data.headPic){
          		$(".upload").css("display",'none')
          		$(".authorImg").attr("src",data.headPic)
          	}else{
          		alert(data.flag);
          	}
          }
  	  });
  });

  $("#introduce").on("click",function(e){
  	var introducebox=$(".introducebox").css("display");
  	if (introducebox=="none") {
  		$(".introducebox").css("display","block");
  		e.preventDefault();
  	}
  });
  $("#close").on("mouseover",function(){
  	$("#close").attr("src","/images/wimage/20170310175400.png");
  });
  $("#close").on("mouseout",function(){
		$("#close").attr("src","/images/wimage/20170310175400.jpg");
  });
  $("#close").on("click",function(){
		var introducebox=$(".introducebox").css("display");
  	if (introducebox=="block") {
  		$(".introducebox").css("display","none");
  	}
  });

  $("#add").on("click",function(e){
  	  var inputbox=$(".inputbox").css("display");
  	  if (inputbox=="none") {
  	  	$(".inputbox").css("display","block");
  	  	$(".add").css("display","none");
  	  	$("#addcontent").css("display","none");
  	  	e.preventDefault();
  	  }
  });
  $("#anothercancel").on("click",function(){
  	    $(".add").css("display","block");
  	    $(".inputbox").css("display","none");
  	    $("#addcontent").css("display","block");
  });

  $("#save").on("click",function(){
  	   var val=$("#smallinput").val();
  	   $.ajax({
  	   	  method:"POST",
  	   	  url:"/sendintrodus",
  	   	  data:{val:val},
  	   	  success:function(data){
  	   	  	if (data.flag=="true") {
  	   	  		$(".inputbox").css("display","none");
  	   	  		if(val==""){
  	   	  			$(".add").css("display","inline-block");
                    $("#add").text("添加自我介绍");
                    $("#addcontent").css("display","inline-block").text(val);
                    $("#introduce").text("写一段自我介绍");
                    
  	   	  		}else{
  	   	  			$(".add").css("display","inline-block");
  	   	  			$("#add").text("编辑");
  	   	  		    $("#addcontent").css("display","inline-block").text(val);
  	   	  		    $("#introduce").text("更新自我介绍");
  	   	  		}
  	   	  	}
  	   	  }
  	   });
  });

  var pageX,pageY,t,left,temp,flag1;
  $(".upload").on("mousedown",function(e){
       
       pageX=e.pageX;
       pageY=e.pageY;
       temp=$(this).position();
       t=temp.top;
       left=temp.left;
       flag1=true;

  })
  $(document).on("mousemove",function(e){
       if (flag1) {
          $(".upload").css({"left":e.pageX-pageX+left,"top":e.pageY-pageY+t})
       }
  }).on("mouseup",function(){
      flag1=false;
  })


  // $("#submitbox").click(function(e){
  //     $.ajax({
  //     	method:"POST",
  //     	url:"/introduce",
  //     	data:{into:$("#inputbox").val()}
  //     })
  // })

});