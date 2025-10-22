


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
        return;
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
        return;
    }


    let media = (n1 + n2 + n3) / 3;

    alert(`A média é ${media.toFixed(1)}`);
}

document.getElementById("lista2_ex2").addEventListener("click", calcularMedia);


function quantidadeTinta() {
    let largura = Number(prompt("Informe a largura da parede:"));
    let altura = Number(prompt("Informe a altura da parede:"));

    if (isNaN(largura) || isNaN(altura)) {
        alert("Por favor, informe números válidos.");
        return;
    } else if (largura <= 0 || altura <= 0) {
        alert("Por favor, informe números positivos.");
        return;
    }

    let area = largura * altura;
    let tinta = area / 2;

    alert(`Serão necessários ${tinta} litros de tinta para pintar a parede.`);
}

document.getElementById("lista2_ex3").addEventListener("click", quantidadeTinta);



function verDiferenca() {
    let n1 = Number(prompt("Informe um número:"));
    let n2 = Number(prompt("Informe outro número:"));

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, informe números válidos!");
        return;
    }

    let diferenca;

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
        return;
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
        return;
    }

    let area = base * altura;

    alert(`A área é ${area}`);
}

document.getElementById("lista2_ex7").addEventListener("click", verArea);


function checkIdade() {
    let idade = Number(prompt("Informe sua idade: "));

    if (isNaN(idade)) {
        alert("Por favor, informe número válido!");
        return;
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
        return;
    }

    if (n1 > n2) {
        alert("Número 1 é maior");
    } else if (n2 > n1) {
        alert("Número 2 é maior");
    } else {
        alert("São iguais");
    }
}

document.getElementById("lista3_ex3").addEventListener("click", checkNumero);


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
        return;
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


function notaMediaPar() {
    let n1 = Number(prompt("Informe a primeira nota:"));
    let n2 = Number(prompt("Informe a segunda nota:"));

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, informe número válido!");
        return;
    }

    let media = (n1 + n2) / 2;

    if (media >= 5) {
        alert("Acima da média");
    } else {
        alert("Abaixo da média");
    }


    if (Number.isInteger(media) && media % 2 === 0) {
        alert("A média é par");
    }
}

document.getElementById("lista4_ex1").addEventListener("click", notaMediaPar);


