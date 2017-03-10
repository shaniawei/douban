var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var ArticleSchema=new Schema({
	title:String,
	content:String,
	tag:String,
	
});