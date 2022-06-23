function loading()
{
    document.getElementById("submit").disabled=true;
}
document.getElementById("fname").addEventListener("onmouseleave",display);
function display()
{
    document.getElementById("submit").disabled=false;
}
function show()
{
    var labels = document.getElementsByTagName('label');
    var x=document.querySelectorAll('input[type="text"]');
    document.getElementsByClassName("box2")[0].innerHTML='<img src="PngItem_4786490.png" width="200px" height="200px"\>Registered successfully'+"<br><br>"+document.getElementsByClassName("box2")[0].innerHTML;
    for(var i=0;i<x.length;i++)
    {
        if(x[i].value!="")
        {
            var y=labels[i].innerHTML+x[i].value;
            document.getElementsByClassName("box3")[0].innerHTML+=y+"<br>";
        }
    }
}
    