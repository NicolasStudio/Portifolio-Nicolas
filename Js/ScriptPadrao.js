// ==============================
// Funções de Scroll Suave
// ==============================
function scrollParaSecao(id) {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    window.scroll({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
    });
}

// Chamando seção "projetos" de outra página
function chamandoProjetos() {
    localStorage.setItem('scrollTo', 'projetos');
    window.location.href = "index.html";
}

// Inicialização do scroll
document.addEventListener('DOMContentLoaded', () => {
    // Scroll automático se houver seção salva
    const scrollToSectionId = localStorage.getItem('scrollTo');
    if (scrollToSectionId) {
        scrollParaSecao(scrollToSectionId);
        localStorage.removeItem('scrollTo');
    }

    // Scroll suave para links de navegação
    const menuLinks = document.querySelectorAll('.inicio a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            scrollParaSecao(targetId);
        });
    });
});

// ==============================
// Menu Mobile
// ==============================
function toggleMenuMobile() {
    document.querySelector(".inicio__mobile")?.classList.toggle("ativo");
}

// ==============================
// Redirecionamento para Projetos
// ==============================
const projetos = {
    1: "https://nicolasstudio.github.io/GeradorDeDados/",
    2: "https://nicolasstudio.github.io/Pizzaria/",
    3: "https://nicolasstudio.github.io/Nivaldo-Construcao/",
    4: "https://nicolasstudio.github.io/Ficha-de-RPG/",
    5: "https://github.com/NicolasStudio/Calculadora",
    6: "https://nicolasstudio.github.io/Batalha-Naval/",
    7: "https://github.com/NicolasStudio/Livraria?tab=readme-ov-file",
    8: "https://nicolasstudio.github.io/Zer0Kcalc/"
};

function redirecionarProjeto(num) {
    if (projetos[num]) window.open(projetos[num]);
}

// Funções antigas para compatibilidade com HTML existente
function redirecionar1() { redirecionarProjeto(1); }
function redirecionar2() { redirecionarProjeto(2); }
function redirecionar3() { redirecionarProjeto(3); }
function redirecionar4() { redirecionarProjeto(4); }
function redirecionar5() { redirecionarProjeto(5); }
function redirecionar6() { redirecionarProjeto(6); }
function redirecionar7() { redirecionarProjeto(7); }
function redirecionar8() { redirecionarProjeto(8); }

// ==============================
// Filtrar warnings específicos
// ==============================
(function() {
    const originalWarn = console.warn;
    console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('Permissions policy violation: unload')) return;
        originalWarn.apply(console, args);
    };
})();
