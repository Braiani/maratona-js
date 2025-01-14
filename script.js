/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.*/

function exercise_1(){
    let num1 = prompt("Digite o 1º número: ")
    let num2 = prompt("Digite o 2º número: ")
    somaValores(num1, num2)
}

function somaValores(num1, num2){
    let soma = parseInt(num1) + parseInt(num2)

    /* let card = document.getElementById('cardExample');
    cardTitle = card.firstElementChild.firstElementChild
    cardAnswer = card.firstElementChild.firstElementChild.nextElementSibling */
    cardTitle = "Exercício 1"
    cardAnswer = "Resultado da soma: " + soma
    generateAnswerCard(cardTitle, cardAnswer);
}


/*2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".*/

function exercise_2(){
    let num = prompt("Digite um número para saber se é par ou ímpar: ")
    evenOrOdd(parseFloat(num))
}

function evenOrOdd(num){
    title = 'Exercício 2';
    body = 'Seu númer é ';
    if (num % 2 === 0){
        generateAnswerCard(title, body + 'par')
    }else{
        generateAnswerCard(title, body + 'ímpar')
    }
}

/*3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.*/

function exercise_3(){
    let i = 1;
    console.log('Usando For')
    for (i; i <= 10; i++){
        console.log(i)
    }
    i = 1;
    console.log('Usando While')
    while (i <= 10){
        console.log(i)
        i++;
    }

    generateAnswerCard('Exercício 3', 'Abra seu console e veja o resultado!');
}

/*4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.*/

function exercise_4(){
    let num = prompt('Digite um número para saber a taboada:');
    let i = 1;
    for (i; i < 11; i++){
        console.log(num + " x " + i + " = " + parseInt(num) * i)
    }
    generateAnswerCard('Exercício 4', 'Abra seu console e veja o resultado!');
}

/*5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.*/

function exercise_5(){
    let title = 'Exercício 5';
    let body = "Array criado: [3, 7, 2, 9, 5]"
    let nums = [3, 7, 2, 9, 5];

    let maior = 0

    nums.forEach(num => {
        if (num > maior){
            maior = num
        }
    });

    body += "\nO maior elemento é: " + maior

    generateAnswerCard(title, body);
}

/*6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.*/

function exercise_6(){
    let title = 'Exercício 6';
    let body = ''

    let palavra = prompt("Digite uma palavra para ser invertida: ")

    let arrayPalavra = palavra.split('')
    body += 'A palavra digitada foi: ' + palavra + '\n'
    
    let palavraInvertida = arrayPalavra.reverse().join('');
    body += 'A palavra invertida ficou: ' + palavraInvertida

    generateAnswerCard(title, body);
}

/*7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.*/

function exercise_7(){
    let title = 'Exercício 7';
    let body = "Array criado: [3, 7, 2, 9, 5]\n"
    let nums = [3, 7, 2, 9, 5];

    let soma = nums.reduce(
        (total, atual) => total + atual
    );

    body += "A soma dos elementos desse array é: " + soma

    generateAnswerCard(title, body);
}

/*8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".*/

function exercise_8(){
    let title = "Exercício 8";
    let body = '';

    let num = prompt("Digite um número para saber se é primo:");

    num = parseFloat(num);

    if (num === 1){
        body += 'O número é primo!'
        generateAnswerCard(title, body);
        return;
    }

    let primo = true;
    let i = 2;

    while (i < num){
        if((num % i) === 0){
            primo = false
        }
        console.log((num % i))
        i++;
    }

    if(primo){
        body += 'O número é primo';
    }else{
        body += "O número não é primo";
    }
    generateAnswerCard(title, body);
}

/*9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.*/

function exercise_9(){
    let title = 'Exercício 9';
    let num = prompt("Digite um número para saber o fatorial:")

    generateAnswerCard(title, "O fatorial de " + num + " é: " + fatorial(parseFloat(num)))
}

function fatorial(n){
    if (n < 0) 
        return -1;
    else if (n == 0) 
        return 1;
    else {
        return (n * fatorial(n - 1));
    }
}

/*10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.*/

function inverter_string(texto){
    return texto.split('').reverse().join('');
}

function exercise_10(){
    let title = "Exercício 10";
    let palavra = prompt("Digite a palavra para saber se é palíndromo:")
    let body = "A palavra '" + palavra + "' ";

    let invertido = inverter_string(palavra);

    console.log(invertido);

    if(palavra.replaceAll(' ', '') == invertido.replaceAll(' ', '')){
        body += 'é palíndromo';
    }else{
        body += 'não é palíndromo';
    }
    generateAnswerCard(title, body)
}

/*11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.*/

function exercise_11(){
    let title = "Exercício 11";
    let palavra = prompt("Digite a palavra para saber quantas vogais tem:")
    let body = "A palavra '" + palavra + "' possui ";

    let letras = palavra.split('');

    let soma = 0;
    letras.forEach(letra => {
        let vogais = ['a', 'e', 'i', 'o', 'u'];
        if (vogais.includes(letra)){
            soma++;
        }
    });

    body += soma + " vogais";
    generateAnswerCard(title, body);
}

/*12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.*/

function exercise_12(){
    console.log(parseInt(Math.random() * 100))
 
    generateAnswerCard('Exercício 12', 'Abra seu console e veja o resultado!');
}

/*13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.*/

function exercise_13(){
    let numeros = [4, -3, 2, -1, 0];

    numeros.forEach((numero, index) => {
        if (numero < 0){
            numeros[index] = 0;
        }
    });

    console.log(numeros);

    generateAnswerCard('Exercício 13', 'Abra seu console e veja o resultado!');
}

/*14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.*/

function exercise_14(){
    let title = "Exercício 14";

    let proibidas = ['carro', 'moto', 'palavra'];

    let body = "Se você digitou alguma das seguintes palavras: " + proibidas + "\n";
    body += "Um alerta apareceu!"
    let texto = prompt("Digite uma frase:");
    let palavras = texto.split(" ")
    let palavraProibidaDigitada = false;

    palavras.forEach(palavra => {
        if(proibidas.includes(palavra)){
            palavraProibidaDigitada = true;
        }
    });

    if(palavraProibidaDigitada){
        alert("Cuidado com o que você escreve!")
    }

    generateAnswerCard(title, body);
}

/*15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/

function exercise_15(){
    let numero = 1;
    
    for (numero; numero <= 20; numero++){
        if( numero % 2 === 0){
            console.log(numero)
        }
    }

    generateAnswerCard('Exercício 15', 'Abra seu console e veja o resultado!');
}

function generateAnswerCard(title, body){
    card = document.getElementById('cardExample');

    newCard = card.cloneNode(true)
    newCard.id = "exercise-" + title
    cardTitle = newCard.firstElementChild.firstElementChild.firstElementChild
    cardAnswer = newCard.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
    cardTitle.innerText = title
    cardAnswer.innerText = body
    document.getElementById("columns").appendChild(newCard)

    if (newCard.classList.contains('hidden')){
        newCard.classList.toggle('hidden')
    }
}