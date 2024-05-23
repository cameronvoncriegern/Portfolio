const a = window.matchMedia("(prefers-color-scheme: dark)");
console.log(a.matches);
let nav = document.getElementById("nav");
let neontext = document.getElementsByClassName("neontext");

let lightswitch = document.getElementById("lightswitch");

lightswitch.addEventListener("click",()=>{   
    lightswitch.classList.toggle("off");
for(i=0; i<neontext.length; i++){
    neontext[i].classList.toggle("off");
}
    nav.classList.toggle("off");

});
