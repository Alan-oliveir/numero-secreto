function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 10");

function verifcarChute() {
  console.log("Chute enviado!");
}
