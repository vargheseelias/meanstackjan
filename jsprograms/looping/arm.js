var arm=0;
var rem=0;
var num=153;

temp=num;
while(temp>0)
{
rem=temp%10;
temp=parseInt(temp/10); // converting float into Integer
arm+=rem*rem*rem;
}
if(arm==num)
{
console.log("Armstrong number");
}
else
{
console.log("Not Armstrong number");
}