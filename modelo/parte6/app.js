const menu = require('./menu');
const moduloClientes = require('./clientes');

const tituloSistema = "Gestao Comercial Senac";

const minhasOpcoes = [
    {
        texto: "Cadastrar Cliente",
        acao: (rs) => {
            const nome = rs.question("Digite o Nome: ");
            const email = rs.question("Digite o Email: ");
            const cat = rs.question("Categoria (VIP/COMUM): ");
            const novoCliente = moduloClientes.criarCliente(nome, email, cat);
            moduloClientes.cadastrarCliente(novoCliente);
            console.log("\n✅ Cliente cadastrado com sucesso!");
        }
    },
    {
        texto: "Listar Clientes",
        acao: (rs) => {
            const lista = moduloClientes.listarClientes();
            console.log("\n--- LISTA DE CLIENTES ---");

            if (!lista || lista.length === 0) {
                console.log("⚠️ Nenhum cliente cadastrado ainda.");
            } else {
                console.table(lista);
            }

            rs.question("\nPressione ENTER para continuar...");
        }
    }
];

menu.criarMenu(tituloSistema, minhasOpcoes);
