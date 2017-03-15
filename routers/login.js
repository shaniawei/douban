
var express=require("express");
var UserModel=require("../models/user");
var ArticleModel=require("../models/article");
var utils=require('../methods/utils');

var router=express.Router();

router.get("/getregister",function(req,res){  //注册页面
   res.render("register",{});  //返回注册
});

router.get("/loginPage",function(req,res){   //登陆页面
   res.render("loginPage",{});
});

router.get("/phonelogin",function(req,res){   //手机登陆页面
   res.render("phonelogin",{});
});

router.get("/success",function(req,res){   //
   ArticleModel.find({}).limit(10).sort("-createDate").populate(["author"]).exec(function(err,docs){
       if(err){
          docs="";
       }
       docs.forEach(function(doc){
       doc.createDateFormated=utils.formateDate(doc.createDate);
       });
       res.render("success",{asd:req.session.user,docs:docs});
   })
});

router.get("/personal",function(req,res){   //个人主页
   // ArticleModel.findOne({_id:req.params.id},function(err,doc){
   //  doc.createDateFormated=utils.formateDate(doc.createDate)
   //      res.render("personal",{asd:req.session.user,doc:doc});
   //   });
   ArticleModel.find({author:req.session.user._id},function(err,docs){
       if(err){
          docs="";
       }
       docs.forEach(function(doc){
       doc.createDateFormated=utils.formateDate(doc.createDate);
       });
       
       res.render("personal",{asd:req.session.user,docs:docs});
   })
   
});

// docs=[{title:"",content:"",tags:""},{},{}]

router.get("/writeArticle",function(req,res){   //文章编辑页面
   // var user=req.session.user;
   res.render("writeArticle",{asd:req.session.user});
});


router.post("/login",function(req,res){    //注册逻辑,接受来自注册页面的数据
     var username=req.body.username;
     // var email=req.body.email;
     var password=req.body.password;
     var email=req.body.email;
     // var check=req.body.check;
     var user=new UserModel({username:username,password:password,email:email});  //保存该用户到数据库
     user.save(function(err){
     	res.render("loginPage",{});  //注册成功，返回注册成功页面loginPage
     });
});

router.get("/logout",function(req,res){
  req.session.user=null;
  res.redirect("/");
})

router.post("/judgeLogin",function(req,res){  //登陆判断,判断用户能不能登陆成功
     if(req.session.user){
       res.redirect("/success")
       return ;
     }
     var a=req.body.username;    //mbj,347475@
     var password=req.body.password;
     //通过mongoose帮助我们到mongodb里面去查询数据，
     if (a.indexOf("@")>-1) {
      UserModel.findOne({email:a,password:password},function(err,doc){
        login(err,doc,req,res);
     });
     }else{
      UserModel.findOne({username:a,password:password},function(err,doc){
      login(err,doc,req,res);
     });
     }
     
});

function login(err,doc,req,res){
      if (err) {
        console.log("query mongodb error");
        return;
      }else{
        if (doc) {
          req.session.user=doc;
          res.redirect("/success")
        }else{
          res.render("loginPage",{});
        }
      }
}

router.post("/pwdErrTip",function(req,res){
    var username=req.body.username,
        password=req.body.password;
        UserModel.findOne({username:username,password:password},function(err,doc){
            if(doc){
              req.session.user=doc;
              res.json({flag:"true"});
            }else{
              res.json({flag:"false"});
            }
        });
});



module.exports=router;