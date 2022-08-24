"use strict";
class Despesa {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
let almoco = new Despesa("arroz e feijao", 22);
let carro = new Despesa("fiesta", 200);
let despesas = [];
let despesasMap = [];
function juntarDespesas(array) {
    return array.push(almoco, carro);
}
function mapearValores(varr) {
    return despesasMap = varr.map(function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    });
}
juntarDespesas(despesas);
mapearValores(despesas);
console.log(despesasMap);
