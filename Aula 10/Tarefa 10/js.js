function validaForm(){
	
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaData = document.forms["cadastrar"]["data"].value;
	let validaAut = document.forms["cadastrar"]["autor (a)"].value;
	let validaGen = document.forms["cadastrar"]["genero"].value;
	let validaavalia = document.forms["cadastrar"]["avalia"].value;
    
  

   

    if (validaTit== ""){
    	alert("O título deve ser preenchido!");
    	return false;

    }


    if (validaDat == ""){
        alert("A data de lançamento deve ser preenchida!");
        return false;
    }   
	

    if (validaAut == ""){
    	alert("O  nome do (a) autor(a) deve ser preenchido!");
    	return false;
    }	



    if (validaGen == ""){
    	alert("O gênero deve ser preenchido!");
    	return false;


    }


    if (validaavalia == ""){
        alert("A avaliação desse ser marcada!");
        return false;

   }

}
    
function insere(){
	

    let titu = document.forms["cadastrar"]["titulo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let auto = document.forms["cadastrar"]["autor"].value;
	let gen = document.forms["cadastrar"]["genero"].value;
	let avalia = document.forms["cadastrar"]["avalia"].value;

    let inserir = window.document.getElementById("inserirTabela"); 

    var novaLinha = `<tr><td>${titu}</td>`;
    novaLinha += `<td>${data}</td>`;
    novaLinha += `<td>${auto}</td>`;
    novaLinha += `<td>${gen}</td>`;
    novaLinha += `<td>${avalia}</td></tr>`;

    inserir.innerHTML += novaLinha;
}


 

