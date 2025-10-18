function perguntarNome() {
    let nome = prompt("Qual é o seu nome?");

    if (nome === null) {
        alert("Operação cancelada.");
    } else if (nome.trim() === "") {
        alert("Você não digitou um nome.");
    } else {
        alert(`Bem vindo(a), ${nome.trim()}!`);
    }
}

document.getElementById("lista1_ex1").addEventListener("click", perguntarNome);


function perguntarMateria() {
    let materia = prompt("Qual sua matéria favorita?");

    if (materia === null) {
        alert("Operação cancelada.");
    } else if (materia.trim() === "") {
        alert("Você não digitou uma matéria.");
    } else {
        alert(`A matéria ${materia.trim()} realmente é ótima!`);
    }
}

document.getElementById("lista1_ex2").addEventListener("click", perguntarMateria);


function perguntarDia() {
    let data = prompt("Que dia é hoje?");

    if (data === null) {
        alert("Operação cancelada.");
    } else if (data.trim() === "") {
        alert("Você não digitou uma data.");
    } else {
        alert(`Hoje é dia ${data.trim()}`);
    }
}

document.getElementById("lista1_ex3").addEventListener("click", perguntarDia);


function confirmarPreparacao() {
    let resposta = confirm("Está preparado para o segundo semestre de Desenvolvimento de Sistemas?");

    if (resposta) {
        alert("Boa!");
    } else {
        alert("Sem problemas! Ainda dá tempo de se preparar.");
    }
}

document.getElementById("lista1_ex4").addEventListener("click", confirmarPreparacao);


function calcularOperacoes() {
    let n1 = Number(prompt("Informe o primeiro número:"));
    let n2 = Number(prompt("Informe o segundo número:"));


    if (!n1 && n1 !== 0 || !n2 && n2 !== 0) {
        alert("Por favor, preencha ambos os números corretamente!");
    }


    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n2 !== 0 ? n1 / n2 : "indefinida (divisão por zero).";

    let mensagem = `
Resultados:
Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
`;

    alert(mensagem);
}

document.getElementById("lista2_ex1").addEventListener("click", calcularOperacoes);


function calcularMedia() {
    let n1 = parseFloat(prompt("Informe a nota 1:"));
    let n2 = parseFloat(prompt("Informe a nota 2:"));
    let n3 = parseFloat(prompt("Informe a nota 3:"));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, informe uma nota válida!");
    }


    let media = (n1 + n2 + n3) / 3

    alert(`A média é ${media.toFixed(1)}`);
}

document.getElementById("lista2_ex2").addEventListener("click", calcularMedia);


function quantidadeTinta() {
    let largura = Number(prompt("Informe a largura da parede:"));
    let altura = Number(prompt("Informe a altura da parede:"));

    if (isNaN(largura) || isNaN(altura)) {
        alert("Por favor, informe um número.");
    } else (altura && largura < 0) {
        alert("Informe números positivos.");
    }

    let area = largura * altura
    let tinta = area / 2

    alert(`Serão necessários ${tinta} litros de tinta para pintar a parede.`);
}

document.getElementById("lista2_ex3").addEventListener("click", quantidadeTinta);


function verDiferenca() {
    let n1 = Number(prompt("Informe um número:"));
    let n2 = Number(prompt("Informe outro número:"));

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, informe números válidos!");
    }

    let diferenca

    if (n1 > n2) {
        diferenca = n1 - n2
    } else {
        diferenca = n2 - n1
    }

    alert(`A diferença é entre ${diferenca} número(s)`);
}

document.getElementById("lista2_ex4").addEventListener("click", verDiferenca);


function verMultiplo() {
    let nota1 = Number(prompt("Digite a primeira nota: "));
    let nota2 = Number(prompt("Digite a segunda nota "));

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, informe números válidos!");
    }


    if (nota2 === 0) {
        alert("Não é possível dividir por 0!");
    } else if (nota1 % nota2 === 0) {
        alert(`${nota1} é múltiplo de ${nota2}`);
    } else {
        alert(`${nota1} não é múltiplo de ${nota2}`);
    }
}

document.getElementById("lista2_ex5").addEventListener("click", verMultiplo);


