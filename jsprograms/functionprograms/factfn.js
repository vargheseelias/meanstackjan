function fact(num)
{
    fact=1;
for(var i=1;i<=num;i++)
{
       fact=fact*i;  
}
return fact;

}

var res=fact(5);
console.log(res);