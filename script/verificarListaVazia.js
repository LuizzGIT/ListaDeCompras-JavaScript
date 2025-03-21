const MensagemListaVazia = document.querySelector(".mensagem-lista-vazia"); // pega o elemento do html

function verificarListaVazia(ListaCompras){
    const itensLista = ListaCompras.querySelectorAll("li"); // pega todos os elementos li
    if(itensLista.length != 0){
        MensagemListaVazia.style.display = "none"; // se a lista nao estiver vazia ele nao exibe a mensagem	
    }
    else{
        MensagemListaVazia.style.display = "block"; // se a lista estiver vazia ele ex
    }
}

export default verificarListaVazia;