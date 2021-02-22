var emp={
    id:101,
    name:"ajay",
    desig:"manager",
    salary:25000
}
emp.salary+=3000;
console.log(emp.salary);

if("gender" in emp)
{
    console.log("exist");
}
else
{
    emp.gender="male";
    console.log(emp);
}
