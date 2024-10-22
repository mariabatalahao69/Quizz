const perguntas = [
    {
        pergunta: "Quem criou o quadro O GRITO'?",
        opcoes: [
            "Edvard Munch",
            "Pablo Pícasso",
            "Leonardo da Vinci",
            "Raphael"
        ],
        resposta: 0 // índice da resposta correta
    },
    {
        pergunta: "O michelangelo era conhecido por seu movimento de arte muito conhecida,Qual é'?",
        opcoes: [
            "Aguarela",
            "Renascimento Romano",
            "Barroco",
            "Renascimento Italiano "
        ],
        resposta: 3
    },
    {
        pergunta: "O raphael era um pintor muito admirável na época com o seu movimento artístico Italiano,que fez o quadro mais famosso dele,Qual e '?",
        opcoes: [
            "Girassóis",
            "A escola de Atenas",
            "Crânio de Vaca ",
            "As duas Fridas"
        ],
        resposta: 1
    },
    {
        pergunta: "A mary cassatt era uma jovem americana que fez diversos trabalho,que se baseada na vida de mulheres com seus filhos,A Obra que fez sucesso entre as mães é?",
        opcoes: [
            "O beijo",
            "Nascer do sol",
            "O banho da criança",
            "Mãe e filho"
        ],
        resposta: 2
    },
    {
        pergunta: "Claude Monet tinha um movimento artístico,qual era?",
        opcoes: [
            "Neo expressionismo",
            "Impressionismo",
            "Expressionismo abstrado",
            "Pós-Impressionismo"
        ],
        resposta: 1
    },
    {
        pergunta: "Édouard Manetum era um pintor francês que nas suas obras possuía fortes caractrísticas do realismo, após de amputadar a perna morreu devido a gangrena, Em que ano ele morreu ?",
        opcoes: [
            "1881",
            "1883",
            "1892",
            "1886"
        ],
        resposta: 1
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;
