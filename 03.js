const fs = require('fs');

const dados = fs.readFileSync('assets/dados.json', 'utf8');
const dadosJson = JSON.parse(dados)

function verificaFaturamento(){

    let min = dadosJson[0]
    let max = dadosJson[0]

    let  total = {dias:0, valor:0}

    for(let i=0;i<dadosJson.length;i++){
        if(dadosJson[i].valor == 0) continue

        if(dadosJson[i].valor < min.valor) min = dadosJson[i]
        if(dadosJson[i].valor > max.valor) max = dadosJson[i]

        total.dias += 1
        total.valor += dadosJson[i].valor
    }

    let media = total.valor/total.dias

    let numDias = 0

    
    dadosJson.forEach(element => {
        if(element.valor > media) numDias +=1
    });
         

    console.log(`O menor valor de faturamento foi de ${min.valor} no dia ${min.dia}`)
    console.log(`O maior valor de faturamento foi de ${max.valor} no dia ${max.dia}`)
    console.log(`Em ${numDias} dias o valor de faturamento diário foi superior à média mensal`)
}

verificaFaturamento()