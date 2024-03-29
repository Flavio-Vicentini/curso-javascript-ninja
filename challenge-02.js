// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (a,b){
    return a+b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = soma (2,4) + 5;

// Qual o valor atualizado dessa variável?
11;

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function somaMyVar (n){
    myvar = n;
    return `O valor de myvar agora é ${myvar}`;
}

// Invoque a função criada acima.
console.log(somaMyVar(3))

// Qual o retorno da função? (Use comentários de bloco).
//NaN

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function mult3(n1,n2,n3){
    if (!n1 | !n2 | !n3){
        console.log('Preecha todos os valores corretamente');
        return;
    }
    return console.log(n1*n2*n3 + 2);
}

// Invoque a função criada acima, passando só dois números como argumento.
mult3(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os numero corretamento

// // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
mult3(2,3,2);

// // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 14

// /*
// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
// 4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne o valor booleano `false`.
// 6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
// */
// ?
function myFunction (a1,a2,a3){
    if (!arguments.length){
        return false;
    }else if(arguments.length === 1){
        return a1;
    }else if (arguments.length === 2){
        return a1+a2;
    }else if (arguments.length === 3){
        return (a1+a2)/a3;
    }else {
        return null;
    }
    
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(myFunction(1,2,7))