function imc() {
    let peso = Number(prompt("Informe o seu peso (em kg):"));
    let altura = Number(prompt("Informe a sua altura (em metros):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, informe valores numéricos válidos e maiores que zero!");
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 16) {
        classificacao = "Magreza Grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Magreza Moderada";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Magreza Leve";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Saudável";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    alert(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
}

document.getElementById("lista4_ex2").addEventListener("click", imc);


function bissexto() {
    let ano = Number(prompt("Informe um ano:"));

    if (isNaN(ano)) {
        alert("Por favor, Informe uma ano.");
        return;
    }


    if (ano % 400 === 0) {
        alert("Ano é bissexto.");
    } else if (ano % 4 === 0 && ano % 100 !== 0) {
        alert("Ano é bissexto.")
    } else {
        alert("Ano não é bissexto.")
    }
}

document.getElementById("lista4_ex3").addEventListener("click", bissexto);


function cotacao() {
    let moedas = {
        "1": "Dólar",
        "2": "Euro",
        "3": "Won sul-coreano",
        "4": "Iene"
    };

    let escolha = prompt("Informe uma moeda:\nDólar (1)\nEuro (2)\nWon sul-coreano (3)\nIene (4)");

    if (!moedas[escolha]) {
        alert("Opção inválida.");
        return;
    }

    let valor = parseFloat(prompt("Informe um valor em reais (R$):"));
    if (isNaN(valor)) {
        alert("Valor inválido.");
        return;
    }

    let taxa = parseFloat(prompt(`Informe a taxa de câmbio para ${moedas[escolha]}:`));
    if (isNaN(taxa) || taxa <= 0) {
        alert("Taxa inválida.");
        return;
    }

    let resultado = valor / taxa;

    alert(`R$${valor.toFixed(2)} equivalem a ${resultado.toFixed(2)} ${moedas[escolha]}`);
}

document.getElementById("lista4_ex4").addEventListener("click", cotacao);


function tabuada() {
    let n = Number(prompt("Informe um número de 1 a 9: "));

    if (isNaN(n)) {
        alert("Por favor, Informe um número.");
        return;
    }

    for (let i = 0; i <= 10; i++) {
        alert(`${n} x ${i} = ${n * i}`);
    }
}

document.getElementById("lista5_ex1").addEventListener("click", tabuada);


function jokenpo() {
    let escolhapc = "pedra";
    let ganhou = false;

    for (let i = 0; i < 3; i++) {
        let escolhauser = String(prompt("escolha entre: (pedra / papel / tesoura)").toLowerCase());

        if (escolhauser === escolhapc) {
            alert("Empate");
        } else if (escolhauser === "papel") {
            alert("Vitoria!");
            ganhou = true;
            break;
        } else if (escolhauser === "tesoura") {
            alert("Perdeu :(");
        } else {
            alert("Não entendi");
        }
    }

    alert("Acabou as tentativas!");
}

document.getElementById("lista5_ex2").addEventListener("click", jokenpo);


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

document.getElementById("lista5_ex3").addEventListener("click", verFatorial);


function jogo() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let ganhou = false;
    let min = 1;
    let max = 100;

    for (let tentativas = 0; tentativas < 3; tentativas++) {
        let chute = Number(prompt(`Chute um número entre ${min} e ${max}:`));

        if (chute === randomNumber) {
            alert("Você ganhou!");
            ganhou = true;
            break;
        } else {
            if (chute < randomNumber) {
                min = Math.max(min, chute + 1);
                alert(`Você errou! O número está entre ${min} e ${max}.`);
            } else {
                max = Math.min(max, chute - 1);
                alert(`Você errou! O número está entre ${min} e ${max}.`);
            }
        }
    }

    if (!ganhou) {
        alert(`Acabou! O número era ${randomNumber}.`);
    }
}

document.getElementById("lista5_ex4").addEventListener("click", jogo);


const calculadora = () => {
    const soma = (a, b) => a + b;
    const subtracao = (a, b) => a - b;
    const multiplicacao = (a, b) => a * b;
    const divisao = (a, b) => b !== 0 ? a / b : 'Erro: divisão por zero';

    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let operacao = prompt("Digite a operação (+, -, *, /):");
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, informe um número.");
        return;
    }

    let resultado;

    switch (operacao) {
        case '+':
            resultado = soma(num1, num2);
            break;
        case '-':
            resultado = subtracao(num1, num2);
            break;
        case '*':
            resultado = multiplicacao(num1, num2);
            break;
        case '/':
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = 'Operação inválida';
    }

    alert(`Resultado: ${resultado}`);
};

document.getElementById("lista6_ex1").addEventListener("click", calculadora);


function cnh() {
    let idade = Number(prompt("Qual sua idade?"));

    if (isNaN(idade)) {
        alert("Informe sua idade corretamente.");
        return;
    }

    if (idade >= 18) {
        alert("Você pode tirar a CNH.");
    } else {
        alert("Você não pode tirar a cnh ainda.");
    }
}

document.getElementById("lista6_ex2").addEventListener("click", cnh);


function ordenarNumeros() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let num3 = Number(prompt("Digite o terceiro número:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Informe todos os números corretamente.");
        return;
    }

    let numeros = [num1, num2, num3];
    numeros.sort(function (a, b) { return a - b; });

    alert("Números em ordem crescente: " + numeros.join(", "));
}

document.getElementById("lista6_ex3").addEventListener("click", ordenarNumeros);


function converterHorasParaMinutos() {
    let horas = Number(prompt("Digite a quantidade de horas:"));

    if (isNaN(horas)) {
        alert("Por favor, informe um número válido.");
        return;
    }

    let minutos = horas * 60;

    alert(horas + " hora(s) correspondem a " + minutos + " minuto(s).");
}

document.getElementById("lista6_ex4").addEventListener("click", converterHorasParaMinutos);


