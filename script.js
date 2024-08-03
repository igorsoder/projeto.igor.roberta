const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As células-tronco são células com capacidade de autorrenovação e de diferenciação em diversas categorias funcionais de células. Ou seja, as células-tronco têm capacidade de se dividir e se transformar em outros tipos de células. Elas podem ser programadas para desenvolver funções específicas, uma vez que se encontram em um estágio em que ainda não estão totalmente especializadas. O que você achou desse estilo de tratamento?",
        alternativas: [
            {
                texto: "Isso é espantoso!",
                afirmacao: "No início, ficou em dúvida sobre a conduta e a ética relacionada a terapia gênica."
            },
            {
                texto: "Isso é interessante!",
                afirmacao: "Logo se interessou e quis saber como funciona esse método de terapia."
            }
        ]
    },
    {
        enunciado: "Você foi convidado(a) para um projeto, que visa conhecimento em uma clínica que aborda esse método de terapia que envolve células-tronco. Qual sua reação? ",
        alternativas: [
            {
                texto: "Você não se sente à vontade ao ser convidado, pois sente dúvidas em relação ao método.",
                afirmacao: "Você ainda tem receio sobre esse o procedimento."
            },
            {
                texto: "Você aceita esse convite com muita empolgação para conhecer o procedimento.",
                afirmacao: "Sentiu-se curioso e foi em busca de esclarecimento de dúvidas.."
            }
        ]
    },
    {
        enunciado: "Já na clínica, você se depara com o ambiente e os profissinais que ali atuam, pessoas no aguardo de tratamento e as demais caracteríticas de uma clínica. Como você se posiciona?",
        alternativas: [
            {
                texto: "Não se sentiria seguro e iria querer voltar para casa.",
                afirmacao: "Sem muito domínio da prática ainda, você não sente confiança no procedimento."
            },
            {
                texto: "Se sentiria super ambicioso para descobrir informações e prensenciar a prática.",
                afirmacao: "Se sentiu ainda mais atraído para entender tal assunto."
            }
        ]
    },
    {
        enunciado: "Você avista o procedimento de tratamento com células-tronco embrionárias, um tratamento que em muitos países ainda é proibido, por sua complexidade e sua polêmica envolvendo ética na medicina. Qual seria sua atitude apartir dali? ",
        alternativas: [
            {
                texto: "Rapidamente pediria pra voltar para casa, uma vez que não aceitaria ver aquilo.",
                afirmacao: "Você discorda desse procedimento, e prefere que não seja exposto a tal método."
            },
            {
                texto: "Você toma conta do que está acontecendo ali, mas entende que através do uso conciente e do bom senso, esse procedimento é para um bem maior.",
                afirmacao: "Você acha interessante, e chega a conclusão que tal procedimento é muito importantes, mas só deve ser usado para caso específicos assim agregando para a medicina."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
