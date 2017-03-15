var mongoose=require("mongoose");
var utils=require('../methods/utils');
var Schema=mongoose.Schema;

var ArticleSchema=new Schema({
	title:String,
	content:String,
	tags:String,
	author:{
		type:Schema.Types.ObjectId,
		ref:"user"
	},
	createDate:{
		type:Date,
		default:new Date()     //这个default没有什么用，如果两篇文章的创建事件差不多，就不能区别创建创建时间
	}
});


ArticleSchema.pre("save",function(next){
	this.createDate=Date.now;
	next()
})

module.exports=ArticleSchema;