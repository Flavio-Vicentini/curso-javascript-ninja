/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(n1,n2){
    return n1+n2;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log('A soma de 5 e 8 é igual a ' + sum(5,8))

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é ' + sum.name)

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName () {
    return 'Flavio';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A função ' +varShowName.name + ' retorna ' +varShowName())

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator (operator){
    return function calculate(n1,n2) {
        switch(operator){
          case '+':{
            console.log(`Resultado da operação ${n1} ${operator} ${n2} é ${n1+n2}`)
            break;
          }
          case '-':{
            console.log(`Resultado da operação ${n1} ${operator} ${n2} é ${n1-n2}`)
            break;
          }
          case '*':{
            console.log(`Resultado da operação ${n1} ${operator} ${n2} é ${n1*n2}`)
            break;
          }
          case '/':{
            console.log(`Resultado da operação ${n1} ${operator} ${n2} é ${n1/n2}`)
            break;
          }
          case '%':{
            console.log(`Resultado da operação ${n1} ${operator} ${n2} é ${n1%n2}`)
            break;
          }
          default:
              console.log('Operação inválida')
        }
        
    }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var soma = calculator('+')
/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
soma(2,3)

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-')
var multiplication = calculator('*')
var division = calculator('/')
var mod = calculator('%')

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
subtraction(10,5)
multiplication(10,5)
division(10,5)
mod(10,5)