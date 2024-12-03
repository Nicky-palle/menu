let b2 = document.getElementById("b2");
let b2out = document.getElementById("b2out");
let menu=0;
b2.addEventListener("click",resultat);

function resultat(){
    b2out.innerText = "Du har valgt anden menu";
    if(menu==0){
        b2out.innerText = "Du har valgt anden menu";
        menu=1;
    }else{
        b2out.innerText = "Du har nu fravalgt anden menu";
}
}