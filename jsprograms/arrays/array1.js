// var data=[10,20,30,40];
// data.push(500);
// for(let i=0;i<data.length;i++)
// {
//     console.log(data[i]);
// }

// for(let num of data)
// {
//     console.log(num);
// }

var arr=[10,11,12,13,14];
var sum=0;
var even=[];
var odd=[];
for(let num of arr)
{
    sum=sum+num;
    if(num%2==0)
    {
        even.push(num);
    }
    else
    {
        odd.push(num);
    }
}
console.log(sum);
console.log(odd);
console.log(even);
for(let i of odd)
{
    console.log(i);
}
for(let j of even)
{
    console.log(j);
}