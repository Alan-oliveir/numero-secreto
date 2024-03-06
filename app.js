let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativas = tentativas == 1 ? "tentativa" : "tentativas";
    let mensagemTentativas = `Parabéns! Você acertou o número secreto em: ${tentativas} ${palavraTentativas}.`;
    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior!");
    }
    tentativas++;
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}
