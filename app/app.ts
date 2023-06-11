import { NegociacaoController } from "./controllers/negociacao-controller.js";

const form = document.querySelector('.form')
const negociacaoController = new NegociacaoController();

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const dataInput = document.getElementById('data') as HTMLInputElement;
    const quantidadeInput = document.getElementById('quantidade') as HTMLInputElement;
    const valorInput = document.getElementById('valor') as HTMLInputElement;

    const regularExpression = /-/g;

    const data = new Date(dataInput.value.replace(regularExpression, ','))
    const quantidade = parseInt(quantidadeInput.value)
    const valor = parseFloat(valorInput.value)

    negociacaoController.adiciona(data, quantidade, valor)
});
