// Desafio Reprograma Back-end Larissa Silva

function calcular() {
    // função é um conjunto de instruções que executa uma tarefa
    // Desafio Calculadora Freelancer
    // valor-hora
    // horas-projeto

    var inputPagamento = document.querySelector("#valor-hora")
    var inputHoras = document.querySelector("#horas-projeto")

    // querySelector: retorna o primeiro elemento que ele encontrar levando em consideração o seletor CSS que foi passado
    // Procurando seletor CSS de classe, exemplo: querySelector(".menu")
    // Procurando seletor id, exemplo: querySelector(#menu)
    // id tem que ser único, como se fosse o cpf desse elemento.
    // Lembrar: Usar parseInt(), se for transformar string em número inteiro

    var valorPagamento = inputPagamento.valueAsNumber
    var valorHoras = inputHoras.valueAsNumber 
    var valorProjeto = valorPagamento * valorHoras

    // Lembrar: var é uma variável global
    //          Variável é um lugar para guardar o valor a ser manipulado pelo programa

    console.log(valorPagamento)
    console.log(valorHoras)
    console.log(valorProjeto)

    // console.log é usado para "imprimir" valores no console

    var ValorPorHoraFormatado = valorProjeto.toFixed(2)

    // Lembrar: toFixed() é usado para colocar uma quantidade fixa de casas decimais
    // Exemplo: toFixed(2) para determinar duas casas decimais

    var spanResposta = document.querySelector("#resposta") 
    
    // resposta é o id do elemento
   
    spanResposta.textContent = "Resposta: R$ " + ValorPorHoraFormatado 
    
    // o + vai concatenar as strings
}
