//(arithmetic oprators--+,-,/,*,%,**)

var num=10;
var num2=20;
console.log("address"+(num+num2));
console.log("address"+(num-num2));
console.log("address"+(num*num2));
console.log("address"+(num/num2));
console.log("address"+(num%num2));
console.log("address"+(num**num2));


//relational operators(<,>,=,==)

console.log(10<20<30);
console.log(10!=10);
console.log("10"==10);
console.log("10"===10); //copmaring content and type of values

//logical operators(&,//,|,^)

// x   y  x&y  x|y  x^y
// 1   0   0    1    1
// 1   1   1    1    0
// 0   1   0    0    0
// 0   0   0    1    1

console.log((2>5)&(3>5));
console.log((2>5)|(3>8));
console.log(2&4);
console.log(2|4);
console.log(true<false);

//increment and decrement opeartor(++,--)
console.log(num++); //printing num and adding 1
console.log(num);  
console.log(++num);  //adding 1 and printing results

console.log(num--); //printing num and substracting 1
console.log(num);  
console.log(--num);  //substracting 1 and printing results
