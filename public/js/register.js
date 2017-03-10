$(document).ready(function(){
	var pwd=$("input[name='password']");
	pwd.on("focus",function(){
		$(".askpwd").html("&nbsp;至少包括字母和数字，最短8个字符，区分大小写");
		$(".askpwd").css("color","#808080");
	});
	pwd.on("blur",function(){
		var pwdval=$("input[name='password']").val().length;
		if (pwdval>0&&pwdval<8) {
			$(".askpwd").html("&nbsp;密码长度不足8个字符");
		    $(".askpwd").css("color","red");
		}else if (pwdval==0) {
			$(".askpwd").html("&nbsp;密码不能为空");
		    $(".askpwd").css("color","red");
		}
	});
	var username=$("input[name='username']");
	username.on("focus",function(){
		$(".askuser").html("&nbsp;中、英文均可，最长14个英文或4个汉字");
		$(".askuser").css("color","#808080");
	});
	username.on("blur",function(){
		var usernameval=$("input[name='username']").val().length;
		if (usernameval==0) {
			$(".askuser").html("&nbsp;名号不能为空");
			$(".askuser").css("color","red");
		}
	});
   $("input[type=checkbox]").on("click",function(){
   	 var check=this.checked;
   	 var submit=$("input[type='submit']");
   	 if(check!=false){
       submit.css({color:"#FFF",backgroundColor:"#3FA156"});
   	 }else{
   	   submit.css({color:"#999",backgroundColor:"#F0F0F0"});
   	 }
   });
   $("#submi").on("click",function(e){
   	   var email=$("input[name='email']").val();
   	   var pwd=$("input[name='password']").val();
   	   var user=$("input[name='username']").val();
   	   var check=$("#check").checked;
   	   if (email.length>0&&pwd.length>0&&user.length>0&&check!=false) {
   	   	$(".registerForm").trigger("submit");
   	   	e.preventDefault();
   	   }
   });
   $("input[name='email']").on("blur",function(){
   	   var email=$(this).val();
   	   if (email.length>0) {
   	   	if (email.indexOf("@")<0||email.indexOf(".com")<0) {
   	   	$(".emailtipic").attr("src","./images/loginimages/20170217153822.png");
   	   	$(".emailtip").text("邮箱地址不合法").css({color:"red",fontSize:13});
   	   }else{
   	   	$.ajax({
   	   		method:"POST",
   	   		url:"/ajaxUsername",
   	   		data:{mbj:email},
   	   		success:function(data,resText,jqXHR){
   	   			if(data.flag=="true"){
   	   				$(".emailtipic").attr("src","./images/loginimages/20170217153822.png");
                   	$(".emailtip").text("该邮箱地址已注册").css({color:"red",fontSize:13});
                   }else{
                   	$(".emailtipic").attr("src","./images/loginimages/20170217153654.png");
                   	$(".emailtip").text("").css({color:"red",fontSize:13});
                   }
   	   		}
   	   	});
   	   }
   	   }
   });
   $("input[name='username']").on("blur",function(){
   	   var username=$(this).val();
   	   if (username.length>0) {
   	   	$.ajax({
   	   		method:"POST",
   	   		url:"/ajaxUsername",
   	   		data:{mbj:username},
   	   		success:function(data,resText,jqXHR){
   	   			if(data.flag=="true"){
   	   				$(".usertipic").attr("src","./images/loginimages/20170217153822.png");
                   	$(".usertip").text("该名号已被占用").css({color:"red",fontSize:13});
                   	$(".askuser").html("");
                   }else{
                   	$(".usertipic").attr("src","./images/loginimages/20170217153654.png");
                   	$(".usertip").text("").css({color:"red",fontSize:13});
                   	$(".askuser").html("");
                   }
   	   		}
   	   	});
   	   }  
   	});
});