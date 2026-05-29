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
const cliente2 = clientes.criarCliente(
    "Ana Silva",
    "ana.silva@gmail.com",
    "COMUM"
);
clientes.cadastrarCliente(cliente1);
clientes.cadastrarCliente(cliente2);

const listaClientes = clientes.listarClientes();
console.table(listaClientes);