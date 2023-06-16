import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoService {

    constructor(private _negociacoes: Negociacoes = new Negociacoes()) { }

    private criaNegociacao(data: Date, quantidade: number, valor: number): Negociacao {
        return new Negociacao(data, quantidade, valor);
    }

    adiciona(dataInput: HTMLInputElement, quantidadeInput: HTMLInputElement, valorInput: HTMLInputElement): void {

        const regularExpression = /-/g;

        const data = new Date(dataInput.value.replace(regularExpression, ','))
        const quantidade = parseInt(quantidadeInput.value)
        const valor = parseFloat(valorInput.value)

        const negociacao = this.criaNegociacao(data, quantidade, valor);
        this.negociacoes.adiciona(negociacao)
    }

    get negociacoes(): Negociacoes {
        return this._negociacoes
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes.lista()
    }
}
