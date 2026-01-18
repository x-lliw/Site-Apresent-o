const projetos = [
    {
        nome: "Calculadora em Python",
        descricao: "Aplicação simples com operações matemáticas."
    },
    {
        nome: "Quiz em Python",
        descricao: "Jogo interativo de perguntas no terminal."
    },
    {
        nome: "Sistema de Estoque (em andamento)",
        descricao: "Controle de materiais com login por empresa."
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("projeto");

    div.innerHTML = `
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
    `;

    lista.appendChild(div);
});

// botão topo
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// animação scroll
const elementos = document.querySelectorAll(".revelar");

function revelarAoRolar() {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < alturaTela - 100) el.classList.add("ativo");
    });
}

window.addEventListener("scroll", revelarAoRolar);
revelarAoRolar();

