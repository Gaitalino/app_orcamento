let despesas = []

let despesa = function (dia, mes, ano, tipo, valor, descricao) {
	return{
	dia, 
	mes,
	ano,
	tipo,
	valor,
	descricao 
	}
}

let adicionaDespesa = function (dia, mes, ano, tipo, valor, descricao) {
	despesas.push(despesa(dia, mes, ano, tipo, valor, descricao))
}
