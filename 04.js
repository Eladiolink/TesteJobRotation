const faturamentoMensal = [
    {
        "uf": "SP",
        "valor": 67836.43
    },
    {
        "uf": "RJ",
        "valor": 36678.66
    },
    {
        "uf":"MG",
        "valor":29229.88
    },
    {
        "uf": "ES",
        "valor": 27165.48
    },{
        "uf": "Outros",
        "valor": 19849.53
    }
]

let total = 0

faturamentoMensal.forEach(element => {
    total += element.valor
})

console.log("Porcentagem de faturamento de cada estado:")
faturamentoMensal.forEach(element => {
    let percent = (element.valor * 100 / total)
    let numeroArredondado = percent.toFixed(2);
    console.log(`${element.uf} - ${numeroArredondado}%`)
})