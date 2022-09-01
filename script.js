let select1=document.getElementById("select1");
let select2=document.getElementById("select2");
let select3=document.getElementById("select3");
let text=document.getElementById("text");

let btn=document.getElementById("btn");





select1.addEventListener("change",function(e){
    let ev=e.target.value;
    text.style.fontSize=ev;
    localStorage.setItem("font-size",ev)
    

})
select2.addEventListener("change",function(e){
    let ev=e.target.value;
    text.style.backgroundColor=ev;
    localStorage.setItem("background-color",ev)
   

})


select3.addEventListener("change",function(e){
    let ev=e.target.value;
    text.style.color=ev;
    localStorage.setItem("text-color",ev)
   

})


btn.addEventListener("click",function(){
    localStorage.clear();
  let abc=  text.style.fontSize="16px";
   let ab= text.style.backgroundColor="pink";
   let color=text.style.color='black';
    select1.value=abc;
    select2.value=ab;
    select3.value=color;


})

function autostyle(){
  let font=  localStorage.getItem("font-size");
  let background=  localStorage.getItem("background-color");
  let color=  localStorage.getItem("text-color");
  text.style.backgroundColor=background;
  text.style.fontSize=font;
  text.style.color=color;


}
autostyle();