console.log("Hello, reprograma!")

function cliquei() {
  console.log("botao foi clicado!")
  var entrada = document.querySelector("input")
  console.log(entrada)

  var respostaAno = document.querySelector("#respostaAno")
  console.log(respostaAno)

  respostaAno.textContent = entrada.value
}
