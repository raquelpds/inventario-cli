import { Produto } from "../models/Produto";
import { Categoria } from "../models/Categoria";

export class ProdutoController {
    private produtos: Produto[] = [];
    private categorias: Categoria[];

    constructor(categorias: Categoria[]){
        this.categorias = categorias;
    }

    criarProduto(nome: string, descricao: string, preco: number, quantidade: number, categoriaId: number): void {

        //verificar se a categoria existe
        const categoria = this.categorias.find(c => c.id === categoriaId);
            if (!categoria) {
                console.log("Categoria não encontrada. O produto não pôde ser criado.");
            return;
        }

        //criar um ID para o produto:
        const id = this.produtos.length + 1;
        const dataCriacao = new Date();

        this.produtos.push(new Produto(id, nome,descricao, preco, quantidade, categoriaId, dataCriacao, dataCriacao));
        console.log("Produto adicionado com sucesso!");
    }

    listarProdutos():void {
        console.table(this.produtos);
    }

    buscarProduto(criterio: number | string): Produto[] | undefined {
        if (typeof criterio === "number"){
            //buscar por id
            const produtoPorId = this.produtos.find(produto => produto.id === criterio);
            if (produtoPorId) return [produtoPorId];

            // Buscar por CategoriaID
        const produtosPorCategoria = this.produtos.filter(produto => produto.categoriaId === criterio);
            return produtosPorCategoria.length ? produtosPorCategoria : undefined;

        } else if (typeof criterio === "string") {
            // Buscar por Nome
            const produtosPorNome = this.produtos.filter(produto => 
                produto.nome.toLowerCase().includes(criterio.toLowerCase())
            );
            return produtosPorNome.length ? produtosPorNome : undefined;
        }
        return undefined;
}

removerProduto (id: number): boolean {
    const produtoIndex = this.produtos.findIndex(produto => produto.id === id);

    if(produtoIndex === -1) {
        console.log("Produto não encontrado!");
            return false;
    }

    this.produtos.splice(produtoIndex,1);
    console.log("Produto excluído com sucesso!");
        return true;

}



}