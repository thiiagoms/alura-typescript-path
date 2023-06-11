export class NegociacaoService {

    adiciona(data: Date, quantidade: number, valor: number): void {
        console.log(`
            Data: ${data}
            Quantidade: ${quantidade}
            Valor: ${valor}
        `)
    }
}
