class Despesa {
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }
}

let almoco = new Despesa("arroz e feijao", 22);
let carro = new Despesa("fiesta", 200);

let despesas: [] = [];
let despesasMap: [] = []

function juntarDespesas(array: Despesa[]) {
    return array.push(almoco, carro);
}

function mapearValores(varr: any) {
    return despesasMap = varr.map(function (obj: any) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    });
}

juntarDespesas(despesas);
mapearValores(despesas);
console.log(despesasMap);



