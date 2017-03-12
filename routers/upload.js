var formidable=require("formidable");
var express=require("express");
var UserModel=require("../models/user");
var fs=require("fs")

var router=express.Router()

router.post("/headPic",function(req,res){
     var form=new formidable.IncomingForm(); //创建一个即将要来的form对象
     form.uploadDir=__dirname.slice(0,__dirname.lastIndexOf("\\"))+"\\public\\authorImages"; //如果要改变文件上传的路径，就使用这个属性，否则默认上传的文
     form.keepExtensions=true;//默认是false，表示不保留上传文件的后缀名
     
     form.parse(req,function(err,fields,files){ //这个方法用来解析传来的表单数据，是最重要的方法，request
         var picName="headPic";      //input type=file name=headPic
         if(files[picName].name.length>0){
         	//说明文件成功上传
         	var oldPath=files[picName].path;       //这里其实还可以优化，因为没有上传题图的时候，会产生一个0kb的文件
            var oldName=files[picName].name;
            var date=new Date();
            var dateTime=date.getTime().toString();
            var newName=oldName.substring(0,oldName.lastIndexOf("."))+dateTime+oldName.substr(oldName.lastIndexOf("."));
            var newPath=oldPath.replace(oldPath.substr(oldPath.lastIndexOf("\\")+1),newName);
            fs.rename(oldPath,newPath,function(){
            	 var img="/authorImages/"+newName;
                 UserModel.update({_id:req.session.user._id},{$set:{img:img}},function(err){
                         if(err){
                         	res.json({flag:"保存失败"})
                         }else{
                            req.session.user.img=img
                            res.json({headPic:img})   //图片在服务器的存放路径
                         }

                 })
            });
            
         }else{
         	res.json({flag:"没有选择文件"})
         }
     }); 

})


module.exports=router