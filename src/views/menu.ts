import * as readline from "readline-sync";
import { CategoriaController } from "../controllers/CategoriaController";
import { ProdutoController } from "../controllers/ProdutoController";

const categoriaController = new CategoriaController();
const produtoController = new ProdutoController();


export function exibirMenu() {
    while (true) {

        console.log("\n### Gerenciamento de Inventário em CLI ###");
        console.log("1- Operações de Produtos");
        console.log("2- Operações de Categorias");
        console.log("0- Sair");
        const opcao = readline.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                console.log("## GERENCIAMENTO DE PRODUTOS ###");
                console.log("1- Criar Produto");
                console.log("2- Listar Produtos");
                console.log("3- Deletar Produto");
                const opcaoProduto = readline.question("Escolha uma opção: ");
                switch (opcaoProduto){
                    case "1":
                        const nomeProduto = readline.question("Nome do produto: ");
                        const descricaoProduto = readline.question("Descrição: ");
                        const preco = parseFloat(readline.question("Preço: "));
                        const quantidade = parseInt(readline.question("Quantidade: "));
                        const categoriaId = parseInt(readline.question("ID da categoria: "));
                        produtoController.criarProduto(nomeProduto, descricaoProduto, preco, quantidade, categoriaId);
                        break;
                    case "2":
                        produtoController.listarProdutos();
                        break;
                    case "3":
                        const idDeletar = parseInt(readline.question("\nDigite o ID do produto que deseja excluir: "));
                        produtoController.removerProduto(idDeletar);
                        break;      
                }
                break;
            case "2":
                console.log("## GERENCIAMENTO DE CATEGORIAS ###");
                console.log("1- Criar Categoria");
                console.log("2- Listar Categorias");
                console.log("3- Atualizar Categoria");
                console.log("4- Deletar Produto");
                const opcaoCategoria = readline.question("Escolha uma opção: ");
                switch (opcaoCategoria){
                    case "1":
                        const nome = readline.question("Nome da categoria: ");
                        const descricao = readline.question("Descrição: ");
                        categoriaController.criarCategoria(nome, descricao);
                        break;
                    case "2":
                        categoriaController.listarCategoria();
                        break;
                    case "3":
                        const id = Number(readline.question("Digite o ID da categoria: "));
                        const novoNome = readline.question("Novo nome da categoria: ");
                        const novaDescricao = readline.question("Nova descrição: ");
                        categoriaController.atualizarCategoria(id, novoNome, novaDescricao);
                        break;
                    case "4":
                        const idDeletar = parseInt(readline.question("\nDigite o ID do produto que deseja excluir: "));
                        categoriaController.removerCategoria(idDeletar);
                        break;     
                }
                break;
            case "0":
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida.");
        }
    }
}
