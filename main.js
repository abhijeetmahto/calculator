function add()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    var r;
    r=a+b;
    document.getElementById("res").innerHTML=r;
}
function sub()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    var r;
    r=a-b;
    document.getElementById("res").innerHTML=r;
}
function mul()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    var r;
    r=a*b;
    document.getElementById("res").innerHTML=r;
}
function div()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    var r;
    r=a/b;
    document.getElementById("res").innerHTML=r;
}