function conververTemperatura() {
    let celsius = parseFloat(prompt("Informe a temperatura em Celsius: "));

    let fahrenheit = (celsius * 9 / 5) + 32

    alert(`${celsius}C é igual ${fahrenheit}F`);
}

document.getElementById("lista2_ex6").addEventListener("click", conververTemperatura);


function verArea() {
    let base = parseFloat(prompt("Informe a base: "));
    let altura = parseFloat(prompt("Informe a altura: "));

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, informe números válidos!");
    }

    let area = base * altura

    alert(`A área é ${area}`);
}

document.getElementById("lista2_ex7").addEventListener("click", verArea);


function checkIdade() {
    let idade = Number(prompt("Informe sua idade: "));

    if (isNaN(idade)) {
        alert("Por favor, informe número válido!");
    }


    if (idade >= 18) {
        alert("Maior de idade");
    } else {
        alert("Menor de idade");
    }
}

document.getElementById("lista3_ex1").addEventListener("click", checkIdade);


function checkParOrImpar() {
    let n1 = Number(prompt("Informe um número:"));

    if (isNaN(n1)) {
        alert("Por favor, informe número válido!");
    }

    if (n1 % 2 === 0) {
        alert("Par");
    } else {
        alert("Ímpar");
    }
}

document.getElementById("lista3_ex2").addEventListener("click", checkParOrImpar);


function checkNumero() {
    let n1 = Number(prompt("Informe número 1: "));
    let n2 = Number(prompt("Informe número 2: "));

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, informe número válido!");
    }

    if (n1 > n2) {
        alert("Número 1 é maior");
    } else if (n2 > n1) {
        alert("Número 2 é maior");
    } else {
        alert("São iguais");
    }
}

document.getElementById("lista3_ex3").addEventListener("clickd", checkNumero);


function checkSenha() {
    let senha = "jsélegal";

    let senhauser = prompt("Digite a senha: ");

    if (senha === senhauser) {
        alert("Acesso permitido");
    } else {
        alert("Acesso negado");
    }
}

document.getElementById("lista3_ex4").addEventListener("click", checkSenha);


function checkTemperatura() {
    let temperatura = Number(prompt("Informe a temperatura em graus Celsius: "));

    if (isNaN(temperatura)) {
        alert("Por favor, Informe uma temperatura.");
    }


    if (temperatura < 18) {
        alert("Frio");
    } else if (temperatura >= 18 && temperatura <= 25) {
        alert("Agradável");
    } else {
        alert("Quente");
    }
}

document.getElementById("lista3_ex5").addEventListener("click", checkTemperatura);


function tabuada() {
    let n = Number(prompt("Informe um número de 1 a 9: "));

    if (isNaN(n)) {
        alert("Por favor, Informe um número.");
    }

    for (let i = 0; i <= 10; i++) {
        alert(`${n} x ${i} = ${n * i}`)
    }
}

document.getElementById("lista4_ex1").addEventListener("click", tabuada);


function jokenpo() {
    let escolhapc = "pedra";

    for (let i = 0; i < 3; i++) {
        let escolhauser = String(prompt("escolha entre: (pedra / papel / tesoura)").toLowerCase());

        if (escolhauser === escolhapc) {
            alert("Empate");
        } else if (escolhauser === "papel") {
            alert("Vitoria!");
        } else if (escolhauser === "tesoura") {
            alert("Perdeu :(");
        } else {
            alert("Não entendi");
        }
    }

    alert("Acabou as tentativas!");
}

document.getElementById("lista4_ex2").addEventListener("click", jokenpo);


function verFatorial() {
    let n = Number(prompt("Informe um número para calcular o fatorial: "));

    if (isNaN(n)) {
        alert("Por favor, informe um número.");
        return;
    }

    if (n < 0) {
        alert("O número não pode ser negativo!");
        return;
    } else {
        let fat = 1;

        for (let i = 1; i <= n; i++) {
            fat *= i;
        }

        alert(`O fatorial de ${n} é ${fat}`);
    }
}

document.getElementById("lista4_ex3").addEventListener("click", verFatorial);
