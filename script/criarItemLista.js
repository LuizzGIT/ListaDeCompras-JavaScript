import gerarDiadaSemana from "./gerarDiadaSemana.js"; // importa a funcao gerarDiadaSemana
const inputItem = document.getElementById("input-item"); // pega todos os elementos do html
let contador = 0;

export function criarItemLista(){

    if(inputItem.value === ""){
        alert("Digite um item para adicionar a lista de compras");// vou verificar se possui algum item digitado
        return; 
    }

    const itemdaLista = document.createElement("li"); // cria o elemento li no html
    const containerItemLista = document.createElement("div"); // cria o elemento div no html
    containerItemLista.classList.add("lista-item-container"); // adiciona a classe ao containerItemLista
    const inputCheckbox = document.createElement("input"); // cria o elemento input

    inputCheckbox.type = "checkbox"; // adiciona o tipo checkbox ao input
    inputCheckbox.id = "checkbox-" + contador++; // adiciona o id ao input

    const nomeItem = document.createElement("p"); // cria o p
    nomeItem.innerText = inputItem.value; // adiciona o valor do input ao p

    inputCheckbox.addEventListener("click", function(){ // adiciona um evento ao checkbox
        if(inputCheckbox.checked){ // se o checkbox estiver marcado
            nomeItem.style.textDecoration = "line-through"; // adiciona uma linha no texto
        }
        else{
            nomeItem.style.textDecoration = "none"; // se nao estiver marcado nao adiciona a linha
    }
    })

    containerItemLista.appendChild(inputCheckbox); // adiciona o checkbox a div 
    containerItemLista.appendChild(nomeItem); // adiciona o p a div
    itemdaLista.appendChild(containerItemLista); // adiciona a div ao li
    const dataCompleta = gerarDiadaSemana(); // chama a funcao gerarDiadaSemana

    
    const itemData = document.createElement("p"); // cria o p
    itemData.innerText = dataCompleta; // adiciona a data ao p
    itemData.classList.add("texto-data"); // adiciona a classe ao p

    itemdaLista.appendChild(itemData); // adiciona a data ao li

   return itemdaLista;
}