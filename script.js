// alert: serve para avisar algo para o usuário, print do python
// alert("Hello, world")

// prompt: ele é o input do python
// prompt("Qual sua comida favorita?")

// confirm: mostra 2 opçôes o "ok" e o "cancel"
//  confirm("É sushi <3")

// let: variaveis que variam, valores que flexiveis
// const: constantes, valores fixos, como o pi(3,14)
// var: 1 forma de declarar variaveis, códigos ligados

// let materia = prompt("Qual sua matéria favorita?")
// alert(materia)



// lista 1 - comandos basicos
// ex1
// let nome = prompt("Qual é o seu nome? ")
// alert(`Olá, ${nome}`)



// ex2
// let materia = prompt("Qual sua matéria favorita? ")
// alert(`A matéria ${materia} realmente é ótima`)



// ex3
// let data = prompt("Que dia é hoje: ")
// alert(`Hoje é dia ${data}`)



// ex4
// confirm("Está preparado para o segundo semestre de Desenvolvimento de Sistemas?")



// lista 2 - operadores aritmeticos
// ex1
// let n1 = Number(prompt("Informe um número: "))
// let n2 = Number(prompt("Informe outro número: "))

// let soma = n1 + n2
// let subtracao = n1 - n2
// let multiplicacao = n1 * n2
// let divisao = n1 / n2

// alert(`A soma é ${soma}`)
// alert(`A subtração é ${subtracao}`)
// alert(`A multiplicação é ${multiplicacao}`)
// alert(`A divisão é ${divisao}`)



// ex2
// let nota1 = parseFloat(prompt("Informe a nota 1: "))
// let nota2 = parseFloat(prompt("Informe a nota 2: "))
// let nota3 = parseFloat(prompt("Informe a nota 3: "))

// let media = (nota1 + nota2 + nota3)/3

// alert(`A média é ${media.toFixed(1)}`)



// ex3
// let largura = Number(prompt("Informe a largura da parede: "))
// let altura = Number(prompt("Informe a altura da parede: "))

// let area = largura * altura
// let tinta = area/2

// alert(`Serão necessários ${tinta} litros de tinta para pintar a parede`)



// lista 2.1
// ex4
// let n1 = Number(prompt("Informe um número: "))
// let n2 = Number(prompt("Informe outro número: "))

// let diferenca

// if (n1 > n2) {
//     diferenca = n1 - n2
// } else {
//     diferenca = n2 - n1
// }

// alert(`A diferença é entre ${diferenca} número(s)`)



// ex5
// let nota1 = Number(prompt("Digite a primeira nota: "))
// let nota2 = Number(prompt("Digite a segunda nota "))

// if (nota2 === 0) {
//     alert("Não é possível dividir por 0!")
// } else if (nota1 % nota2 === 0) {
//     alert(`${nota1} é múltiplo de ${nota2}`)
// } else {
//     alert(`${nota1} não é múltiplo de ${nota2}`)
// }



// ex6
// let celsius = parseFloat(prompt("Informe a temperatura em Celsius: "))
// let fahrenheit = (celsius * 9 / 5) + 32

// alert(`${celsius}C é igual ${fahrenheit}F`)



// ex7
// let base = parseFloat(prompt("Informe a base: "))
// let altura = parseFloat(prompt("Informe a altura: "))

// let area = base * altura

// alert(`A área é ${area}`)



// lista 3 - condicionais(if, else if, else)
// ex1
// let idade = Number(prompt("Informe sua idade: "))

// if (idade >= 18) {
//     alert("Maior de idade")
// } else {
//     alert("Menor de idade")
// }



// ex2
// let n1 = Number(prompt("Informe um número inteiro: "))

// if (n1 % 2 === 0) {
//     alert("Par")
// } else {
//     alert("Ímpar")
// }



// ex3
// let n1 = Number(prompt("Informe número 1: "))
// let n2 = Number(prompt("Informe número 2: "))

// if (n1 > n2) {
//     alert("Número 1 é maior")
// } else if (n2 > n1) {
//     alert("Número 2 é maior")
// } else {
//     alert("São iguais")
// }



// ex4
// let senha = "jsélegal"

// let senhauser = prompt("Digite a senha: ")

// if (senha === senhauser) {
//     alert("Acesso permitido")
// } else {
//     alert("Acesso negado")
// }



// ex5
// let temperatura = Number(prompt("Informe a temperatura em graus Celsius: "))

// if (temperatura < 18) {
//     alert("Frio")
// } else if (temperatura >= 18 && temperatura <= 25) {
//     alert("Agradável")
// } else {
//     alert("Quente")
// }



// lista 4 - laços de repetição
//ex1
// let n = Number(prompt("Informe um número de 1 a 9: "))

// for (let i = 0; i <= 10; i++){
//     alert(`${n} x ${i} = ${n*i}`)
// }



// ex2
// let escolhapc = "pedra"

// for (let i = 0; i < 3; i++) {
//     let escolhauser = String(prompt("escolha entre: (pedra / papel / tesoura)"))

//     if (escolhauser === "pedra") {
//         alert("Empate")
//     } else if (escolhauser === "papel") {
//         alert("Vitoria!")
//     } else if (escolhauser === "tesoura") {
//         alert("Perdeu :(")
//     } else {
//         alert("Não entendi")
//     }
// }

// alert("Acabou as tentativas!")



// ex3
// let n = Number(prompt("Informe um número para calcular o fatorial: "))

// if (n < 0) {
//     alert("O número não pode ser negativo!")
// } else {
//     let fat = 1

//     for (let i = 1; i <= n; i++) {
//         fat *= i
//     }
//     alert(`O fatorial de ${n} é ${fat}`)
// }