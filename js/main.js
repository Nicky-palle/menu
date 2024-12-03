let b1 = document.getElementById("b1");
let b1out = document.getElementById("b1out");
let menu=0;
b1.addEventListener("click",resultat);

function resultat(){
    b1out.innerText = "Du har nu valgt første menu";
if(menu==0){
    b1out.innerText = "Du har nu valgt første menu";
    menu=1;
}else{
    b1out.innerText = "Du har nu fravalgt første menu";
    menu=0;
}
}

