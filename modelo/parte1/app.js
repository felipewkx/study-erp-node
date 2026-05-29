const financeiro = require('./financeiro');

function imprimirCupom(cliente, valorFinal) {
    console.log("LOJA MODA SENAC");
    console.log("Cliente: ", cliente);
    console.log("Total a Pagar:", valorFinal);
}

const valorFinal = financeiro.calcularTotalComDesconto(300, 10);

imprimirCupom("Felipe Walker", valorFinal);