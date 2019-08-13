var req;
 
// FUNÇÃO PARA BUSCA ALUNO
function buscarAlunos(valor) {
 
// Verificando Browser
if(window.XMLHttpRequest) {
   req = new XMLHttpRequest();
}
else if(window.ActiveXObject) {
   req = new ActiveXObject("Microsoft.XMLHTTP");
}
 
// Arquivo PHP juntamente com o valor digitado no campo (método GET)
var url = "busca.php?valor="+valor;
 
// Chamada do método open para processar a requisição
req.open("Get", url, true); 
 
// Quando o objeto recebe o retorno, chamamos a seguinte função;
req.onreadystatechange = function() {
 
	// Exibe a mensagem "Buscando Noticias..." enquanto carrega
	//if(req.readyState == 1) {
	//	document.getElementById('resultado').innerHTML = 'Buscando Alunos...';
	//}
 
	// Verifica se o Ajax realizou todas as operações corretamente
	if(req.readyState == 4 && req.status == 200) {
 
	// Resposta retornada pelo busca.php
	var resposta = req.responseText;
 
	// Abaixo colocamos a(s) resposta(s) na div resultado
	document.getElementById('resultado').innerHTML = resposta;
	}
}
req.send(null);
}


// FUNÇÃO PARA EXIBIR ALUNO
function exibirConteudo(id) {
	/*
// Verificando Browser
if(window.XMLHttpRequest) {
   req = new XMLHttpRequest();
}
else if(window.ActiveXObject) {
   req = new ActiveXObject("Microsoft.XMLHTTP");
}

// Arquivo PHP juntamento com a id do aluno (método GET)
var url = "exibirAluno.php?id="+id;
 
// Chamada do método open para processar a requisição
req.open("Get", url, true); 
 
// Quando o objeto recebe o retorno, chamamos a seguinte função;
req.onreadystatechange = function() {
 
	// Exibe a mensagem "Aguarde..." enquanto carrega
	//if(req.readyState == 1) {
		//document.getElementById('conteudo').innerHTML = 'Aguarde...';
	//}
 
	// Verifica se o Ajax realizou todas as operações corretamente
	if(req.readyState == 4 && req.status == 200) {
 
	// Resposta retornada pelo exibirAluno.php
	var resposta = req.responseText;

	// Abaixo colocamos a resposta na div conteudo
	
	//document.getElementById('conteudo').innerHTML = resposta;
	}
}


req.send(null);

*/





}