var express=require("express");                //express是node.js的一个框架，现在普遍被使用
var bodyParser=require("body-parser");         //127.0.0.1:1337/login?username=wmy&pwd=123      
var cookieParser=require("cookie-parser");
var session=require("express-session");
var path=require("path");
var http=require("http");

var login=require("./routers/login");
var index=require("./routers/index");
var ajax=require("./routers/ajax");
var upload=require("./routers/upload");
var article=require("./routers/article");

var mongodb=require("./mongoose");

var app=express();
var server=http.createServer(app);  //use app application to create server
server.listen(1337,"127.0.0.1",function(err){
    if(err){
    	console.log("server listening error");
    	return;
    }
    console.log("server is listenning on 127.0.0.1:1337");
});
// socket.serverSocket(server);  //pass server object to socket.io

mongodb.connectToMongoDB(); 

//app.set("views",__dirname+"/views");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("ejs",require("ejs-mate"));
// app.locals._layoutFile="layout.ejs";   //所有的views界面下的ejs都使用这个布局文件

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	secret:"miaomiao",
	resave:false,
	saveUninitialized:false,
	cookie:{httpOnly:true}
}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/",login);
app.use("/",index);
app.use("/",ajax);  
app.use("/",upload);
app.use("/",article) 