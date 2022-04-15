var o1=document.querySelector(".father");
var o2=document.querySelector(".bM");
var isdplay;
function playclick(){
    if(isdplay==false){
        o1.style.right="0px";
        isdplay=true;
    }
    else
    {
        o1.style.right="-600px";
        isdplay=false;
    }
}
o2.onclick=()=>{
playclick();
};
onload=playclick();
var o3=document.getElementById("b1");
var o4=document.getElementById("b2");
var o5=document.getElementById("a1");
var o6=document.getElementById("a2");
var o7=document.getElementById("textarea");
var o8=document.getElementById("div");
o3.onclick=()=>{
o8.innerHTML=o7.value;
localStorage.setItem("value",o7.value);
};
o4.onclick=()=>{
localStorage.clear();
o8.innerHTML="";
o7.value="";
};
onload=function(){
    o7.value=localStorage.getItem("value");
    o8.innerHTML=o7.value;
}
o6.onclick=()=>{
o3.click();
};
o5.onclick=()=>{
o4.click();
}