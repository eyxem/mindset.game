let dinheiro = 1000;
let satisfacao = 50;
let produtividade = 50;

function atualizarStatus() {
    document.getElementById('dinheiro').textContent = dinheiro;
    document.getElementById('satisfacao').textContent = satisfacao;
    document.getElementById('produtividade').textContent = produtividade;
}

function decisao1() {
    dinheiro -= 100;
    satisfacao += 10;
    produtividade += 5;
    atualizarStatus();
    verificarEventos();
}

function decisao2() {
    dinheiro += 50;
    satisfacao -= 10;
    produtividade += 5;
    atualizarStatus();
    verificarEventos();
}

function verificarEventos() {
    const eventoAleatorio = Math.floor(Math.random() * 10) + 1;
    const eventoMensagem = document.getElementById('eventoMensagem');
    
    if (eventoAleatorio === 1) {
        dinheiro += 100;
        eventoMensagem.textContent = "Evento Aleatório: Você ganhou um prêmio!";
    } else if (eventoAleatorio === 2) {
        dinheiro -= 50;
        eventoMensagem.textContent = "Evento Aleatório: Você teve um imprevisto!";
    } else {
        eventoMensagem.textContent = "";
    }

    atualizarStatus();
}

window.onload = atualizarStatus;
