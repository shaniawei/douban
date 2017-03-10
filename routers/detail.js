var express=require("express");

var router=express.Router();

router.get("/detailArticle",function(req,res){
   res.render("detailArticle",{});
});




//127.0.0.1:1337/login?username=wmy&pwd=123  
//body-parser 
// router.get("/login",function(req,res){
//    var username=req.body.username;
//    var pwdss=req.body.pwd;
//    //相对于mongoose帮助我写select语句查询
//    //select * from user where username=username and password=password
//    mongoose.find({username:username,password:pwdss},function(err,data){
//         if(data===null){
//         	//说明数据库里面没有这个人
//         	res.render("login",{});
//         }else{
//         	//user 
//         	//username,password,age,gender,school
//         	//data.username.data.password,data.age,data.gender
//         	res.render("loginSuccess",{data:data});
//         }
//    });
// })


module.exports=router;