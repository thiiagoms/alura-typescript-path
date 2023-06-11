import { NegociacaoService } from "../services/negociacao-service.js";

export class NegociacaoController {

    private negociacaoService: NegociacaoService;

    constructor() {
        this.negociacaoService = new NegociacaoService()
    }

    adiciona(data: HTMLInputElement, quantidade: HTMLInputElement, valor: HTMLInputElement): void {
        this.negociacaoService.adiciona(data, quantidade, valor)
    }
}
