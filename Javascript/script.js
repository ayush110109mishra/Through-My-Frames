const btn=document.getElementById("themeBtn");

 
  
btn.addEventListener("click", function(){

    let color=
    document.body.classList.toggle("dark");

if(color){
    btn.innerText="🌙 Dark Mode";
     
}

else{
    btn.innerText="☀️ Light Mode";
     
}
 
    
})