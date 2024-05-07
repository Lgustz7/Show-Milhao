const CampoPergunta = document.querySelector('#CampoPergunta');
const CampoAlternativas = document.querySelector('#CampoAlternativas');
const pontos = document.querySelector('#pontos');
const perguntas = [
    {
        pergunta: 'Qual é a capital do Brasil?',
        alternativas: ['A) Rio de Janeiro', 'B) São Paulo', 'C) Brasília', 'D) Salvador'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual é o maior planeta do sistema solar?',
        alternativas: ['A) Terra', 'B) Vênus', 'C) Saturno', 'D) Júpiter'],
        respostaCorreta: 'D'
    },
    {
        pergunta: 'Qual é a fórmula química da água?',
        alternativas: ['A) CO2', 'B) O2', 'C) H2O', 'D) NaCl'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual é o maior órgão do corpo humano?',
        alternativas: ['A) Coração', 'B) Fígado', 'C) Pulmões', 'D) Pele'],
        respostaCorreta: 'D'
    },

    {
        pergunta: 'Qual é o país mais populoso do mundo?',
        alternativas: ['A) Rússia', 'B) Índia', 'C) China', 'D) Estados Unidos'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual é o maior oceano do mundo em extensão?',
        alternativas: ['A) Oceano Atlântico', 'B) Oceano Pacífico', 'C) Oceano Índico', 'D) Oceano Ártico'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual é o metal mais abundante na crosta terrestre?',
        alternativas: ['A) Ouro', 'B) Ferro', 'C) Alumínio', 'D) Cobre'],
        respostaCorreta: 'C'
    },
    // Adicione mais perguntas aqui  
];

let perguntaAtual = 0; // Índice da pergunta atual
let contadorPontos = 0; // Contador de pontos
var btn = document.querySelector("#btn")

function funcStart() {
    btn.style.display = 'none';
    if (perguntaAtual < perguntas.length) {
        CampoPergunta.textContent = perguntas[perguntaAtual].pergunta;
        CampoAlternativas.innerHTML = ''; // Limpa as alternativas antes de adicionar novas

        for (let j = 0; j < perguntas[perguntaAtual].alternativas.length; j++) {
            const alternativaItem = document.createElement('li');
            alternativaItem.textContent = perguntas[perguntaAtual].alternativas[j];
            alternativaItem.onclick = function () {
                verificaResposta(j);
            };
            CampoAlternativas.appendChild(alternativaItem);
        }

    } else {
        CampoPergunta.textContent = 'Fim do jogo!'; // Todas as perguntas foram exibidas
        pontos.textContent = 'Pontos: ' + contadorPontos; // Exibe a pontuação final
        CampoAlternativas.remove('li');
    }
}

function verificaResposta(indice) {
    if (perguntas[perguntaAtual].respostaCorreta === perguntas[perguntaAtual].alternativas[indice][0]) {
        alert("Resposta correta!");
        contadorPontos++; // Incrementa o contador de pontos

    } else {
        alert("Resposta errada!");
    }
    perguntaAtual++; // Avança para a próxima pergunta
    pontos.textContent = 'Pontos: ' + contadorPontos; // Atualiza a pontuação
    funcStart();
}