var num1=12;
var num2=8;
var num3=14;


if((num1>num2)&(num1>num3) )
{
    
    large=num1;
    if(num2>num3)
    {
        seclarge=num2;
        small=num3;
    }
    else{
        seclarge=num3;
        small=num2;
    }
    
}
else if ((num2>num1)&(num2>num3))
 {
    
    large=num2;
    if(num1>num3)
    {
        seclarge=num1;
        small=num3;
    }
    else{
        seclarge=num3;
        small=num1;
    }
}
else if((num3>num1)&(num3>num2))
{
    
    large=num3;
    if(num1>num2)
    {
        seclarge=num1;
        small=num2;
    }
    else{
        seclarge=num2;
        small=num1;
    }
}

console.log(large+" "+seclarge+" "+small);

