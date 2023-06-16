import { NegociacaoService } from "../services/negociacao-service.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private negociacaoService: NegociacaoService;
    private negociacoesView = new NegociacoesView('#negociacoesView')

    constructor() {
        this.negociacaoService = new NegociacaoService()
        this.negociacoesView.update(this.negociacoes())
    }

    adiciona(data: HTMLInputElement, quantidade: HTMLInputElement, valor: HTMLInputElement): void {
        this.negociacaoService.adiciona(data, quantidade, valor)
        this.negociacoesView.update(this.negociacoes())
    }

    negociacoes() {
        return this.negociacaoService.negociacoes
    }
}
