const input=document.getElementById("input-btn");
const text=document.getElementById("txt-area");
const btn=document.getElementById("generate");

btn.addEventListener("click",()=>{
    let number = Number(input.value);
       text.value = "";
    for(let i=number;i<=number*10;i=i+number){
        text.value+=i+"\n";
    }
})