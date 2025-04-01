export class Produto {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public preco: number,
        public quantidade: number,
        public categoriaId: number,
        public dataCriacao: Date = new Date(),
        public dataAtualizacao: Date
    ){}
}