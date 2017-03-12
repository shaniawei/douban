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

module.exports={
	formateDate:formateDate
}