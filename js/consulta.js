let exibeDados = function () {
    //funçao retorna valores de JSON  para objeto

    //se o array estiver vazio insere os novos valores no array
    len = window.sessionStorage.length

    if (despesas.length == 0) {

        for ( let i = 0; i < len; i++ ){

            let jsonAux = JSON.parse(window.sessionStorage.getItem(i));

            despesas.push(jsonAux)    
        }
        //se o array estiver populado insere os novos valores a partir da ultima posição do array
    }else{
        for ( let i = despesas.length; i < len; i++ ){

            let jsonAux = JSON.parse(window.sessionStorage.getItem(i));

            despesas.push(jsonAux)                
        }
    }
    
    let mes = document.getElementById('mes').value
    let tipo = document.getElementById('tipo').value

    if (mes == 0 && tipo == 0) {
        criaTabela(despesas)
    }

    if (mes == 0 && tipo != 0) {
        despesas = despesas.filter(obj => obj.tipo == tipo)
        criaTabela(despesas)
    }

    if (mes != 0 && tipo == 0) {
        despesas = despesas.filter(obj => obj.mes == mes)
        criaTabela(despesas)
    }

    if (mes != 0 && tipo != 0) {
        despesas = despesas.filter(obj => obj.mes == mes && obj.tipo == tipo)
        criaTabela(despesas)
    }
}