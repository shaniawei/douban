var express=require("express");

var router=express.Router();

router.get("/",function(req,res){
   var random=parseInt(Math.random()*9000+1000);
   res.render("douban",{random:random});
});

router.get("/index",function(req,res){
   //首先你在浏览器输入http://127.0.0.1:1337/index
   //node服务器拿到请求，构造好请求对象和相应对象
   //然后node服务器找到/index的处理函数
   //在处理函数中，你可以从数据库中拿到数据，然后渲染到ejs页面
   //ejs被相应对象送回浏览器端
   // console.log("cookies:",req.cookies)
   // var newCookie=req.cookies.a+"mbj"
   // res.setHeader("Set-Cookie",["a="+newCookie]ex)
   //res.setHeader("Set-Cookie", ['a=000', 't=1111', 'w=2222']); //给浏览器发送cookie
   res.render("douban",{});
});

module.exports=router;

