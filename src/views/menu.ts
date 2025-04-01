import * as readline from "readline-sync";
import { CategoriaController } from "../controllers/CategoriaController";

const categoriaController = new CategoriaController();

export function exibirMenu() {
    while (true) {
        console.log("\n### Gerenciamento de Inventário ###");
        console.log("1 - Criar Categoria");
        console.log("2 - Listar Categorias");
        console.log("0 - Sair");
        const opcao = readline.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                const nome = readline.question("Nome da categoria: ");
                const descricao = readline.question("Descrição: ");
                categoriaController.criarCategoria(nome, descricao);
                break;
            case "2":
                categoriaController.listarCategoria();
                break;
            case "0":
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida.");
        }
    }
}
