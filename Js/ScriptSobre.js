// ==============================
// Cálculo dinâmico da idade
// ==============================
function calcularIdade() {
    const nascimento = new Date('1997-04-29');
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    const spanIdade = document.getElementById('idade');
    if (spanIdade) spanIdade.textContent = idade;
    else console.error("Elemento com id 'idade' não encontrado.");
}

// ==============================
// Saudação dinâmica com digitação
// ==============================
function atualizarSaudacao() {
    const hora = new Date().getHours();
    let saudacao = '';

    if (hora >= 5 && hora < 12) saudacao = 'Bom dia! 🌅';
    else if (hora >= 12 && hora < 18) saudacao = 'Boa tarde! ☀️';
    else saudacao = 'Boa noite! 🌙';

    // Sempre atualiza o localStorage com a saudação correta
    localStorage.setItem('mensagem', saudacao);

    typeWriter(saudacao);
}

function typeWriter(text) {
    const saudacaoElemento = document.getElementById('saudacaoTexto');
    if (!saudacaoElemento) return console.error("Elemento com id 'saudacaoTexto' não encontrado.");

    saudacaoElemento.textContent = ''; // Reseta o texto antes de digitar
    let i = 0;

    function digitar() {
        if (i < text.length) {
            saudacaoElemento.textContent += text[i];
            i++;
            setTimeout(digitar, 50);
        }
    }

    digitar();
}

// ==============================
// Animar barras de progresso
// ==============================
function animarBarrasProgresso() {
    document.querySelectorAll('.progresso-interno').forEach(barra => {
        const progresso = barra.getAttribute('data-progress');
        setTimeout(() => barra.style.width = progresso + '%', 500);
    });
}

// ==============================
// Observador de elementos para animações
// ==============================
function observarElementos() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.textsobre, .boxFormacao, .boxComplementares').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==============================
// Inicialização
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    calcularIdade();
    atualizarSaudacao();
    animarBarrasProgresso();
    observarElementos();

    // Atualiza a saudação a cada minuto
    setInterval(atualizarSaudacao, 60000);
});