var num=7,count=0;

for(var i=2;i<num;i++)
{
    if(num%i==0) 
    {

        count=1;
        break;
    }
    // else{
    //    var count=0;
    //    break;
        
    // }
}
if(count==0)
{
            console.log(num+" "+"is  a prime number");

}
else{
            console.log(num+" "+"is not a prime number");

}