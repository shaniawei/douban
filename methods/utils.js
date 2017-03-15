function formateDate(date){
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var s=date.getSeconds();
    var str=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+s;
    return str;
}

function  tagssplit(str){
	var newstr=str.split(";");
	// newstr.splice(newstr.length-1,1);
	return newstr;
}

module.exports={
	formateDate:formateDate,
	tagssplit:tagssplit
}