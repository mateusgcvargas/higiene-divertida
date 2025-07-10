function dragstart_inicio() {
    const chuveiro = document.getElementById("chuveiro");
    const personagem = document.getElementById("personagemEscolhido");

    // O CHUVEIRO é arrastado
    chuveiro.addEventListener("dragstart", arrastando);

    // O PERSONAGEM é o alvo de drop
    personagem.addEventListener("dragover", permitirSoltar);
    personagem.addEventListener("drop", enxaguacao);
}

function arrastando(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function permitirSoltar(event) {
    event.preventDefault();
}

function enxaguacao(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");

    if (id === "chuveiro") {
        const personagem = document.getElementById("personagemEscolhido");
        personagem.style.filter = "brightness(1.2)";
        personagem.style.transition = "filter 0.5s";

        // Espera 2 segundos e vai para parabéns
        setTimeout(() => {
            personagem.style.filter = "none";
            window.location.href = "parabens.html";
        }, 2000);
    }
}

// Inicia o sistema ao carregar
window.addEventListener("DOMContentLoaded", dragstart_inicio);
