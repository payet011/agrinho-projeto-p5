let perguntas = [
  { pergunta: "5 x 345?", resposta: "1725" },
  { pergunta: "quantos gols rogerio ceni tem na carreira?", resposta: "131" },
  { pergunta: "Quantas bolas de ouro tem o cr7?", resposta: "5" },
  { pergunta: "Quanto é 2+2x4-10?", resposta: "0" }
];

let perguntaAtual = 0;
let inputResposta;
let mensagem = "";
let correta = true;

function setup() {
  createCanvas(600, 400);
  inputResposta = createInput();
  inputResposta.position(20, height - 80);
  let botaoResponder = createButton('Responder');
  botaoResponder.position(inputResposta.x + inputResposta.width + 10, height - 80);
  botaoResponder.mousePressed(responder);
  
  textSize(18);
}

function draw() {
  background(255);
  textAlign(LEFT, TOP);
  fill(0);
  
  // Mostrar a pergunta atual
  text(perguntas[perguntaAtual].pergunta, 20, 20);
  
  // Mostrar a mensagem de feedback
  textSize(16);
  fill(correta ? 'green' : 'red');
  text(mensagem, 20, height - 120);
}

function responder() {
  let respostaUsuario = inputResposta.value().trim();
  let respostaCorreta = perguntas[perguntaAtual].resposta.trim().toLowerCase();
  
  // Verifica se a resposta está correta
  if (respostaUsuario.toLowerCase() === respostaCorreta) {
    mensagem = "Você acertou!";
    correta = true;
  } else {
    mensagem = "Resposta incorreta!";
    correta = false;
  }
  
  // Passa para a próxima pergunta ou termina o jogo
  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) {
    perguntaAtual = 0;  // Reinicia o jogo quando todas as perguntas forem feitas
  }
  
  // Limpar o campo de resposta para a próxima rodada
  inputResposta.value('');
}