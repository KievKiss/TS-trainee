import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController(); // Adicione os parênteses aqui
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona(); // Invocação correta do método adiciona()
});
