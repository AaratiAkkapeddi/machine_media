let nav = document.querySelector("nav");
document.querySelector("#nav-trigger").addEventListener("click", function(){
    if(nav.classList.contains("open")){
        nav.classList.remove("open")
    }else{
        nav.classList.add("open")
    }
})