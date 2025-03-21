import { criarItemLista } from "./script/criarItemLista.js"; // importa a funcao criarItemLista do arquivo criarItemLista.js
import verificarListaVazia from "./script/verificarListaVazia.js";
const ListaCompras = document.getElementById("lista-de-compras");// pega todos os elementos do html
const SalvarBotao = document.getElementById("adicionar-item");// pega todos os elementos do html

SalvarBotao.addEventListener("click", (evento) => {
    evento.preventDefault();  
   const itemdaLista = criarItemLista(); // chama a funcao
   ListaCompras.appendChild(itemdaLista); // adiciona o li ao ul
   verificarListaVazia(ListaCompras); // chama a funcao APOS  COLOCAR O ITEM NA LISTA
});



verificarListaVazia(ListaCompras); 

