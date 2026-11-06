// ==============================
// Cálculo dinâmico da idade
// ==============================
function calcularIdade() {
    const nascimento = new Date(1997, 3, 29); // 29/04/1997
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--;

    const span = document.getElementById('idade');
    if (span) span.textContent = idade;
}

// ==============================
// Saudação conforme o horário, com efeito de digitação
// ==============================
function saudacaoDoMomento() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return 'Bom dia! ☕';
    if (hora >= 12 && hora < 18) return 'Boa tarde! ☀️';
    return 'Boa noite! 🌙';
}

function digitar(el, texto) {
    const letras = [...texto]; // respeita emojis
    el.textContent = '';
    let i = 0;
    (function passo() {
        if (i < letras.length) {
            el.textContent += letras[i++];
            setTimeout(passo, 70);
        }
    })();
}

document.addEventListener('DOMContentLoaded', () => {
    calcularIdade();
    const el = document.getElementById('saudacaoTexto');
    if (el) digitar(el, saudacaoDoMomento());
});
