var express=require("express");
var ArticleModel=require("../models/article");
var utils=require('../methods/utils')

var router=express.Router();

router.get("/detailArticle/:id",function(req,res){
	 ArticleModel.findOne({_id:req.params.id},function(err,doc){
	 	doc.createDateFormated=utils.formateDate(doc.createDate)
        res.render("detailArticle",{asd:req.session.user,doc:doc});
     });
   
});




module.exports=router;