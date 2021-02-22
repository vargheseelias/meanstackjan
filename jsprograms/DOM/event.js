var ck=document.querySelector("#clk")
ck.addEventListener("click",()=>{
    ck.textContent="clicked"
    ck.style.color="red";
})

var dck=document.querySelector("#dbclk")
dck.addEventListener("dblclick",()=>{
    dck.textContent="double clicked"
    dck.style.color="blue";
})

var mse=document.querySelector("#over")
mse.addEventListener("mouseover",()=>{
    mse.textContent="poda myre"
    mse.style.color="blue";
})

var mose=document.querySelector("#over")
mose.addEventListener("mouseout",()=>{
    mose.textContent="point mouse on me"
    mose.style.color="green";
})