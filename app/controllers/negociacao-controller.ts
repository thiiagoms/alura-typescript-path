import { NegociacaoService } from "../services/negociacao-service.js";

export class NegociacaoController {

    private negociacaoService: NegociacaoService;

    constructor() {
        this.negociacaoService = new NegociacaoService()
    }

    adiciona(data: Date, quantidade: number, valor: number): void {
        this.negociacaoService.adiciona(data, quantidade, valor)
    }
}
