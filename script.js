function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
function chkhome() 
{
	var uid=new String(document.getElementById('uid').value);
	alert("HELLO"+uid.length);
	if(uid.length>6 || uid.length<6)
	{
		alert("wrong input of roll no");	
	}
		
		var date=new String(document.getElementById('date').value);
		var d1=date.split("-");		
		if(parseInt(d1[0])>1997)
		{
			alert("not elegible for counselling");
			return false;
		}
		else
		{
		//return true;
		}
}
function f()
{ 	
	alert("in function");
	  window.location.reload();
alert("out");
}