function calcularCedulas() {
    let valor = Number(prompt("Digite o valor em reais:"));

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, informe um valor válido maior que zero.");
        return;
    }

    let cedulas = [200, 100, 50, 20, 10, 5, 1];
    let resultado = "";

    for (let i = 0; i < cedulas.length; i++) {
        let qtd = Math.floor(valor / cedulas[i]);
        if (qtd > 0) {
            resultado += `${qtd} cédula(s) de R$${cedulas[i]}\n`;
            valor -= qtd * cedulas[i];
        }
    }

    alert("Distribuição de cédulas:\n" + resultado);
}

document.getElementById("lista6_ex5").addEventListener("click", calcularCedulas);


function calcularRaizQuadrada() {
    let numero = Number(prompt("Digite um número:"));

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    if (numero < 0) {
        alert("Não é possível calcular a raiz quadrada de um número negativo.");
        return;
    }

    let raiz = Math.sqrt(numero);

    alert("A raiz quadrada de " + numero + " é " + raiz);
}

document.getElementById("lista6_ex6").addEventListener("click", calcularRaizQuadrada);


function imc2() {
    let peso = Number(prompt("Informe o seu peso (em kg):"));
    let altura = Number(prompt("Informe a sua altura (em metros):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, informe valores numéricos válidos e maiores que zero!");
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 16) {
        classificacao = "Magreza Grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Magreza Moderada";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Magreza Leve";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Saudável";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    alert(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
}

document.getElementById("lista7_ex1").addEventListener("click", imc2);


function raioCirculo() {
    let area = Number(prompt("Digite a área do círculo:"));

    if (isNaN(area) || area <= 0) {
        alert("Por favor, informe uma área válida maior que zero.");
        return;
    }

    let raio = Math.sqrt(area / Math.PI);
    alert("O raio do círculo é: " + raio.toFixed(2));
}

document.getElementById("lista7_ex2").addEventListener("click", raioCirculo);


function volumeCilindro() {
    let raio = Number(prompt("Digite o raio da base do cilindro:"));
    let altura = Number(prompt("Digite a altura do cilindro:"));

    if (isNaN(raio) || raio <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor, informe valores positivos e válidos para raio e altura.");
        return;
    }

    let volume = Math.PI * Math.pow(raio, 2) * altura;
    alert("O volume do cilindro é: " + volume.toFixed(2));
}

document.getElementById("lista7_ex3").addEventListener("click", volumeCilindro);


function areaQuadrado() {
    let lado = Number(prompt("Digite o valor do lado do quadrado:"));

    if (isNaN(lado) || lado <= 0) {
        alert("Por favor, informe um valor válido maior que zero.");
        return;
    }

    let area = lado * lado;
    alert("A área do quadrado é: " + area.toFixed(2));
}

document.getElementById("lista7_ex4").addEventListener("click", areaQuadrado);


function simular_banco() {
    let contas = [];
    let opcao;

    do {
        opcao = prompt(
            "Bem-vindo ao Banco!\n" +
            "Escolha uma opção:\n" +
            "1 - Criar nova conta\n" +
            "2 - Depositar dinheiro\n" +
            "3 - Sacar dinheiro\n" +
            "4 - Ver saldo\n" +
            "5 - Sair"
        );

        switch (opcao) {
            case "1":
                let nome = prompt("Digite o nome do titular da conta:");
                let saldoInicial = Number(prompt("Digite o saldo inicial:"));

                if (isNaN(saldoInicial) || saldoInicial < 0) {
                    alert("Saldo inicial inválido!");
                } else {
                    contas.push({ nome: nome, saldo: saldoInicial });
                    alert("Conta criada com sucesso!");
                }
                break;

            case "2":
                let nomeDeposito = prompt("Digite o nome da conta para depósito:");
                let contaDeposito = contas.find(c => c.nome === nomeDeposito);

                if (!contaDeposito) {
                    alert("Conta não encontrada!");
                } else {
                    let valorDeposito = Number(prompt("Digite o valor para depositar:"));
                    if (isNaN(valorDeposito) || valorDeposito <= 0) {
                        alert("Valor inválido!");
                    } else {
                        contaDeposito.saldo += valorDeposito;
                        alert("Depósito realizado com sucesso!");
                    }
                }
                break;

            case "3":
                let nomeSaque = prompt("Digite o nome da conta para saque:");
                let contaSaque = contas.find(c => c.nome === nomeSaque);

                if (!contaSaque) {
                    alert("Conta não encontrada!");
                } else {
                    let valorSaque = Number(prompt("Digite o valor para sacar:"));
                    if (isNaN(valorSaque) || valorSaque <= 0) {
                        alert("Valor inválido!");
                    } else if (valorSaque > contaSaque.saldo) {
                        alert("Saldo insuficiente!");
                    } else {
                        contaSaque.saldo -= valorSaque;
                        alert("Saque realizado com sucesso!");
                    }
                }
                break;

            case "4":
                let nomeSaldo = prompt("Digite o nome da conta:");
                let contaSaldo = contas.find(c => c.nome === nomeSaldo);

                if (!contaSaldo) {
                    alert("Conta não encontrada!");
                } else {
                    alert("O saldo da conta de " + contaSaldo.nome + " é R$" + contaSaldo.saldo.toFixed(2));
                }
                break;

            case "5":
                alert("Saindo do sistema...");
                break;

            default:
                alert("Opção inválida!");
        }
    } while (opcao !== "5");
}

document.getElementById("simular_banco").addEventListener("click", simular_banco);


function validarCadastro() {
    let nome = document.getElementById("nome").value.trim();
    let endereco = document.getElementById("endereco").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let celular = document.getElementById("celular").value.trim();
    let email = document.getElementById("email").value.trim();

    let sexo = document.querySelector('input[name="sexo"]:checked');

    if (nome === "") {
        alert("O campo Nome não pode estar vazio!");
        return;
    }


    if (endereco === "") {
        alert("O campo Endereço não pode estar vazio!");
        return;
    }


    if (!sexo) {
        alert("Selecione o Sexo!");
        return;
    }


    if (telefone === "") {
        alert("O campo Telefone não pode estar vazio!");
        return;
    }


    if (celular === "") {
        alert("O campo Celular não pode estar vazio!");
        return;
    }


    if (email === "") {
        alert("O campo Email não pode estar vazio!");
        return;
    }


    if (!email.includes("@") || !email.includes(".")) {
        alert("O email deve conter '@' e '.'!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
}

document.getElementById("btnEnviar").addEventListener("click", validarCadastro);


const calcularIR = (salario) => {
    if (salario <= 1903.98) {
        return 0;
    } else if (salario <= 2826.65) {
        return salario * 0.075;
    } else if (salario <= 3751.05) {
        return salario * 0.15;
    } else if (salario <= 4664.68) {
        return salario * 0.225;
    } else {
        return salario * 0.275;
    }
};

function ir_usuario() {
    let salario = Number(prompt("Digite seu salário:"));

    if (isNaN(salario) || salario < 0) {
        alert("Informe um valor válido!");
        return;
    }

    let imposto = calcularIR(salario);
    alert(`O imposto de renda sobre R$${salario.toFixed(2)} é R$${imposto.toFixed(2)}`);
}

document.getElementById("lista9_ex1").addEventListener("click", ir_usuario);


const calcularINSS = (salario) => {
    if (salario <= 1320.00) {
        return salario * 0.075;
    } else if (salario <= 2571.29) {
        return salario * 0.09;
    } else if (salario <= 3856.94) {
        return salario * 0.12;
    } else if (salario <= 7507.49) {
        return salario * 0.14;
    } else {
        return 7507.49 * 0.14;
    }
};

function inss_usuario() {
    let salario = Number(prompt("Digite seu salário:"));

    if (isNaN(salario) || salario <= 0) {
        alert("Informe um salário válido!");
        return;
    }

    let inss = calcularINSS(salario);
    alert(`O valor do INSS sobre R$${salario.toFixed(2)} é R$${inss.toFixed(2)}`);
}

document.getElementById("lista9_ex2").addEventListener("click", inss_usuario);


const jurosCompostos = (capital, taxa, tempo) => {
    return capital * Math.pow(1 + taxa, tempo);
};

function calcularJuros() {
    let capital = Number(prompt("Digite o capital inicial:"));
    let taxa = Number(prompt("Digite a taxa de juros (em % ao mês):")) / 100;
    let tempo = Number(prompt("Digite o tempo em meses:"));

    if (isNaN(capital) || capital <= 0 ||
        isNaN(taxa) || taxa < 0 ||
        isNaN(tempo) || tempo <= 0) {
        alert("Informe valores válidos!");
        return;
    }

    let montante = jurosCompostos(capital, taxa, tempo);
    alert(`O montante após ${tempo} meses será R$${montante.toFixed(2)}`);
}

document.getElementById("lista9_ex3").addEventListener("click", calcularJuros);


const parcelaFinanciamento = (capital, taxa, tempo) => {
    return (capital * Math.pow(1 + taxa, tempo)) / tempo;
};

function simularFinanciamento() {
    let capital = Number(prompt("Digite o valor do financiamento:"));
    let taxa = Number(prompt("Digite a taxa de juros (em % ao mês):")) / 100;
    let tempo = Number(prompt("Digite o número de parcelas (meses):"));

    if (isNaN(capital) || capital <= 0 ||
        isNaN(taxa) || taxa < 0 ||
        isNaN(tempo) || tempo <= 0) {
        alert("Informe valores válidos!");
        return;
    }

    let parcela = parcelaFinanciamento(capital, taxa, tempo);
    alert(`O valor aproximado de cada parcela será R$${parcela.toFixed(2)}`);
}

document.getElementById("lista9_ex4").addEventListener("click", simularFinanciamento);


let numeros = [2, 5, 8, 10, 3];

const dobrar = (vetor) => vetor.map(num => num * 2);

function mostrarDobro() {
    let resultados = dobrar(numeros);
    alert("Dobro dos valores: " + resultados.join(", "));
}

document.getElementById("lista10_ex1").addEventListener("click", mostrarDobro);


function mediaVetor() {
    let numeros = [4, 8, 15, 16, 23, 42, 7, 10];

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    let media = soma / numeros.length;

    alert("A média dos valores é: " + media.toFixed(2));
}

document.getElementById("lista10_ex2").addEventListener("click", mediaVetor);


function idadesAcimaMedia() {
    let idades = [];

    for (let i = 0; i < 20; i++) {
        let idade = Number(prompt(`Digite a idade da pessoa ${i + 1}:`));

        if (isNaN(idade) || idade <= 0) {
            alert("Informe uma idade válida!");
            i--;
        } else {
            idades.push(idade);
        }
    }

    let soma = idades.reduce((acc, val) => acc + val, 0); // soma todos os elementos do array para calcular a média.
    let media = soma / idades.length;

    let acimaMedia = idades.filter(idade => idade > media);

    alert(`Média das idades: ${media.toFixed(2)}\nIdades acima da média: ${acimaMedia.join(", ")}`);
}

document.getElementById("lista10_ex3").addEventListener("click", idadesAcimaMedia);


function numerosPares() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        let num = Number(prompt(`Digite o número ${i + 1}:`));

        if (isNaN(num)) {
            alert("Informe um número válido!");
            i--; 
        } else {
            numeros.push(num);
        }
    }

    let pares = numeros.filter(num => num % 2 === 0);

    if (pares.length > 0) {
        alert("Números pares: " + pares.join(", "));
    } else {
        alert("Todos os números são ímpares.");
    }
}

document.getElementById("lista10_ex4").addEventListener("click", numerosPares);


function verificarNome() {
    let nomes = ["Wada", "Gabriel", "Samuel", "Beatriz", "Ricardo", "Mateus", "Nicolas", "Yasmin", "João", "Maria"];

    let novoNome = prompt("Digite um nome para verificar:").trim();

    if (novoNome === "") {
        alert("Você deve digitar um nome!");
        return;
    }

    let indice = nomes.indexOf(novoNome); // procura o nome no vetor.

    if (indice !== -1) {
        alert(`Nome encontrado na posição (índice) ${indice}.`);
    } else {
        alert("Nome não encontrado!");
    }
}

document.getElementById("lista10_ex5").addEventListener("click", verificarNome);
