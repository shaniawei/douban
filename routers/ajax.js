var express=require("express");
var UserModel=require("../models/user");

var router=express.Router();

router.post("/ajaxUsername",function(req,res){
    var username=req.body.mbj;   //拿到ajax传过来的数据
    if (username.indexOf("@")>-1) {
        UserModel.findOne({email:username},function(err,doc){
        if(err){
            console.log(err);
            return ;
        }
        if(doc){
            //说明存在这个用户
            res.json({flag:"true"});  //这里就是返回数据给前端，
        }else{
            res.json({flag:"false"});
        }
    });
    }else{
        UserModel.findOne({username:username},function(err,doc){
        if(err){
            console.log(err);
            return ;
        }
        if(doc){
            //说明存在这个用户
            res.json({flag:"true"});  //这里就是返回数据给前端，
        }else{
            res.json({flag:"false"});
        }
    });
    }
});
router.post("/signtext",function(req,res){
    var signtext=req.body.signtext;
    if (req.session.user) {
        UserModel.update({_id:req.session.user._id},{$set:{reserve:signtext}},function(err){
            if(err){
                res.json({flag:"false"});
            }else{
                req.session.user.reserve=signtext;
                res.json({flag:"true"});
            }
        });
    }
});

module.exports=router;