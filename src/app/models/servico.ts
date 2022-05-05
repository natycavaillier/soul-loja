export interface Servico {
    imagem: string;
    nomeDoServico: string;
    descricao: string;
    preco: number;
    emPromocao: boolean;
    desconto: number; //0 a 1
    categoria: categoriaDoServico;
}


export enum categoriaDoServico {
    CORTE = 'corte',
    DEPILACAO = 'depilacao',
    MANICURE = 'manicure'
}