import { NegociacaoController } from "./controllers/negociacao-controller.js";

const form = document.querySelector('.form')
const negociacaoController = new NegociacaoController();

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const dataInput = document.getElementById('data') as HTMLInputElement;
    const quantidadeInput = document.getElementById('quantidade') as HTMLInputElement;
    const valorInput = document.getElementById('valor') as HTMLInputElement;

    negociacaoController.adiciona(dataInput, quantidadeInput, valorInput);

    dataInput.value = '';
    quantidadeInput.value = '';
    valorInput.value = '';
});
