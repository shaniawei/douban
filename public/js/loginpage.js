$(document).ready(function(){
	$("#subm").on("click",function(e){
		var username=$("input[name='username']").val();
		var password=$("input[name='password']").val();
		if (username.length>0&&password.length>0) {
			$.ajax({
				method:"POST",
				url:"/pwdErrTip",
				data:{username:username,password:password},
				success:function(data,resText,jqXHR){
                     if(data.flag==="true"){
                     	$(".loginForm").trigger("submit");
                     }else{
                     	$(".pwdTip").text("密码错误").css("color","#f00");
                     }
				}
			});
			e.preventDefault();
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
                   }else{
                   	$(".usernameTip").attr("src","./images/loginimages/20170217153822.png");
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
                   }else{
                   	$(".usernameTip").attr("src","./images/loginimages/20170217153822.png");
                   }
               }
			});
		}
	});
});