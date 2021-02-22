var arr=[10,11,13,17,15];
var arr2=[8,9,10,11,16,17,1];


// for(let i of arr)

// {
//     for(let j of arr2)
//     {
//         if(i==j)
//         {
//             console.log(j);
//         }
//     }
// }

var p1=0;
var p2=0;
// while((p1<arr.length)&(p2<arr2.length))
while(p1.length==p2.length)
{
    if(arr[p1]==arr2[p2])
    {
        console.log(arr[p1]);
        p1+=1;

    }
    else if(arr[p1]>arr2[p2])
    {
        p2+=1;
    }
    else{
        p1+=1;
    }
}