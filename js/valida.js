let data = new Date()
data = data.getFullYear()

function validador () {
	let validaAno = false
	let validaMes = false
	let validaDia = false
	let validaTipo = false
	let validaValor = false

	//ano
	let ano = document.getElementById('ano')

	if (ano.value == 0) {
		ano.className = 'btn btn-outline-danger mr-5'
		validaAno = false
	}else{
		ano.className = 'btn btn-outline-dark mr-5'
		validaAno = true
	}

	//mes
	let mes = document.getElementById('mes')

	if (mes.value == 0) {
		mes.className = 'btn btn-outline-danger mr-5'
		validaMes = false
	}else{
		mes.className = 'btn btn-outline-dark mr-5'
		validaMes = true
	}

	//dia
	let dia = document.getElementById('dia')
	
	//confere se mes vai ate 30 ou 31
	if (mes.value == 'Janeiro' || mes.value == 'Março' || mes.value == 'Maio' || mes.value == 'Julho' || mes.value == 'Agosto' || mes.value == 'Outubro' || mes.value == 'Dezembro') {
		if (dia.value > 31 || dia.value == '') {
			dia.className = 'btn btn-outline-danger mr-5'
			validaDia = false
		}else{
			dia.className = 'btn btn-outline-dark mr-5'
			validaDia = true
		}
	}else{
		if (dia.value < 1 || dia.value > 30 || dia.value == '') {
			dia.className = 'btn btn-outline-danger mr-5'
			validaDia = false
		}else{
			dia.className = 'btn btn-outline-dark mr-5'
			validaDia = true
		}
	}
	//Verifica se mes é de fevereiro
	if (mes.value == 'Fevereiro') {
		if (dia.value > 28) {
			dia.className = 'btn btn-outline-danger mr-5'
			validaDia = false
		}else{
			dia.className = 'btn btn-outline-dark mr-5'
			validaDia = true
		}
	}

	//tipo
	let tipo = document.getElementById('tipo')

	if (tipo.value == 0) {
		tipo.className = 'btn btn-outline-danger mr-5'
		validaTipo = false
	}else{
		tipo.className = 'btn btn-outline-dark mr-5'
		validaTipo = true
	}

	//valor
	let valor = document.getElementById('valor')

	if (valor.value == '' || isNaN(valor.value)) {
		valor.className = 'btn btn-outline-danger mr-5'
		validaValor = false
	}else{
		valor.className = 'btn btn-outline-dark mr-5'
		validaValor = true
	}

	//descricao
	let descricao = document.getElementById('descricao')

	//Cada vez que a pagina é carregada cria um novo array de despesas começando do zero
	if (validaDia == true && validaMes == true && validaAno == true && validaTipo == true && validaValor == true) {
		//cria a nova despesa
		adicionaDespesa(dia.value, mes.value, ano.value, tipo.value, valor.value, descricao.value)

				//quando recarrega a pagina o array zera
				//toda vez que insere valor novo ele incrementa o array e sobrescreve no storage nas devidas posições
				aux = window.sessionStorage.length
				aux2 = 0

				while( aux2 < despesas.length){
					let jsonAux = JSON.stringify(despesas[aux2]);

					window.sessionStorage.setItem(aux, jsonAux);
					aux2++
				}
	
		//reseta os valores dos campos
		dia.value = ''
		mes.value = 0
		ano.value = 0
		tipo.value = 0
		valor.value = ''
		descricao.value = ''

		alert('Valores inseridos com sucesso')
	}
}

