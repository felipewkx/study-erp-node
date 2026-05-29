const clientes = require('./clientes');

const cliente1 = clientes.criarCliente(
    "Felipe Walker",
    "felipe@email.com",
    "VIP"
);

clientes.cadastrarCliente(cliente1);

const todos = clientes.listarClientes();
console.log(todos);

const idParaBusca = todos[0]?.id;

const clienteEncontrado = clientes.buscaPorId(idParaBusca);

console.log({ clienteEncontrado });