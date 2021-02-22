var text="hai hello hai hello hai how",count=0;
var words=text.split(" ")
console.log(words);
var dic=[];
for(let word of words)
{
    if(word in dic)
    {
        dic[word]+=1;
        dic[count]+=1;
        

    }
    else
    {
        dic[word]=1;
        dic[count]=1;
    }

    
}
console.log(dic);