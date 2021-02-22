var pattern="ABABAC";
var dic={};
for(let ch of pattern)
{
    if(ch in dic)
    {
        console.log("recursive is "+ch);
        break;
    }
    else
    {
        dic[ch]=1;
    }
}