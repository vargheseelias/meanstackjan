var num=456;
var res=0;


while(num!=0)
{
   digit=num%10; //1231!=0 12!= 1!=0
  
   res=res*10+digit; //0*10+3=3 3*10+3 32*10+1
   num=Math.floor(num/10); //123//10=12 12//10=1 1//10=0

}
console.log(res);