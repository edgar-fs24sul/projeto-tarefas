const divSombra = document.querySelector("#sombra");
const divGaveta = document.querySelector("#gaveta");

function incluirTarefa(){
    divSombra.classList.remove("opacity-0", "invisible");
    divGaveta.classList.remove("opacity-0", "invisible");
}

function fecharModal(){
    divSombra.classList.add("opacity-0", "invisible");
    divGaveta.classList.add("opacity-0", "invisible");
}
