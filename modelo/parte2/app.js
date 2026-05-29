const financeiro = require('./financeiro');
const clientes = require('./clientes');

function imprimirCupom(cliente, valorFinal) {
    console.log("LOJA MODA SENAC");
    console.log("Cliente: ", cliente);
    console.log("Total a Pagar:", valorFinal);
}

const valorFinal = financeiro.calcularTotalComDesconto(300, 10);

const cliente1 = clientes.criarCliente(
    "Felipe Walker",
    "felipewlk@hotmail.com",
    "VIP"
);
clientes.cadastrarCliente(cliente1);

const listaClientes = clientes.listarClientes();


imprimirCupom(listaClientes[0].nome, valorFinal);