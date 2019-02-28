let criaTabela = function(array) {

    //verifica se tabela ja existe, se sim apagaa existente
    if (document.getElementById('tabela')) {
        document.getElementById('tabela').remove()
    }

   //cria tabela
    var table = document.createElement('table');
    table.id = 'tabela'
    table.style = 'width:500px;border:1px solid #CCC; margin: auto; text-align: center';
    table.className = 'table table-striped table-dark w-100 container'

    //cria tobody
    var tbody = document.createElement('tbody');


    let tr = document.createElement('tr');

    // 1
    let th = document.createElement('th');
    th.style = 'width:100px;border:1px solid #CCC;';
    let span = document.createElement('span');
    span.innerHTML = 'Dia';
    th.appendChild(span);
    tr.appendChild(th);

    // 1
    th = document.createElement('th');
    th.style = 'width:100px;border:1px solid #CCC;';
    span = document.createElement('span');
    span.innerHTML = 'Mês';
    th.appendChild(span);
    tr.appendChild(th);

    // 1
    th = document.createElement('th');
    th.style = 'width:100px;border:1px solid #CCC;';
    span = document.createElement('span');
    span.innerHTML = 'Ano';
    th.appendChild(span);
    tr.appendChild(th);

    th = document.createElement('th');
    th.style = 'width:100px;border:1px solid #CCC;';
    span = document.createElement('span');
    span.innerHTML = 'Tipo';
    th.appendChild(span);
    tr.appendChild(th);

    th = document.createElement('th');
    th.style = 'width:100px;border:1px solid #CCC;';
    span = document.createElement('span');
    span.innerHTML = 'Valor';
    th.appendChild(span);
    tr.appendChild(th);

    th = document.createElement('th');
    th.style = 'width:100px;border:1px solid #CCC;';
    span = document.createElement('span');
    span.innerHTML = 'Descrição';
    th.appendChild(span);
    tr.appendChild(th);

    tbody.appendChild(tr);


    //cria linhas e colunas conforme tamanho do array
    for(let i = 0; i < array.length; i++){
        let tr = document.createElement('tr');  

        // 1
        let td = document.createElement('td');
        td.style = 'width:100px;border:1px solid #CCC;';
        let span = document.createElement('span');
        span.innerHTML = array[i].dia;
        td.appendChild(span);
        tr.appendChild(td);

        // 2
        td = document.createElement('td');
        td.style = 'border:1px solid #CCC;';
        span = document.createElement('span');
        span.innerHTML = array[i].mes;
        td.appendChild(span);
        tr.appendChild(td);

        // 3
        td = document.createElement('td');
        td.style = 'border:1px solid #CCC;';
        span = document.createElement('span');
        span.innerHTML = array[i].ano;
        td.appendChild(span);
        tr.appendChild(td);
        // 4
        td = document.createElement('td');
        td.style = 'border:1px solid #CCC;';
        span = document.createElement('span');
        span.innerHTML = array[i].tipo;
        td.appendChild(span);
        tr.appendChild(td);

        // 5
        td = document.createElement('td');
        td.style = 'border:1px solid #CCC;';
        span = document.createElement('span');
        span.innerHTML = array[i].valor;
        td.appendChild(span);
        tr.appendChild(td);

        // 6
        td = document.createElement('td');
        td.style = 'border:1px solid #CCC;';
        span = document.createElement('span');
        span.innerHTML = array[i].descricao;
        td.appendChild(span);
        tr.appendChild(td);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    document.body.appendChild(table)  
}