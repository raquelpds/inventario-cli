import { Categoria } from "../models/Categoria";

export class CategoriaController {
    private categorias: Categoria[] =[];

    criarCategoria(nome: string, descricao: string): void {
        const id = this.categorias.length + 1;
        this.categorias.push(new Categoria(id, nome, descricao));
        console.log("Categoria adicionada com sucesso!");
    }

    listarCategoria():void {
        console.table(this.categorias);
    }

    buscarCategoria(criterio: number | string): Categoria | undefined {
        if (typeof criterio === "number"){
            return this.categorias.find(categoria => categoria.id === criterio);
        } else if(typeof criterio === "string"){
            return this.categorias.find(categoria => categoria.nome.toLowerCase() === criterio.toLowerCase());
        }
        return undefined;
    }

    atualizarCategoria(id: number, nome?: string, descricao?: string): boolean {
        const categoria = this.categorias.find(c => c.id === id);

        if(!categoria){
            console.log("Categoria não encontrada!");
            return false;
        }

        if (nome) categoria.nome = nome;
        if (descricao) categoria.descricao = descricao;

        console.log("Categoria atualizada com sucesso!");
        return true;
    }

    removerCategoria(id: number): boolean {
        const categoriaIndex = this.categorias.findIndex(c => c.id === id);

        if (categoriaIndex === -1) {
            console.log("Categoria não encontrada!");
            return false;
        }

        //splice remove a categoria do array
        this.categorias.splice(categoriaIndex, 1);

        console.log("Categoria excluída com sucesso!");
        return true;
        
    }

    //COLOCAR MÉTODO PARA VALIDAÇÃO COM PRODUTO
}