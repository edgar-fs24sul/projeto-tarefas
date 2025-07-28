function mudarTema(){
    const header = document.querySelector("#header");
    if(header.classList.contains("bg-white")){
        header.classList.remove("bg-white", "text-black", "fill-black");
        header.classList.add("bg-black", "text-white", "fill-white");
    }else{
        header.classList.remove("bg-black", "text-white", "fill-white");
        header.classList.add("bg-white", "text-black", "fill-black");
    }
}

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

function buscarTarefas(){
    fetch("http://localhost:3000/tarefas")
    .then(resposta => resposta.json())
    .then(json => {
        carregarTarefas(json);
    })
}

buscarTarefas();

function carregarTarefas(tarefas){
    const listaDeTarefas = document.querySelector("#lista-de-tarefas");
    tarefas.map(tarefa =>  {
        listaDeTarefas.innerHTML += `<div class="bg-white shadow rounded p-4">
                <h3 class="font-bold">${tarefa.titulo}</h3>
                <p class="text-[14px] text-gray-500 line-clamp-3 mb-4">${tarefa.descricao}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold text-[12px]">${tarefa.data}</span>
                    <div class="flex gap-3">
                        <box-icon name='pencil'></box-icon>     
                        <box-icon name='trash' class="cursor-pointer" onclick="deletarTarefa(${tarefa.id})"></box-icon>     
                    </div>
                </div>
            </div>`
    })
}

function criarTarefa(){
    event.preventDefault;
    fetch("http://localhost:3000/tarefas", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(capturarDados("#formCriar"))
    })
}

function deletarTarefa(idDaTarefa){
    fetch(`http://localhost:3000/tarefas/${idDaTarefa}`, {
        method: "delete",

    })
}
function capturarDados(idDeUmFormulario){
    let form = document.querySelector(idDeUmFormulario);
    let formData = new FormData(form);
    let dados = Object.fromEntries(formData.entries());
    return dados;
}



// criar Tela para Edição;
// Confirmação ao deletar
