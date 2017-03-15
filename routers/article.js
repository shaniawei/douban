var express=require("express");
var UserModel=require("../models/user");
var ArticleModel=require("../models/article");
var fs=require("fs")

var router=express.Router()

router.post("/sendArticle",function(req,res){
     var title=req.body.titlecontent,
         content=req.body.content,
         tags=req.body.tags,
         article=new ArticleModel({
            title:title,
            content:content,
            tags:tags,
            author:req.session.user._id
         })
         article.save(function(err){
              res.redirect("/success");
         })
     
    

})

module.exports=router