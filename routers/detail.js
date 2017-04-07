var express=require("express");
var ArticleModel=require("../models/article");
var utils=require('../methods/utils');

var router=express.Router();

router.get("/detailArticle/:id",function(req,res){
	 ArticleModel.find({_id:req.params.id}).populate(["author"]).exec(function(err,doc){
	 	doc=doc[0]
	 	doc.createDateFormated=utils.formateDate(doc.createDate);
	 	doc.tagarr=utils.tagssplit(doc.tags);
        res.render("detailArticle",{asd:req.session.user,doc:doc});
     });
   
});




module.exports=router;