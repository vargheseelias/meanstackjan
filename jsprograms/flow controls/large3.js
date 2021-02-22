var num1=20;
var num2=30;
var num3=10;
if((num1>num2)&(num1>num3) )
{
    // console.log(num1+" is greater");
    large=num1;
    if(num2>num3)
    {
        seclarge=num2;
    }
    else{
        seclarge=num3;
    }
    
}
else if ((num2>num1)&(num2>num3))
 {
    // console.log("num2 is greater");
    large=num2;
    if(num1>num3)
    {
        seclarge=num1;
    }
    else{
        seclarge=num3;
    }
}
else if((num3>num1)&(num3>num2))
{
    // console.log("num3 is greater");
    large=num3;
    if(num1>num2)
    {
        seclarge=num1;
    }
    else{
        seclarge=num2;
    }
}
console.log(seclarge +" is second large")
console.log(large +" is large")

