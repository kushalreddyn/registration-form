function perform()
{
    var x=document.getElementById("fname").value;
    var y=document.getElementById("lname").value;
    var arr=x.split(" ");
    var arr1=y.split(" ");
    document.getElementById("result").innerHTML=concat(arr)+" "+concat(arr1);
}
function concat(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
    }
    return arr.join(" ");
}