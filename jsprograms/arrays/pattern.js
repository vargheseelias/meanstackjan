// var arr=[3,4,7];
// var arr2=[];
// var sum=0;
// for(let i in arr)
// {
//     sum=sum+i;
// }

// for(let j in arr)
// {
    
//     arr2.push(sum-j)
// }
// console.log(arr2);

var arr=[1,2,3,4,5];
var num=6;
var arr2=[];
// for(let i of arr)
// {
//     for(let j of arr)
//     {
//         if(i+j==num &(i!=j))
//         {
//             arr2.push(i,j);
//             break;
//         }
    
//     }
    
// }
// console.log(arr2);

// for(i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]+arr[j]==num)
//         {
//             // arr2.push([i],[j]);
//             console.log(arr[i],arr[j]);
//             break;
//         }
    
//     }
    
// }
// console.log(arr2);

var low=0;
var upp=arr.length-1;
while(low<upp)
{
    let total=arr[low]+arr[upp];
    if(total==num)
    {
        console.log(arr[low],arr[upp]);
    }
    else if(total<num)
    {
        low+=1;
    }
    else
    {
        upp-=1;
    }
        low+=1;
        upp-=1;
    
}
