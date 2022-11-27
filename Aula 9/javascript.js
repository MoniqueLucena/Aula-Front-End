var x = 5;
var y = 6;
var z = x + y;


let nome = "João";
nome = "Ana;" // reatribuindo um valor
//Let nome = 0; //vai dar erro

var nome = "João";
var nome = 0;

function calculo () {
	let x = 0;
	x = 1; // posso
}
x = 2; //não posso, está fora do bloco


function calculo2(){
	var y = 0;
	y = 1; //posso
}

y = 2; //posso

var y = "Ana"; //posso

// variáveis Const

const PI = 3.141592;

//Operadores de Atribuição

let num = 1; //atribuindo valot
num == 2; //retornar falso 
// retornar falsoporque é simbolo de igualdade

//Tipos de Dados

const pi = 3.14; // numeral decimal: float
let nome = "João"; // Texto: String
let numero = 1; // número inteiro: int
let numero2= "1"; //String
let frase = "Ana comeu 3 maçãs"

let nome = "João", sobrenome = "Rosa", cidade = "Feliz";
let nome; //não atribui valor, ela é valor indefinido
nome = "Ana"; 