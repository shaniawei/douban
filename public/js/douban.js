// $(document).ready(function(){
// 	var login=$("#login");
// 	login.on("click",function(e){
// 		var input=$("input[name='username']").val();
// 		if (input.length>0) {
// 			alert("您的用户名是："+input);
// 		}else{
// 			alert("用户名为空");
// 		}
// 		e.preventDefault();
// 	});
// });
// 
// $(document).ready(function(){
// 	var login=$("#login");
// 	login.on("click",function(e){
// 		alert(34);
// 		var userval=$("input[name=username]").val();
// 		var pwdval==$("input[name=password]").val();
// 		alert(userval+" "+pwdval);
// 		if(userval.length>0&&pwdval.length>0){
// 			alert(12);
// 			$.ajax({
// 				url:"/judgeLogin",
// 				method:"POST",
// 				data:{username:userval,password:pwdval},
// 				success:function(req){
//                      alert("登陆成功");
// 				}
// 			});
// 			e.preventDefault();
// 		}
// 	});
// });
//ajax和form表单都能给后台提交数据
//ajax提交完数据之后并不会跳转，但是form表单提交完数据之后就会跳转
$(document).ready(function(){
	var login=$("#login");
	login.on("click",function(e){
		var userval=$("input[name=username]").val();
		var pwdval=$("input[name=password]").val();
		var code=$("input[name='code']").val();
		var number=$(".number").html();
		if(userval.length>0&&pwdval.length>0&&code==number){
			$(".loginForm").trigger("submit");
			e.preventDefault();
		}
	});


    $("#code").on("keyup",function(){
			var code=$("input[name='code']").val();
		    var number=$(".number").html();
		    if(code!==number){
		    	$(".codeTip").attr("src","/images/loginimages/20170217153822.png");
		    	$(".codeTip").css("display","inline-block");
		    }else{
		    	$(".codeTip").attr("src","/images/loginimages/20170217153654.png");
		    	$(".codeTip").css("display","inline-block");
		    }
			
		});

	$("input[name='username']").on("keyup",function(){
		var val=$(this).val();
		if(val&&val.length>0){
			//异步请求
			$.ajax({
               method:"POST",
               url:"/ajaxUsername",
               data:{mbj:val},   //传给后台的数据
               success:function(wmy,resText,jqXHR){  //只有等后端的数据返回的时候，这个函数才会执行
                   if(wmy.flag=="true"){
                   	$(".usernameTip").attr("src","./images/loginimages/20170217153654.png");
                   	$(".usernameTip").css("display","inline-block");
                   }else{
                   	$(".usernameTip").attr("src","./images/loginimages/20170217153822.png");
                   	$(".usernameTip").css("display","inline-block");
                   }
               }
			});
		}
	});
	$("input[name='username']").on("blur",function(){
		var val=$(this).val();
		if(val&&val.length>0){
			//异步请求
			$.ajax({
               method:"POST",
               url:"/ajaxUsername",
               data:{mbj:val},   //传给后台的数据
               success:function(wmy,resText,jqXHR){  //只有等后端的数据返回的时候，这个函数才会执行
                   if(wmy.flag=="true"){
                   	$(".usernameTip").attr("src","./images/loginimages/20170217153654.png");
                   	$(".usernameTip").css("display","inline-block");
                   }else{
                   	$(".usernameTip").attr("src","./images/loginimages/20170217153822.png");
                   	$(".usernameTip").css("display","inline-block");
                   }
               }
			});
		}
	});

	$(".number").on("click",function(){
		$.ajax({
			method:"POST",
			url:"/getCode",
			success:function(data){
				$(".number").text(data.num);
			}
		});
	});
});