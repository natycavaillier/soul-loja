export interface Servico {
    imagem: string;
    nomeDoServico: string;
    descricao: string;
    preco: number;
    desconto: number; //0 a 1
    formaDePagamento: FormaDePagamento;
}


export enum FormaDePagamento {
    AVISTA = 'avista',
    CREDITO = 'credito'
}